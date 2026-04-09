# ABA Acceptance Criteria

This file is system-generated from intent and iteration workflow. Do not edit directly.

## Purpose

This document defines the acceptance criteria for Agentic Business Analytics (ABA). Every criterion in this file is derived from `intent/product-intent.md` and is intended to be measurable, verifiable, and testable as a pass or fail condition.

## Intent Traceability Coverage

| Acceptance section | Product intent sections covered |
| --- | --- |
| Core System Behavior | 1, 10, 11, 17, 19 |
| Orchestration and Flow | 2, 11, 13, 14, 17, 18 |
| Agent Design | 3, 11, 12, 18 |
| Context and Memory | 4, 11, 16 |
| Execution and Data | 5, 15, 16, 17 |
| Validation and Governance | 6, 11, 17, 18 |
| Observability and Traceability | 7, 11, 14, 15, 18 |
| UI and Analyst Experience | 8, 10, 12, 13, 14, 18, 19 |
| Evaluation and Quality | 9, 16, 17, 18, 19 |

## Enterprise Traceability Rules

- every acceptance criterion in this file must map to one or more product-intent sections
- validation, governance, observability, execution, and UI coverage must remain represented in the active acceptance set
- any future criterion that cannot be traced to product intent is non-compliant

## Core System Behavior

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| ABA must operate as an analytics execution system and not as a chatbot | a run is expressed as staged structured state transitions and outputs, not as unbounded conversational turns | the system exposes primary free-form chat behavior or relies on chat replies as the control model | 1.1, 1.2, 1.3, 1.9 |
| ABA must execute the full analytics lifecycle from intake framing through insight generation under one controlled run model | the system can complete a run containing intake, context, hypothesis, plan, execution, and insight stages with explicit stage outputs | one or more required lifecycle stages are absent, skipped without rule, or not represented in run state | 1.3, 2.11, 2.13 |
| ABA must keep reasoning, control, and execution as separate concerns | reasoning outputs, orchestration decisions, and tool execution are attributable to distinct system layers or components | a reasoning component directly controls stage transitions or directly executes tools | 1.4, 5.46 |
| ABA must support ambiguous and open-ended problems without collapsing them into unsupported final answers | ambiguous or incomplete intake results in clarification, flagged assumptions, or governed continuation with explicit risk markers | ambiguous intake is silently treated as complete and produces unsupported downstream conclusions | 1.5, 10.103, 10.104 |
| ABA must produce structured machine-readable outputs at each stage | each stage output conforms to a defined schema with required fields and validation status | any required stage produces only unstructured free text or missing required fields | 1.9, 11.111, 11.112, 11.114 |
| ABA must provide repeatable behavior for the same approved inputs, configuration, and accessible data state | repeated runs with the same input, policy, tool versions, and data snapshot produce traceably consistent stage outputs or explicitly logged non-deterministic deltas | repeated runs produce materially different outputs without recorded cause or trace | 1.10, 5.53, 6.70 |
| ABA must enforce system boundaries for unsupported actions | unsupported actions such as unvalidated execution, hidden state mutation, or publication of unsupported insights are blocked with structured reason codes | the system performs blocked actions or fails without explicit reason | 1.8, 5.55, 6.67, 17.179 |
| ABA must support configurable role- or audience-aware presentation without changing evidence standards | output depth or presentation may vary by configured role while linked evidence, validation, and confidence remain unchanged | evidence rigor, validation rules, or traceability differ only because of audience setting | 19.191, 19.192, 19.197 |

