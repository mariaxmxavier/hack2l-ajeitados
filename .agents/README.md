# Agent Assets

This directory contains repository-owned, portable agent customizations.

## Ownership

- `.github/` contains repository delivery instructions, Copilot agents, and
	project-owned adapter skills.
- `.agents/` contains only this ownership note; upstream Caveman assets remain
	user-scoped.

MetaSwarm itself is installed as the user-scoped Claude Code plugin. Keep its
upstream skills in that plugin; do not copy them into the repository and create
competing versions.

The repository has no application runtime yet, so there is no SSE event source
or Caveman telemetry hook to report a compression level. Add those only with a
real runtime and event boundary.