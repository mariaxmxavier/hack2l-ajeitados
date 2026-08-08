# Agent Harness

Operational map for the Copilot + Metaswarm + Beads development harness.

## Components

- **Copilot CLI**: runtime, Autopilot, custom agents, and `/fleet` execution.
- **Metaswarm**: upstream workflow semantics, gates, rubrics, and PR process.
- **Beads**: durable epic, work-unit, dependency, readiness, completion, and
  knowledge state.
- **`.github/agents/`**: Copilot-native least-privilege adapters.
- **`.github/skills/`**: project-specific adapters; upstream skills stay in the
  user-scoped Metaswarm plugin.
- **`.agents/skills/`**: portable Caveman communication skills.
- **GitHub Actions**: deterministic harness validation and repository gates.
- **GitHub / PR shepherd**: optional external lifecycle; `gh` and auth must be
  present before creating or shepherding a PR.

## Source Of Truth

`AGENTS.md` owns provider-neutral rules. `.github/copilot-instructions.md`
owns Copilot runtime behavior. Beads owns durable workflow state. User-scoped
plugin caches own upstream implementations; no `.claude/` or `.metaswarm/`
vendor copy is required.

## Runtime Flow

```text
request
  -> issue orchestrator
  -> Beads epic + dependency DAG
  -> bd ready
  -> Copilot subagents or /fleet for disjoint READY work units
  -> orchestrator validation and scope check
  -> fresh adversarial review
  -> scoped fix or commit
  -> bd close + bd dolt push
  -> PR shepherd
  -> CI and review feedback
  -> human merge gate
  -> knowledge capture
```

Workers do not self-certify. Every work unit carries a contract and ownership
map. Fleet parallelism is allowed only where file, schema, migration, generated
artifact, and API ownership are disjoint.

## Validation

```powershell
python scripts/validate-agent-harness.py
bd status
bd prime
bd ready --explain
bd hooks list
copilot --help
gh auth status
```

The repository currently has no application runtime, so application tests,
lint, typecheck, build, and coverage are N/A until the stack is selected. The
harness validator remains runnable with Python standard library and Beads.

## Troubleshooting

- `bd` unavailable: install Beads and rerun `bd status`; do not edit `.beads`.
- MetaSwarm status unavailable: reauthenticate the provider CLI; do not vendor
  plugin files into the repository.
- `gh` unavailable: PR shepherd can validate local prerequisites only.
- Agent discovery mismatch: run the validator, inspect `.github/agents/*.agent.md`
  frontmatter, and verify the Copilot CLI version supports `--agent`.
- Fleet collision: stop dispatch, update Beads ownership/dependencies, and
  serialize the conflicting units.