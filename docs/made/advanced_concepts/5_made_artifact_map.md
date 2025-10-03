# Artifact Map

This page focuses strictly on the mapping between MADE input components and the artifacts the tool generates. Use it as a quick reference to understand where outputs come from and what they are used for.

Short mapping (inputs → primary artifacts):

- `project` → `01_overview.md`, project metrics, and project-level charts (e.g., `project-cfd.svg`).
- `team` → `data/db/team.json` and team sections in generated reports.
- `backlog` → `02_backlogs.md`, `data/db/backlog.json`, and `data/db/issue.json`.
- `sprint` → `sprints/{sprint-name}.md`, sprint charts (`charts/cfd-{sprint-name}.svg`, `charts/throughput-{sprint-name}.svg`) and `data/db/timebox.json`.
- `roadmap` → `03_roadmap.md` and `data/db/roadmap.json`.

Where files are typically written:

- Generated markdown: configurable output folder (common defaults: `./reports` or `./project`).
- Internal structured data: `data/db/*.json` (used by renderers and integrations).
- Charts and images: `charts/` inside the generated output tree.

Quick CI guidance:

- Prefer generating artifacts in CI and uploading them as build artifacts rather than committing large generated files to the repo.
- If you must commit generated artifacts, keep them small and stable to reduce merge conflicts.
- Add a lightweight job that runs `npx made-cli generate` (or your project's generator command) and validates that the run completes without errors.

Cross-references:

- Examples and sample inputs: `basic_concepts/3_made_examples.md`.
- Architecture and extension points: `advanced_concepts/2_made_tool_architecture.md`.

This file is intentionally concise — for step-by-step tutorials and in-depth walkthroughs see the basic and advanced concept pages referenced above.