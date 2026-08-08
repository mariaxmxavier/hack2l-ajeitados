---
name: orchestrated-execution
description: "Copilot-native adapter for Metaswarm work-unit execution using Beads, Fleet-safe ownership, independent validation, and fresh adversarial review."
user-invocable: false
disable-model-invocation: false
---

# Orchestrated Execution Adapter

Metaswarm semantics map to Copilot primitives as follows:

| Metaswarm semantic | Copilot execution |
| --- | --- |
| Work unit | Beads issue with explicit contract |
| Parallel workers | `/fleet` or independent Copilot subagents |
| Team coordination | orchestrator prompt plus agent status messages |
| Durable state | Beads, never Fleet task state |
| Independent validation | orchestrator executes repository commands |
| Fresh adversarial review | new `adversarial-reviewer` context |
| Completion | review PASS, then `bd close` and `bd dolt push` |

Required loop:

```text
IMPLEMENT -> VALIDATE -> FRESH ADVERSARIAL REVIEW -> COMMIT -> bd close
```

Only READY nodes with disjoint ownership may run concurrently. A worker cannot
change its scope silently. Three failed validation/review cycles escalate to a
human with evidence in Beads.
