"""Review checkpoint routes."""


def approve_checkpoint() -> dict:
    return {"approved": True}


def reject_checkpoint() -> dict:
    return {"rejected": True}

