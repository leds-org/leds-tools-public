# Reporting & Visualization Library – `leds-tools-made-lib`

## Purpose

Generates markdown documentation and SVG diagrams from JSON or `.made`-derived data. This is the core reporting and visualization engine.

## Main Components

### Models (`models.ts`)

Data classes for Project, Sprint, Issue, etc.

### Markdown Services

- `MarkdownService.ts`: Orchestrates documentation generation.
- `MarkdownBacklogService.ts`, `MarkdownTimeBoxService.ts`, `MarkdownRoadmapService.ts`: Generate content for each respective domain.

### Chart Generators

- `CumulativeFlowDiagram.ts`, `ProjectCFD.ts`, `ProjectThroughputGenerator.ts`, etc.

### Dependency Analysis

- `ProjectDependencyAnalyzer.ts`: Outputs Mermaid diagrams.

### Graph Utilities

- `graph.ts`: Builds task-dependency graphs and checks cycles.

## Key Directories

```
markdown/           # MarkdownBacklogService, TimeBoxService, etc.
chart/              # SVG chart generators like CFD, throughput, dependencies
example/            # Generated markdown reports and diagrams
util/               # Common helpers (file paths, formatting)
```

## Latest Enhancements

**GitHub Integration:**
- `GitHubMilestonePushService.ts`: Automatic milestone synchronization
- Enhanced issue creation with proper date formatting
- Support for project boards and team assignments

**Date and Format Improvements:**
- ISO 8601 date format support (YYYY-MM-DD)
- Improved date parsing and validation
- Better internationalization support

**Updated Data Models:**
- Enhanced `TimeBox` model with status tracking
- Improved `Roadmap` and `Milestone` structures
- Better dependency management between items
