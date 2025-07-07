---
sidebar_position: 8
title: Migration Guide
---

# Migration Guide: Upgrading to Latest MADE Version

This guide helps you migrate from older versions of MADE to the latest version with enhanced features and improved syntax.

## Breaking Changes

### 1. Date Format Change

**Old Format (DD/MM/YYYY):**
```js
project myproject {
    startDate: 15/01/2024
    dueDate: 31/12/2024
}
```

**New Format (YYYY-MM-DD - ISO 8601):**
```js
project myproject {
    startDate: 2024-01-15
    dueDate: 2024-12-31
}
```

**Migration:** Update all date fields to use ISO format (YYYY-MM-DD).

### 2. NPM Package Name

**Old:**
```bash
npm install -g made-cli
```

**New:**
```bash
npm install -g made-beta
```

**Migration:** Uninstall the old package and install the new one:
```bash
npm uninstall -g made-cli
npm install -g made-beta
```

### 3. CLI Commands

**Old:**
```bash
made-cli generate project.made
made-cli sync project.made
```

**New:**
```bash
made-cli generate project.made
made-cli github project.made
```

**Migration:** Update your scripts and documentation to use the new command names.

### 4. VS Code Extension Commands

**Old Context Menu:**
- "Synchronize With Project Management"

**New Context Menu:**
- "Generate Documentation"
- "Generate Github Issues"

**Migration:** Use the new context menu options for their specific purposes.

## New Features to Adopt

### 1. Enhanced Roadmap Support

Add roadmaps to your projects for strategic planning:

```js
roadmap myRoadmap {
    name: "Project Roadmap"
    description: "Strategic project timeline"
    
    milestone phase1 {
        name: "Phase 1"
        startDate: 2024-01-15
        dueDate: 2024-03-30
        status: IN_PROGRESS
        
        release v1 {
            name: "Version 1.0"
            version: "1.0.0"
            item: Backlog.epic1
            status: IN_DEVELOPMENT
        }
    }
}
```

### 2. GitHub Integration

Create a `.env` file in your project directory:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_ORG=your_github_organization
GITHUB_REPO=your_repository_name
```

### 3. Enhanced Sprint Status Tracking

Update your sprints with proper status tracking:

```js
sprint mySprint {
    name: "Sprint 1"
    startDate: 2024-01-15
    endDate: 2024-01-29
    status: IN_PROGRESS  // PLANNED, IN_PROGRESS, COMPLETED        
    sprintbacklog items {
            item Backlog.epic1.story1 {
                assignee: team.member1
                status: DOING  // TODO, DOING, DONE
                dueDate: 2024-01-25
                startDate: 2024-01-20      // optional
                completedDate: 2024-01-24  // optional when DONE
            }
        }
}
```

## Validation and Testing

### 1. Validate Date Formats

Run the CLI tool to validate your updated `.made` files:

```bash
made-cli generate project.made
```

Any date format errors will be reported with clear error messages.

### 2. Test GitHub Integration

Ensure your GitHub integration works:

```bash
made-cli github project.made
```

### 3. Generate Documentation

Test the enhanced documentation features:

```bash
made-cli generate project.made --destination ./docs
```

## Enhanced Documentation Features

The new version provides significantly improved documentation:

- **Sprint Reports**: Detailed analytics with velocity, burndown charts
- **Roadmap Visualization**: Timeline charts and milestone tracking  
- **Team Analytics**: Workload distribution and performance metrics
- **Dependency Analysis**: Visual dependency graphs using Mermaid
- **Monte Carlo Simulation**: Probabilistic delivery forecasting

## Common Migration Issues

### Issue 1: Date Validation Errors

**Problem:** Old DD/MM/YYYY dates cause validation errors.

**Solution:** Convert all dates to YYYY-MM-DD format.

### Issue 2: CLI Command Not Found

**Problem:** `made-cli` command not recognized.

**Solution:** Install the new package:
```bash
npm install -g made-beta
```

### Issue 3: GitHub Integration Failures

**Problem:** GitHub push commands fail.

**Solution:** 
1. Create `.env` file with proper tokens
2. Ensure GitHub token has correct permissions
3. Verify repository access

### Issue 4: Missing Context Menu Options

**Problem:** Old VS Code extension installed.

**Solution:** 
1. Update the VS Code extension to "MADE - Leds - Beta"
2. Reload VS Code after installation

## Best Practices

1. **Date Consistency**: Always use ISO format for dates
2. **Version Control**: Keep `.env` files out of version control
3. **Documentation**: Use the new documentation features for project visibility
4. **GitHub Integration**: Leverage GitHub sync for team collaboration
5. **Roadmap Planning**: Use roadmaps for strategic project management

## Getting Help

If you encounter issues during migration:

1. Check the [FAQ](7_faq.md) for common solutions
2. Validate your `.made` files with `made-cli generate`
3. Review the [Language Documentation](5_lang.md) for syntax updates
4. Use `made-cli --help` for CLI assistance

This migration should significantly enhance your project management capabilities while maintaining all existing functionality.
