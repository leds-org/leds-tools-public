# Grammar Tokens

> 📚 **For DSL Authors**: Want to write perfect `.made` files or extend the MADE language? This is your complete syntax reference with copy-paste examples!

## 🎯 What You'll Learn

By the end of this page, you'll know:
- Every token and syntax rule in the MADE DSL
- How to write syntactically correct `.made` files
- How to extend the grammar for custom needs
- Common patterns and best practices

## 🚀 Why Grammar Matters

Think of grammar as the **rules of a language** 📖:
- **Tokens** are like words in a dictionary
- **Grammar rules** are like sentence structure
- **Validation** catches mistakes before they cause problems
- **Extensions** let you add new "words" to the language

Understanding grammar helps you:
- ✅ **Write valid `.made` files** without syntax errors
- ✅ **Understand error messages** when something goes wrong
- ✅ **Extend MADE** with custom components
- ✅ **Debug complex projects** more effectively

---

## 🔧 Technical Foundation

The MADE DSL uses Langium grammar to define its syntax. Langium is a powerful framework that turns grammar definitions into parsers, language servers, and VS Code extensions automatically!

## 📊 Grammar Structure Overview

Here's how MADE's grammar is organized:

### Main Grammar Entry Point
```langium
grammar Made

import 'helpers'      # 🛠️ Utility functions and common patterns
import 'terminals'    # 📝 Basic building blocks (strings, dates, numbers)
import 'projects'     # 🏢 Project definitions
import 'backlog'      # 📋 Work breakdown structures
import 'processes'    # ⚙️ Workflow definitions
import 'timebox'      # 📅 Sprint and iteration management
import 'team'         # 👥 People and roles
import 'roadmap'      # 🗺️ Long-term planning

entry Model:
    (project=Project)                                    # Every .made file needs a project
    (components+=(Team|Process|Backlog|TimeBox|Roadmap))* # Plus any number of these components
```

> 💡 **Think of it as**: A `.made` file is like a **project folder** that must contain one project description and can contain any number of supporting documents (teams, backlogs, processes, etc.).

---

## 🧱 Core Tokens - Your Building Blocks

### 1. Project Definition 🏢

**What it does**: Defines the overall project information

```langium
Project:
    'project' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('dueDate:' dueDate=DATE)?
        ('completedDate:' completedDate=DATE)?
    '}';
```

**📝 Copy-Paste Example**:
```made
project MyAwesomeProject {
    name: "E-commerce Platform"
    description: "Building a modern online shopping experience"
    startDate: 2024-01-15
    dueDate: 2024-12-31
}
```

> 💡 **Grammar Notes**: 
> - `id=ID` means you give your project a unique identifier
> - `?` means optional - you don't have to include all fields
> - Dates must be in `YYYY-MM-DD` format

---

### 2. Team Structure 👥

**What it does**: Defines who's working on the project

```langium
Team:
    'team' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (teammember+=TeamMember)*
    '}';

TeamMember:
    'teammember' id=ID '{'
        'name:' name=STRING
        'email:' email=STRING
        ('discord:' discord=STRING)?
    '}';
```

**📝 Copy-Paste Example**:
```made
team DevelopmentTeam {
    name: "Core Development Team"
    description: "Full-stack developers and designers"
    
    teammember alice {
        name: "Alice Johnson"
        email: "alice@company.com"
        discord: "alice#1234"
    }
    
    teammember bob {
        name: "Bob Smith"
        email: "bob@company.com"
    }
}
```

> 🎯 **Pro Tip**: Team member IDs (like `alice`, `bob`) can be referenced later when assigning work!

---

### 3. Process Definition ⚙️

**What it does**: Defines your team's workflow and activities

```langium
Process:
    'process' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (activities+=Activity)*
    '}';

Activity:
    'activity' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('DefinitionDone:' definitionDone=STRING)?
        ('DefinitionReady:' definitionReady=STRING)?
        ('Learning:' learning=STRING)?
        ('Label:' label=ID)?
        (tasks+=TaskProcess)*
    '}';
```

**📝 Copy-Paste Example**:
```made
process ScrumProcess {
    name: "Agile Scrum Process"
    description: "Our team's agile development workflow"
    
    activity Development {
        name: "Development Phase"
        description: "Writing and testing code"
        DefinitionDone: "Code reviewed, tested, and merged"
        DefinitionReady: "Requirements clear, design approved"
        Learning: "Learn new frameworks as needed"
        Label: development
    }
}
```