## Orchestration and Flow

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| LangGraph-based orchestration must be the execution model for all runs | every run advances through explicit graph nodes and recorded transitions | stage advancement occurs outside graph state transitions or without recorded node changes | 2.11, 2.12, 11.117 |
| Every lifecycle stage must have explicit entry and exit conditions | each stage transition is conditioned on validated prerequisites and recorded completion status | stages advance without prerequisite checks or without exit validation | 2.14, 6.56, 6.66 |
| Every major stage must enforce a policy checkpoint before progression | intake, context, hypothesis, plan, execution, and insight stages each record a pass, fail, revise, retry, or escalate checkpoint result before progression | any major stage advances without a recorded checkpoint decision | 6.56, 6.64, 6.66 |
| The system must maintain a shared state object across all nodes | all stages read from and write validated updates to a single canonical run state model | stages use hidden or incompatible side-state as the authoritative run handoff | 2.15, 11.118, 11.119 |
| Branching must be supported when hypothesis exploration requires parallel analytical paths | the run can maintain and display multiple active or deferred branches with branch-specific state references | only a single linear path is possible when multiple viable hypotheses exist | 2.16, 12.121, 14.149 |
| Loop-back must be supported for iterative refinement and deep dive analysis | the orchestrator can return from a downstream stage to an earlier stage with preserved history and explicit reason | downstream revisions require creating an unrelated run or overwrite prior state without trace | 2.17, 14.141, 14.142, 14.150 |
| Retry logic must be bounded and stage-aware | retries are tracked per node with explicit budget, reason, and outcome | retries loop indefinitely, occur without tracking, or ignore stage-specific policy | 2.18, 14.144, 14.148 |
| Checkpointing must exist between major stages | the system records stable checkpoints that support rollback, replay, and audit at major transitions | no stable checkpoint exists for major stage transitions | 2.19, 14.146, 7.75 |
| Failure handling and fallback behavior must be explicit | failed transitions emit structured error state and, when configured, fallback path selection | failures terminate silently, corrupt state, or retry without policy | 2.20, 17.174, 17.175, 17.177 |
| The system must prevent cyclic reasoning without progress | the orchestrator detects stagnation or excessive looping and escalates, stops, or changes strategy | the run loops repeatedly without convergence, escalation, or recorded rationale | 13.137, 14.143, 14.147, 14.148 |
| Critical transitions requiring human action must remain blocked until approved or explicitly overridden through policy | the run enters a waiting or blocked state until required human action is recorded | the system proceeds past a required checkpoint without recorded human action | 18.181, 18.182, 18.187 |
| System resume behavior after approval, override, or correction must preserve orchestrated control | after a human action is accepted, the system resumes from the correct blocked checkpoint with preserved lineage and state integrity | resume after human action skips validation, loses state, or re-enters an incorrect stage | 11.119, 18.182, 18.186, 18.187 |

## Agent Design

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| Each named agent responsibility must be represented as a bounded component or equivalent bounded function | intake, context, hypothesis, planning, execution interpretation, insight, recommendation, critic, and validation responsibilities are separately identifiable in design and runtime behavior | agent responsibilities are collapsed into an unbounded general agent without clear ownership | 3.21-3.35 |
| Every agent must accept a strict input schema | each agent invocation validates required inputs against a defined schema before execution | an agent accepts arbitrary or unvalidated input structure | 11.111, 11.118 |
| Every agent must emit a strict output schema | each agent response is validated against a defined output contract with required fields and status | an agent emits free-form or schema-breaking output that is still accepted | 3.21-3.35, 11.112, 11.114 |
| Agents must not bypass the orchestrator | every agent invocation is created, tracked, and committed through orchestrator-controlled state transitions | an agent changes lifecycle stage or run state independently of the orchestrator | 2.11, 2.15, 11.117 |
| Agents must not execute tools directly | tool use occurs only through approved execution requests and the execution layer | an agent directly invokes SQL, Python, SAS, or other tools outside the execution layer | 5.46, 15.151, 15.156 |
| Agent input and output records must be observable and inspectable | each agent invocation stores or references structured input, structured output, invocation status, and validation result | agent activity cannot be inspected after execution | 7.72, 7.73, 11.111-11.116 |
| Agent outputs must support error and partial-success contracts | when an agent cannot complete fully, it returns structured error or partial-success output with reason and impact | agent failure is represented only as missing output or unstructured text | 11.115, 11.116 |
| The system must preserve critic and validation challenge paths | agentic critique and validation outputs can challenge prior outputs before finalization | critique or validation signals are ignored or cannot prevent advancement | 3.34, 3.35, 6.56-6.62 |
| The system must support manual hypothesis injection and plan override without breaking agent contracts | user-provided interventions are normalized into the same validated contracts as system-generated artifacts | manual intervention bypasses schema, governance, or lineage requirements | 18.184, 18.185, 18.186 |

