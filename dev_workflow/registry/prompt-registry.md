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

| Node ID | Node name | Stage | Purpose | Preferred skill | Files written |
| --- | --- | --- | --- | --- | --- |
| `00-01` | `classify-intent` | intake | Interpret the latest human request into a workable change theme. | `core-system-thinking`, `prompt-engineering-advanced`, `governance-discipline` | `plan/design-update.md`, `plan/code-update.md`, `plan/test-update.md` |
| `00-02` | `build-iteration-plan` | intake | Convert intent and current repo state into the next iteration plan. | `artifact-data-management`, `orchestration-workflow-engineering`, `meta-continuous-improvement` | `plan/design-update.md`, `plan/code-update.md`, `plan/test-update.md` |
| `01-10` | `derive-design-updates` | design | Turn the plan into concrete design changes. | `design-architecture`, `core-system-thinking`, `governance-discipline` | `design/system-design.md`, `design/architecture.md`, `design/ux-flows.md`, `design/acceptance-criteria.md` |
| `01-11` | `update-design-docs` | design | Apply the design changes and record the decision. | `design-architecture`, `artifact-data-management` | `design/*`, `dev_log/design-update-log.md` |
| `02-20` | `scope-code-changes` | implementation | Define the smallest safe implementation scope. | `design-architecture`, `coding-implementation`, `orchestrator-engineering` | `plan/code-update.md` |
| `02-21` | `implement-code` | implementation | Apply the scoped source changes. | `coding-implementation`, `artifact-data-management` | `src/*`, `src/docs/*` |
| `03-31` | `write-unit-tests` | tests | Add tests that prove the changed behavior. | `testing-validation`, `review-quality-control` | `tests/*` |
| `04-40` | `review-design-vs-code` | review | Compare changed code to the active design. | `review-quality-control`, `design-architecture` | review notes or fix tasks |
| `05-50` | `run-validation-checks` | validation | Run the checks that prove the scoped change. | `testing-validation`, `debugging-fix-loops` | `dev_log/validation-results.md` |
| `05-54` | `record-validation-evidence` | validation | Record what was actually run and what passed or failed. | `artifact-data-management` | `dev_log/validation-results.md` |
| `06-60` | `route-fix-target` | fix-loop | Classify failures and send them to the correct repair path. | `debugging-fix-loops`, `governance-discipline` | fix tasks or blockers |
| `06-62` | `fix-code-issues` | fix-loop | Repair implementation defects from validation or review. | `debugging-fix-loops`, `coding-implementation` | `src/*`, `tests/*` |
| `07-72` | `write-closeout-log` | closeout | Summarize the finished iteration and carry-forward items. | `artifact-data-management`, `meta-continuous-improvement` | `dev_log/*` as needed |

## Expansion note

This registry is intentionally small for the first pass. New nodes can be added later without changing the structure above.
