"""Minimal requests-based client for Gorilla's v1 API."""

from __future__ import annotations

import os
import time
import logging
from typing import Any

import requests
from dotenv import dotenv_values, load_dotenv


logger = logging.getLogger(__name__)


class GorillaAPIError(RuntimeError):
    """An HTTP or API-level error returned by Gorilla."""

    def __init__(self, status_code: int, payload: Any) -> None:
        code = payload.get("code", "unknown") if isinstance(payload, dict) else "unknown"
        message = payload.get("error", str(payload)) if isinstance(payload, dict) else str(payload)
        super().__init__(f"Gorilla {status_code} ({code}): {message}")
        self.status_code = status_code
        self.payload = payload
        self.code = code


def _api_key_from_environment() -> str:
    """Read the documented key name, with compatibility for the existing .env key."""
    load_dotenv()
    values = dotenv_values()
    api_key = os.getenv("GORILLA_API_KEY") or values.get("GORILLA_API_KEY")
    api_key = api_key or os.getenv("gorilla-key") or values.get("gorilla-key")
    if not api_key:
        raise RuntimeError("Set GORILLA_API_KEY in .env before using the client")
    return api_key


class GorillaClient:
    """Client for search, polling, and billing-status endpoints."""

    def __init__(self, api_key: str | None = None, base_url: str | None = None) -> None:
        self.base_url = (base_url or os.getenv("GORILLA_BASE_URL") or "https://usegorilla.app/v1").rstrip("/")
        self.session = requests.Session()
        self.session.headers.update({
            "x-api-key": api_key or _api_key_from_environment(),
            "Accept": "application/json",
        })

    def _request(self, method: str, path: str, **kwargs: Any) -> dict[str, Any]:
        url = f"{self.base_url}/{path.lstrip('/')}"
        logger.debug("HTTP %s %s", method, url)
        response = self.session.request(method, url, timeout=30, **kwargs)
        try:
            payload = response.json()
        except ValueError:
            payload = {"error": response.text or "Non-JSON response"}
        if not response.ok:
            raise GorillaAPIError(response.status_code, payload)
        logger.debug("HTTP %s %s returned %s", method, path, response.status_code)
        return payload

    def start_search(self, request: dict[str, Any]) -> dict[str, Any]:
        """Start a search; this reserves credits and returns a search_id."""
        logger.info("Starting Gorilla search: query=%r", request.get("query"))
        result = self._request("POST", "/v2-search-stream", json=request)
        logger.info("Search started: search_id=%s status=%s", result.get("search_id"), result.get("status"))
        return result

    def get_search(self, search_id: str) -> dict[str, Any]:
        """Poll one search state. GET polling is safe to repeat."""
        return self._request("GET", "/v2-search-stream", params={"id": search_id})

    def wait_for_search(
        self,
        search_id: str,
        interval_seconds: float = 1.5,
        timeout_seconds: float = 300,
    ) -> dict[str, Any]:
        """Poll until Gorilla reports completed/failed or the local timeout expires."""
        deadline = time.monotonic() + timeout_seconds
        poll_number = 0
        while time.monotonic() < deadline:
            poll_number += 1
            result = self.get_search(search_id)
            logger.info(
                "Poll %d: search_id=%s status=%s results=%s done_sources=%s",
                poll_number,
                search_id,
                result.get("status"),
                result.get("total", 0),
                len(result.get("done_sources", [])),
            )
            if result.get("status") != "running":
                logger.info("Search finished: search_id=%s status=%s", search_id, result.get("status"))
                return result
            time.sleep(interval_seconds)
        raise TimeoutError(f"Gorilla search {search_id} did not finish within {timeout_seconds:g}s")

    def billing_status(self) -> dict[str, Any]:
        """Return plan, key state, and current credit balance."""
        return self._request("GET", "/billing-status")
