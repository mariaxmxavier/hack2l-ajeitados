---
name: work-unit-contract
description: "Defines the durable Beads work-unit contract and file ownership rules for Copilot Fleet execution."
---

Every implementation issue must state:

```text
ID
Title
Purpose
Spec reference
Definition of Done
Allowed files
Forbidden files
Dependencies
Expected tests
Validation commands
Risk level
Human checkpoint required?
```

The orchestrator records ownership before dispatch. Two READY units requiring
the same file, schema, migration, generated artifact, or unfinished API are
serialized. Unexpected cross-scope dependency is a blocker, not permission to
edit another unit's files.