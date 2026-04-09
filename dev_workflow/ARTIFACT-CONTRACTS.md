# Artifact Contracts

This file defines the basic artifact ownership model for the workflow layer.

## Core repository artifacts

### `intent/`

- `product-intent.md`: human source of truth for desired product direction.
- `feedback.md`: human feedback and review notes.
- `gaps.md`: system-detected gaps and follow-up items.

### `plan/`

- `design-update.md`: what design changes should happen next.
- `code-update.md`: what implementation changes should happen next.
- `test-update.md`: what test or validation changes should happen next.

### `design/`

- `system-design.md`: system behavior and lifecycle.
- `architecture.md`: component and interface boundaries.
- `ux-flows.md`: user and operator workflows.
- `acceptance-criteria.md`: what correct behavior means.

### `src/`

- Implementation source.
- Application docs that explain implemented behavior.

### `tests/`

- Traceability notes.
- Test plans.
- Validation assets.
- Test suites.

### `dev_log/`

- `design-update-log.md`
- `code-update-log.md`
- `test-update-log.md`
- `validation-results.md`

## Contract rules

- `intent/` is read before planning.
- `plan/` is written before design or code changes.
- `design/` is updated before implementation when behavior changes.
- `tests/` are updated when behavior, acceptance, or contracts change.
- `dev_log/` records what actually happened and what was validated.

## Write behavior

- `plan/*` files are overwritten each iteration.
- `design/*`, `src/*`, `tests/*`, and `dev_log/*` are updated only when their content actually changes.
- Validation evidence should never be invented after the fact.

