# Context Passing Rules

These rules define what each workflow node should pass forward.

## Rules

- Pass only the artifacts needed for the next node.
- Prefer explicit file references over broad repo dumps.
- Preserve unresolved questions as open items.
- Preserve blockers as blockers, not as implied success.
- Keep outputs short enough for another node or agent to consume directly.

## Recommended context shape

- current state
- current iteration goal
- relevant files read
- relevant files written
- open questions
- blockers
- next action

