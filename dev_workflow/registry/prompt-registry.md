# Prompt Registry

This registry tracks the basic prompt nodes in the workflow scaffold.

## Node format

- Node ID
- Node name
- Stage
- Purpose
- Required inputs
- Files read
- Files written
- Entry conditions
- Exit conditions
- Failure conditions
- Next nodes

## Registered nodes

| Node ID | Node name | Stage | Purpose | Files written |
| --- | --- | --- | --- | --- |
| `00-01` | `classify-intent` | intake | Interpret the latest human request into a workable change theme. | `plan/design-update.md`, `plan/code-update.md`, `plan/test-update.md` |
| `00-02` | `build-iteration-plan` | intake | Convert intent and current repo state into the next iteration plan. | `plan/design-update.md`, `plan/code-update.md`, `plan/test-update.md` |
| `01-10` | `derive-design-updates` | design | Turn the plan into concrete design changes. | `design/system-design.md`, `design/architecture.md`, `design/ux-flows.md`, `design/acceptance-criteria.md` |
| `01-11` | `update-design-docs` | design | Apply the design changes and record the decision. | `design/*`, `dev_log/design-update-log.md` |
| `02-20` | `scope-code-changes` | implementation | Define the smallest safe implementation scope. | `plan/code-update.md` |
| `02-21` | `implement-code` | implementation | Apply the scoped source changes. | `src/*`, `src/docs/*` |
| `03-31` | `write-unit-tests` | tests | Add tests that prove the changed behavior. | `tests/*` |
| `04-40` | `review-design-vs-code` | review | Compare changed code to the active design. | review notes or fix tasks |
| `05-50` | `run-validation-checks` | validation | Run the checks that prove the scoped change. | `dev_log/validation-results.md` |
| `05-54` | `record-validation-evidence` | validation | Record what was actually run and what passed or failed. | `dev_log/validation-results.md` |
| `06-60` | `route-fix-target` | fix-loop | Classify failures and send them to the correct repair path. | fix tasks or blockers |
| `06-62` | `fix-code-issues` | fix-loop | Repair implementation defects from validation or review. | `src/*`, `tests/*` |
| `07-72` | `write-closeout-log` | closeout | Summarize the finished iteration and carry-forward items. | `dev_log/*` as needed |

## Expansion note

This registry is intentionally small for the first pass. New nodes can be added later without changing the structure above.

