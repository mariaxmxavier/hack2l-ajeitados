"""Search and request a structured data object in the completed poll."""

import json

from gorilla_api import GorillaClient


REQUEST = {
    "query": "tired of meal planning apps; meal planner alternative",
    "since": "30d",
    "limit": 50,
    "custom_schema": {
        "type": "object",
        "properties": {
            "pain_points": {"type": "array", "items": {"type": "string"}},
            "summary": {"type": "string"},
        },
    },
}


def main() -> None:
    client = GorillaClient()
    started = client.start_search(REQUEST)
    completed = client.wait_for_search(started["search_id"])
    print(json.dumps(completed.get("data", {}), indent=2, ensure_ascii=True))


if __name__ == "__main__":
    main()
