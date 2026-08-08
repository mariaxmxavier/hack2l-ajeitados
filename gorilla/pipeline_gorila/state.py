from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any


@dataclass
class InvestigationState:
    case_id: str
    created_at: str
    query: str
    response_json: dict[str, Any]
    candidates: list[dict[str, Any]] = field(default_factory=list)
    entities: list[dict[str, Any]] = field(default_factory=list)
    claims: list[dict[str, Any]] = field(default_factory=list)
    evidence: list[dict[str, Any]] = field(default_factory=list)
    patterns: list[dict[str, Any]] = field(default_factory=list)
    validation_results: list[dict[str, Any]] = field(default_factory=list)
    classification: str = "insufficient_evidence"
    confidence: float = 0.0
    risk_score: float = 0.0
    output: dict[str, Any] = field(default_factory=dict)

