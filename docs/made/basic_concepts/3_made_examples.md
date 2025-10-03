---
sidebar_position: 5
---

# MADE Examples — Learn by Doing

**Welcome to hands-on learning!** This page shows you real MADE examples with explanations, so you can understand both the syntax and the concepts behind it.

## How to use this page

👀 **Read the examples** — Each example is explained step-by-step  
✏️ **Try them yourself** — Copy examples into your own `.made` files  
🔧 **Modify and experiment** — Change values to see what happens  
🚀 **Run the commands** — Use `npx made-cli generate` to see the results

---

## Example 1: Your First Project (Start Here!)

**What this shows**: Basic project setup with a team

```made
project myproject {
    name: "My Awesome Project"
    description: "A sample project to demonstrate MADE features"
    startDate: 2024-01-01
    dueDate: 2024-12-31
}

team developers {
    name: "Development Team"
    description: "Core development team"
    
    teammember john {
        name: "John Doe"
        email: "john@company.com"
        discord: "johndoe"
    }
    
    teammember jane {
        name: "Jane Smith"
        email: "jane@company.com"
        discord: "janesmith"
    }
}
```

**What happens when you run this**:
- ✅ Creates a project overview document
- ✅ Lists team members in generated reports
- ✅ Sets up basic project structure

**Try changing**: Update the project name, add more team members, or change the dates

---

## Example 2: Reusable Workflows

**What this shows**: How to define processes you can reuse across different projects

```made
process webdevelopment {
    name: "Web Development Process"
    description: "Standard web development workflow"
    
    activity planning {
        name: "Planning Phase"
        description: "Project planning and requirements gathering"
        
        task requirements {
            name: "Gather Requirements"
            description: "Document functional and non-functional requirements"
        }
        
        task architecture {
            name: "Design Architecture"
            description: "Design system architecture and tech stack"
            depends: webdevelopment.planning.requirements
        }
    }
    
    activity development {
        name: "Development Phase"
        description: "Implementation and testing"
        
        task coding {
            name: "Code Implementation"
            description: "Implement features according to specifications"
        }
    }
}
```

**Key concepts explained**:
- **Process**: A reusable workflow template
- **Activity**: Major phases in your process (like "Planning" or "Development")
- **Task**: Specific work items within activities
- **depends**: Shows that one task must finish before another starts

**Real-world benefit**: Define this process once, then use it for every web project your team does!

---

## Example 3: Organizing Work with Backlogs

**What this shows**: How to break down features into manageable pieces

```made
backlog productbacklog {
    name: "Product Backlog"
    description: "Main product features and requirements"
    
    epic authentication {
        name: "User Authentication System"
        description: "Implement secure user authentication"
        process: webdevelopment
        Criterions: "Support multiple auth methods", "Secure password handling"
        observation: "Consider OAuth integration"
        
        story login {
            name: "User Login"
            description: "Basic username/password login functionality"
            activity: webdevelopment.planning
            Requirements: "Email validation", "Password strength checking"
            Criterions: "Successful login redirects to dashboard"
            
            task loginform {
                name: "Create Login Form"
                description: "HTML form with validation"
                task: webdevelopment.development.coding
                Deliverables: "Login form component", "Form validation"
            }
            
            task authentication {
                name: "Backend Authentication"
                description: "Server-side authentication logic"
                depends: productbacklog.authentication.login.loginform
                Deliverables: "Auth API endpoints", "Session management"
            }
        }
        
        story registration {
            name: "User Registration"
            description: "New user account creation"
            
            task regform {
                name: "Registration Form"
                description: "User registration form with validation"
                Deliverables: "Registration form", "Email verification"
            }
        }
    }
}
```

## Sprint Planning

```made
sprint sprint1 {
    name: "Sprint 1 - Authentication"
    description: "Implement basic authentication features"
    startDate: 2024-02-01
    endDate: 2024-02-14
    status: IN_PROGRESS
    
    sprintbacklog items {
        item productbacklog.authentication.login.loginform {
            assignee: developers.john
            dueDate: 2024-02-07
            status: TODO
            complexity: MEDIUM
        }
        
        item productbacklog.authentication.login.authentication {
            assignee: developers.jane
            dueDate: 2024-02-12
            status: TODO
            complexity: HIGH
        }
        
        item productbacklog.authentication.registration.regform {
            assignee: developers.john
            dueDate: 2024-02-14
            status: TODO
            complexity: LOW
        }
    }
}
```

## Roadmap with Milestones

```made
roadmap projectroadmap {
    name: "Project Roadmap 2024"
    description: "Strategic development plan for the year"
    
    milestone v1 {
        name: "Version 1.0 - MVP"
        description: "Minimum viable product with core features"
        startDate: 2024-01-01
        dueDate: 2024-06-30
        status: IN_PROGRESS
        
        release alpha {
            name: "Alpha Release"
            description: "Initial feature set for testing"
            version: "0.1.0"
            dueDate: 2024-03-31
            status: IN_DEVELOPMENT
            item: productbacklog.authentication
        }
        
        release beta {
            name: "Beta Release"
            description: "Feature-complete beta version"
            version: "0.9.0"
            dueDate: 2024-06-15
            status: PLANNED
            itens: productbacklog.authentication.login, productbacklog.authentication.registration
        }
    }
}
```

## Complete Example File

[Made Example](./exemplo.made)

This example demonstrates:
- Project setup with team members
- Reusable process definition
- Backlog with dependencies
- Sprint planning with assignments
- Roadmap with milestones and releases
- Proper dependency management between tasks