# Validation Results

## Purpose
Record actual validation evidence for the active version or iteration.

## Intent linkage
- Note whether validation failures indicate a bad implementation, bad design, or bad interpretation of intent.

## Entry template
- ID: `DEV-001`
- Date: `[YYYY-MM-DD]`
- Scope: `[version or iteration]`
- Validation activity: `[unit / integration / e2e / regression / smoke / manual review]`
- Commands or method: `[how validation was performed]`
- Result: `[pass / fail / partial]`
- Findings: `[key outcomes or failures]`
- Classification of failures: `[design defect / implementation defect / test defect / eval gap / environment issue / none]`
- Linked IDs: `[ACC-xxx, TEST-xxx, FB-xxx, DEV-xxx]`
- Intent sources: `[INT-PROD-xxx, INT-FB-xxx, intent/gaps.md]`
- Follow-up: `[required fix, rerun, or backlog action]`

## Entries
- `DEV-001` | `2026-04-07` | `repo contract migration` | `manual review` | Reviewed the updated repository guidance, workflow prompts, smoke checklist, and active log set after removing the out-of-scope iteration-status file and retiring the old log layout. | `pass` | The repository now reflects the four-file `dev_log/` model, and no live guidance points to retired filenames. | `none` | `REQ-001`, `REQ-004`, `DEV-001` | `INT-PROD-*`, `INT-FB-*` | No further follow-up is required for the contract migration.
- `DEV-002` | `2026-04-07` | `design-and-test chain review` | `manual review` | Reviewed the updated AGENTS contract, README, `.github/copilot-instructions.md`, design files, traceability, test plan, smoke checklist, and workflow prompts after introducing the explicit UX-flow and acceptance-criteria chain. | `pass` | The repository now makes UX flows and acceptance criteria first-class design inputs, and the traceability/test guidance maps each criterion to a test path. | `none` | `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`, `ACC-001`, `ACC-002`, `ACC-003`, `ACC-004`, `TEST-001`, `TEST-002`, `TEST-003`, `TEST-004`, `DEV-002` | `INT-PROD-*`, `INT-FB-*`, `intent/gaps.md` | No additional follow-up is required for the contract update.
- `DEV-003` | `2026-04-07` | `numbered inventory review` | `manual review` | Reviewed the top-level README, AGENTS contract, and `.github/copilot-instructions.md` after numbering the folder and file inventories in consistent order. | `pass` | The repo inventories are now numbered instead of mixed bullets, and the ordering is consistent across the top-level docs. | `none` | `DEV-003` | `INT-PROD-*`, `INT-FB-*` | No follow-up is required.
- `DEV-004` | `2026-04-07` | `design split review` | `manual review` | Reviewed the four design docs after splitting the combined draft into system, architecture, UX flow, and acceptance layers. | `pass` | The content is separated by responsibility with reduced repetition across the four canonical design files. | `none` | `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`, `ACC-001`, `ACC-002`, `ACC-003`, `ACC-004`, `ARCH-001`, `ARCH-002`, `ARCH-003`, `ARCH-004`, `ARCH-005`, `ARCH-006`, `ARCH-007`, `ARCH-008`, `ARCH-009`, `ARCH-010`, `ARCH-011`, `ARCH-012`, `DEV-004` | `INT-PROD-*`, `INT-FB-*` | No additional follow-up is required.
- `DEV-005` | `2026-04-07` | `design translation review` | `manual review` | Reviewed the four design docs after adding the remaining combined-draft sections for the knowledge model, source intake, agents, runtime services, and implementation plan. | `pass` | The design docs now cover the full combined draft, including sections 4, 5, 6, 9, and 10, and the repo contract now states that design-layer prefixes are reserved outside the design docs. | `none` | `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`, `ACC-001`, `ACC-002`, `ACC-003`, `ACC-004`, `ARCH-001`, `ARCH-002`, `ARCH-003`, `ARCH-004`, `ARCH-005`, `ARCH-006`, `ARCH-007`, `ARCH-008`, `ARCH-009`, `ARCH-010`, `ARCH-011`, `ARCH-012`, `DEV-005` | `INT-PROD-*`, `INT-FB-*` | No additional follow-up is required.
- `DEV-006` | `2026-04-09` | `workflow scaffold validation` | `manual review` | Reviewed the newly added `dev_workflow/` scaffold, including the canonical entry prompts, control docs, registry, templates, and orchestration notes. | `pass` | The workflow scaffold is internally consistent, uses the requested `intent-toplan.md` and `00-plan-todesign.md` entry points, and does not introduce illegal path or prefix assumptions. | `none` | `DEV-006` | `AGENTS.md`, `.github/copilot-instructions.md` | No follow-up is required for the scaffold pass.
- `DEV-007` | `2026-04-10` | `workflow tree pruning review` | `manual review` | Reviewed the pruned `dev_workflow/` tree after removing compatibility root prompts and extra template files, then verified the remaining file set with `rg --files dev_workflow` and `git diff --check`. | `pass` | The directory now matches the requested tree shape, stale references were removed, and the remaining prompts, registry, templates, and orchestrator docs are aligned to the exact structure. | `none` | `DEV-007` | `AGENTS.md`, `.github/copilot-instructions.md` | No follow-up is required for the tree match.
- `DEV-008` | `2026-04-10` | `workflow skills compatibility review` | `manual review` | Reviewed the new skill set, the updated workflow prompts, the registry, `rg --files .github/skills`, `rg -n` checks for stale skill names, and `git diff --check`. | `pass` | The old fragmented skills were removed, the new workflow-aligned skills are present, and the prompt nodes reference the new skills with `$` links. | `none` | `DEV-008` | `AGENTS.md`, `.github/copilot-instructions.md` | No follow-up is required for the skill compatibility pass.
