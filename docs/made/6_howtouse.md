---
sidebar_position: 6
title: How to Use
---

## Basic Usage

1. Create a file with any name and the `.made` extension.
2. Define your project structure using the [MADE language](5_lang.md).
3. Save the `.made` file.
4. Right-click anywhere inside the file and choose from the available options:
   - **"Generate Documentation"** - Creates markdown documentation and reports
   - **"Generate Github Issues"** - Pushes to GitHub Issues/Projects

## VS Code Extension Commands

The MADE extension provides two main commands accessible via right-click context menu:

### Generate Documentation
Creates comprehensive markdown documentation including:
- Project overview
- Sprint reports with metrics
- Backlog visualization
- Roadmap charts
- Team member assignments
- Dependency diagrams

### Generate Github Issues
Synchronizes your MADE project with GitHub:
- Creates GitHub Issues for epics, stories, and tasks
- Sets up GitHub Projects for sprint tracking
- Creates milestones for roadmap items
- Assigns team members to issues
- Maintains dependencies between issues

## CLI Usage

You can also use MADE via command line:

```bash
# Generate documentation
made-cli generate project.made

# Push to GitHub (requires .env configuration)
made-cli github project.made

# View help
made-cli --help
```

## GitHub Integration Setup

For GitHub integration, create a `.env` file in the same directory as your `.made` file:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_ORG=your_github_organization_or_username
GITHUB_REPO=your_repository_name
```

**Note:** Make sure to add `.env` to your `.gitignore` file to keep your tokens secure.

### GitHub Token Permissions

Your GitHub token needs the following permissions:
- `repo` - Full repository access
- `write:org` - Organization write access (if using organization projects)
- `project` - Project access

## GitHub Issue Templates

When MADE creates GitHub issues, it uses structured templates to ensure consistency and completeness. Each issue type has its own template:

### Epic Template
```markdown
**⚠️ Entregas são feitas via PR. Associe este Epic às features correspondentes.**

# Descrição
[Descreva de forma clara e sucinta o propósito da Epic.]

# Features relacionadas
- [ ] [FEATURE] Feature Name - Feature description

# Critérios de Aceitação (Epic-Level)
- [Adicione critérios de aceitação]

## Observações
[Observações adicionais, se houver]
```

### Feature/Story Template
```markdown
**⚠️ Entregas são feitas via PR. Associe este issue ao pull request correspondente.**

# Descrição
[Descreva de forma clara e sucinta o propósito da funcionalidade.]

## Requisitos Técnicos
- [Adicione requisitos]

# Atividades a serem realizadas
- [ ] [TASK] Task Name - Task description

# Critérios de Aceitação (Feature-Level)
- [Adicione critérios de aceitação]

## Observações
[Observações adicionais, se houver]
```

### Task Template
```markdown
**⚠️ Entregas são feitas via PR. Associe este issue ao pull request correspondente.**

# Objetivo da Tarefa  
[Descreva de forma clara e sucinta o propósito da tarefa.]

# Entregáveis
- [Adicione entregáveis]

## Observações
[Observações adicionais, se houver]
```

### Sprint Template
```markdown
# [SPRINT] Sprint Name

## Descrição
Sprint description here

## Dados da Sprint
* **Goal**: Sprint objective
* **Data Início**: DD/MM/YYYY
* **Data Fim**: DD/MM/YYYY
* **Status**: PLANNED

## Sprint Backlog

| Nome | Responsável | Data Início Planejada | Data Fim Planejada | Status |
|------|-------------|:--------------------:|:------------------:|:------:|
| Task Name | Assignee | DD/MM/YYYY | DD/MM/YYYY | TODO |

## Dependências e Ordem de Execução

As tasks desta sprint possuem as seguintes dependências:

- **Task #123** depende de: Task #122
- **Task #124** pode ser iniciada imediatamente
```

**Template Features:**
- **Consistent Structure**: All templates follow a standardized format
- **Progress Tracking**: Built-in checklists for related items
- **PR Integration**: Clear instructions for linking pull requests
- **Dependencies**: Automatic reference linking between issues
- **Brazilian Portuguese**: Templates optimized for Portuguese-speaking teams
- **Labels**: Automatic labeling by type (Epic, Feature, Task, Sprint)
