from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from .contracts import require_evidence_references
from .harness import POLICIES, run_investigation
from .state import InvestigationState


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


def _write_bundle(state: InvestigationState, output_dir: Path) -> tuple[Path, dict[str, Any]]:
    case_dir = output_dir / "cases" / state.case_id
    for name in ("scams", "entities", "evidence", "patterns", "investigation"):
        (case_dir / name).mkdir(parents=True, exist_ok=True)

    for evidence in state.evidence:
        meta = {"type": "evidence", "evidence_id": evidence["id"], "source": evidence["source"], "url": evidence["url"] or "", "case_id": state.case_id}
        body = f"\n# {evidence['title'] or evidence['id']}\n\n{evidence['body_snippet'] or 'Sem trecho textual retornado.'}\n\nFonte: {evidence['url'] or 'não informada'}\n"
        (case_dir / "evidence" / f"{evidence['id']}.md").write_text(_frontmatter(meta) + body, encoding="utf-8")

    for entity in state.entities:
        meta = {"type": "entity", "entity_id": entity["id"], "entity_type": entity["type"], "case_id": state.case_id, "evidence_id": entity["evidence_id"]}
        (case_dir / "entities" / f"{entity['id']}.md").write_text(_frontmatter(meta) + f"\n# {entity['type']}\n\n`{entity['value']}`\n", encoding="utf-8")

    grouped_patterns = {pattern["id"]: pattern for pattern in state.patterns}
    for pattern in grouped_patterns.values():
        meta = {"type": "pattern", "pattern_id": pattern["id"], "name": pattern["name"], "case_id": state.case_id, "evidence_id": pattern["evidence_id"]}
        link = f"- [Evidence {pattern['evidence_id']}](../evidence/{pattern['evidence_id']}.md)"
        (case_dir / "patterns" / f"{pattern['id']}.md").write_text(_frontmatter(meta) + f"\n# {pattern['name']}\n\nSignals: {', '.join(pattern['signals'])}\n\n{link}\n", encoding="utf-8")

    scam_meta = {
        "type": "scam_case", "title": "Gorilla investigation", "case_id": state.case_id,
        "classification": state.classification, "confidence": state.confidence,
        "risk_score": state.risk_score, "timestamp": state.created_at,
        "evidence_count": len(state.evidence), "raw_response_sha256": state.raw_response_sha256,
    }
    evidence_links = "\n".join(f"- [{evidence['id']}](evidence/{evidence['id']}.md)" for evidence in state.evidence)
    pattern_links = "\n".join(f"- [{pattern['name']}](patterns/{pattern['id']}.md)" for pattern in grouped_patterns.values())
    scam_body = f"\n# Resumo\n\nCaso classificado como **{state.classification}** a partir de investigação Gorilla auditável.\n\n# Evidências\n\n{evidence_links or '- Nenhuma evidência.'}\n\n# Padrões\n\n{pattern_links or '- Nenhum padrão.'}\n"
    (case_dir / "scams" / "suspected_scam.md").write_text(_frontmatter(scam_meta) + scam_body, encoding="utf-8")

    role_lines = "\n".join(f"- {result['agent']}: {result['status']} ({result['attempts']} tentativa(s))" for result in state.agent_results)
    investigation_meta = {
        "type": "investigation_audit", "case_id": state.case_id,
        "state_schema_version": state.schema_version, "raw_response_sha256": state.raw_response_sha256,
        "agent_count": len(state.agent_results), "checkpoint_count": len(state.checkpoints),
    }
    investigation_body = f"\n# Investigação agentica\n\nOrquestrada deterministicamente pelo Preto-Velho a partir do `response.json` preservado.\n\n# Papéis\n\n{role_lines}\n"
    (case_dir / "investigation" / "summary.md").write_text(_frontmatter(investigation_meta) + investigation_body, encoding="utf-8")

    index = _frontmatter({"type": "case_index", "case_id": state.case_id, "classification": state.classification, "confidence": state.confidence, "risk_score": state.risk_score}) + f"\n# {state.case_id}\n\n- [Suspected scam](scams/suspected_scam.md)\n- [Investigation audit](investigation/summary.md)\n- Evidence: {len(state.evidence)}\n- Entities: {len(state.entities)}\n"
    (case_dir / "index.md").write_text(index, encoding="utf-8")

    validation = validate_bundle(case_dir, state)
    documents = ["index.md", "scams/suspected_scam.md", "investigation/summary.md"]
    documents.extend(f"evidence/{evidence['id']}.md" for evidence in state.evidence)
    documents.extend(f"entities/{entity['id']}.md" for entity in state.entities)
    documents.extend(f"patterns/{pattern['id']}.md" for pattern in grouped_patterns.values())
    bundle_manifest = {
        "format": "OKF", "version": "0.2", "case_id": state.case_id,
        "classification": state.classification, "confidence": state.confidence,
        "risk_score": state.risk_score, "documents": documents,
        "quality_gate": validation, "raw_preserved": True,
        "raw_response_sha256": state.raw_response_sha256,
        "agentic_investigation": {"orchestrator": "preto-velho", "agents": [policy.name for policy, _ in POLICIES], "checkpoints": len(state.checkpoints)},
    }
    _write_json(case_dir / "okf.json", bundle_manifest)
    _write_json(case_dir / "pkf.json", {**bundle_manifest, "compatibility": "pkf"})
    state.output = {"case_dir": str(case_dir), "validation": validation}
    _write_json(case_dir / "state.json", state.snapshot())
    return case_dir, validation