> 💡 **Why define processes?** They create consistency and help new team members understand how work gets done.

---

### 4. Backlog Structure 📋

**What it does**: Breaks down work into manageable pieces

```langium
Backlog:
    'backlog' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (items+=BacklogItem)*
    '}';

Epic:
    'epic' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('process:' process=[Process:QualifiedName])?
        ('Criterions:' criterions=StringList)?
        ('observation:' observation=STRING)?
        (userstories+=UserStory)*
    '}';

UserStory:
    'story' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('activity:' activity=[Activity:QualifiedName])?
        ('depends:' depends=ReferenceList)?
        ('Requirements:' requirements=StringList)?
        ('Criterions:' criterions=StringList)?
        ('observation:' observation=STRING)?
        (tasks+=Task)*
    '}';

Task:
    'task' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('task:' taskRef=[TaskProcess:QualifiedName])?
        ('depends:' depends=ReferenceList)?
        ('Deliverables:' deliverables=StringList)?
    '}';
```

**📝 Copy-Paste Example**:
```made
backlog ProductBacklog {
    name: "E-commerce Product Backlog"
    description: "All features for our online store"
    
    epic UserManagement {
        name: "User Account Management"
        description: "Allow users to create and manage accounts"
        Criterions: "Secure login", "Password recovery", "Profile editing"
        
        story UserRegistration {
            name: "User Registration"
            description: "New users can create accounts"
            Requirements: "Email validation", "Strong passwords"
            
            task CreateRegistrationForm {
                name: "Create Registration Form"
                description: "Build HTML form with validation"
                Deliverables: "HTML form", "CSS styling", "JavaScript validation"
            }
            
            task SetupDatabase {
                name: "Setup User Database"
                description: "Create user table and APIs"
                Deliverables: "Database schema", "API endpoints"
            }
        }
    }
}
```

> 🎯 **Hierarchy Explained**: Epic → User Stories → Tasks. Like: Project → Features → Requirements → Implementation steps.

---

### 5. TimeBox (Sprint) Definition 📅

**What it does**: Organizes work into time-bounded iterations

```langium
TimeBox:
    'sprint' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('endDate:' endDate=DATE)?
        ('status:' status=SprintStatus)?
        ('comment:' comment=STRING)?
        ('completeDate:' completeDate=DATE)?
        (sprintbacklog+=SprintBacklog)*
    '}';

SprintBacklog:
    'sprintbacklog' id=ID '{'
        (items+=SprintItem)*
    '}';

SprintItem:
    'item' reference=[BacklogItem:QualifiedName] '{'
        ('assignee:' assignee=[TeamMember:QualifiedName])?
        ('dueDate:' dueDate=DATE)?
        ('startDate:' startDate=DATE)?
        ('completedDate:' completedDate=DATE)?
        ('status:' status=ItemStatus)?
        ('complexity:' complexity=Complexity)?
    '}';
```

**📝 Copy-Paste Example**:
```made
sprint Sprint1 {
    name: "Sprint 1 - User Foundation"
    description: "Basic user management features"
    startDate: 2024-01-15
    endDate: 2024-01-29
    status: IN_PROGRESS
    
    sprintbacklog Sprint1Backlog {
        item ProductBacklog.UserManagement.UserRegistration {
            assignee: DevelopmentTeam.alice
            startDate: 2024-01-15
            dueDate: 2024-01-25
            status: DOING
            complexity: MEDIUM
        }
    }
}
```

> 🔗 **Reference Magic**: Notice `ProductBacklog.UserManagement.UserRegistration` - this refers to the user story we defined earlier!

---

### 6. Roadmap Structure 🗺️

**What it does**: Plans long-term milestones and releases

```langium
Roadmap:
    'roadmap' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        (milestones+=Milestone)*
    '}';

Milestone:
    'milestone' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('startDate:' startDate=DATE)?
        ('dueDate:' dueDate=DATE)?
        ('completedDate:' completedDate=DATE)?
        ('status:' status=MilestoneStatus)?
        ('depends:' depends=[Milestone:QualifiedName])?
        (releases+=Release)*
    '}';

Release:
    'release' id=ID '{'
        ('name:' name=STRING)?
        ('description:' description=STRING)?
        ('version:' version=STRING)?
        ('dueDate:' dueDate=DATE)?
        ('releasedDate:' releasedDate=DATE)?
        ('status:' status=ReleaseStatus)?
        (('item:' item=[BacklogItem:QualifiedName]) | 
         ('itens:' items=ReferenceList))?
    '}';
```

