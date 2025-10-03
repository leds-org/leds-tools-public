---
sidebar_position: 1
title: Workflow Breakdown
description: The internal process behind CodeWise's automation
---

# CodeWise Workflow Breakdown

The following steps describe the internal process behind CodeWise, from a user action to the final AI-generated Pull Request.

1.  **Git Hook Trigger (`pre-commit` or `pre-push`)**
    The process is initiated by standard Git commands executed by the user. CodeWise's automation is tied directly into the repository via Git Hooks installed by the `codewise-init` command.
    -   On `git commit`: The `pre-commit` hook is triggered.
    -   On `git push`: The `pre-push` hook is triggered.

2.  **Context Extraction (`entradagit.py`)**
    Once a hook is triggered, the system extracts all necessary context from the local Git repository.
    -   For **`pre-commit`**, it captures the staged changes (`git diff --cached`).
    -   For **`pre-push`**, it gathers the range of commits and the complete code differences (`git diff`) between the user's branch and the remote target branch (`main` or `develop`).

3.  **AI Agent Orchestration (`crew.py` & `cw_runner.py`)**
    The extracted context is passed to the AI core, which uses a "crew" of specialized agents (built with CrewAI) to analyze the code in parallel:
    -   **Summary Specialist**: Generates the PR title (following Conventional Commits) and a concise description.
    -   **Senior Architect**: Analyzes the project structure and architectural patterns.
    -   **Quality Consultant**: Detects violations of S.O.L.I.D. principles and identifies "code smells".
    -   **Design Pattern Advisor**: Recommends design patterns suitable for the changes made.

4.  **GitHub API Interaction (`gh`)**
    With the AI-generated content ready, CodeWise interacts with the GitHub API via the GitHub CLI (`gh`):
    - It checks if a Pull Request already exists for the current branch.
    - If **yes**, it updates the existing PR's title and description and posts the new technical analysis as a comment.
    - If **no**, it creates a new Pull Request with the generated title and description, then posts the technical analysis as a comment.

5.  **Completion and User Feedback**
    After interacting with GitHub, the script finishes, and the original Git command (`commit` or `push`) is allowed to complete. The user sees the output and results directly in their terminal.