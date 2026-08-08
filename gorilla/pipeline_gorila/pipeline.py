from __future__ import annotations

import hashlib
import json
import re
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from .state import InvestigationState


PATTERNS = {
    "pix": ("pix", "chave pix", "med pix"),
    "fake_payment": ("comprovante", "pagamento falso", "pagou", "transferência", "transferencia"),
    "impersonation": ("banco", "gerente", "suporte", "atendimento", "se passando", "clonado"),
    "urgency": ("urgente", "agora", "última chance", "ultima chance", "bloqueio", "prazo"),
    "phishing": ("link", "clique", "site", "senha", "código", "codigo"),
    "loan_or_benefit": ("empréstimo", "emprestimo", "benefício", "beneficio", "antecipação", "antecipacao"),
}
URL_RE = re.compile(r"https?://[^\s<>\]\)\"']+")
EMAIL_RE = re.compile(r"\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b")
PHONE_RE = re.compile(r"(?<!\d)(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?9?\d{4}[-.\s]?\d{4}(?!\d)")


@dataclass(frozen=True)
class PipelineResult:
    case_id: str
    pkf_bundle: str
    okf_bundle: str
    database_id: str
    status: str
    validation: dict[str, Any]


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _case_id(response: dict[str, Any]) -> str:
    seed = str(response.get("search_id") or response.get("query") or _now())
    return "case_" + hashlib.sha1(seed.encode("utf-8")).hexdigest()[:12]


def _text(result: dict[str, Any]) -> str:
    return " ".join(str(result.get(key, "")) for key in ("title", "body_snippet", "author", "channel"))


def _slug(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "_", value.lower()).strip("_")
    return value[:48] or "unknown"


def _frontmatter(values: dict[str, Any]) -> str:
    lines = ["---"]
    for key, value in values.items():
        if isinstance(value, list):
            lines.append(f"{key}:")
            lines.extend(f"  - {str(item).replace(chr(10), ' ')}" for item in value)
        elif isinstance(value, bool):
            lines.append(f"{key}: {'true' if value else 'false'}")
        elif isinstance(value, (int, float)):
            lines.append(f"{key}: {value}")
        else:
            safe = str(value).replace("\n", " ").replace("\"", "'")
            lines.append(f'{key}: "{safe}"')
    return "\n".join(lines) + "\n---\n"


def _write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def _build_state(response: dict[str, Any]) -> InvestigationState:
    if not isinstance(response, dict):
        raise ValueError("response.json deve conter um objeto JSON")
    results = response.get("results", [])
    if not isinstance(results, list):
        raise ValueError("response.results deve ser uma lista")
    state = InvestigationState(_case_id(response), _now(), str(response.get("query", "")), response)
    for index, item in enumerate(results):
        if not isinstance(item, dict):
            continue
        source = str(item.get("source", "unknown"))
        raw = _text(item).strip()
        if not raw and not item.get("url"):
            continue
        evidence_id = f"ev_{index + 1:03d}"
        state.candidates.append({"candidate_id": f"candidate_{index + 1:03d}", "evidence_id": evidence_id, "source": source})
        state.evidence.append({
            "id": evidence_id, "source": source, "url": item.get("url"),
            "title": item.get("title", ""), "body_snippet": item.get("body_snippet", ""),
            "author": item.get("author"), "channel": item.get("channel"),
            "result_score": item.get("result_score"), "validation_score": item.get("validation_score"),
            "matched_signals": item.get("matched_signals", []), "raw_result": item,
        })
        text = raw.lower()
        for pattern, terms in PATTERNS.items():
            hits = [term for term in terms if term in text]
            if hits:
                state.patterns.append({"id": f"pattern_{_slug(pattern)}", "name": pattern, "signals": hits, "evidence_id": evidence_id})
        for entity_type, regex in (("url", URL_RE), ("email", EMAIL_RE), ("phone", PHONE_RE)):
            for value in dict.fromkeys(regex.findall(raw)):
                state.entities.append({"id": f"entity_{entity_type}_{_slug(value)}", "type": entity_type, "value": value, "evidence_id": evidence_id})
        state.claims.append({"id": f"claim_{index + 1:03d}", "text": item.get("body_snippet") or item.get("title") or "Resultado encontrado", "evidence_id": evidence_id, "status": "supported"})
    return state


def _judge(state: InvestigationState) -> None:
    evidence_count = len(state.evidence)
    scores = [float(e["validation_score"]) for e in state.evidence if isinstance(e.get("validation_score"), (int, float))]
    relevance = [float(e["result_score"]) for e in state.evidence if isinstance(e.get("result_score"), (int, float))]
    signal_count = len(state.patterns)
    state.confidence = round(min(1.0, (sum(scores) / len(scores) if scores else 0.45) * (1 if evidence_count else 0.4)), 3)
    state.risk_score = round(min(1.0, 0.15 * signal_count + (0.15 if any(p["name"] == "urgency" for p in state.patterns) else 0) + (0.2 if any(p["name"] == "fake_payment" for p in state.patterns) else 0)), 3)
    state.classification = "likely_scam" if signal_count >= 2 and state.confidence >= 0.35 else "suspicious" if signal_count else "insufficient_evidence"
    state.validation_results = [{"claim_id": c["id"], "status": "supported" if c["evidence_id"] in {e["id"] for e in state.evidence} else "invalid"} for c in state.claims]


