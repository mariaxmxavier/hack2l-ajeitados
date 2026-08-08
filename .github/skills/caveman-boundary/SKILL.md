---
name: caveman-boundary
description: "Protects Metaswarm and Beads machine-readable contracts from Caveman compression while allowing concise human-facing communication."
---

# Caveman Boundary

Caveman is a communication layer, not a scheduler, task database, validator,
reviewer, or source of truth.

Safe to compress:

- ordinary user-facing narration
- progress summaries
- non-contractual explanations

Never compress, rename, omit, or paraphrase:

- Beads IDs, dependencies, states, and task contracts
- work-unit DoD, allowed files, forbidden files, or validation commands
- YAML frontmatter, JSON, code, commands, diffs, paths, and identifiers
- test output, errors, security findings, review evidence, and PR criteria
- structured agent handoffs

Structured handoff format:

```text
STATUS: COMPLETE|BLOCKED|FAILED
WU: <beads-id>
FILES:
- <path>
VALIDATION:
- <command>: PASS|FAIL
REVIEW: PASS|FAIL|PENDING
BLOCKERS:
- none
```