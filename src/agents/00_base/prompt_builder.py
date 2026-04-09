"""Prompt builder scaffold."""


def build_prompt(name: str, payload: dict) -> str:
    return f"{name}: {payload}"