## Context and Memory

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| Each run must create or reference a defined context pack | the run contains a versioned context pack with business, data, and prior-output context as applicable | context is implicit, unbounded, or unavailable for inspection | 4.36, 4.37, 4.44 |
| Context must be stage-aware and minimal | the active context pack contains only items justified for the current stage and records exclusions or prioritization | context is passed as an unbounded dump without stage scoping or prioritization | 4.38, 4.39, 4.45 |
| Context selection must be traceable | each included context item records provenance, version or freshness data, and selection rationale | context influences decisions without provenance or rationale | 4.38, 4.44, 7.74, 7.79 |
| Run memory must preserve short-term state required for lifecycle continuity | checkpoints, active hypotheses, intermediate evidence, and iteration history remain available during a run | downstream stages cannot access required prior run outputs or state continuity is lost | 4.40, 14.145 |
| Reusable memory must support controlled cross-run reuse | prior analytical artifacts or validated memory can be retrieved under explicit reuse conditions | cross-run reuse occurs without policy, provenance, or retrieval rules | 4.41, 4.42, 4.43 |
| Memory writes and retrievals must be governed by explicit conditions | the system can show when memory was written, when it was reused, and why it was eligible | memory is reused without recorded eligibility or retrieved arbitrarily | 4.43, 7.73, 7.79 |
| Context overload must be prevented | low-relevance or redundant context is pruned or excluded before agent use | irrelevant context is routinely passed downstream without selection logic | 4.45 |
| Data quality and freshness signals must propagate through context | stale, unreliable, missing, or conflicting context is flagged in the context pack and available to downstream stages | downstream stages receive context without quality or freshness signals | 16.161-16.169 |
| Context influence on downstream decisions must be inspectable | a hypothesis, plan, or insight can identify which context items materially influenced it | context is present but its influence on decisions cannot be reconstructed | 4.37, 4.44, 7.79, 8.85 |

## Execution and Data

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| The execution layer must be separate from reasoning agents | execution requests are produced by reasoning outputs and handled by an execution service or runtime layer | reasoning components both decide and directly execute tools | 5.46, 15.156 |
| Supported execution environments must include SQL, Python, and SAS | the design and runtime contracts explicitly support SQL, Python, and SAS execution requests | one or more required execution environments is unsupported without explicit scope change | 5.48 |
| Code generation outputs must be standardized before execution | generated execution artifacts conform to a defined request schema and review path | code or queries are executed without standardization or contract validation | 5.47, 15.158 |
| Data access must use an explicit abstraction boundary | execution requests reference approved data sources, schemas, and operations through a controlled interface | execution artifacts access data directly without bounded data-access rules | 5.49, 15.159 |
| Execution artifacts must be schema-aware | generated SQL, Python, or SAS requests incorporate schema references and fail if required schema metadata is unavailable | execution proceeds against unknown or mismatched schema without flagged error | 5.50, 16.168 |
| Transformation and join logic must be reviewable before execution | analysis plan or code review stage exposes transformation and join intent for validation | transformations or joins are opaque and cannot be reviewed before execution | 5.51, 6.60 |
| Execution results must use standardized output formats | execution returns normalized result structures with runtime metadata, logs, and artifact references | execution returns only raw ad hoc outputs without standardized structure | 5.52, 5.54 |
| Execution must be reproducible under same code, data snapshot, and configuration | rerunning the same approved execution request against the same data snapshot produces traceably comparable output or explicit non-determinism markers | execution cannot be reproduced or lacks metadata needed for replay | 5.53, 7.75 |
| Unsafe or unvalidated code execution must be blocked | execution is prevented when sandbox, policy, or validation requirements fail | unsafe code or unsupported operations are executed | 5.55, 15.156, 15.159 |
| Tool selection must be metadata-driven and policy-aware | the selected tool is compatible with task type, runtime constraints, and policy | an inappropriate or disallowed tool is selected when a valid alternative or block is required | 15.151-15.154 |
| Dry-run simulation must be available where configured | the system can validate or preview sensitive execution requests without performing live execution | a required dry-run or preflight path is unavailable | 15.157 |
| Tool input and output contracts must be auditable | every execution request and response can be inspected against tool metadata and schema | tool interaction occurs without contract visibility or audit data | 15.158, 15.160 |
| Empty, incomplete, or anomalous datasets must fail safely | empty data, schema mismatches, null-heavy outputs, or anomalies produce structured warnings, block states, or degraded outcomes with reasons | the system silently treats empty or invalid data as valid evidence | 16.161, 16.167, 16.168, 16.170, 17.171 |
| Data quality degradation must affect downstream confidence and output release behavior | low-quality, incomplete, stale, or conflicting data reduces confidence, blocks release, or forces escalation according to policy | outputs retain unchanged confidence or release eligibility despite known material data quality defects | 16.163-16.166, 17.180 |