def _write_bundle(state: InvestigationState, output_dir: Path) -> tuple[Path, dict[str, Any]]:
    case_dir = output_dir / "cases" / state.case_id
    for name in ("scams", "entities", "evidence", "patterns"):
        (case_dir / name).mkdir(parents=True, exist_ok=True)
    for evidence in state.evidence:
        meta = {"type": "evidence", "evidence_id": evidence["id"], "source": evidence["source"], "url": evidence["url"] or "", "case_id": state.case_id}
        body = f"\n# {evidence['title'] or evidence['id']}\n\n{evidence['body_snippet'] or 'Sem trecho textual retornado.'}\n\nFonte: {evidence['url'] or 'não informada'}\n"
        (case_dir / "evidence" / f"{evidence['id']}.md").write_text(_frontmatter(meta) + body, encoding="utf-8")
    for entity in state.entities:
        meta = {"type": "entity", "entity_id": entity["id"], "entity_type": entity["type"], "case_id": state.case_id, "evidence_id": entity["evidence_id"]}
        (case_dir / "entities" / f"{entity['id']}.md").write_text(_frontmatter(meta) + f"\n# {entity['type']}\n\n`{entity['value']}`\n", encoding="utf-8")
    for pattern in {p["id"]: p for p in state.patterns}.values():
        meta = {"type": "pattern", "pattern_id": pattern["id"], "name": pattern["name"], "case_id": state.case_id}
        links = "\n".join(f"- [Evidence {p['evidence_id']}](../evidence/{p['evidence_id']}.md)" for p in state.patterns if p["id"] == pattern["id"])
        (case_dir / "patterns" / f"{pattern['id']}.md").write_text(_frontmatter(meta) + f"\n# {pattern['name']}\n\nSignals: {', '.join(pattern['signals'])}\n\n{links}\n", encoding="utf-8")
    scam_meta = {"type": "scam_case", "title": "Gorilla investigation", "case_id": state.case_id, "classification": state.classification, "confidence": state.confidence, "risk_score": state.risk_score, "timestamp": state.created_at, "evidence_count": len(state.evidence)}
    links = "\n".join(f"- [{e['id']}](evidence/{e['id']}.md)" for e in state.evidence)
    scam_body = f"\n# Resumo\n\nCaso classificado como **{state.classification}** a partir de resultados Gorilla.\n\n# Evidências\n\n{links or '- Nenhuma evidência.'}\n\n# Padrões\n\n" + "\n".join(f"- [{p['name']}](patterns/{p['id']}.md)" for p in {p['id']: p for p in state.patterns}.values())
    (case_dir / "scams" / "suspected_scam.md").write_text(_frontmatter(scam_meta) + scam_body + "\n", encoding="utf-8")
    index = _frontmatter({"type": "case_index", "case_id": state.case_id, "classification": state.classification, "confidence": state.confidence, "risk_score": state.risk_score}) + f"\n# {state.case_id}\n\n- [Suspected scam](scams/suspected_scam.md)\n- Evidence: {len(state.evidence)}\n- Entities: {len(state.entities)}\n"
    (case_dir / "index.md").write_text(index, encoding="utf-8")
    validation = validate_bundle(case_dir, state)
    bundle_manifest = {
        "format": "OKF",
        "version": "0.1",
        "case_id": state.case_id,
        "classification": state.classification,
        "confidence": state.confidence,
        "risk_score": state.risk_score,
        "documents": ["index.md", "scams/suspected_scam.md"]
        + [f"evidence/{e['id']}.md" for e in state.evidence]
        + [f"entities/{e['id']}.md" for e in state.entities]
        + [f"patterns/{p['id']}.md" for p in {p['id']: p for p in state.patterns}.values()],
        "quality_gate": validation,
        "raw_preserved": True,
    }
    _write_json(case_dir / "okf.json", bundle_manifest)
    # Keep the historical filename as a compatibility alias for consumers
    # from the previous Gorilla stage.
    _write_json(case_dir / "pkf.json", {**bundle_manifest, "format": "OKF", "compatibility": "pkf"})
    _write_json(case_dir / "state.json", asdict(state))
    return case_dir, validation


def validate_bundle(case_dir: Path, state: InvestigationState) -> dict[str, Any]:
    errors: list[str] = []
    if not (case_dir / "index.md").exists() or not (case_dir / "scams" / "suspected_scam.md").exists(): errors.append("documentos principais ausentes")
    if not state.case_id or not all(0 <= float(value) <= 1 for value in (state.confidence, state.risk_score)): errors.append("metadados de confiança inválidos")
    evidence_ids = {e["id"] for e in state.evidence}
    if any(c["evidence_id"] not in evidence_ids for c in state.claims): errors.append("claim sem evidência")
    if any(e["url"] and not str(e["url"]).startswith(("http://", "https://")) for e in state.evidence): errors.append("URL de fonte inválida")
    return {"status": "passed" if not errors else "failed", "errors": errors, "evidence": len(state.evidence), "entities": len(state.entities)}


def run_pipeline(response: dict[str, Any], output_dir: str | Path = "output/pipeline_gorila") -> PipelineResult:
    state = _build_state(response)
    _judge(state)
    root = Path(output_dir)
    case_dir, validation = _write_bundle(state, root)
    state.output = {"case_dir": str(case_dir), "validation": validation}
    _write_json(root / "index.jsonl", {"case_id": state.case_id, "classification": state.classification, "confidence": state.confidence, "risk_score": state.risk_score, "source": "pipeline_gorila"})
    if validation["status"] != "passed":
        raise ValueError("Quality gate falhou: " + "; ".join(validation["errors"]))
    return PipelineResult(state.case_id, str(case_dir), str(case_dir), state.case_id, "ready", validation)
