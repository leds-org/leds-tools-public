---
sidebar_position: 3
---

# Using MADE in VS Code — Your Interactive Guide

**Love visual tools?** The MADE VS Code extension is perfect for you! It gives you syntax highlighting, error checking, and point-and-click commands to generate documentation and GitHub issues.

**What you'll learn**: How to set up the extension and use it effectively, with screenshots of what to expect.

---

## Why Use the VS Code Extension?

✅ **Smart editing**: Autocomplete and syntax highlighting for `.made` files  
✅ **Instant feedback**: See errors as you type  
✅ **One-click actions**: Generate docs or sync GitHub with right-click menus  
✅ **Familiar interface**: Use the editor you already know

---

## Step 1: Install the MADE Extension

### Method 1: Extension Marketplace (Recommended)
1. **Open VS Code**
2. **Press `Ctrl+Shift+X`** (or click the Extensions icon in the sidebar)
3. **Search for "MADE - Leds - Beta"**
4. **Click "Install"**

### Method 2: Manual Installation (For Developers)
1. Download the `.vsix` file from the Releases page
2. In VS Code: `Ctrl+Shift+P` → "Extensions: Install from VSIX"
3. Select the downloaded file

**🎉 Success indicator**: You'll see syntax highlighting when you open `.made` files

---

## Step 2: Create Your First Project

### 2.1: Create the File
1. **Open a folder in VS Code** (File → Open Folder)
2. **Create a new file**: Right-click in Explorer → New File
3. **Name it `project.made`** (the `.made` extension is important!)

### 2.2: Add Basic Content
Copy this starter template into your file:

```made
project myproject {
    name: "My First MADE Project"
    description: "Learning MADE step by step"
    startDate: 2024-01-01
    dueDate: 2024-12-31
}

team developers {
    name: "Development Team"
    
    teammember me {
        name: "Your Name Here"
        email: "your.email@example.com"
    }
}
```

**💡 Notice**: As you type, VS Code provides autocomplete suggestions and highlights syntax errors in red.

---

## Step 3: Generate Documentation (The Magic Happens!)

### Option 1: Right-Click Method (Easiest)
1. **Right-click on your `project.made` file** in the Explorer panel
2. **Select "MADE: Generate Documentation"**
3. **Watch the magic**: New files appear in a `reports` folder!

### Option 2: Command Palette Method
1. **Open your `.made` file**
2. **Press `Ctrl+Shift+P`** to open Command Palette
3. **Type "MADE: Generate"** and select "MADE: Generate Documentation"

### What You'll See
After generation, VS Code creates:
```
📁 reports/
  📄 01_overview.md        ← Project summary
  📄 02_backlogs.md       ← Task lists  
  📄 03_roadmap.md        ← Timeline
  📁 sprints/             ← Sprint details
```

**🔍 Tip**: Click on the generated files to see beautifully formatted documentation!

---

## Step 4: GitHub Integration (Optional but Powerful)

**Want MADE to create GitHub issues automatically?** Here's how:

### 4.1: Set Up Your GitHub Connection
1. **Create a `.env` file** in the same folder as your `project.made`
2. **Add your GitHub details**:

```env
GITHUB_TOKEN=your_personal_access_token
GITHUB_ORG=your_github_username
GITHUB_REPO=your_repository_name
```

**Where to get a token**: GitHub.com → Settings → Developer settings → Personal access tokens

### 4.2: Sync with GitHub
1. **Right-click your `.made` file**
2. **Select "MADE: Generate GitHub Issues"**
3. **Check your GitHub repository** — issues appear automatically!

---

## Step 5: Advanced Features

### Real-Time Error Checking
- **Red squiggles**: Show syntax errors as you type
- **Problems panel**: `Ctrl+Shift+M` to see all issues
- **Hover tooltips**: Place cursor over errors for explanations

### Smart IntelliSense
- **Auto-completion**: Press `Ctrl+Space` for suggestions
- **Syntax hints**: VS Code knows the MADE language structure
- **Reference links**: Jump between related items with `Ctrl+Click`

### Output Panel (For Debugging)
- **View → Output**: Select "MADE" from dropdown
- **See generation logs**: Detailed information about what MADE is doing
- **Debug errors**: Full error messages when something goes wrong

---

## Troubleshooting Made Easy

### "No syntax highlighting"
**Solution**: Make sure your file ends with `.made` and the extension is installed

### "MADE commands not appearing"
**Solution**: Restart VS Code after installing the extension

### "GitHub sync failed"
**Solutions**:
- Check your `.env` file is in the correct location
- Verify your GitHub token has `repo` permissions
- Ensure repository name matches exactly (case-sensitive)

### "Generation errors"
**Solutions**:
- Check the Problems panel (`Ctrl+Shift+M`) for syntax errors
- Look at the Output panel for detailed error messages
- Start with a simple example and build complexity gradually

---

## Pro Tips for Power Users

🚀 **Keyboard shortcuts**: Set up custom shortcuts for MADE commands  
📁 **Workspace settings**: Configure default output folders per project  
🔄 **Auto-generation**: Set up file watchers to regenerate on save  
🎨 **Themes**: MADE syntax works with all VS Code color themes