## Validation and Governance

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| Validation must exist across all lifecycle stages | every major stage includes a validation outcome before allowed advancement | one or more stages advances without validation outcome | 6.56, 6.66 |
| Failed validation must block, revise, retry, or escalate progression and must never silently pass | every failed validation outcome produces a recorded next action that prevents silent progression | a failed validation is ignored, overwritten, or bypassed without recorded governance outcome | 6.56, 6.64, 6.66 |
| Input validation must block invalid intake statements | incomplete, conflicting, or malformed intake either fails or routes to clarification with structured reason | invalid intake input proceeds without flag or reason | 6.57, 10.103-10.108 |
| Hypotheses must be validated for relevance and testability | weak, duplicate, contradictory, or untestable hypotheses are pruned, revised, or escalated | invalid hypotheses proceed to planning without validation outcome | 6.58, 12.123, 12.127, 12.128 |
| Multi-hypothesis handling must produce explicit selection and pruning rationale when multiple hypotheses are applicable | multiple candidate hypotheses are generated, ranked, pruned or merged, and the selected path is justified in recorded decision data | the system selects a final hypothesis path without showing alternatives or rationale where multiple paths were applicable | 12.121-12.130, 7.72 |
| Analysis plans must satisfy feasibility and policy validation | infeasible, unsupported, or policy-violating plans are blocked or returned for revision | invalid plans proceed to execution | 6.59, 15.153 |
| Code and execution requests must pass review before dispatch | analytical correctness and safety review occurs before live execution | execution begins without required review or validation | 6.60, 15.156 |
| Result validation must detect contradictory or low-integrity outputs | contradictory results, low-integrity outputs, or logically inconsistent findings are flagged, blocked, or escalated | contradictory results are accepted as validated evidence | 6.61, 17.172, 17.176 |
| Insights must be validated against linked evidence | each insight includes supporting evidence references and fails validation if evidence is insufficient | an insight is accepted without linked evidence or despite evidence contradiction | 6.62, 6.68, 7.74 |
| Confidence scoring must be explicit and bounded | stage outputs that require confidence include a stored score or bounded confidence classification with rationale | outputs imply certainty without an explicit confidence representation | 6.63, 17.180 |
| Policy-based control rules must be enforceable at runtime | policy checks can block, pause, escalate, or constrain execution and progression | policy is advisory only and cannot stop unsafe or invalid progression | 6.64, 6.66 |
| Escalation triggers must invoke human review when configured thresholds are met | low confidence, contradictions, policy breaches, repeated failures, or unresolved ambiguities cause escalation | escalation-triggering conditions are detected but not acted on | 6.65, 17.175, 18.187 |
| Unsupported or hallucinated outputs must not be released as valid system output | unsupported claims are blocked, downgraded, or marked unresolved | unsupported outputs are presented as validated insights or recommendations | 6.67, 17.180 |
| Human decisions must be captured as governed runtime events | approvals, rejections, overrides, and corrections are stored with actor, time, and impacted stage | human decisions alter the run without trace or governance record | 18.181-18.186 |
| Governance rule enforcement behavior must be inspectable | the system can show which rule or checkpoint passed, failed, blocked, or escalated a stage transition | a blocked or escalated transition cannot be traced to a rule or governance decision | 6.64, 6.66, 6.69, 7.76 |

