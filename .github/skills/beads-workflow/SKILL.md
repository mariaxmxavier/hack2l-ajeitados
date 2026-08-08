---
name: beads-workflow
description: "Use when: creating, prioritizing, claiming, updating, closing, or synchronizing Beads tasks; planning dependency-aware work; or recovering the shared task workflow."
argument-hint: "Task, issue ID, or planning goal"
---

# Beads Workflow

Use Beads as the source of truth for repository work. Work through the CLI; never edit the embedded Dolt database or generated hook files directly.

## Start Work

1. Run `bd prime`, then `bd dolt pull` to refresh shared task state.
2. Use `bd ready` to find unblocked work. Use `bd ready --explain` when a task's availability is unclear.
3. Inspect the chosen task with `bd show <issue-id>` and claim it atomically with `bd update <issue-id> --claim`.
4. If no task represents the requested work, create one with a focused title, priority, and description. Add dependencies with `bd dep add <blocked-issue> <blocker-issue>` before implementation begins.

## Deliver Work

1. Keep the implementation within the claimed task's scope.
2. Run the actual project validation command and capture its result.
3. Update the task with material progress or a blocker. Do not close it until validation passes.
4. Close completed work with `bd close <issue-id> --reason "<validated outcome>"`.

## Synchronize

1. Run `bd dolt push` after creating, changing, or closing tasks that teammates need.
2. Check `bd dolt remote list` if synchronization fails. The expected shared remote is `origin`.
3. For embedded mode, use `bd info` and `bd hooks list` as health checks; this installed Beads version does not support `bd doctor` in embedded mode.

## Safety

- Avoid duplicate work: pull, inspect `bd ready`, and claim before editing.
- Do not run `bd migrate`, `bd init`, remote replacement, or manual database repair unless a designated maintainer explicitly directs it.
- The team-maintainer policy permits normal close, sync, commit, and push operations, but direct instructions not to commit, push, or synchronize always take precedence.