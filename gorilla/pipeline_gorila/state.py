from __future__ import annotations

import hashlib
import json
from dataclasses import asdict, dataclass, field
from typing import Any


STATE_SCHEMA_VERSION = "1.0"


def canonical_json(value: dict[str, Any]) -> str:
    """Create the immutable, reproducible representation of Gorilla input."""
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


@dataclass
class InvestigationState:
    """The only mutable coordination object owned by the Gorilla harness.

    The raw Gorilla result is deliberately retained as canonical JSON rather
    than a shared dict. Agents receive a new decoded copy through
    :pyattr:`raw_response`, so no role can mutate the original evidence.
    """

    case_id: str
    created_at: str
    query: str
    raw_response_json: str
    raw_response_sha256: str
    schema_version: str = STATE_SCHEMA_VERSION
    candidates: list[dict[str, Any]] = field(default_factory=list)
    entities: list[dict[str, Any]] = field(default_factory=list)
    claims: list[dict[str, Any]] = field(default_factory=list)
    evidence: list[dict[str, Any]] = field(default_factory=list)
    patterns: list[dict[str, Any]] = field(default_factory=list)
    hypotheses: list[dict[str, Any]] = field(default_factory=list)
    replications: list[dict[str, Any]] = field(default_factory=list)
    validation_results: list[dict[str, Any]] = field(default_factory=list)
    conflicts: list[dict[str, Any]] = field(default_factory=list)
    audit_events: list[dict[str, Any]] = field(default_factory=list)
    checkpoints: list[dict[str, Any]] = field(default_factory=list)
    agent_results: list[dict[str, Any]] = field(default_factory=list)
    classification: str = "insufficient_evidence"
    confidence: float = 0.0
    risk_score: float = 0.0
    status: str = "created"
    output: dict[str, Any] = field(default_factory=dict)

    @classmethod
    def from_response(cls, case_id: str, created_at: str, response: dict[str, Any]) -> "InvestigationState":
        raw_response_json = canonical_json(response)
        return cls(
            case_id=case_id,
            created_at=created_at,
            query=str(response.get("query", "")),
            raw_response_json=raw_response_json,
            raw_response_sha256=hashlib.sha256(raw_response_json.encode("utf-8")).hexdigest(),
        )

    @property
    def raw_response(self) -> dict[str, Any]:
        """Return a disposable decoded copy of the immutable Gorilla payload."""
        return json.loads(self.raw_response_json)

    @property
    def response_json(self) -> dict[str, Any]:
        """Compatibility name for existing consumers of InvestigationState."""
        return self.raw_response

    def record_audit(self, *, event: str, agent: str, timestamp: str, details: dict[str, Any] | None = None) -> None:
        self.audit_events.append({
            "event": event,
            "agent": agent,
            "timestamp": timestamp,
            "details": details or {},
        })

    def record_agent_result(self, result: dict[str, Any]) -> None:
        self.agent_results.append(result)

    def checkpoint(self, *, name: str, timestamp: str) -> dict[str, Any]:
        snapshot = {
            "name": name,
            "timestamp": timestamp,
            "evidence": len(self.evidence),
            "entities": len(self.entities),
            "patterns": len(self.patterns),
            "claims": len(self.claims),
            "hypotheses": len(self.hypotheses),
            "replications": len(self.replications),
            "validations": len(self.validation_results),
            "raw_response_sha256": self.raw_response_sha256,
        }
        self.checkpoints.append(snapshot)
        return snapshot

    def snapshot(self) -> dict[str, Any]:
        """Return a serializable audit artifact without a mutable raw dict."""
        return asdict(self)
