"""Read Gorilla plan and credit balance."""

import json

from gorilla_api import GorillaAPIError, GorillaClient


def main() -> None:
    try:
        print(json.dumps(GorillaClient().billing_status(), indent=2, ensure_ascii=True))
    except GorillaAPIError as error:
        print(f"Billing request failed: {error}")


if __name__ == "__main__":
    main()
