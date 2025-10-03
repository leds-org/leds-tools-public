# Tool Architecture

> 🏗️ **For Developers**: Understanding MADE's internal architecture for debugging, extending, or contributing to the project.

## 🎯 Quick Overview

MADE Tool processes `.made` files through this pipeline:
```
.made file → Language Server → ApplicationManager → Sprint Ceremonies → JSON Output → made-lib-beta Integration
```

**Key Components:**
- **Language Server**: Parses and validates `.made` files using Langium
- **ApplicationManager**: Orchestrates processing through "Sprint Ceremonies" (Singleton pattern)
- **Applications**: Handle specific domains (Team, Process, Backlog, etc.)
- **Builders**: Construct objects using Builder pattern
- **made-lib-beta**: Generates final outputs (docs, GitHub integration)

---

## 🧱 Core Components

### 1. Language Layer (`src/language/`) 📝
- **`made.langium`** - Grammar definition for the MADE DSL
```langium
Project: 'project' name=ID '{' components+=Component* '}';
Team: 'team' name=ID '{' teammember+=TeamMember* '}';
```
- **`main.ts`** - Language server entry point
- **`made-validator.ts`** - Semantic validation rules
```typescript
checks: {
    Project: validateProject,
    Team: validateTeamSize
}
```
- **`generated/`** - Auto-generated AST types (don't edit these!)

### 2. Application Layer (`src/cli/project_management/`) 🏭

**ApplicationManager (Singleton)** orchestrates processing through 6 "Sprint Ceremonies":
1. **MADE Backlog** - Creates issues from epics/stories/tasks
2. **MADE Team** - Processes team member assignments  
3. **MADE Projects** - Generates project structure
4. **MADE Processes** - Creates reusable process templates
5. **MADE Roadmap** - Builds release planning
6. **MADE Documentation** - Generates reports

**Key Patterns:**
- **AbstractApplication** - Base class for all applications
```typescript
abstract class AbstractApplication {
    protected db: LowSync<any>;
    abstract initialize(): Promise<void>;
}
```
- **Builder Pattern** - IssueBuilder, ProcessBuilder, etc.
```typescript
const issue = new IssueBuilder()
    .setTitle("User Login")
    .setAssignee(teamMember)
    .build();
```
- **LowDB** - JSON persistence for data storage
```typescript
this.db.data = { issues: [], teams: [] };
this.db.write();
```
- **Service Layer** - Utilities for file ops and HTTP calls
```typescript
createFile(path, content);
send(url, data, headers);
```

### 3. User Interfaces 🎨

**VS Code Extension (`src/extension/main.ts`)**
- Commands: `made.generateDocumentation`, `made.generateGithubIssues`
```typescript
vscode.commands.registerCommand("made.generateDocumentation", () => {
    generateAction(filepath, { only_project_documentation: true });
});
```
- Language server integration for syntax highlighting
- Environment variable support for GitHub integration
```bash
GITHUB_TOKEN=ghp_xxxx
GITHUB_ORG=myorg
GITHUB_REPO=myproject
```

**CLI (`src/cli/main.ts`)**
```bash
npx made-cli generate project.made -d ./output    # Generate docs
npx made-cli github project.made -t token -o org -r repo  # Push to GitHub
```

---

## 🔄 Processing Flow

```
.made file → Validation → AST Generation → ApplicationManager → Sprint Ceremonies → JSON Files → made-lib-beta → Outputs
```

1. **Parse & Validate**: Langium parses `.made` file and validates syntax
```typescript
const document = await langiumServices.shared.workspace.LangiumDocuments.getOrCreateDocument(uri);
const parseResult = document.parseResult;
```
2. **Extract Components**: Sort AST nodes by type (Team, Backlog, etc.)
```typescript
const teams = model.components.filter(c => c.$type === 'Team');
const backlogs = model.components.filter(c => c.$type === 'Backlog');
```
3. **Run Ceremonies**: ApplicationManager executes 6 initialization steps
```typescript
for (const ceremony of this.ceremonies) {
    await ceremony.execute();
}
```
4. **Build Objects**: Use Builder pattern to create structured data
5. **Persist Data**: Save to JSON files using LowDB
6. **Generate Outputs**: made-lib-beta creates docs and GitHub integration

---

## 🔗 made-lib-beta Integration

MADE Tool handles parsing and data extraction. **made-lib-beta** handles business logic and outputs:

```typescript
// After processing, integrate with library
const reportManager = new ReportManager();
await reportManager.createReport(dbPath);           // Generate docs
await reportManager.githubPush(/* parameters */);   // GitHub sync
```

**Data Flow**: `MADE Tool (AST Processing) → JSON Files → made-lib-beta (Business Logic) → Outputs`

---

## 🔧 Key Processing Functions

These functions handle the core transformations:

```typescript
// AST to Issue conversion
function astEpicToIssue(epic: Epic, sprintId: string): Issue { 
    return { id: epic.id, title: epic.name, sprint: sprintId }; 
}

// Backlog processing
function processBacklogs(backlogs: Backlog[]): Issue[] {
    return backlogs.flatMap(b => b.epics.map(e => astEpicToIssue(e, b.sprint)));
}

// Team assignment
function buildAssigneeMap(team: Person[]): Map<string, Person> {
    return new Map(team.map(p => [p.role, p]));
}
```

**Pattern**: AST Node → Processing Function → Structured Data → JSON Storage

---

## 🎨 VS Code Extension

**Two main commands**: made.generateDocumentation and made.generateGithubIssues

```typescript
// Extension activation
export function activate(context: vscode.ExtensionContext): void {
    registerGeneratorCommand(context);        // Documentation generator
    registerGitHubCommand(context);          // GitHub integration
    client = startLanguageClient(context);    // Language features
}
```

**Features**: Syntax highlighting, auto-completion, validation, and commands through language server.

```typescript
// Language server provides these features automatically:
// - Syntax highlighting for .made files
// - Error detection (red squiggles)
// - Auto-completion as you type
// - Hover information for elements
```

---

## 🔌 Extension Points

### 1. Langium Grammar Extensions

**Extend the DSL syntax** by modifying `src/language/made.langium`:

```langium
// Add new grammar rules
CustomBlock:
    'custom' name=ID '{'
        properties+=CustomProperty*
    '}';

CustomProperty:
    key=ID ':' value=STRING;

// Extend existing rules
Project:
    'project' name=ID '{'
        // ... existing properties
        customBlocks+=CustomBlock*  // ← Add your extension
    '}';
```

After grammar changes:
1. Run `npm run langium:generate` to regenerate AST types
2. Update validation rules in `made-validator.ts`
3. Add processing logic in ApplicationManager ceremonies

### 2. Processing Extensions

**InitializationStep pattern** for custom processing:

```typescript
// Add custom initialization steps
class CustomDataStep extends InitializationStep {
    execute(): void {
        // Your custom processing logic
    }
}
```

**Real extension points:**
- **Langium Grammar**: Add new DSL syntax and rules
```langium
// Add new component type
CustomResource: 'resource' name=ID '{' properties+=Property* '}';
```
- **Sprint Ceremonies**: Add new initialization steps
```typescript
class ResourceProcessingStep extends InitializationStep {
    execute(): void { /* process custom resources */ }
}
```
- **Builder Classes**: Extend existing builders
```typescript
class EnhancedIssueBuilder extends IssueBuilder {
    setPriority(p: string) { this.issue.priority = p; return this; }
}
```
- **Service Functions**: Add utility functions
```typescript
export function validateEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
}
```
- **Application Types**: Create new applications
```typescript
class ResourceApplication extends AbstractApplication {
    async initialize() { /* handle resources */ }
}
```
- **Validation Rules**: Add semantic validation in `made-validator.ts`
```typescript
const validateTeamSize: ValidationCheck<Team> = (team, accept) => {
    if (team.teammember.length > 10) {
        accept('warning', 'Large team size', { node: team });
    }
};
```

---

## 📚 Summary

**MADE Tool Architecture** follows a clear pipeline:

1. **Language Server** - Parses `.made` files using Langium
2. **ApplicationManager** - Orchestrates 6 "Sprint Ceremonies" 
3. **Processing Functions** - Transform AST to structured data
4. **JSON Storage** - Persist data using LowDB
5. **made-lib-beta** - Generate final outputs

**Key Patterns**: Singleton, Builder, Service Layer  
**Extension Points**: InitializationStep, Builders, Services

The architecture separates parsing (MADE Tool) from business logic (made-lib-beta), making it maintainable and extensible.