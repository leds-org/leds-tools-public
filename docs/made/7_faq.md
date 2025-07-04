---
sidebar_position: 7
title: Frequently Asked Questions
---

Here we've compiled answers to some of the most common questions about MADE, including new features and migration topics.

## Installation and Setup

### Q: How do I install the latest version of MADE?

**A:** Install the NPM package globally:
```bash
npm install -g made-beta
```

For VS Code, search for "MADE - Leds - Beta" in the Extensions marketplace.

### Q: What happened to `made-cli`?

**A:** The package has been renamed to `made-beta`. Uninstall the old version and install the new one:
```bash
npm uninstall -g made-cli
npm install -g made-beta
```

**Important Note:** The package name is `made-beta` but the CLI command is still `made-cli`.

### Q: How do I set up GitHub integration?

**A:** Create a `.env` file in your project directory with:
```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_ORG=your_github_organization
GITHUB_REPO=your_repository_name
```

Make sure your GitHub token has `repo` and `project` permissions.

## Date Format and Syntax

### Q: Why are my dates showing validation errors?

**A:** MADE now uses ISO 8601 date format (YYYY-MM-DD). Update your dates:
- ❌ Old: `startDate: 15/01/2024`
- ✅ New: `startDate: 2024-01-15`

### Q: Can I still use the old date format?

**A:** No, the old DD/MM/YYYY format is no longer supported. You must use YYYY-MM-DD format for all date fields.

## VS Code Extension

### Q: The right-click menu options have changed. What do they do?

**A:** The new context menu provides two specific options:
- **"Generate Documentation"**: Creates comprehensive markdown reports and charts
- **"Generate Github Issues"**: Syncs your project with GitHub Issues and Projects

### Q: Where is "Synchronize With Project Management"?

**A:** This has been replaced with more specific commands. Use "Generate Github Issues" for GitHub integration.

## CLI Commands

### Q: What CLI commands are available?

**A:** Main commands:
```bash
# Generate documentation and reports
made-cli generate project.made

# Sync with GitHub
made-cli github project.made

# View help
made-cli --help

# Check version
made-cli --version
```

### Q: How do I specify output directory for documentation?

**A:** Use the `-d` or `--destination` option:
```bash
made-cli generate project.made -d ./docs
```

## GitHub Integration

### Q: What gets created in GitHub when I use the sync feature?

**A:** MADE creates:
- **Issues** for epics, stories, and tasks using structured templates
- **Milestones** for roadmap milestones
- **Project boards** for sprint tracking
- **Labels** for categorization
- **Assignments** based on your team definitions

### Q: Can I customize the GitHub issue templates?

**A:** MADE uses pre-defined templates optimized for agile project management. The templates include:
- **Epic Template**: Focuses on high-level objectives and related features
- **Feature/Story Template**: Includes requirements, tasks, and acceptance criteria
- **Task Template**: Emphasizes deliverables and clear objectives
- **Sprint Template**: Provides sprint planning structure with backlog table

All templates include PR integration reminders and Brazilian Portuguese language support.

### Q: Can I sync with private repositories?

**A:** Yes, as long as your GitHub token has access to the private repository and the correct permissions.

### Q: How do I handle GitHub API rate limits?

**A:** MADE automatically handles rate limiting. For large projects, the sync process may take longer but will complete successfully.

## Documentation and Reports

### Q: What types of reports does MADE generate?

**A:** MADE generates:
- Sprint reports with velocity and burndown charts
- Roadmap visualization with timeline charts
- Team workload and performance analytics
- Dependency analysis with Mermaid diagrams
- Monte Carlo simulations for delivery forecasting
- Cumulative flow diagrams

### Q: Where are the generated files saved?

**A:** By default, files are saved in a `generated` folder next to your `.made` file. Use the `-d` option to specify a different location.

## Roadmaps and Planning

### Q: How do roadmaps differ from regular planning?

**A:** Roadmaps provide strategic, long-term planning with:
- **Milestones** for major project phases
- **Releases** with semantic versioning
- **Dependencies** between milestones
- **Status tracking** for strategic goals

### Q: Can I have multiple roadmaps in one project?

**A:** Yes, you can define multiple roadmaps for different aspects of your project.

## Migration and Compatibility

### Q: Do I need to update existing `.made` files?

**A:** Yes, you need to:
1. Update all dates to YYYY-MM-DD format
2. Update any scripts to use `made-beta` instead of `made-cli`
3. Consider adding roadmaps for better strategic planning

### Q: Will my old `.made` files work with the new version?

**A:** They will work after updating the date format. The CLI will show clear validation errors for any issues.

### Q: How do I migrate my team from the old version?

**A:** Follow the [Migration Guide](7_migration.md) for step-by-step instructions.

## Troubleshooting

### Q: I'm getting "command not found" errors.

**A:** Ensure you've installed the correct package:
```bash
npm install -g made-beta
```

### Q: GitHub sync is failing with authentication errors.

**A:** Check that:
1. Your `.env` file is in the same directory as your `.made` file
2. Your GitHub token has the correct permissions
3. The repository name and organization are correct

### Q: Documentation generation is slow or fails.

**A:** This may happen with very large projects. Try:
1. Reducing the number of items in your sprints
2. Checking for circular dependencies
3. Ensuring all referenced items exist

### Q: How do I report bugs or request features?

**A:** Please use the GitHub repository issue tracker for bug reports and feature requests. Include your `.made` file content (sanitized) and error messages.
