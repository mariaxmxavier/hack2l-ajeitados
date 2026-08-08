#!/usr/bin/env python3
"""Validate repository-owned agent harness invariants without an LLM."""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import argparse
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = (
    ROOT / "AGENTS.md",
    ROOT / ".github" / "copilot-instructions.md",
    ROOT / ".github" / "skills" / "beads-workflow" / "SKILL.md",
    ROOT / ".github" / "skills" / "orchestrated-execution" / "SKILL.md",
)
REQUIRED_AGENTS = {
    "preto-velho",
    "researcher",
    "architect",
    "coder",
    "adversarial-reviewer",
    "security-auditor",
    "pr-shepherd",
}
INTERNAL_AGENTS = REQUIRED_AGENTS - {"preto-velho"}


def frontmatter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        raise ValueError("missing opening frontmatter marker")
    end = text.find("\n---\n", 4)
    if end < 0:
        raise ValueError("missing closing frontmatter marker")
    result: dict[str, str] = {}
    for line in text[4:end].splitlines():
        if ":" not in line or line.startswith(" "):
            continue
        key, value = line.split(":", 1)
        result[key.strip()] = value.strip().strip('"')
    return result


def check_files(errors: list[str]) -> None:
    for path in REQUIRED_FILES:
        if not path.is_file():
            errors.append(f"missing required file: {path.relative_to(ROOT)}")


def check_agents(errors: list[str]) -> None:
    names: dict[str, Path] = {}
    for path in sorted((ROOT / ".github" / "agents").glob("*.agent.md")):
        try:
            data = frontmatter(path)
        except ValueError as exc:
            errors.append(f"{path.relative_to(ROOT)}: {exc}")
            continue
        for key in ("name", "description", "tools"):
            if not data.get(key):
                errors.append(f"{path.relative_to(ROOT)}: missing frontmatter {key}")
        name = data.get("name", "").lower()
        invocable = data.get("user-invocable", "true").lower()
        if name == "preto-velho":
            if invocable != "true": errors.append("preto-velho must be user-invocable")
            if "agent" not in data.get("tools", ""): errors.append("preto-velho must allow agent tool")
            if "edit" in data.get("tools", ""): errors.append("preto-velho must not edit files directly")
        elif name in INTERNAL_AGENTS and invocable != "false":
            errors.append(f"internal agent {name} must be user-invocable:false")
        if name in names:
            errors.append(
                f"duplicate agent id {name!r}: {names[name].relative_to(ROOT)} and "
                f"{path.relative_to(ROOT)}"
            )
        elif name:
            names[name] = path
    missing = sorted(REQUIRED_AGENTS - set(names))
    errors.extend(f"missing required agent id: {name}" for name in missing)
    unexpected = sorted(set(names) - REQUIRED_AGENTS)
    errors.extend(f"unexpected custom agent id: {name}" for name in unexpected)
    if (ROOT / ".github" / "prompts").exists():
        prompts = list((ROOT / ".github" / "prompts").glob("*.prompt.md"))
        errors.extend(f"bypass prompt must be removed: {p.relative_to(ROOT)}" for p in prompts)


def check_skills(errors: list[str]) -> None:
    names: dict[str, Path] = {}
    for base in (ROOT / ".github" / "skills", ROOT / ".agents" / "skills"):
        if not base.is_dir():
            continue
        for path in sorted(base.glob("*/SKILL.md")):
            try:
                data = frontmatter(path)
            except ValueError as exc:
                errors.append(f"{path.relative_to(ROOT)}: {exc}")
                continue
            name = data.get("name", "").lower()
            if data.get("user-invocable", "true").lower() != "false":
                errors.append(f"skill must be hidden from picker: {path.relative_to(ROOT)}")
            if not name:
                errors.append(f"{path.relative_to(ROOT)}: missing frontmatter name")
                continue
            if name in names:
                errors.append(
                    f"duplicate skill id {name!r}: {names[name].relative_to(ROOT)} and "
                    f"{path.relative_to(ROOT)}"
                )
            else:
                names[name] = path


def check_commands(errors: list[str]) -> None:
    bd_command = shutil.which("bd") or shutil.which("bd.cmd")
    if bd_command is None:
        errors.append("required command not found: bd")
        return
    result = subprocess.run(
        [bd_command, "status"], cwd=ROOT, capture_output=True, text=True, check=False
    )
    if result.returncode:
        errors.append(f"bd status failed: {result.stderr.strip() or result.stdout.strip()}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--skip-beads",
        action="store_true",
        help="skip the local Beads CLI check for static CI environments",
    )
    args = parser.parse_args()
    errors: list[str] = []
    check_files(errors)
    check_agents(errors)
    check_skills(errors)
    if not args.skip_beads:
        check_commands(errors)

    optional = {name: bool(shutil.which(name)) for name in ("copilot", "gh", "claude", "codex")}
    print("Agent harness validation")
    print(f"  agents: {len(list((ROOT / '.github' / 'agents').glob('*.agent.md')))} discovered")
    print(f"  required agents: {'PASS' if not (REQUIRED_AGENTS - {frontmatter(p).get('name', '').lower() for p in (ROOT / '.github' / 'agents').glob('*.agent.md')}) else 'FAIL'}")
    beads_result = "SKIPPED" if args.skip_beads else ("PASS" if not any("bd " in error for error in errors) else "FAIL")
    print(f"  Beads: {beads_result}")
    print("  optional CLIs: " + ", ".join(f"{name}={'present' if value else 'missing'}" for name, value in optional.items()))
    if errors:
        print("FAIL")
        print("\n".join(f"- {error}" for error in errors))
        return 1
    print("PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
