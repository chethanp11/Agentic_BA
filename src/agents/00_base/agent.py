"""Base agent interface."""


class BaseAgent:
    def run(self, payload: dict) -> dict:
        return payload

