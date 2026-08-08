"""Deterministic investigation roles dispatched by the Preto-Velho harness."""

from __future__ import annotations

import re
from collections import defaultdict
from typing import Any

from .contracts import require_evidence_references
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


def _text(result: dict[str, Any]) -> str:
    return " ".join(str(result.get(key, "")) for key in ("title", "body_snippet", "author", "channel"))


def _slug(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "_", value.lower()).strip("_")
    return value[:48] or "unknown"


def research_agent(state: InvestigationState) -> None:
    """Turn immutable Gorilla results into evidence, candidates, and claims."""
    results = state.raw_response.get("results", [])
    if not isinstance(results, list):
        raise ValueError("response.results deve ser uma lista")

    for index, item in enumerate(results):
        if not isinstance(item, dict):
            continue
        raw = _text(item).strip()
        if not raw and not item.get("url"):
            continue
        evidence_id = f"ev_{index + 1:03d}"
        source = str(item.get("source", "unknown"))
        state.candidates.append({"candidate_id": f"candidate_{index + 1:03d}", "evidence_id": evidence_id, "source": source})
        state.evidence.append({
            "id": evidence_id,
            "source": source,
            "url": item.get("url"),
            "title": item.get("title", ""),
            "body_snippet": item.get("body_snippet", ""),
            "author": item.get("author"),
            "channel": item.get("channel"),
            "result_score": item.get("result_score"),
            "validation_score": item.get("validation_score"),
            "matched_signals": item.get("matched_signals", []),
            "raw_result": item,
        })
        state.claims.append({
            "id": f"claim_{index + 1:03d}",
            "text": item.get("body_snippet") or item.get("title") or "Resultado encontrado",
            "evidence_id": evidence_id,
            "status": "proposed",
        })


def entity_agent(state: InvestigationState) -> None:
    """Extract traceable entities from previously collected evidence."""
    for evidence in state.evidence:
        raw = f"{_text(evidence['raw_result'])} {evidence.get('url') or ''}"
        for entity_type, regex in (("url", URL_RE), ("email", EMAIL_RE), ("phone", PHONE_RE)):
            for value in dict.fromkeys(regex.findall(raw)):
                state.entities.append({
                    "id": f"entity_{entity_type}_{_slug(value)}",
                    "type": entity_type,
                    "value": value,
                    "evidence_id": evidence["id"],
                })


def pattern_agent(state: InvestigationState) -> None:
    """Detect known fraud patterns without changing the source evidence."""
    for evidence in state.evidence:
        text = _text(evidence["raw_result"]).lower()
        for pattern, terms in PATTERNS.items():
            hits = [term for term in terms if term in text]
            if hits:
                state.patterns.append({
                    "id": f"pattern_{_slug(pattern)}_{evidence['id']}",
                    "name": pattern,
                    "signals": hits,
                    "evidence_id": evidence["id"],
                })


def replication_agent(state: InvestigationState) -> None:
    """Test whether patterns independently support a fraud hypothesis.

    This is analytical replication only; it never contacts sources or attempts
    to execute a payment/scam flow.
    """
    patterns_by_evidence: dict[str, list[str]] = defaultdict(list)
    for pattern in state.patterns:
        patterns_by_evidence[pattern["evidence_id"]].append(pattern["name"])
    for evidence_id, names in patterns_by_evidence.items():
        unique_names = sorted(set(names))
        classification = "likely_scam" if len(unique_names) >= 2 else "suspicious"
        hypothesis_id = f"hypothesis_{evidence_id}"
        state.hypotheses.append({
            "id": hypothesis_id,
            "classification": classification,
            "patterns": unique_names,
            "evidence_id": evidence_id,
        })
        state.replications.append({
            "id": f"replication_{evidence_id}",
            "hypothesis_id": hypothesis_id,
            "evidence_id": evidence_id,
            "status": "replicated" if len(unique_names) >= 2 else "partially_replicated",
            "method": "deterministic_pattern_cooccurrence",
        })


def validation_agent(state: InvestigationState) -> None:
    """Validate evidence references, source URLs, and hypothesis provenance."""
    evidence_ids = {evidence["id"] for evidence in state.evidence}
    errors = require_evidence_references(state.claims, evidence_ids)
    errors.extend(require_evidence_references(state.patterns, evidence_ids))
    errors.extend(require_evidence_references(state.entities, evidence_ids))
    errors.extend(require_evidence_references(state.hypotheses, evidence_ids))
    errors.extend(require_evidence_references(state.replications, evidence_ids))
    for evidence in state.evidence:
        url = evidence.get("url")
        if url and not str(url).startswith(("http://", "https://")):
            errors.append(f"{evidence['id']} tem URL de fonte inválida")

    valid_evidence = evidence_ids - {error.split()[0] for error in errors if error.startswith("ev_")}
    for claim in state.claims:
        claim["status"] = "supported" if claim["evidence_id"] in valid_evidence else "invalid"
        state.validation_results.append({
            "claim_id": claim["id"],
            "evidence_id": claim["evidence_id"],
            "status": claim["status"],
        })
    state.conflicts.extend({"id": f"conflict_{index + 1:03d}", "reason": error, "status": "open"} for index, error in enumerate(errors))


def judge_agent(state: InvestigationState) -> None:
    """Consolidate only validated evidence and explicitly record conflicts."""
    evidence_count = len(state.evidence)
    scores = [float(e["validation_score"]) for e in state.evidence if isinstance(e.get("validation_score"), (int, float))]
    signal_count = len({(pattern["name"], pattern["evidence_id"]) for pattern in state.patterns})
    state.confidence = round(min(1.0, (sum(scores) / len(scores) if scores else 0.45) * (1 if evidence_count else 0.4)), 3)
    state.risk_score = round(min(1.0, 0.15 * signal_count + (0.15 if any(p["name"] == "urgency" for p in state.patterns) else 0) + (0.2 if any(p["name"] == "fake_payment" for p in state.patterns) else 0)), 3)
    supported_hypotheses = [hypothesis for hypothesis in state.hypotheses if hypothesis["evidence_id"] in {result["evidence_id"] for result in state.validation_results if result["status"] == "supported"}]
    state.classification = "likely_scam" if any(hypothesis["classification"] == "likely_scam" for hypothesis in supported_hypotheses) and state.confidence >= 0.35 else "suspicious" if signal_count else "insufficient_evidence"
    for conflict in state.conflicts:
        conflict["status"] = "resolved_by_validation"
    state.status = "judged"
