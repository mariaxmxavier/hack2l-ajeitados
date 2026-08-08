"""Explicit contracts for deterministic Preto-Velho investigation roles."""

from __future__ import annotations

from dataclasses import asdict, dataclass, field
from enum import StrEnum
from typing import Any


class AgentStatus(StrEnum):
    COMPLETED = "completed"
    DEGRADED = "degraded"
    FAILED = "failed"
    SKIPPED = "skipped"


@dataclass(frozen=True)
class AgentPolicy:
    name: str
    timeout_seconds: float = 5.0
    max_retries: int = 1
    budget_units: int = 1


@dataclass(frozen=True)
class AgentResult:
    """A role result that can be checked without trusting agent prose."""

    agent: str
    status: AgentStatus
    attempts: int
    elapsed_ms: int
    artifacts: dict[str, int] = field(default_factory=dict)
    issues: tuple[str, ...] = ()

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass(frozen=True)
class EvidenceReference:
    evidence_id: str
    source: str
    url: str | None


def require_evidence_references(items: list[dict[str, Any]], evidence_ids: set[str], *, field: str = "evidence_id") -> list[str]:
    """Return contract failures for artifacts that point outside known evidence."""
    errors: list[str] = []
    for item in items:
        evidence_id = item.get(field)
        if evidence_id not in evidence_ids:
            errors.append(f"{item.get('id', 'artifact')} referencia evidencia inexistente: {evidence_id}")
    return errors