**📝 Copy-Paste Example**:
```made
roadmap ProductRoadmap {
    name: "E-commerce Platform Roadmap"
    description: "Major milestones for our platform launch"
    
    milestone MVP {
        name: "Minimum Viable Product"
        description: "Basic store functionality"
        startDate: 2024-01-15
        dueDate: 2024-06-30
        status: IN_PROGRESS
        
        release V1_0 {
            name: "Version 1.0"
            description: "First public release"
            version: "1.0.0"
            dueDate: 2024-06-30
            status: IN_DEVELOPMENT
            itens: ProductBacklog.UserManagement, ProductBacklog.ProductCatalog
        }
    }
}
```

> 🎯 **Strategic Planning**: Roadmaps help you think beyond sprints to major product milestones and releases.

---

## 🔤 Terminal Definitions - The Basic Building Blocks

These are the **fundamental data types** MADE understands:

### Basic Types
```langium
terminal ID: /[_a-zA-Z][\w_]*/;     # Identifiers (like variable names)
terminal STRING: /"[^"]*"/;          # Text in quotes
terminal DATE: /\d{4}-\d{2}-\d{2}/; # Dates in YYYY-MM-DD format
terminal INT returns number: /[0-9]+/; # Whole numbers
```

**📝 Examples**:
```made
# ID examples (identifiers)
project MyProject        # ✅ Valid
team development_team    # ✅ Valid
epic user-management     # ❌ Invalid (no hyphens)

# STRING examples
name: "My Awesome Project"     # ✅ Valid
description: "Building cool stuff"  # ✅ Valid
name: My Project               # ❌ Invalid (needs quotes)

# DATE examples  
startDate: 2024-01-15         # ✅ Valid
dueDate: 2024-12-31          # ✅ Valid
startDate: "2024-01-15"      # ❌ Invalid (no quotes for dates)
startDate: 01/15/2024        # ❌ Invalid (wrong format)
```

### Enumerations - Predefined Values
```langium
enum SprintStatus:
    PLANNED | IN_PROGRESS | CLOSED;

enum ItemStatus:
    TODO | DOING | DONE;

enum Complexity:
    LOW | MEDIUM | HIGH;

enum MilestoneStatus:
    PLANNED | IN_PROGRESS | COMPLETED | CANCELLED;

enum ReleaseStatus:
    PLANNED | IN_DEVELOPMENT | RELEASED | CANCELLED;
```

**📝 Usage Examples**:
```made
sprint Sprint1 {
    status: IN_PROGRESS      # ✅ Valid
    # status: Active         # ❌ Invalid (not in enum)
}

item MyTask {
    status: DOING           # ✅ Valid
    complexity: HIGH        # ✅ Valid
    # complexity: EXTREME   # ❌ Invalid (not in enum)
}
```

> 💡 **Why enums?** They prevent typos! MADE will catch if you write `INPROGRESS` instead of `IN_PROGRESS`.

### Helper Types - Advanced Patterns
```langium
StringList:
    values+=STRING (',' values+=STRING)*;

ReferenceList:
    references+=[BacklogItem:QualifiedName] (',' references+=[BacklogItem:QualifiedName])*;

QualifiedName:
    ID ('.' ID)*;
```

**📝 Examples**:
```made
# StringList - Multiple text values
Requirements: "User authentication", "Data validation", "Error handling"
Criterions: "Fast response", "Secure", "User-friendly"

# ReferenceList - Multiple references to other items
depends: Epic1.Story1, Epic2.Story3, Epic1.Story2

# QualifiedName - Hierarchical references  
assignee: DevelopmentTeam.alice        # Team.Member
process: ScrumProcess.Development      # Process.Activity
item: ProductBacklog.UserAuth.Login   # Backlog.Epic.Story
```

---

## 🔗 Advanced Grammar Features

### Cross-References - Linking Things Together
**What they do**: Let you connect different parts of your project

```langium
// Reference to team member
'assignee:' assignee=[TeamMember:QualifiedName]

// Reference to process activity  
'activity:' activity=[Activity:QualifiedName]

// Reference to other backlog items for dependencies
'depends:' depends=ReferenceList
```

