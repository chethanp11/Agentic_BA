"""Shared run state scaffold."""

from dataclasses import dataclass, field


@dataclass
class RunState:
    run_id: str = ""
    status: str = "pending"
    metadata: dict = field(default_factory=dict)

