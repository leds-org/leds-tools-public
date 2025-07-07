---
sidebar_position: 3
title: Installation
---

MADE can be installed in multiple ways to suit different development workflows:

## VS Code Extension

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "MADE - Leds - Beta"
4. Click **Install**

## CLI Tool (NPM)

Install the CLI tool globally or use it locally:

```bash
# Install globally
npm install -g made-beta

# Or use locally
npx made-beta --help

# Check version (note: command is made-cli, package is made-beta)
made-cli --version
```

## Manual Installation (VSIX)

1. Download the latest `.vsix` file from the releases
2. Open Visual Studio Code
3. Go to Extensions view (Ctrl+Shift+X)
4. Click the "..." menu and select "Install from VSIX..."
5. Choose the downloaded `.vsix` file

## GitHub Integration Setup

To use GitHub integration features, create a `.env` file in your project directory:

```env
GITHUB_TOKEN=your_github_token
GITHUB_ORG=your_organization
GITHUB_REPO=your_repository
```

**Note:** Make sure to add `.env` to your `.gitignore` file to keep your tokens secure.