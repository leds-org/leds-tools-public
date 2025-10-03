---
sidebar_position: 3
title: Improvement Suggestions
description: A list of potential new features and ideas to contribute to CodeWise.
---

# Improvement Suggestions

This document lists some ideas for new features and improvements. They are great starting points for anyone looking to contribute to the CodeWise project.

### Suggestion 1: Support for Local AI Models via Ollama

#### Concept
Allow CodeWise to use language models (LLMs) running locally on the developer's machine through Ollama, instead of exclusively depending on the Google Gemini API.

#### Justification
-   **Security and Data Privacy:** Source code would never leave the user's machine.
-   **Cost Reduction:** Removes the dependency on paid API keys and consumption costs, making the tool more efficient.
-   **Offline Use:** Would allow developers to use the tool without an internet connection.
-   **Flexibility:** Users could choose the model that best suits their hardware and needs (e.g., Llama 3, Mistral, CodeLlama).

#### Risks and Considerations
-   **Hardware Requirements:** Local models demand significant RAM and ideally a GPU.
-   **Analysis Quality:** The quality of the analysis might vary and could potentially be lower than the Gemini API models.
-   **Setup Complexity:** Adds an extra setup step for the user (installing and managing Ollama).

---

### Suggestion 2: "Code Mentor" Agent with Educational Suggestions

#### Concept
Add a new AI agent to the team that acts as a mentor. Based on the analysis of S.O.L.I.D., architecture, and "code smells," this agent would suggest articles, courses, or videos to help the developer improve their skills.

#### Justification
-   **Continuous Learning:** Transforms the tool from a simple "code reviewer" into a platform for professional growth.
-   **Actionable Feedback:** Instead of just pointing out an error, the tool would also offer a path to learning the solution.
-   **Junior Developer Onboarding:** It would be extremely valuable for junior developers, providing personalized and contextualized guidance.

#### Implementation Idea
An idea for implementing this is to create a new `code_mentor_agent` and a corresponding `mentoring_task`. After the main analysis is complete, this new agent would take the results as context and search for relevant educational links. The output would be a new "Learning Suggestions" section in the PR comment.

For a more advanced feature, a local JSON file could be used to track the history of errors, allowing the agent to identify recurring issues and provide more targeted feedback.