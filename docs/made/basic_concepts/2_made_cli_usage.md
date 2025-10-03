---
sidebar_position: 4
---

# How to Use MADE CLI — Step by Step

**New to command-line tools?** Don't worry! This guide explains every step clearly and shows you exactly what to type.

## What is the CLI?

The **CLI** (Command Line Interface) is MADE's text-based tool. Instead of clicking buttons, you type commands to tell MADE what to do. It's faster once you learn it, and perfect for automation.

**Think of it like**: Giving instructions to a very obedient assistant who does exactly what you tell them.

---

## Step 1: Installation Options

You have two ways to use MADE's CLI:

### Option A: Install Once, Use Everywhere (Recommended)
```bash
npm install -g made-cli
```
**Benefit**: Type `made-cli` from anywhere on your computer

### Option B: Use Without Installing
```bash
npx made-cli --help
```
**Benefit**: No installation needed, but commands are longer

**💡 Tip**: If you're just trying MADE, use Option B. If you'll use it regularly, go with Option A.

---

## Step 2: Your First Commands

### Get Help (Start Here!)
```bash
npx made-cli --help
```
**What this does**: Shows you all available commands and options  
**When to use**: When you forget command syntax or want to explore features

### Generate Documentation
```bash
npx made-cli generate project.made -d ./documentation
```
**What this does**: 
- Reads your `project.made` file
- Creates documentation in the `./documentation` folder
- Includes reports, charts, and organized information

**What you'll see**: New files appear in your documentation folder with names like `01_overview.md`, `02_backlog.md`, etc.

### Sync with GitHub (Advanced)
```bash
npx made-cli github project.made
```
**What this does**: Creates GitHub issues and project boards based on your `.made` file  
**What you need first**: GitHub token setup (explained below)

---

## Step 3: GitHub Integration Setup

**Want MADE to create GitHub issues automatically?** Follow these steps:

### 3.1: Create a GitHub Token
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (and `write:org` if using organization)
4. Copy the generated token (keep it safe!)

### 3.2: Create Environment File
Create a `.env` file in the same folder as your `.made` file:

```env
GITHUB_TOKEN=your_actual_token_here
GITHUB_ORG=your_github_username_or_org
GITHUB_REPO=your_repository_name
```

**Example**:
```env
GITHUB_TOKEN=ghp_1234567890abcdef
GITHUB_ORG=mycompany
GITHUB_REPO=myproject
```

### 3.3: Test GitHub Integration
```bash
npx made-cli github project.made
```

**What happens**: MADE creates issues, labels, and project structure in your GitHub repository

---

## Complete Example Workflow

Here's a typical session from start to finish:

```bash
# 1. Create your project file (using any text editor)
# Save as: project.made

# 2. Generate documentation
npx made-cli generate project.made -d ./docs

# 3. Check what was created
ls ./docs

# 4. (Optional) Sync with GitHub
npx made-cli github project.made
```

**Expected results**:
- Documentation appears in `./docs` folder
- (If GitHub integration) Issues appear in your GitHub repository

---

## What MADE Creates for You

When you run `generate`, MADE produces:

📄 **Documentation Files**:
- `01_overview.md` — Project summary and team info
- `02_backlogs.md` — Your organized task lists  
- `03_roadmap.md` — Timeline and milestones
- `sprints/` folder — Individual sprint reports

📊 **Charts and Visuals**:
- SVG charts showing progress
- Timeline diagrams
- Dependency graphs

🔗 **GitHub Integration** (optional):
- Issues for each Epic, Story, and Task
- Proper labels and assignments
- Project boards and milestones

---

## Troubleshooting Common Issues

**"Command not found"**  
→ Make sure Node.js is installed: `node -v`

**"Permission denied"**  
→ Try a different output folder: `-d ./my-docs`

**"GitHub token invalid"**  
→ Check your `.env` file has the correct token and repository info

**"No .made file found"**  
→ Make sure you're in the right folder and the file exists: `ls *.made`