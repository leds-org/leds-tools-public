# MADE Changelog

## Latest Version Updates

### 🎯 Major Changes

#### Package and Installation
- **NEW:** NPM package renamed from `made-cli` to `made-beta`
- **NEW:** VS Code extension renamed to "MADE - Leds - Beta"
- Updated installation instructions across all documentation

#### Date Format Standardization
- **BREAKING:** All dates now use ISO 8601 format (YYYY-MM-DD)
- Updated all examples and documentation
- Better integration with external tools and APIs

#### Enhanced Grammar and Syntax
- **NEW:** Added `complexity` attribute to sprint items (EASY, MEDIUM, HARD, SPIKE)
- **NEW:** Status values updated for sprints (CLOSED instead of COMPLETED)
- **NEW:** Status values updated for sprint items (DOING instead of IN_PROGRESS)
- **NEW:** Added DELAYED status for milestones
- **NEW:** Added TESTING status for releases

#### Backlog Enhancements
- **NEW:** `criterions` attribute for epics and stories (acceptance criteria)
- **NEW:** `requirements` attribute for stories (prerequisites)
- **NEW:** `deliverables` attribute for tasks (expected outputs)
- **NEW:** `observation` attribute for additional notes

#### Roadmap Improvements
- Enhanced milestone dependencies
- Better release management with semantic versioning
- Improved status tracking for milestones and releases

### 🚀 New Features

#### CLI Tool
- **NEW:** `made-cli generate` command for documentation generation
- **NEW:** `made-cli github` command for GitHub synchronization
- Enhanced error messages and validation
- Environment-based configuration support (.env files)

#### GitHub Integration
- Automatic synchronization with GitHub Issues and Projects
- Milestone creation for roadmap items
- Team member assignment to GitHub issues
- Dependency tracking between issues
- Support for GitHub project boards
- **NEW:** Structured issue templates for Epics, Features, Tasks, and Sprints

#### Advanced Analytics
- Monte Carlo simulation for delivery forecasts with 10,000+ simulations per analysis
- Cumulative flow diagrams (CFD) for workflow bottleneck identification
- Velocity tracking and throughput analysis with trend patterns
- Team performance and workload analysis with task distribution metrics
- Sprint summary reports with comprehensive completion probability analysis
- Project-level Monte Carlo forecasting with risk assessment and recommendations

#### Documentation Generation
- Visual roadmap charts and timelines
- Dependency diagrams with Mermaid
- Project-wide KPI reports
- Sprint burndown and velocity charts

### 🛠 Technical Improvements

#### VS Code Extension
- **NEW:** "Generate Documentation" context menu command
- **NEW:** "Generate Github Issues" context menu command
- Improved language server performance
- Better syntax highlighting and validation

#### Library Architecture
- Updated to `made-lib-beta` package
- Enhanced report generation engine
- Better modular architecture for reporting services
- Improved error handling and validation

### 📊 Documentation Updates

#### Updated Files
- `3_installation.md` - New installation instructions
- `4_metamodel.md` - Added Roadmap metamodel
- `5_lang.md` - Updated syntax and new attributes
- `6_howtouse.md` - New CLI commands and GitHub integration
- `7_migration.md` - Migration guide for breaking changes
- `7_faq_new.md` - Comprehensive FAQ with troubleshooting
- `Architecture/01_leds-tools-made.md` - Updated architecture documentation
- `Architecture/02_leds-tools-made-lib.md` - Enhanced library documentation

#### Updated Examples
- `simple-example.made` - Fixed date formats and syntax
- `simple-example-roadmap.made` - Updated with new features

### 🔧 Migration Required

#### For Existing Users
1. **Update Package:** `npm uninstall -g made-cli && npm install -g made-beta`
2. **Update Dates:** Convert all dates from DD/MM/YYYY to YYYY-MM-DD format
3. **Update Status Values:** Change COMPLETED to CLOSED for sprints, IN_PROGRESS to DOING for items
4. **Setup GitHub Integration:** Create `.env` file with GitHub credentials
5. **Update VS Code Extension:** Search for "MADE - Leds - Beta" in marketplace

### 🐛 Breaking Changes Summary
- NPM package name changed
- Date format changed to ISO 8601
- Some status values changed
- CLI command structure updated

### 📚 Resources
- [Migration Guide](7_migration.md) - Step-by-step migration instructions
- [FAQ](7_faq_new.md) - Common questions and troubleshooting
- [Language Reference](5_lang.md) - Complete syntax documentation
- [Installation Guide](3_installation.md) - Updated installation instructions
