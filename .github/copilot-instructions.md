# Copilot Harness Contract

Use Metaswarm semantics with Copilot-native execution. Do not emulate Claude
`TeamCreate` or treat Fleet state as durable work state.

## Canonical Entry Point

Repository implementation work is orchestrated through the public
`preto-velho` custom agent. Invoke it with `npm run preto-velho` (or
`copilot --agent=preto-velho` when the launcher is unavailable). Direct worker
invocation is reserved for the orchestrator; internal worker profiles and
project skills are model-invocable only and must remain hidden from user-facing
agent/skill menus (`user-invocable: false`).

The orchestrator must create or select a Beads epic, decompose it into
dependency-aware work units, assign each unit an explicit contract, and claim
the unit before any implementation edit. It dispatches only READY units with
disjoint ownership, then independently validates every worker result and runs a
fresh adversarial review before delivery. A worker may not bypass the
orchestrator, broaden its allowed-file scope, close another worker's task, or
merge directly.

## Delivery Gate

No implementation is complete until the orchestrator has recorded validation
evidence, committed with the Beads ID, synchronized Beads, and opened a pull
request containing the contract, changed-file scope, tests, and review trace.
Merge is permitted only after CI and the fresh adversarial review pass. If a
gate fails, return to the owning work unit; after three failed automatic cycles,
escalate with evidence rather than bypassing the gate.

## Durable State

- Beads is the source of truth for epics, work units, dependencies, readiness,
  completion, and durable knowledge.
- Start with `bd prime`, `bd dolt pull`, and `bd ready`.
- Claim work with `bd update <id> --claim` before editing.
- Fleet, Autopilot, and subagent state are ephemeral execution state only.

## Work Unit Protocol

Every coding work unit declares ID, purpose, specification reference, DoD,
allowed files, forbidden files, dependencies, expected tests, validation
commands, risk, and human checkpoint. Only READY independent Beads nodes may
run concurrently. Shared files or schema dependencies require serialization.

Workers never self-certify. The orchestrator independently checks changed-file
scope, targeted tests, lint, format, typecheck, build, coverage when configured,
and `git diff --check` before accepting a work unit.

## Review Protocol

After validation, use a fresh adversarial reviewer context. Give it only the
specification, DoD, allowed scope, relevant diff, and necessary conventions.
Never pass a previous reviewer's conclusions to the next reviewer. A failed
review returns to validation after a scoped fix; maximum automatic retries: 3.

## Caveman Boundary

Caveman may compress ordinary human-facing prose. Never compress or omit Beads
contracts, DoD, agent contracts, YAML/JSON, commands, code, diffs, paths,
identifiers, dependency graphs, security findings, review evidence, or test
output. Structured handoffs remain explicit and machine-readable.

## Provider Ownership

- `AGENTS.md`: provider-neutral repository invariants.
- `.github/`: Copilot instructions, agents, and project-specific skills.
- `.agents/skills/`: portable Caveman skills.
- User-scoped plugins: upstream Caveman and Metaswarm implementations.
- `.beads/`: generated durable state managed only through `bd`.

## Completion

Close Beads only after executable validation. Run `bd dolt push` after tracker
changes. Before PR creation, run the harness validator, smoke tests, and all
known repository gates. If no application toolchain exists, report those gates
as N/A rather than inventing commands.
