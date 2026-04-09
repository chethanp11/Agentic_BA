"""Error contracts scaffold."""


def build_error(code: str, message: str) -> dict:
    return {"code": code, "message": message}

