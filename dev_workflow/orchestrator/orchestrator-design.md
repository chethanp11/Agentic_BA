# Orchestrator Design

The orchestrator is the control layer that decides which workflow node runs next.

## Basic responsibilities

- Load the current state.
- Choose the next node based on the state and available artifacts.
- Prevent illegal jumps, such as implementation before planning.
- Record node transitions.
- Stop the run when a blocker or terminal state is reached.

## First-pass orchestration path

1. `intent-toplan.md`
2. `00-plan-todesign.md`
3. implementation, tests, review, validation, fix, closeout as needed

## Orchestration rules

- Only one active workflow node should own the next mutation.
- The orchestrator should prefer the smallest next step that advances the state.
- If a node cannot complete safely, the orchestrator should route to `BLOCKED`.

