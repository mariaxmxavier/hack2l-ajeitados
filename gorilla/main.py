"""Run a Gorilla search using a request JSON template."""

from __future__ import annotations

import json
import logging
import os
import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from gorilla_api import GorillaAPIError, GorillaClient
from pipeline_gorila import run_pipeline


ROOT_DIR = Path(__file__).resolve().parent
REQUEST_FILE = ROOT_DIR / "templates" / "request" / "request_search.json"
PIPELINE_REQUEST_FILE = ROOT_DIR / "request.json"
OUTPUT_DIR = ROOT_DIR / "output"


def configure_logging() -> None:
    """Configure console logging; default verbosity is DEBUG."""
    level_name = os.getenv("GORILLA_LOG_LEVEL", "DEBUG").upper()
    level = getattr(logging, level_name, logging.INFO)
    logging.basicConfig(level=level, format="%(asctime)s %(levelname)s %(name)s: %(message)s")


def load_json_object(path: Path) -> dict[str, Any]:
    """Load a JSON object from a file."""
    with path.open(encoding="utf-8") as file:
        request = json.load(file)
    if not isinstance(request, dict):
        raise ValueError(f"JSON file must contain an object: {path}")
    return request


def validate_request(request: dict[str, Any], template: dict[str, Any]) -> None:
    """Validate the request using Gorilla's required and optional fields."""
    allowed_keys = set(template)
    extra_keys = set(request) - allowed_keys
    if extra_keys:
        raise ValueError(f"Request contains unsupported fields: {sorted(extra_keys)}")
    if "query" not in request:
        raise ValueError("Request is missing required field: query")
    if not isinstance(request.get("query"), str) or not request["query"].strip():
        raise ValueError("Request query must be a non-empty string")
    if len(request["query"]) > 500:
        raise ValueError("Request query must not exceed 500 characters")
    if "mode" in request and request["mode"] not in {"ranked", "raw"}:
        raise ValueError("Request mode must be 'ranked' or 'raw'")
    if "limit" in request and (not isinstance(request["limit"], int) or not 1 <= request["limit"] <= 200):
        raise ValueError("Request limit must be an integer from 1 to 200")
    if "sources" in request and not isinstance(request["sources"], list):
        raise ValueError("Request sources must be an array")
    if "channels" in request and not isinstance(request["channels"], dict):
        raise ValueError("Request channels must be an object")


def save_output(request: dict[str, Any], result: dict[str, Any]) -> Path:
    """Save the API response with a reference to the documentation template."""
    OUTPUT_DIR.mkdir(exist_ok=True)
    search_id = result.get("search_id", "unknown-search")
    try:
        request_reference = str(PIPELINE_REQUEST_FILE.relative_to(ROOT_DIR))
    except ValueError:
        request_reference = str(PIPELINE_REQUEST_FILE)
    output = {
        "retrieved_at": datetime.now(timezone.utc).isoformat(),
        "search_id": search_id,
        "request_file": request_reference,
        "template_file": str(REQUEST_FILE.relative_to(ROOT_DIR)),
        "request": request,
        "response": result,
    }
    output_file = OUTPUT_DIR / f"search_{search_id}.json"
    output_file.write_text(json.dumps(output, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")
    (OUTPUT_DIR / "latest.json").write_text(json.dumps(output, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")
    return output_file


def main() -> None:
    global PIPELINE_REQUEST_FILE, OUTPUT_DIR
    parser = argparse.ArgumentParser(description="Executa busca Gorilla e gera bundle PKF.")
    parser.add_argument("--request", type=Path, default=PIPELINE_REQUEST_FILE, help="Arquivo JSON de entrada.")
    parser.add_argument("--response", type=Path, help="Resposta concluída já existente; evita nova chamada à API.")
    parser.add_argument("--output", type=Path, default=ROOT_DIR / "output" / "pipeline_gorila")
    parser.add_argument("--raw-output-dir", type=Path, default=OUTPUT_DIR, help="Diretório para resposta bruta.")
    args = parser.parse_args()
    configure_logging()
    logger = logging.getLogger(__name__)
    logger.debug("Loading request file: %s", args.request)
    request = load_json_object(args.request)
    logger.debug("Loading reference template: %s", REQUEST_FILE)
    template = load_json_object(REQUEST_FILE)
    logger.debug("Validating request fields: %s", sorted(request))
    validate_request(request, template)
    logger.debug("Request passed validation; optional fields may be omitted")
    if args.response:
        result = load_json_object(args.response)
        if "response" in result and isinstance(result["response"], dict):
            result = result["response"]
        search_id = result.get("search_id", "offline")
    else:
        client = GorillaClient()
        started = client.start_search(request)
        search_id = started["search_id"]
        result = client.wait_for_search(search_id)
    old_request_file, old_output_dir = PIPELINE_REQUEST_FILE, OUTPUT_DIR
    PIPELINE_REQUEST_FILE, OUTPUT_DIR = args.request.resolve(), args.raw_output_dir.resolve()
    try:
        output_file = save_output(request, result)
    finally:
        PIPELINE_REQUEST_FILE, OUTPUT_DIR = old_request_file, old_output_dir
    pipeline_result = run_pipeline(result, args.output)
    logger.debug("RAW response saved to: %s", output_file)
    print(json.dumps({"search_id": search_id, "status": result.get("status"), "raw_output": str(output_file), "pkf_bundle": pipeline_result.pkf_bundle, "okf_bundle": pipeline_result.okf_bundle, "database_id": pipeline_result.database_id, "quality_gate": pipeline_result.validation}, indent=2))


if __name__ == "__main__":
    try:
        main()
    except (GorillaAPIError, KeyError, TimeoutError, ValueError, RuntimeError) as error:
        print(f"Gorilla request failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
