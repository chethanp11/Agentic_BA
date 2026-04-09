"""Base tool scaffold."""


class BaseTool:
    def run(self, payload: dict) -> dict:
        return payload

