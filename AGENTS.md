# Hack2L Ajeitados Agent Guide

## Project State

- The repository contains a Node ESM LangGraph/WhatsApp pipeline and a small
	JSONL observability bridge for the separate Agent Flow repository.
- Record authoritative install, run, format, and test commands in the README
	and update this file if the workflow changes. Do not merge Agent Flow into
	this repository.

## Beads Workflow

- Beads is the source of truth for repository work. Start sessions with `bd prime`, then inspect `bd ready` before choosing work.
- Pull shared tracker state with `bd dolt pull` before creating or claiming work. Claim an unblocked task with `bd update <issue-id> --claim` before changing implementation files.
- Create a focused task when requested work has no matching issue. Use dependencies with `bd dep add <blocked-issue> <blocker-issue>` instead of working around blockers.
- Do not edit `.beads/embeddeddolt/`, hook files, or generated metadata directly. Use the `bd` CLI.
- After a verified change, update the task with validation details, close it with a concise reason, and synchronize with `bd dolt push`.
- Only a designated maintainer may run `bd migrate`, reinitialize Beads, or alter the Dolt remote.

## Agentic Harness

- Copilot-specific runtime behavior lives in `.github/copilot-instructions.md`.
- Copilot custom agents live in `.github/agents/`; project-specific skills live
	in `.github/skills/`.
- Metaswarm semantics map to Copilot subagents or `/fleet`; Claude-specific
	APIs such as `TeamCreate` are not assumed to exist.
- Beads defines durable work-unit state. Fleet and Autopilot state is ephemeral.
- Workers receive explicit allowed and forbidden file scope. Shared files,
	schemas, migrations, and unfinished APIs serialize work.
- Orchestrators independently validate workers, then use a fresh read-only
	adversarial reviewer. Worker self-reports are not completion evidence.
- Caveman compresses ordinary communication only. Never compress contracts,
	JSON/YAML, commands, code, diffs, identifiers, dependency graphs, security
	findings, or test evidence.
- Run `python scripts/validate-agent-harness.py` before declaring harness work
	complete. This skeleton has no application test, lint, typecheck, build, or
	coverage command until a product stack is selected.

## Delivery Expectations

- Make the smallest change that addresses the claimed task. Inspect nearby code and existing conventions before editing.
- Discover and run the project's actual validation commands. Do not claim a validation command exists until it has been added and checked.
- The configured Beads policy is `team-maintainer`: agents may close tasks, synchronize Beads, commit, and push after successful validation when no direct instruction prohibits it and local Git identity/authentication are configured.
- Report the task ID, changed files, validation, and synchronization status at handoff.

## Codex routing

- When this repository is open in Codex, implementation requests are handled
  by the `preto-velho` orchestration role. It runs on `gpt-5.6-terra` and
  delegates only scoped workers.
- Project workers default to `gpt-5.6-luna`: `executor`, `researcher`,
  `validator`, and `adversarial-reviewer`. They are internal roles, not
  user-facing commands.
- The project configuration is `.codex/config.toml` and the role definitions
  are `.codex/agents/*.toml`. Codex must trust the repository's `.codex` layer
  for these settings to load. The Codex UI still presents custom agents as
  delegatable roles; it does not replace the compose box with a permanent
  custom-agent dropdown.

## Canonical entrypoint

- Use `npm run preto-velho -- "request"` (ou `copilot --agent=preto-velho`) para
  implementação. `preto-velho` é o único agente customizado público; os demais
  perfis são workers internos.
- O orquestrador cria/assume Beads, despacha apenas unidades prontas e
  isoladas, valida independentemente, obtém revisão adversarial e acompanha o
  branch até PR/CI antes de fechar o épico.
