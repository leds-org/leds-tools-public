---
sidebar_position: 1
title: Development Setup
description: How to set up your local environment to contribute to CodeWise.
---

# Setting Up Your Development Environment

This guide is for developers who want to contribute to the CodeWise project. It explains how to set up the project locally to work on the source code.

### 1. Fork and Clone the Repository

First, create your own fork of the official CodeWise repository on GitHub. Then, clone your fork to your local machine:

```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/CodeWise.git
cd CodeWise
```

### 2. Create a Virtual Environment

It is crucial to work within a virtual environment to manage dependencies correctly.

```bash
# Create the environment
python3 -m venv .venv

# Activate the environment
# On Linux/WSL:
source .venv/bin/activate
# On Windows (PowerShell):
.\.venv\Scripts\activate
```

### 3. Install Dependencies in Editable Mode

Instead of installing the package from PyPI, you will install it from the local source code in "editable" mode. This allows your changes to the code to be reflected immediately when you run the tool.

```bash
# Install all required dependencies for development
pip install -e .
```

This command reads the `setup.py` file and links the `codewise-lib` package to your source code.

### 4. Configure the API Key

For testing, you still need a valid Google Gemini API key. Create a `.env` file in the project root, as described in the main installation guide.

```env
GEMINI_API_KEY=YOUR_TEST_KEY_HERE
MODEL_NAME=gemini-2.0-flash
```

### 5. Running the Tool Locally

With the setup complete, you can now run the tool directly from the source code for testing purposes. The main entry point is `codewise_lib/main.py`. For example:

```bash
# Example of running the tool in 'lint' mode on a test repository
python -m codewise_lib.main --repo /path/to/another/project --branch main --mode lint
```

You are now ready to start developing new features and improvements for CodeWise!
