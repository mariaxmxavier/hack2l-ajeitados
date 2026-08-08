# Gorilla API test client

Small Python examples for the Gorilla API documented at https://usegorilla.app/docs/#endpoints.

## Structure

- `gorilla_api/client.py`: authenticated client for search, polling, and billing.
- `gorilla_api/examples/search.py`: ranked search with the full POST + GET flow.
- `gorilla_api/examples/custom_schema_search.py`: search with a structured `data` response.
- `gorilla_api/examples/billing.py`: credit balance and plan.
- `main.py`: file-driven search plus pipeline PKF using the root `request.json`.
- `pipeline_gorila/`: deterministic investigation, quality gate and PKF/OKF bundle writer.
- `prompts/fraud_payment_search.md`: full editorial prompt; the API request uses its concise version because Gorilla limits `query` to 500 characters.
- `templates/request/`: request JSON shapes from the API docs.
- `templates/response/`: response and error JSON shapes from the API docs.
- `output/`: generated responses with request/template references.

## Configuration

Install dependencies with `pip install -r requirements.txt`.

The client reads `GORILLA_API_KEY` and optionally `GORILLA_BASE_URL` from `.env`. The current local `.env` uses `gorilla-key`; the client accepts that name for compatibility, but `GORILLA_API_KEY` is the documented/conventional name for future use. Never commit `.env` or expose the key in frontend code.

## Examples

From the repository root:

```text
python -m gorilla_api.examples.search
python -m gorilla_api.examples.custom_schema_search
python -m gorilla_api.examples.billing
python main.py
```

For a completed response already saved locally, run without spending API credits:

```text
python main.py --response output/latest.json
```

The command preserves the raw response in `output/search_<id>.json` and writes
the validated bundle to `output/pipeline_gorila/cases/<case_id>/`. The bundle
uses Markdown documents with YAML frontmatter and includes `index.md`, scam,
evidence, entity, pattern, `pkf.json` manifest and `state.json` files. `index.jsonl` is the small
case index consumed by a later retriever. This is the PKF boundary; database
embeddings and LangGraph retrieval remain outside `gorilla/`.

These examples make real API calls when run. They are intentionally not executed during setup.

`main.py` reads `request.json`, validates its fields against `templates/request/request_search.json`, then saves the completed response to `output/search_<search_id>.json` and `output/latest.json`.

The pipeline logs detailed progress at `DEBUG` by default. Set `GORILLA_LOG_LEVEL=DEBUG`, `INFO`, `WARNING`, or `ERROR` in `.env` to control verbosity. Logs include file loading, validation, HTTP requests, polling progress, and output saving, but never print the API key.

The request template is documentation and validation reference only. It is not sent to Gorilla and is not copied into the response output; generated files keep only `template_file` as a reference. Gorilla returns `results` sorted by `result_score` descending. In `ranked` mode this is the relevance ranking; `tier` is also available for hot/warm/cold filtering.

## API notes

`POST /v1/v2-search-stream` starts a search and returns a `search_id`. Poll `GET /v1/v2-search-stream?id=...` about every 1.5 seconds until `status` is `completed` or `failed`. A source-level failure appears in `errors` while the overall search can still complete. POST is not idempotent, so do not blindly retry it after a 5xx response.
