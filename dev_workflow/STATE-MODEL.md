# Workflow State Model

This file defines the basic state progression for the workflow layer.

## States

- `INIT`
- `INTENT_READY`
- `PLAN_READY`
- `DESIGN_READY`
- `IMPLEMENTATION_READY`
- `TEST_READY`
- `REVIEW_READY`
- `VALIDATION_READY`
- `FIX_READY`
- `CLOSEOUT_READY`
- `BLOCKED`
- `CLOSED`

## State meaning

- `INIT`: no current iteration has been formed yet.
- `INTENT_READY`: the latest intent has been read and interpreted.
- `PLAN_READY`: `plan/*` files exist for the iteration.
- `DESIGN_READY`: design artifacts reflect the approved plan.
- `IMPLEMENTATION_READY`: the scope is explicit enough to code.
- `TEST_READY`: test updates are scoped and available.
- `REVIEW_READY`: implementation is ready for self-review.
- `VALIDATION_READY`: the scoped work is ready to be proven.
- `FIX_READY`: validation or review found issues that need repair.
- `CLOSEOUT_READY`: the iteration is complete enough to summarize.
- `BLOCKED`: a missing input, conflict, or environment issue prevents safe progress.
- `CLOSED`: the iteration is done and the next handoff is recorded.

## Transition rules

- `INIT` -> `INTENT_READY` after reading current intent.
- `INTENT_READY` -> `PLAN_READY` after `plan/*` is written.
- `PLAN_READY` -> `DESIGN_READY` after design updates are written.
- `DESIGN_READY` -> `IMPLEMENTATION_READY` after scope is approved.
- `IMPLEMENTATION_READY` -> `TEST_READY` when code work needs test coverage.
- `TEST_READY` -> `REVIEW_READY` after implementation and tests are in place.
- `REVIEW_READY` -> `VALIDATION_READY` when the diff is ready to prove.
- `VALIDATION_READY` -> `FIX_READY` if validation fails.
- `VALIDATION_READY` -> `CLOSEOUT_READY` if validation passes.
- `FIX_READY` -> `VALIDATION_READY` after targeted repair and recheck.
- `CLOSEOUT_READY` -> `CLOSED` once handoff notes are recorded.
- Any state -> `BLOCKED` when a required input is missing or contradictory.

## State rules

- Do not move to implementation without a plan.
- Do not move to validation without a reviewable change set.
- Do not close out without evidence of what changed.
- Do not mask a blocker as a normal transition.

