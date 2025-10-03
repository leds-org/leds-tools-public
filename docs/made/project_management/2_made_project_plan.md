---
sidebar_position: 1
title: Project Plan — MADE
description: Project plan to improve the MADE extension and library, with objectives, backlog, deliveries, team and schedule.
---

# Project Plan — MADE

Summary: execution plan to deliver improvements to the MADE extension and library in 4 months, with an estimated budget of up to 100 development hours.

## Justification
Starting project management requires a lot of time: today it's necessary to create tasks individually, which delays project start and reduces productivity. Automating issue and report generation will allow starting and managing projects with less friction.

## SMART Objective
Deliver an improved MADE extension and library in 4 months, consuming at most 100 hours of voluntary development, delivering functionalities that reduce management time and avoid issue duplication.

## Benefits
- Speed up issue and report generation on GitHub.
- Facilitate team and project management.
- Increase productivity and reduce management costs and time.

## Product
- Improved VS Code extension (MADE).
- Updated and modularized processing/refinement library (MADE-lib).

## Requirements (main)
- Avoid GitHub issue duplication.
- Allow creation and use of new templates for issues and reports.
- Map MADE components to appropriate GitHub and Jira structures (issues, milestones, projects).
- Apply programming paradigm and implement comprehensive testing.
- Configure and integrate Jira API functionality.
- Document improvements and describe system functionalities.

## External Stakeholders
- Project managers
- LEDS
- IFES students

## Team

### Management
- Breno Amâncio
- Breno Scalzer
- Jonathan Silva
- Josias Borba
- Nathan Ribeiro
- Paulo Lopes
- Rafael Borges

### Project (development)
- Davi Alvarenga
- Douglas Bolis
- Heitor Oliveira
- Israel Carmo
- Lucas Mariani
- Lucas Pianissola
- Vinícius Cunha

## Constraints
- Total deadline: 4 months.
- Required technologies: TypeScript, Langium, MVC architecture.
- Development budget: maximum of 100 allocated hours (voluntary or sponsored).

## Assumptions
- All team members will be available according to schedule.
- There will be necessary funding/resources for execution.
- Project delivery within the 4-month deadline.

## Delivery Group (roadmap by deliveries)

1st delivery — Docusaurus Documentation (1 sprint)
- Objective: Structure MADE public documentation, include usage guides, examples and templates.
- Acceptance criteria: Docusaurus site published on `gh-pages` branch or as stable build; essential pages (overview, prerequisites, examples) ready.
- Deadline: 08/29/2025

## Delivery Schedule Overview

For detailed sprint backlog, project management metrics, and comprehensive timeline information, please refer to the [Detailed Backlog and Metrics](./3_detailed_backlog_and_metrics.md) document.

**Quick Overview of Remaining Deliveries:**
- **Target Delivery: 24/09/2025 (Wed) | Final Deadline: 28/09/2025 (Sun)** — 2nd Delivery: Github Template Implementation
- **Target Delivery: 29/10/2025 (Wed) | Final Deadline: 02/11/2025 (Sun)** — 3rd Delivery: MADE→GitHub/Jira Mapping + Issue duplication fix
- **Target Delivery: 26/11/2025 (Wed) | Final Deadline: 30/11/2025 (Sun)** — 4th Delivery: Programming paradigm + Testing

### Delivery Schedule Policy
Our project follows a structured delivery schedule with built-in buffer time:
- **Target Delivery Dates**: Sprints are planned to complete on Wednesdays
- **Final Delivery Deadline**: The actual project deadline is on Sunday (4 days after target delivery)
- **Buffer Period**: The Wednesday-to-Sunday gap provides time for final testing, bug fixes, and quality assurance without requiring weekend work

## Risks
- Tools (CI, Docker, GitHub APIs) presenting problems or unavailability.
- Schedule conflicts between members, reducing planned deliveries.
- Unexpected absences or personal issues of members.
- External blocks that prevent progress (third-party dependencies, approvals).

Suggested mitigations:
- Plan minimum contingency (10–15% buffer of estimated time).
- Weekly communications and availability confirmation before each sprint.
- Have a test repository to validate GitHub integrations without impacting production.

## Summary Timeline
- 08/29/2025 — 1st Delivery (Docusaurus)
- 24/09/2025 (Wed) / 28/09/2025 (Sun) — 2nd Delivery: Github Template Implementation
- 29/10/2025 (Wed) / 02/11/2025 (Sun) — 3rd Delivery: MADE→GitHub/Jira Mapping + Issue duplication fix
- 26/11/2025 (Wed) / 30/11/2025 (Sun) — 4th Delivery: Programming paradigm + Testing

*Note: Dates shown as Target Delivery (Wed) / Final Deadline (Sun)*
