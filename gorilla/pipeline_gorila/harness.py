"""Deterministic harness that runs the Preto-Velho investigation roles."""

from __future__ import annotations

import copy
import time
from collections.abc import Callable

from . import agents
from .contracts import AgentPolicy, AgentResult, AgentStatus
from .state import InvestigationState


AgentAction = Callable[[InvestigationState], None]

POLICIES = (
    (AgentPolicy("research", timeout_seconds=5.0, max_retries=1, budget_units=2), agents.research_agent),
    (AgentPolicy("entity", timeout_seconds=3.0, max_retries=1, budget_units=1), agents.entity_agent),
    (AgentPolicy("pattern", timeout_seconds=3.0, max_retries=1, budget_units=1), agents.pattern_agent),
    (AgentPolicy("replication", timeout_seconds=3.0, max_retries=1, budget_units=1), agents.replication_agent),
    (AgentPolicy("validation", timeout_seconds=3.0, max_retries=1, budget_units=1), agents.validation_agent),
    (AgentPolicy("judge", timeout_seconds=3.0, max_retries=1, budget_units=1), agents.judge_agent),
)


def _now() -> str:
    from datetime import datetime, timezone
    return datetime.now(timezone.utc).isoformat()


def _artifact_counts(state: InvestigationState) -> dict[str, int]:
    return {
        "evidence": len(state.evidence),
        "entities": len(state.entities),
        "patterns": len(state.patterns),
        "hypotheses": len(state.hypotheses),
        "replications": len(state.replications),
        "validations": len(state.validation_results),
    }


def _deltas(before: dict[str, int], after: dict[str, int]) -> dict[str, int]:
    return {name: after[name] - before[name] for name in after if after[name] != before[name]}


def run_investigation(state: InvestigationState, *, budget_units: int = 8) -> InvestigationState:
    """Run each role in a fixed, auditable order with bounded retries."""
    remaining_budget = budget_units
    state.status = "running"
    state.record_audit(event="investigation_started", agent="preto-velho", timestamp=_now(), details={"budget_units": budget_units})

    for policy, action in POLICIES:
        if remaining_budget < policy.budget_units:
            raise RuntimeError(f"Orçamento insuficiente para agente {policy.name}")
        remaining_budget -= policy.budget_units
        before = _artifact_counts(state)
        issues: list[str] = []
        started = time.monotonic()
        state.record_audit(event="agent_started", agent=policy.name, timestamp=_now(), details={"timeout_seconds": policy.timeout_seconds, "remaining_budget": remaining_budget})
        max_attempts = policy.max_retries + 1
        for attempt in range(1, max_attempts + 1):
            attempt_snapshot = copy.deepcopy(state.__dict__)
            try:
                action(state)
                elapsed_ms = int((time.monotonic() - started) * 1000)
                if elapsed_ms > policy.timeout_seconds * 1000:
                    raise TimeoutError(f"{policy.name} excedeu {policy.timeout_seconds}s")
                result = AgentResult(policy.name, AgentStatus.COMPLETED, attempt, elapsed_ms, _deltas(before, _artifact_counts(state)), tuple(issues))
                state.record_agent_result(result.to_dict())
                state.record_audit(event="agent_completed", agent=policy.name, timestamp=_now(), details=result.to_dict())
                state.checkpoint(name=f"after_{policy.name}", timestamp=_now())
                break
            except Exception as error:
                # A retry must not observe partially written artifacts from a
                # failed attempt. The immutable raw response remains identical.
                state.__dict__.clear()
                state.__dict__.update(attempt_snapshot)
                issues.append(str(error))
                if attempt == max_attempts:
                    elapsed_ms = int((time.monotonic() - started) * 1000)
                    result = AgentResult(policy.name, AgentStatus.FAILED, attempt, elapsed_ms, {}, tuple(issues))
                    state.record_agent_result(result.to_dict())
                    state.record_audit(event="agent_failed", agent=policy.name, timestamp=_now(), details=result.to_dict())
                    state.status = "failed"
                    raise RuntimeError(f"Agente {policy.name} falhou: {error}") from error
                state.record_audit(event="agent_retry", agent=policy.name, timestamp=_now(), details={"attempt": attempt + 1, "reason": str(error)})

    state.record_audit(event="investigation_completed", agent="preto-velho", timestamp=_now(), details={"remaining_budget": remaining_budget})
    return state