**📝 Real-World Examples**:
```made
# Assign work to specific team members
item UserLogin {
    assignee: DevelopmentTeam.alice    # Links to team member
}

# Connect stories to processes
story PaymentProcess {
    activity: EcommerceProcess.Payment  # Links to process activity
}

# Define dependencies between work items
story CheckoutFlow {
    depends: UserLogin, PaymentSetup   # Must complete these first
}
```

> 🎯 **Why references matter**: They create a connected web of project information that MADE can analyze for dependencies, workload, and progress tracking.

### Optional Properties - Flexibility Built In
**What they do**: Let you include information when relevant

```langium
// Optional description field
('description:' description=STRING)?

// Optional date fields
('startDate:' startDate=DATE)?
('dueDate:' dueDate=DATE)?
```

**📝 Usage Patterns**:
```made
# Minimal project definition
project QuickTest {
    name: "Quick Test Project"
    # No description, dates, etc. - that's fine!
}

# Detailed project definition
project ComplexProject {
    name: "Enterprise Platform"
    description: "Multi-year platform development"
    startDate: 2024-01-01
    dueDate: 2025-12-31
    # All optional fields included
}
```

> 💡 **Start simple, add detail later**: You can begin with minimal information and add details as your project evolves.

### Collections - Multiple Items
**What they do**: Let you group related items together

```langium
// Multiple team members
(teammember+=TeamMember)*

// Multiple tasks in user story
(tasks+=Task)*

// Multiple items in sprint backlog
(items+=SprintItem)*
```

**📝 Collection Examples**:
```made
team BigTeam {
    name: "Large Development Team"
    
    # Multiple team members
    teammember alice { name: "Alice" email: "alice@company.com" }
    teammember bob { name: "Bob" email: "bob@company.com" }
    teammember charlie { name: "Charlie" email: "charlie@company.com" }
}

story ComplexStory {
    name: "Complex Feature"
    
    # Multiple tasks
    task DesignUI { name: "Design User Interface" }
    task ImplementBackend { name: "Implement Backend Logic" }
    task WriteTests { name: "Write Test Cases" }
    task Documentation { name: "Update Documentation" }
}
```

---

## 🛡️ Validation Rules - Keeping Your Data Clean

MADE automatically validates your `.made` files to catch common mistakes:

### Date Format Validation
**What it catches**: Incorrectly formatted dates

```typescript
export function validateDates(node: any, accept: any) {
    const typeMeta = reflection.getTypeMetaData(node.$type);
    for (const prop of typeMeta.properties) {
        if (prop.name.match(/date$/i) && typeof node[prop.name] === 'string') {
            const value = node[prop.name];
            if (value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                accept('error', `Property "${prop.name}" must be in ISO 8601 format (YYYY-MM-DD)`, 
                      { node, property: prop.name });
            }
        }
    }
}
```

**Examples of validation errors**:
```made
project MyProject {
    startDate: 2024/01/15    # ❌ Error: Use 2024-01-15
    dueDate: "Jan 15, 2024"  # ❌ Error: Use 2024-01-15
    startDate: 2024-01-15    # ✅ Correct format
}
```

### Reference Validation
**What it catches**: References to things that don't exist

- ✅ **Cross-references validated at parse time**: If you reference `DevelopmentTeam.alice`, alice must exist in DevelopmentTeam
- ✅ **Scoped resolution**: References are checked within their proper context
- ✅ **Dependency cycles detected**: Prevents Task A depending on Task B while Task B depends on Task A

**Examples**:
```made
team DevTeam {
    teammember alice { name: "Alice" email: "alice@company.com" }
}

sprint Sprint1 {
    sprintbacklog SB1 {
        item SomeStory {
            assignee: DevTeam.alice    # ✅ Valid - alice exists
            # assignee: DevTeam.bob    # ❌ Error - bob doesn't exist
        }
    }
}
```

> 🚨 **Validation Benefits**: Catch mistakes early instead of finding out later when things don't work as expected!

---

## 🚀 Grammar Extension Points - Adding Your Own Features

Want to extend MADE with custom components? Here's how:

### Adding New Component Types
**When to use**: You need a new type of project component

```langium
// 1. Add to main grammar
entry Model:
    (project=Project)
    (components+=(Team|Process|Backlog|TimeBox|Roadmap|CustomComponent))*;

// 2. Define your new component
CustomComponent:
    'custom' id=ID '{'
        'property:' property=STRING
        ('optionalField:' optionalField=STRING)?
        (items+=CustomItem)*
    '}';

// 3. Define sub-components if needed
CustomItem:
    'item' id=ID '{'
        'value:' value=STRING
    '}';
```

