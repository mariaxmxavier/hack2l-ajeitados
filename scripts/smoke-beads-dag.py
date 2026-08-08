#!/usr/bin/env python3
"""Exercise Beads dependency blocking and readiness, then clean up."""

from __future__ import annotations

import json
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BD = shutil.which("bd") or shutil.which("bd.cmd")
PREFIX = "HARNESS-SMOKE-TEST"


def run(*args: str) -> str:
    if BD is None:
        raise RuntimeError("bd command not found")
    result = subprocess.run(
        [BD, *args], cwd=ROOT, capture_output=True, text=True, check=False
    )
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip())
    return result.stdout.strip()


def create(label: str) -> str:
    output = run(
        "create",
        "--silent",
        f"--title={PREFIX}-{label}",
        "--description=Temporary harness dependency smoke test.",
        "--type=task",
        "--priority=4",
    )
    return output.splitlines()[-1].strip()


def ready_ids() -> set[str]:
    payload = json.loads(run("ready", "--json"))
    return {item["id"] for item in payload}


def assert_state(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def main() -> int:
    created: list[str] = []
    try:
        a = create("A")
        b = create("B")
        c = create("C")
        created.extend((a, b, c))
        run("dep", "add", c, a)
        run("dep", "add", c, b)

        ready = ready_ids()
        assert_state(a in ready and b in ready and c not in ready, "initial DAG state invalid")

        run("close", a, "--reason=HARNESS-SMOKE-TEST A complete")
        ready = ready_ids()
        assert_state(b in ready and c not in ready, "C became ready before B completed")

        run("close", b, "--reason=HARNESS-SMOKE-TEST B complete")
        ready = ready_ids()
        assert_state(c in ready, "C did not become ready after A and B completed")

        run("close", c, "--reason=HARNESS-SMOKE-TEST C complete")
        print(f"PASS: Beads DAG {a} + {b} -> {c}")
        return 0
    except (AssertionError, RuntimeError, json.JSONDecodeError) as exc:
        print(f"FAIL: {exc}", file=sys.stderr)
        return 1
    finally:
        # Cleanup is idempotent; already-closed smoke issues remain closed.
        for issue in created:
            run_result = subprocess.run(
                [BD, "close", issue, "--reason=HARNESS-SMOKE-TEST cleanup"],
                cwd=ROOT,
                capture_output=True,
                text=True,
                check=False,
            ) if BD else None
            del run_result


if __name__ == "__main__":
    sys.exit(main())