# Agent Harness Inventory

Status: audited 2026-08-08. This repository is a stack-neutral skeleton; no
application runtime, package manifest, test runner, linter, formatter,
typechecker, build command, or coverage command exists.

## Ownership Map

| Path | Classification | Role | Decision |
| --- | --- | --- | --- |
| `AGENTS.md` | CANONICAL | Tool-agnostic engineering and Beads rules | Keep as cross-provider authority. |
| `.github/agents/` | PROJECT OVERRIDE | Copilot custom-agent profiles | Add Copilot-native orchestration profiles here. |
| `.github/skills/beads-workflow/` | CANONICAL | Beads lifecycle | Keep; all providers use Beads CLI. |
| `.github/prompts/` | PROJECT OVERRIDE | Repository prompts | Keep; prompts must not duplicate agent behavior. |
| `.agents/` | PROJECT OVERRIDE | Portable agent ownership notes | Keep only repository-owned adapters; upstream Caveman stays user-scoped. |
| `.claude/` | LEGACY / REMOVED | Deprecated npm installer output for Claude Code | Removed; supported Metaswarm plugin remains user-scoped. |
| `.metaswarm/` | LEGACY / REMOVED | Deprecated project templates | Removed; no upstream source is vendored. |
| `.beads/` | GENERATED / CANONICAL STATE | Embedded Beads database, hooks, and knowledge | Manage through `bd`; never edit database or hooks directly. |
| `CLAUDE.md` | PROJECT OVERRIDE | Claude project entrypoint | Keep concise and point to shared rules; remove generated stack assumptions. |
| `skills-lock.json` | GENERATED | Caveman skill source lock | Keep if Caveman loader uses it; do not hand-edit dependency contents. |
| `SERVICE-INVENTORY.md` | LEGACY / REMOVED | Metaswarm setup inventory template | Removed because no application services exist. |
| `bin/` | LEGACY / REMOVED | Installer helper scripts | Removed with deprecated installer output. |
| `scripts/` | CANONICAL | Repository harness validation and Beads smoke scripts | Keep only deterministic project-owned scripts. |
| `.github/workflows/` | GENERATED / PROJECT OVERRIDE | CI templates | Keep only workflows that validate this harness without assuming an app stack. |

## Provider Boundaries

- `AGENTS.md` contains stable repository rules.
- `.github/copilot-instructions.md` contains Copilot runtime behavior.
- `.github/agents/` contains Copilot profiles and least-privilege tools.
- `.github/skills/` contains project-specific Copilot-compatible skills only.
- `.agents/` documents portable ownership; Caveman implementation remains the
   user-scoped plugin and `.github/skills/caveman-boundary` is the project adapter.
- User-scoped plugins provide upstream Caveman and Metaswarm implementations.
- `.claude/` is intentionally absent; Metaswarm remains a user-scoped plugin,
  not a vendored repository implementation.

## Discovered Toolchain

| Capability | Result |
| --- | --- |
| OS / shell | Windows / PowerShell |
| Repository branch | `main` |
| Runtime manifests | None |
| Application tests | None |
| CI provider | GitHub Actions templates present; applicability pending audit |
| Beads | `bd 1.1.2`, embedded Dolt, healthy hooks and remote |
| Copilot CLI | Installed; supports `--autopilot` and custom `--agent` |
| Claude Code | Installed; Metaswarm plugin enabled at user scope |
| GitHub CLI | Not found during baseline |
| Gemini CLI | Not found during prior setup |
| Codex CLI | Installed |

## Known Gaps

1. Copilot CLI authentication is unavailable, so custom-agent, Autopilot, and
   Fleet execution cannot be verified locally.
2. GitHub CLI is not installed; authenticated PR shepherding through `gh` cannot
   be verified locally. The GitHub integration can still create the PR.
3. Claude OAuth is expired, preventing authenticated Metaswarm status checks.
4. The repository has no application validation commands; harness checks must be
   independent of application tests.