def validate_bundle(case_dir: Path, state: InvestigationState) -> dict[str, Any]:
    errors: list[str] = []
    if not (case_dir / "index.md").exists() or not (case_dir / "scams" / "suspected_scam.md").exists():
        errors.append("documentos principais ausentes")
    if not (case_dir / "investigation" / "summary.md").exists():
        errors.append("sumário de investigação ausente")
    if not state.case_id or not re.fullmatch(r"[0-9a-f]{64}", state.raw_response_sha256):
        errors.append("metadados imutáveis inválidos")
    if not all(0 <= float(value) <= 1 for value in (state.confidence, state.risk_score)):
        errors.append("metadados de confiança inválidos")
    evidence_ids = {evidence["id"] for evidence in state.evidence}
    errors.extend(require_evidence_references(state.claims, evidence_ids))
    errors.extend(require_evidence_references(state.patterns, evidence_ids))
    errors.extend(require_evidence_references(state.entities, evidence_ids))
    errors.extend(require_evidence_references(state.hypotheses, evidence_ids))
    errors.extend(require_evidence_references(state.replications, evidence_ids))
    if any(evidence["url"] and not str(evidence["url"]).startswith(("http://", "https://")) for evidence in state.evidence):
        errors.append("URL de fonte inválida")
    expected_agents = {policy.name for policy, _ in POLICIES}
    completed_agents = {result["agent"] for result in state.agent_results if result["status"] == "completed"}
    if completed_agents != expected_agents:
        errors.append("subagentes obrigatórios incompletos")
    if len(state.checkpoints) != len(POLICIES):
        errors.append("checkpoints incompletos")
    return {
        "status": "passed" if not errors else "failed",
        "errors": errors,
        "evidence": len(state.evidence),
        "entities": len(state.entities),
        "agents": len(state.agent_results),
        "checkpoints": len(state.checkpoints),
    }


def run_pipeline(response: dict[str, Any], output_dir: str | Path = "output/pipeline_gorila") -> PipelineResult:
    if not isinstance(response, dict):
        raise ValueError("response.json deve conter um objeto JSON")
    state = InvestigationState.from_response(_case_id(response), _now(), response)
    run_investigation(state)
    root = Path(output_dir)
    case_dir, validation = _write_bundle(state, root)
    _write_json(root / "index.jsonl", {
        "case_id": state.case_id, "classification": state.classification,
        "confidence": state.confidence, "risk_score": state.risk_score,
        "source": "pipeline_gorila", "raw_response_sha256": state.raw_response_sha256,
    })
    if validation["status"] != "passed":
        raise ValueError("Quality gate falhou: " + "; ".join(validation["errors"]))
    return PipelineResult(state.case_id, str(case_dir), str(case_dir), state.case_id, "ready", validation)
