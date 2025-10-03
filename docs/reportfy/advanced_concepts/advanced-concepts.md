---
title: Advanced Concepts
sidebar-position: 1
---

# Advanced Concepts

## Architecture
1. The bot starts and connects to Discord.
2. Generates repository reports via Reportify.
3. Reads Markdown files generated in `./Reports`.
4. Creates a prompt for the Gemini API with the report data.
5. Receives the AI summary and sends it to the Discord channel.

## Data Flow
- GitHub Repo → Reportify → Markdown Reports → Gemini API → Discord Bot → Discord Channel

## Artifact Map
- `Reports/` → folder containing the generated reports  
- `ReportfyBot.py` → main bot script  
- `.env` → environment variables (tokens and keys)