## Observability and Traceability

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| Each run must produce a run-level trace structure | a run contains identifiable trace records spanning all major stages and decisions | no end-to-end trace exists for the run | 7.71, 11.117 |
| Agent decisions and transitions must be captured | agent outputs, critiques, rankings, and transitions are logged or traceable in structured form | agent decisions occur without inspectable records | 7.72, 7.73 |
| Inputs, outputs, and intermediate artifacts must be logged | every stage stores or references the artifacts needed for inspection and replay | intermediate artifacts are lost or not attributable to stage transitions | 7.73, 7.75 |
| Evidence linkage must exist for each insight | each insight links to evidence records, upstream execution outputs, and relevant context | insights cannot be traced to supporting evidence | 7.74, 7.79 |
| End-to-end lineage must explicitly cover intake to context to hypothesis to plan to execution to insight | an inspector can traverse each of the six lineage steps without inference or missing links | one or more required lineage steps is missing or not reconstructable | 7.79, 6.68, 12.124 |
| Decision transparency must be stored for hypothesis selection, plan choice, and insight generation | the system records why a hypothesis was selected, why a plan was chosen, and why an insight was generated or rejected | critical analytical decisions cannot be inspected after the run | 7.72, 7.73, 12.130 |
| The system must support full replay of a run from stored artifacts and checkpoints | a prior run can be replayed from intake or checkpoint using stored state, trace, and artifact references | replay is impossible because critical state or artifact data is missing | 7.75, 2.19, 14.146 |
| Failed runs must expose debugging views with actionable state | the system can show failed stage, reason, retries, artifacts, and suggested recovery path | failed runs provide only generic or missing diagnostics | 7.76, 17.179 |
| Performance and latency metrics must be captured | the system stores timing or performance metrics at run, stage, or execution level | no measurable performance data is available for completed runs | 7.77 |
| Retry and failure patterns must be tracked | the system records retries, fallback selections, failure types, and recurrence patterns | retries or failures occur without persistent tracking | 7.78, 17.174, 17.175 |
| Lineage from intake to insight must be reconstructable | an inspector can navigate from final outputs back to intake, context, hypotheses, plans, and execution artifacts | lineage breaks at any major stage | 7.79, 12.124 |
| Observability data must be structured and queryable | trace, logs, and metrics can be retrieved by run, stage, agent, tool, or output identifier | observability artifacts exist only as unstructured ad hoc text | 7.80 |
| Stage transitions, agent inputs and outputs, retries, and failures must all be logged as structured events | each transition, invocation, retry, and failure has a typed event record with correlation identifiers | some required runtime events are missing or only captured in unstructured diagnostics | 7.71-7.80, 11.117 |
| Intermediate stage inspection must be available for replay and debugging | an operator can inspect stored intermediate state and artifacts for each stage in a prior run | replay exists but intermediate stages cannot be inspected | 7.75, 7.76, 14.145, 14.146 |

## UI and Analyst Experience

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| The UI must present an analyst workspace rather than a generic chat surface | lifecycle stages, structured outputs, context visibility, and action controls are primary UI elements | chat conversation is the primary operating model | 8.81, 8.82, 1.2 |
| Stage progression must be visible throughout the run | the user can see completed, active, waiting, blocked, or escalated stages | users cannot determine current lifecycle position or stage status | 8.82, 7.71 |
| Intermediate outputs must be visible at each stage | users can inspect stage outputs before and after validation or intervention | stage outputs are hidden until a final answer | 8.83 |
| The UI must expose key intervention checkpoints | users can approve, reject, modify, or override at required intake, hypothesis, plan, and insight checkpoints | required intervention points are missing or non-actionable | 8.84, 18.181-18.185 |
| Active context must be visible to the user | users can inspect context pack contents, provenance, selection reason, and exclusions | context affects reasoning without being visible in the UI | 8.85, 4.38, 4.44 |
| Users must be able to select or override hypotheses | the UI supports viewing multiple hypotheses, rankings, evidence, and user selection or pruning actions | the system hides alternatives or prevents user override where intent requires it | 8.86, 12.121-12.130, 18.184 |
| Users must be able to approve or reject insights | the UI exposes approval and rejection controls for insight outputs where policy requires review | insights are finalized without required approval path | 8.87, 18.181, 18.182 |
| Outputs must be presented in structured and visual formats where appropriate | rankings, confidence, performance, or lineage can be rendered as structured tables, cards, or visuals rather than only narrative text | output presentation relies only on narrative dumps when structured representation is required | 8.88 |
| Drill-down and deep-dive flows must be available | users can drill from recommendation or insight into upstream context, hypotheses, plans, execution, and evidence | outputs are not navigable to upstream artifacts | 8.89, 7.79 |
| The UI must reflect transparency and current system action | users can determine what the system is doing, why it is doing it, and whether it is waiting on validation or approval | the UI obscures active system behavior or decision rationale | 8.90, 7.72 |
| The UI must show blocked flow, pending approval, and escalation status where relevant | users can identify which stage is blocked, why it is blocked, and what action is required to proceed | required human actions or blocked transitions are hidden or ambiguous | 8.84, 8.90, 18.181-18.187 |
| The UI must expose trace and drill-down paths from outputs to origin artifacts | users can navigate from recommendation or insight to analysis, code, data scope, context, and intake frame | users cannot inspect output lineage within the UI or linked inspection flow | 8.89, 7.79 |
| User-driven depth override must be available where configured | the UI can request shallower or deeper analysis without breaking governance | depth changes require bypassing the intended interface or cannot be requested | 13.135, 19.195 |
| Human and system outputs must be comparable where intervention occurs | the UI or logs can present system output alongside human override or correction where applicable | human overrides replace system output without comparison trace | 18.188 |

