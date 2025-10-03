---
sidebar_position: 3
title: Architecture Overview
description: Understanding the main components of CodeWise - the Library vs. the CLI Tools.
---

# Architecture Overview: CodeWise Lib vs. CLI Tools

The CodeWise architecture is composed of **two complementary parts**: the core library and the command-line interface (CLI) tools that you interact with.

---

##  CodeWise Lib

-   This is the **core engine** or the "brains" of the project. It's the actual package that gets installed from PyPI when you run `pip install codewise-lib`.
-   It contains all the essential logic, including:
    -   The **AI Agents** and their orchestration via CrewAI.
    -   The module for **interacting with Git** to extract code changes.
    -   The runner that manages the entire **analysis workflow**.
    -   The scripts for installing the **Git hooks**.

---

##  CodeWise CLI Tools

-   These are the **user-facing commands** that you type in your terminal. They act as the interface to the core library's functionalities.
-   The main tools are:
    -   `codewise-init`: Executes the hook installation script from the library.
    -   `codewise-lint`: Triggers the lightweight analysis function for staged files.
    -   `codewise-pr`: Activates the full workflow for PR creation and analysis.
    -   `codewise-help`: Displays the help message.

In short, the **CodeWise Lib** does all the heavy lifting, while the **CLI Tools** provide a simple and direct way for you to command that power.