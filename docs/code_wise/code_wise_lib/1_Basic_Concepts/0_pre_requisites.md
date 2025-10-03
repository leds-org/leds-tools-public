---
sidebar_position: 2
title: Prerequisites
description: All the necessary tools and accounts you need before installing CodeWise.
---

# Prerequisites

Before you start installing and using CodeWise, ensure you have the following tools installed and configured on your system. These are essential for the tool to function correctly.

### 1. Python
-   **Requirement:** Version 3.11 or higher.
-   **Why:** CodeWise is a Python application and requires a modern version of the language to run.
-   **Download:** [python.org](https://www.python.org/downloads/)

### 2. Git
-   **Requirement:** A recent version of Git.
-   **Why:** CodeWise is deeply integrated with Git. It reads repository data and uses Git Hooks (`pre-commit`, `pre-push`) for automation.
-   **Download:** [git-scm.com](https://git-scm.com/downloads)

### 3. GitHub CLI (`gh`)
-   **Requirement:** The official GitHub Command-Line Interface.
-   **Why:** CodeWise uses `gh` to interact with the GitHub API, which is necessary for creating and updating Pull Requests automatically.
-   **Download:** [cli.github.com](https://cli.github.com/)
-   **Important:** After installing, you must authenticate with your GitHub account. Run the following command in your terminal and follow the instructions:
    ```bash
    gh auth login
    ```

### 4. Google Gemini API Key
-   **Requirement:** An active API key for the Google Gemini model.
-   **Why:** The core of CodeWise's analysis is powered by the Gemini generative AI. The tool sends code snippets to this API to generate titles, descriptions, and technical analyses.
-   **How to get one:** You can generate a free API key at Google AI Studio.
-   **Action:** This key must be saved in the `.env` file during the setup process, as described in the Installation Guide.

### 5. Python Virtual Environment (Venv)
Requirement: Strongly recommended for any Python project.

-   **What it is**: A native Python tool that creates an isolated environment for your project's dependencies.
-   **Why**: It prevents conflicts between the libraries required by different projects on your computer. Using a venv ensures that CodeWise and its dependencies will not interfere with other tools you may have installed.
-   **Action**: Creating and activating the virtual environment is the first practical step in our Installation Guide.

With these prerequisites installed and configured, you are ready to proceed with the CodeWise installation.