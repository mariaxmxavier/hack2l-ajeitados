# Hack2L Ajeitados Agent Guide

## Project State

- This repository is intentionally a project skeleton. No application stack, build command, test command, or deployment target has been selected.
- Do not invent a framework or scaffold application code. Use the `bootstrap-hackathon` prompt after the product brief and technology choices are explicit.
- When the team adopts tooling, record the authoritative install, run, format, and test commands in the README and update this file if the workflow changes.

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