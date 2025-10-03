---
sidebar_position: 9
title: Workflow Breakdown
description: The internal process behind CodeWise
---

# Workflow Breakdown

The following steps describe the internal process behind CodeWise:

1. **Git Commit Detection**  
   CodeWise watches the `.git/logs/HEAD` file to detect when a new commit is made. This enables real-time, non-intrusive monitoring of commit activity without requiring Git hooks.

2. **Extract Commit Information**  
   Once a commit is detected, the system extracts:
   - Commit hash, author, date, and message
   - Changed files and corresponding diffs

   This information is formatted and saved in a temporary file (`gitInput.txt`) to serve as input for the language models.

3. **Invoke LLM Agents in Parallel**  
   CodeWise leverages a set of specialized agents (built on top of LangChain + LangGraph), each trained to analyze a specific dimension of the codebase:
   - **Architect Agent**: Analyzes folder structure and determines the architectural pattern used (e.g., MVC, Clean Architecture).
   - **Integration Agent**: Reviews module coupling and suggests integration improvements.
   - **SOLID Agent**: Detects violations of SOLID principles and proposes corrections.
   - **Framework Analyst**: Suggests alternative frameworks or improvements in the usage of existing ones.
   - **Design Pattern Advisor**: Recommends design patterns suitable for scalability, reusability, or maintainability.

4. **Merge Results into Markdown Report**  
   The results from all LLMs are aggregated into a structured markdown report (`commit_analysis_report.md`), which includes individual sections for each agent’s findings.

5. **Clean Up and Await Next Commit**  
   After the report is generated, temporary files are deleted and the extension continues monitoring for future commits.

This automated cycle ensures that every commit is reviewed by AI before it even reaches the remote repository — enabling proactive quality control and faster feedback for developers.