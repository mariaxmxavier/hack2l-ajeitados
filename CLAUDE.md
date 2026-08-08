# Claude Project Entry Point

This repository is a stack-neutral skeleton. Upstream Metaswarm and Caveman are
user-scoped Claude Code plugins; no provider implementation is vendored here.

Read `AGENTS.md` for repository rules and `.github/copilot-instructions.md` for
shared orchestration semantics. Use Beads as durable workflow state:

```text
bd prime
bd dolt pull
bd ready
```

The repository-owned harness gate is:

```text
python scripts/validate-agent-harness.py
python scripts/smoke-beads-dag.py
```

Do not invent application tests, lint, typecheck, build, or coverage commands
until a product brief selects a stack. Do not edit `.beads` internals or hooks.