**📝 Real Example - Budget Component**:
```langium
// Add budget tracking to MADE
Budget:
    'budget' id=ID '{'
        'name:' name=STRING
        'totalAmount:' totalAmount=INT
        ('currency:' currency=STRING)?
        (expenses+=Expense)*
    '}';

Expense:
    'expense' id=ID '{'
        'description:' description=STRING
        'amount:' amount=INT
        ('category:' category=BudgetCategory)?
        ('assignee:' assignee=[TeamMember:QualifiedName])?
    '}';

enum BudgetCategory:
    DEVELOPMENT | MARKETING | INFRASTRUCTURE | MISC;
```

**Usage in .made files**:
```made
budget ProjectBudget {
    name: "Development Budget 2024"
    totalAmount: 100000
    currency: "USD"
    
    expense CloudServices {
        description: "AWS hosting costs"
        amount: 5000
        category: INFRASTRUCTURE
    }
    
    expense DeveloperSalaries {
        description: "Team salaries"
        amount: 80000
        category: DEVELOPMENT
        assignee: DevelopmentTeam.alice
    }
}
```

### Adding New Properties to Existing Components
**When to use**: You want to add fields to existing components

```langium
// Extend existing Task component
Task:
    'task' id=ID '{'
        'name:' name=STRING
        ('description:' description=STRING)?
        ('priority:' priority=Priority)?      # 🆕 New property
        ('estimatedHours:' hours=INT)?        # 🆕 New property
        ('tags:' tags=StringList)?            # 🆕 New property
        // ... existing properties
    '}';

// Add new enum for priority
enum Priority:
    LOW | MEDIUM | HIGH | CRITICAL;
```

**Updated usage**:
```made
task CriticalBugFix {
    name: "Fix payment processing bug"
    description: "Critical issue affecting checkout"
    priority: CRITICAL          # 🆕 New field
    estimatedHours: 8           # 🆕 New field
    tags: "bugfix", "critical"  # 🆕 New field
}
```

### Best Practices for Extensions 🎯

| Do ✅ | Don't ❌ | Why |
|-------|----------|-----|
| **Add optional fields first** | Break existing syntax | Maintains backward compatibility |
| **Use meaningful enum values** | Use generic names like "TYPE1" | Makes intent clear |
| **Follow existing naming patterns** | Invent new conventions | Consistency helps users |
| **Add validation rules** | Skip validation | Prevents bad data |
| **Document new components** | Assume users will figure it out | Good UX requires docs |


---

## 🎓 Summary - Your Grammar Toolkit

### Quick Reference Card 📋

| Element | Syntax | Example |
|---------|--------|---------|
| **Project** | `project ID { ... }` | `project MyApp { name: "My App" }` |
| **Team** | `team ID { ... }` | `team Devs { teammember alice { ... } }` |
| **Sprint** | `sprint ID { ... }` | `sprint Sprint1 { name: "First Sprint" }` |
| **Epic** | `epic ID { ... }` | `epic UserAuth { name: "User Authentication" }` |
| **References** | `[Type:QualifiedName]` | `assignee: DevTeam.alice` |
| **Lists** | `"item1", "item2"` | `tags: "urgent", "frontend"` |
| **Dates** | `YYYY-MM-DD` | `startDate: 2024-01-15` |

### Common Patterns 🔄

1. **Start with project**: Every `.made` file needs exactly one project
2. **Define teams early**: You'll reference team members in sprints and assignments
3. **Build hierarchy**: Epic → Stories → Tasks follows natural work breakdown
4. **Use references liberally**: Connect related items for rich analysis
5. **Add details gradually**: Start minimal, add optional fields as needed

### Troubleshooting Tips 🔧

| Error Type | Common Cause | Fix |
|------------|--------------|-----|
| **Syntax Error** | Missing quotes, brackets, or colons | Check for `"quotes"` around strings, `{}` around blocks |
| **Reference Error** | Referencing something that doesn't exist | Ensure referenced items are defined first |
| **Date Format Error** | Wrong date format | Use YYYY-MM-DD format (e.g., 2024-01-15) |
| **Enum Error** | Invalid status/complexity value | Check valid enum values (e.g., TODO, DOING, DONE) |

This grammar structure provides a solid foundation for the MADE DSL while maintaining flexibility for extensions and customizations. With these patterns, you can create rich, connected project descriptions that MADE can transform into powerful documentation and integrations! 🏗️