## Evaluation and Quality

| Criterion | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| The system must define and expose an evaluation framework for ABA outputs | the design includes measurable evaluation dimensions such as accuracy, depth, relevance, or equivalent mapped metrics | output quality cannot be evaluated against declared criteria | 9.91, 9.93, 9.94 |
| ABA output quality must be comparable against analyst baselines where benchmark scenarios exist | benchmark runs can be evaluated against human or analyst reference outcomes | no comparison path exists for benchmark scenarios | 9.92, 9.96 |
| The system must capture failure cases and root causes for quality improvement | failed or degraded runs record root-cause information linked to evaluation artifacts | failures are not classified or cannot inform later improvement | 9.97, 17.179 |
| Continuous evaluation must be supported during development | the system can run repeated evaluation scenarios and retain comparable results over time | evaluation is only possible as one-off manual judgment with no retained record | 9.98, 9.95 |
| End-to-end system testing must be possible on real or representative scenarios | representative scenarios can exercise the full run from intake through recommendation or final output | the design cannot be exercised end-to-end | 9.100 |
| Readiness must include reproducibility, governance, observability, and traceability guarantees | a release candidate can only be considered ready when lifecycle execution, validation, traceability, and replay criteria pass together | readiness is declared while key governance or traceability gaps remain unresolved | 9.99, 6.69, 7.75 |
| Data quality must affect final quality assessment | stale, incomplete, inconsistent, or low-quality data reduces confidence or blocks conclusions according to policy | final quality reporting ignores known data quality issues | 16.161-16.166 |
| Contradictory or unsupported outputs must reduce or block final quality status | contradictory outputs, unsupported insights, or misleading confidence prevent a passing quality judgment | a run passes quality review despite contradictory or unsupported outputs | 17.172, 17.176, 17.180 |
| Improvement tracking across iterations must be possible for benchmarked scenarios | the system retains comparable evaluation outcomes across iterations so trend direction can be measured | benchmark outcomes exist only as isolated snapshots with no iteration-to-iteration comparison | 9.95, 9.98 |

## End-to-End System Guarantees

| Guarantee | Pass condition | Fail condition | Intent source |
| --- | --- | --- | --- |
| Full lifecycle guarantee | the system can complete or explicitly govern every stage from intake to insight with recorded state transitions and outputs | any major stage is skipped, hidden, or unmanaged | 1.3, 2.13 |
| Reproducibility guarantee | the system can reproduce a prior run or execution path using retained inputs, configuration, checkpoints, and artifacts | prior runs cannot be replayed or explained | 1.10, 5.53, 7.75 |
| Consistency guarantee | repeated approved runs under equivalent conditions produce consistent outputs or explicit, traceable reasons for variance | materially inconsistent outputs occur without traceable explanation | 1.10, 6.70 |
| Safe-failure guarantee | empty data, failed execution, invalid hypotheses, contradictory results, and repeated validation failure produce blocked, degraded, retried, fallback, or escalated outcomes with actionable reasons | unsafe or misleading outputs are produced after known critical failure conditions | 17.171-17.180 |
| Auditability guarantee | the system can explain who approved, what failed, what retried, what branch was chosen, and why final outputs were released or blocked | final outcomes cannot be defended from stored governance, trace, and decision records | 6.69, 7.71-7.80, 18.186 |
