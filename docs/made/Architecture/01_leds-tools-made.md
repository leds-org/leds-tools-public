# VS Code Extension – `leds-tools-made`

## Purpose

Core plugin that lets users define projects and agile data through a custom DSL (`.made` files). It interprets those files, manages data via modular applications, and can generate documentation via integration with `made-lib`.

## Main Components

### Applications

Located in `application/`. Each handles a domain like Project, Team, TimeBox, Backlog, etc.

### Langium DSL Integration

Found in `language/`, defining the grammar for `.made` files, scope resolution, and linking.

### Report Generation

Integrated with `made-lib` to output markdown, charts, and documentation.

## Key Directories

```
application/       # Project, Team, TimeBox, Issue, Backlog, etc.
language/          # Langium grammar and generated parser
static/            # Monaco Editor UI files
example/           # Sample .made files
```

## Latest Updates

### NPM Package
The CLI tool is now available as `made-beta` on NPM:
```bash
npm install -g made-beta
```

### Enhanced Features
- **ISO Date Format**: All dates now use YYYY-MM-DD format for consistency
- **GitHub Integration**: Direct synchronization with GitHub Issues, Projects, and Milestones
- **Advanced Analytics**: Monte Carlo simulations, CFD charts, and velocity tracking
- **Roadmap Management**: Strategic planning with milestones and releases
- **VS Code Commands**: Updated context menu with "Generate Documentation" and "Generate Github Issues"

### CLI Commands
```bash
# Generate comprehensive documentation
made-cli generate project.made

# Sync with GitHub (requires .env configuration)
made-cli github project.made

# View help and options
made-cli --help
```
