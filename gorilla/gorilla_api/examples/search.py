"""Start and fully poll one Gorilla search.

Run from the repository root after installing requirements:
    python -m gorilla_api.examples.search
"""

import json

from gorilla_api import GorillaAPIError, GorillaClient


REQUEST = {
    "query": "people looking for an AI meal planner",
    "since": "7d",
    "limit": 50,
    "mode": "ranked",
    "sources": ["reddit", "twitter", "bluesky", "linkedin", "youtube"],
}


def main() -> None:
    client = GorillaClient()
    try:
        started = client.start_search(REQUEST)
        search_id = started["search_id"]
        result = client.wait_for_search(search_id)
        print(json.dumps(result, indent=2, ensure_ascii=True))
    except (GorillaAPIError, KeyError, TimeoutError) as error:
        print(f"Search failed: {error}")


if __name__ == "__main__":
    main()
