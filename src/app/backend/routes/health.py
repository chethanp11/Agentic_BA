"""Health route scaffold."""


def health_check() -> dict:
    return {"status": "ok"}

