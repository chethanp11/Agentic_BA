"""Checkpoint create and restore scaffold."""


def create_checkpoint(state: dict) -> dict:
    return dict(state)


def restore_checkpoint(checkpoint: dict) -> dict:
    return dict(checkpoint)

