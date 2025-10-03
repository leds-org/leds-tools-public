---
sidebar_position: 2
title: Project Plan — CodeWise
description: Project plan to improve the CodeWise library, with objectives, backlog, deliveries, team, and schedule.
---

# Project Plan — CodeWise

**Summary:** Execution plan to deliver improvements to the CodeWise library over the course of the semester, focusing on adding support for local AI models and transforming the tool into a developer mentoring platform.

## Justification
The current version of CodeWise is fully dependent on the Google Gemini API, which incurs costs, limits offline use, and raises data privacy concerns for some organizations. Furthermore, while the tool provides excellent technical analysis, it lacks a mechanism to proactively help developers learn from their common mistakes.

## SMART Objective
Deliver an improved CodeWise library by the end of the semester, implementing functionalities for local AI model support (via Ollama) and an educational "Code Mentor" agent, transforming the tool into a more flexible and didactic platform.

## Benefits
-   Increase data privacy and reduce operational costs by allowing local AI model usage.
-   Enable offline functionality for developers.
-   Transform the tool from a code reviewer into a continuous professional growth platform.
-   Accelerate the onboarding and skill development of junior developers.

## Product
-   An improved version of the `codewise-lib` Python library.
-   Updated CLI tools (`codewise-pr`, `codewise-lint`, etc.) with new capabilities.

## Requirements (main)
-   Integrate support for local LLMs via Ollama, configurable through the `.env` file.
-   Develop a new "Code Mentor" AI agent that suggests learning resources based on code analysis.
-   Implement a mechanism to track recurring errors to provide more personalized feedback (using a local JSON file).
-   Update all documentation to reflect the new features and setup processes.

## External Stakeholders
-   Development Leads and Project Managers (as users).
-   LEDS / IFES Professor and Students.

## Team

### Management
-   Bernardo Simão
-   Kaio
-   Mickele Altavilla

### Project (Development)
-   Pedro Renã
-   Gustavo Saraiva
-   Matheus Magnago

## Constraints
-   **Total deadline:** 1 academic semester.
-   **Required technologies:** Python, CrewAI, Git.
-   **Development budget:** Voluntary academic hours.

## Assumptions
-   The development team has the necessary skills in Python.
-   All team members will be available according to the academic schedule.
-   The GitHub and Gemini APIs will remain stable and accessible for comparative testing.

## Delivery Group (Roadmap)

# Deliveries

## 1st Delivery — "Code Mentor" Agent

**Objective:**  
Implement the new agent for educational suggestions.

**Acceptance Criteria:**  
- New feature include a "Learning Suggestions" section with relevant links.  
- A `history.json` file is created and updated to track recurring errors.
-

---

## 2nd Delivery — Local LLM Support via Ollama

**Objective:**  
Implement and document the integration with Ollama.

**Acceptance Criteria:**  
- CodeWise runs analyses using a local model selected via `.env` configuration.  
- The installation guide is updated with instructions for Ollama.  


## Backlog (Prioritized)

# Feature Roadmap

| ID | Feature                | Description                                     | Importance | Proposal / Expected Result                                                |
|----|------------------------|-------------------------------------------------|------------|---------------------------------------------------------------------------|
| 1  | Code Mentor Agent      | New agent that suggests learning resources      | 100        | Add unique educational value and accelerate developer growth              |
| 2  | Error History (JSON)   | Track recurring errors to personalize feedback  | 95         | Make the mentor's suggestions more intelligent and targeted               |
| 3  | Ollama Integration     | Allow the tool to use local LLMs                | 90         | Solve privacy/cost issues and enable offline use                          |
| 4  | Refactor for Extensibility | Adapt the architecture in `crew.py` and `cw_runner.py` to easily support the new features | 85         | Ensure the codebase remains clean and modular                           |


## Risks
-   **Local LLM Performance:** The speed and quality of local models may be a bottleneck compared to the Gemini API.
-   **Quality of Educational Links:** The mentor agent might suggest low-quality or irrelevant resources if not properly prompted and guided.
-   **Schedule Conflicts:** Academic demands may impact team availability.

**Suggested Mitigations:**
-   Thoroughly test and document the hardware recommendations for running Ollama.
-   Start with a curated list of reliable sources for the mentor agent to use.
-   Maintain clear communication and regular check-ins to monitor progress.

## Success Metrics
-   Both deliveries are completed by the end of the semester with all acceptance criteria met.
-   The tool is demonstrably functional using at least one local model via Ollama.
-   The "Learning Suggestions" appear correctly in the PR comments, with relevant links.