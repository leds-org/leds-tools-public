---
sidebar_position: 1
title: Overview
description: What is CodeWise and what are its key features.
---

# CodeWise Overview

**CodeWise** is a tool that optimizes the code review process by transforming requirement models into ready-to-use documentation and tests, saving time and reducing errors. It is an installable library that uses AI to analyze code and automate Pull Request documentation through Git hooks.

Its core purpose is to reduce the manual effort of reviewers, standardize code architecture, and make the development process more efficient and sustainable.

## Key Features

- **Title Generation:** Creates clear and concise PR titles following the *Conventional Commits* standard.
- **Description Generation:** Writes detailed descriptions based on code changes.
- **Technical Analysis:** Posts a comment on the PR with an executive summary of architectural improvements, adherence to S.O.L.I.D. principles, and other quality points.
- **Automation with Hooks:** Integrates into your Git workflow to run automatically on every `git commit` and `git push`.