---
sidebar_position: 2
title: How to Add a New AI Agent
description: A guide to extend CodeWise's analytical capabilities
---

# How to Add a New AI Agent

Extending CodeWise with a new type of analysis (e.g., "Security Analysis") involves creating a new specialized AI agent. The process is designed to be modular.

### 1. Create a New Agent Definition (`config/agents.yaml`)

Define your new agent with a specific role and goal. For example, a `security_specialist_agent`:

```yaml
security_specialist_agent:
  role: 'CyberSecurity Specialist'
  goal: 'Analyze code for common security vulnerabilities (like SQL Injection, XSS) and suggest best practices for secure coding.'
  backstory: 'An experienced security expert focused on proactive threat detection in code.'
```

### 2. Create a New Task Definition (`config/tasks.yaml`)

Define a task that instructs your new agent on what to do with the code context it receives.

```yaml
security_analysis_task:
  description: 'Review the provided code diff for potential security vulnerabilities. Provide a list of findings and suggest concrete code changes to mitigate them.'
  expected_output: 'A markdown list of security vulnerabilities found, with code examples for correction.'
```

### 3. Integrate into the Crew (`codewise_lib/crew.py`)

Add the new agent and task to the main analysis Crew. This ensures it will be executed along with the other agents.

### 4. Orchestrate the New Task (`codewise_lib/cw_runner.py`)

Ensure the output of your new task is captured and correctly formatted into the final Pull Request comment, likely under a new "Security Analysis" section.
