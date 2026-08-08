---
name: Bootstrap Hackathon Project
description: "Turn an approved hackathon product brief and technology choice into a dependency-aware Beads backlog and, when explicitly authorized, an initial project scaffold."
argument-hint: "Product brief, chosen stack, and whether to scaffold now"
agent: Beads Delivery
---

Use the user's arguments as the product brief, chosen stack, constraints, and authorization level.

1. Confirm the product goal, intended users, required user flows, stack, data/auth needs, and deployment target. Ask concise questions for any decision that blocks a responsible scaffold.
2. Run `bd prime` and `bd dolt pull`. Create one concise epic and dependency-ordered child tasks for the approved work. Do not invent product features beyond the supplied brief.
3. Present the proposed task order, implementation boundaries, and validation approach.
4. Only create application files when the user explicitly authorizes scaffolding or implementation. When authorized, claim the first ready setup task and implement only that task.
5. Validate with the stack's actual commands, update or close the claimed task with the result, and synchronize the tracker with `bd dolt push`.