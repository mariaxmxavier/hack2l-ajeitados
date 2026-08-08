# Copilot Harness Contract

Use Metaswarm semantics with Copilot-native execution. Do not emulate Claude
`TeamCreate` or treat Fleet state as durable work state.

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