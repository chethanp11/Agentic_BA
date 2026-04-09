# Test Update Log

## Purpose
Record meaningful test changes that were actually applied.

## Intent linkage
- Capture the validation coverage that accompanies design and code changes.

## Entry template
- ID: `DEV-001`
- Date: `[YYYY-MM-DD]`
- Change: `[what test changed]`
- Reason: `[why it changed]`
- Linked IDs: `[REQ-xxx, ACC-xxx, ARCH-xxx, TEST-xxx, FB-xxx, DEV-xxx]`
- Intent sources: `[INT-PROD-xxx, INT-FB-xxx, intent/gaps.md]`

## Entries
- `DEV-002` | `2026-04-07` | `test` | Updated the test planning guidance so every test traces back to a UX flow and acceptance criteria, and adjusted the traceability expectations to surface flow-to-criteria-to-test coverage. | The new design chain requires tests to be derived from acceptance criteria rather than invented independently. | `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`, `ACC-001`, `ACC-002`, `ACC-003`, `ACC-004`, `TEST-001`, `TEST-002`, `TEST-003`, `TEST-004`, `DEV-002` | `INT-PROD-*`, `INT-FB-*`, `intent/gaps.md`
- `DEV-006` | `2026-04-09` | `no test changes` | This iteration only added the workflow scaffold under `dev_workflow/`; no `tests/` artifacts were required. | The requested work was limited to workflow structure and control docs. | `DEV-006` | `AGENTS.md`, `.github/copilot-instructions.md`
