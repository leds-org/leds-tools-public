---
sidebar_position: 4
title: Design Concept - Git Hooks
description: Understanding the core automation mechanism of CodeWise
---

# Design Concept: Automation via Git Hooks

The core of CodeWise's automation lies in its use of **Git Hooks**. Hooks are scripts that Git executes automatically before or after specific events, such as `commit` and `push`.

### How CodeWise Uses Hooks

By placing scripts in the `.git/hooks/` directory, CodeWise can intercept the developer's workflow without being intrusive.

1.  **`pre-commit` Hook:**
    -   **Event:** Triggered when `git commit` is run.
    -   **CodeWise Action:** Executes the `codewise-lint` command. This provides a fast, lightweight analysis of the code *before* it's even committed to the local history. It's a first line of defense for quality control.

2.  **`pre-push` Hook:**
    -   **Event:** Triggered when `git push` is run.
    -   **CodeWise Action:** Executes the full `codewise-pr` process. This is the main event, where the complete code analysis is performed and the Pull Request on GitHub is automatically created or updated. This ensures that no code is pushed to the remote repository without its corresponding documentation and AI analysis.

The `codewise-init --all` command is responsible for automatically creating and configuring these hook files, making the setup process seamless for the end-user.