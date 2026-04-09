"""Retry policy scaffold."""


def should_retry(attempt: int) -> bool:
    return attempt < 1

