---
sidebar_position: 3
title: Detailed Backlog and Metrics — MADE
description: Detailed sprint backlog, prioritized features, and project management metrics for the MADE project.
---

# Detailed Backlog and Metrics — MADE

## Delivery Timeline and Schedule

Our project follows a structured delivery schedule with built-in buffer time to ensure quality and avoid weekend work:

**Delivery Schedule Policy:**
- **Target Delivery Dates**: Sprints are planned to complete on Wednesdays
- **Final Delivery Deadline**: The actual project deadline is on Sunday (4 days after target delivery)
- **Buffer Period**: The Wednesday-to-Sunday gap provides time for final testing, bug fixes, and quality assurance without requiring weekend work

This approach ensures we maintain work-life balance while having adequate time to address any last-minute issues before the final deadline.

## Detailed Backlog by Sprint

| Target Delivery | Final Deadline | Sprint | Backlog | Importance |
|-----------------|----------------|--------|---------|------------|
| 24/09 (Wed) | 28/09 (Sun) | 1 (19/09 -> 24/09) | Github Template | 2 |
| 15/10 (Wed) | 19/10 (Sun) | 2 (29/09 -> 15/10) | Map and implement Made components to Github API | 3 |
| 15/10 (Wed) | 19/10 (Sun) | 2 (29/09 -> 15/10) | Map Made components to Jira | 2 |
| 29/10 (Wed) | 02/11 (Sun) | 3 (20/10 -> 29/10) | Fix issue duplication | 4 |
| 29/10 (Wed) | 02/11 (Sun) | 3 (20/10 -> 29/10) | Configure Jira API | 3 |
| 12/11 (Wed) | 16/11 (Sun) | 4 (3/11 -> 12/11)  | Map use cases to programming paradigm | 2 |
| 12/11 (Wed) | 16/11 (Sun) | 4 (3/11 -> 12/11)  | Implement mapped components generation in Jira API | 3 |
| 26/11 (Wed) | 30/11 (Sun) | 5 (17/11 -> 26/11) | Apply programming paradigm | 4 |
| 26/11 (Wed) | 30/11 (Sun) | 5 (17/11 -> 26/11) | Apply tests to Jira code | 2 |

## Major Delivery Milestones

**2nd delivery — Github Template Implementation (Sprint 1)**
- Objective: Create and implement GitHub issue/PR templates
- Acceptance criteria: GitHub templates ready and functional; standardized GitHub workflow implemented.
- Target delivery: 24/09/2025 (Wed)
- Final deadline: 28/09/2025 (Sun)

**3rd delivery — Map MADE components to GitHub/Jira and fix issue duplication (Sprints 2 & 3)**
- Objective: Define and implement mapping between MADE components and GitHub/Jira artifacts, configure APIs, and implement duplicate detection/avoidance
- Acceptance criteria: mapping documented; proof of concept that correctly creates issues/milestones in test repository; Jira API configured; integration execution without generating duplicates in multiple executions.
- Target delivery: 29/10/2025 (Wed)
- Final deadline: 02/11/2025 (Sun)

**4th delivery — Implement programming paradigm and comprehensive testing (Sprints 4 & 5)**
- Objective: Map use cases to programming paradigm, implement mapped components generation in Jira API, apply programming paradigm, and implement comprehensive testing
- Acceptance criteria: programming paradigm applied and documented; mapped components generation implemented in Jira API; test coverage implemented for Jira code.
- Target delivery: 26/11/2025 (Wed)
- Final deadline: 30/11/2025 (Sun)

## Backlog (prioritized)

| ID | Feature | Description | Importance | Proposal / Expected Result |
| -- | ------- | ----------- | ---------- | -------------------------- |
| 1  | Fix issue duplication | Compare existing issues and avoid creating duplicates | 4 | Reduce repository noise and avoid duplicate work |
| 2  | Apply programming paradigm | Implement programming paradigm across the codebase | 4 | Better code structure and maintainability |
| 3  | Map and implement Made components to Github API | Define and implement mapping between MADE components and GitHub artifacts | 3 | More natural integration with GitHub workflow |
| 4  | Implement mapped components generation in Jira API | Generate components in Jira based on mapping | 3 | Seamless Jira integration for project management |
| 5  | Configure Jira API | Set up and configure Jira API integration | 3 | Enable Jira functionality within MADE |
| 6  | Map use cases to programming paradigm | Define how use cases align with programming paradigm | 2 | Clear architectural guidelines |
| 7  | Map Made components to Jira | Define mapping between MADE components and Jira artifacts | 2 | Consistent project management across platforms |
| 8  | Apply tests to Jira code | Implement comprehensive testing for Jira integration | 2 | Ensure reliability and quality of Jira features |
| 9  | Github Template | Create and implement GitHub issue/PR templates | 2 | Standardized GitHub workflow and better issue management |

## Project Management Metrics

Our management team will use the following metrics to measure team productivity and project performance:

### Bugs vs Features
This metric tracks the ratio between bug fixes and new feature development over time. It helps us understand:
- **How it works**: We categorize all issues and pull requests as either "bug" (fixing existing functionality) or "feature" (adding new functionality). The ratio is calculated as bugs/features over a specific time period (sprint, month, etc.).
- **What it measures**: Code quality and development balance. A high bug-to-feature ratio may indicate technical debt or quality issues, while a very low ratio might suggest we're not addressing existing problems.
- **Target**: Maintain a healthy balance, typically aiming for 20-30% bugs to 70-80% features during active development phases.

### Cycle Time PR
This metric measures the time it takes from when a pull request is created until it's merged and deployed.
- **How it works**: We track the timestamp from PR creation to final merge, including time spent in review, revisions, and approval processes.
- **What it measures**: Development efficiency and team collaboration effectiveness. Shorter cycle times indicate smoother workflows and faster delivery.
- **Target**: Aim for average cycle time of 2-3 days for standard features, with critical fixes processed within 24 hours.

### Issues Opened vs Closed
This metric tracks the flow of work items through our project management system.
- **How it works**: We monitor the number of new issues created versus the number of issues resolved/closed over specific time periods. This includes both GitHub issues and Jira tickets when integrated.
- **What it measures**: Team capacity and project health. A consistently higher opening rate than closing rate indicates potential resource constraints or scope creep.
- **Target**: Maintain a balanced or slightly positive closing rate (more issues closed than opened) to prevent backlog growth and ensure steady progress.

## Success Metrics
- Deliveries completed on milestone dates with acceptance criteria met.
- Measurable reduction of issue duplication in tests (goal: < 1% duplicates generated).
- Minimum unit test coverage in refactored modules (goal: 60%+ in critical areas).
- Total development time within the estimated 100-hour limit.