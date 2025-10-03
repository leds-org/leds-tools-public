---
sidebar_position: 1
title: Overview
---
**Code Wise** is a Visual Studio Code extension that automatically **analyzes** your codebase at pre-commit, leveraging state-of-the-art Large Language Models (LLMs) such as OpenAI, Gemini, Groq, Ollama, Mistral, and others. It helps developers identify **architectural** improvements, **SOLID** principle violations, **code smells**, and suggest **design patterns** — all seamlessly integrated into their daily workflow.

### Overview

Once installed and configured, CodeWise operates silently in the background. It monitors your Git repository for new commits and automatically triggers a set of intelligent agents that review the code changes, offering structured, insightful feedback saved directly into your workspace.

### Features

- **Pre-commit Code Analysis**  
  Automatically analyzes code right after a local commit is made, ensuring issues are caught before pushing to the repository.

- **LLM-Based Multi-Agent Architecture**  
  Utilizes multiple specialized Language Model agents (Architect, Integration Analyst, SOLID Reviewer, Design Pattern Advisor, etc.) working in parallel for deep, context-aware code evaluation.

- **Support for Multiple LLM Providers**  
  Compatible with various LLM providers (OpenAI, Google Gemini, Ollama, Mistral, Groq, Cohere, and more) with plug-and-play extensibility via a factory pattern and reflection-based dynamic loading.

- **Automatic Report Generation**  
  Produces a detailed markdown report (`commit_analysis_report.md`) after each commit, summarizing architectural insights, design flaws, and suggestions.

- **No User Disruption**  
  Fully background operation – developers commit code as usual while CodeWise silently processes and reports.

- **Multi-language Project Support**  
  Can analyze projects written in multiple programming languages, especially those structured around standard architectural patterns (e.g., MVC, DDD).

- **Cross-Platform Compatibility**  
  Designed to work on Windows, macOS, and Linux environments (as long as Node.js and VS Code are installed).

- **Modular and Extensible Design**  
  Easy to extend with new agent roles, models, or analysis types using a clean and maintainable architecture.

- **CI/CD Ready**  
  CodeWise is built to support packaging and publishing via GitHub Actions, enabling streamlined deployment of new versions.

### Requirements

* "@types/node": "20.x"

* "typescript": "^5.8.3"

* "node.js": "^v20.18.0"

* "npm": "^11.4.1"

* Visual Studio Code (v1.85+)

### Usage

Once installed and activated, CodeWise automatically monitors your Git workspace for new commits. When a commit is made, the extension triggers a background process that analyzes the committed code and generates a comprehensive report with architectural insights and improvement suggestions.

Follow these steps to use CodeWise:

1. **Open a Git-based project in VS Code.**  
   Ensure the project is tracked by Git and has at least one workspace folder opened.

2. **Make a commit.**  
   When you commit code, CodeWise detects the change and analyzes it automatically.

3. **Wait for the analysis.**  
   Within seconds, CodeWise runs a set of LLM agents to analyze your code based on architecture, integration, design patterns, SOLID principles, and framework usage.

4. **Check the output report.**  
   A new file named `commit_analysis_report.md` will be created in the root of your project, containing a detailed summary of findings and suggestions.

5. **Review and refactor.**  
   Open the report to review the suggestions. Use the insights to refactor and improve your code quality before pushing to remote repositories.

> The process is fully automated and non-intrusive. Developers commit code as usual; CodeWise works silently in the background.