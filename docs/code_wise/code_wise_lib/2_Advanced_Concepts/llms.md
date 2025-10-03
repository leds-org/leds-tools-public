---
sidebar_position: 3
title: How to Support a New LLM
description: A guide to integrate a different Language Model like a local one via Ollama
---

# How to Support a New LLM (e.g., via Ollama)

CodeWise can be extended to support different LLMs, such as local models running through Ollama. This allows for offline use, cost reduction, and enhanced data privacy.

### 1. Update the Configuration (`.env`)

The first step is to allow the user to choose their LLM provider. This can be done by adding a new variable to the `.env` file:

```env
# Options: "gemini" or "ollama"
LLM_PROVIDER=ollama

# Specify the local model to be used by Ollama
OLLAMA_MODEL=llama3
```

### 2. Modify the AI Core (`codewise_lib/crew.py`)

In the Codewise class constructor, implement a factory logic that instantiates the correct LLM based on the environment variable. CrewAI has native support for Ollama, making this straightforward.

```python
# At the beginning of the file
from crewai_tools import Ollama

# Inside the Codewise class __init__ method
llm_provider = os.getenv("LLM_PROVIDER", "gemini")

if llm_provider == "ollama":
    ollama_model = os.getenv("OLLAMA_MODEL", "llama3")
    # Assumes Ollama is running on the default local address
    self.llm = Ollama(model=ollama_model)
else:
    # The existing Gemini LLM instantiation
    self.llm = LLM(model="gemini/gemini-2.0-flash", ...)
```

### 3. Update the Documentation

The installation guide must be updated to include instructions on how to install Ollama, download a model (e.g., `ollama pull llama3`), and configure the new variables in the `.env` file.
