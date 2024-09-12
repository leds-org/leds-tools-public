---
sidebar_position: 3
title: Understanding the Language
---

MADE`s language is compose of following parts: Project,Team, Backlog, TimeBox, Roadmap, and Process.

## Project

This constructor enables the configuration of the MADE and JIRA integration. A Project is composed of:

* Id: Project Jira`s ID (e.g., DEV, INFRA). Each JIRA project has a ID
* description: a description about the project
* email: user's email that has permition to create JIRA's elements using JIRA's API
* host: jira host (e.g., devxyz.jira.com)
* token: Token that allows to create elements using JIRA's API.

Example:

```js
project "Nome do projeto" {
  id: projectid //Id do projeto(O Id que vem do gerenciador de projetos)
  description: "Descrição do projeto"
  email: "editor@mail.com" //Email do editor do projeto
  host: "host.projeto.net" //Link do projeto
  token: "A12ADK53218FA" //Token da api do projeto
}
```


## Team

It allows us create teams that will be responsible for one or more tasks. MADE allows creating as many teams as we want.

It is important to comment that each member needs to be registered on JIRA. 

```js
team DevelopmentTeam {
    name: "Development Team "
    description: "Team responsible for create a system application"
    
    teammember John {
      name: "John xxxx" 
      email: "John@mail.com"
    }

    teammember Myke {
      name: "Myke xxxx" 
      email: "Myke@mail.com"
    }
}
```

## Backlog

It allows us to define a project backlog. MADE allows to creating as many backlogs as we want.

A backlog is composed of: EPIC, User Story, and Task. Link about [EPIC, USer Story and Task](https://scrum-master.org/en/epic-feature-and-user-story-in-agile-a-beginners-guide/).


A Epic is composed of User Stories and User Stories is composed of tasks. MADE allows to define this relation. Beside allow us define a relation of dependecies, i.e., It is possible to define that a task will be performed only when other task or user story was performed. 

```js
backlog DevelopmentBacklog {
    name: "Backlog de Desenvolvolimento"
    description: "Backlog description"
    epic EPIC01 {
        name: "I want to manager User "
        description: "Create USER"
    }
    userstory US01 {
        name: "I want to create a form to USER"
        description: "Create a web form to create a new user"
        epic: DevelopmentBacklog.EPIC01    
    
    }

    userstory US02 {
        name: "I want to update a USER"
        description: "Create a web form to update a new user"
        epic: DevelopmentBacklog.EPIC01 
        depends:  DevelopmentBacklog.US01 
    
    }
}
```

## Timebox

Define a work period for the project team (e.g., sprint) with work tasks, responsible by time box  and other data to manager a timebox. 

```js
timebox TimeBox01 {
    name: "Nome da timebox"
    description: "descrição timebox"
    startDate: "01/01/2024"
    endDate: "12/12/2024"
    responsible: DevelopmentTeam.John  

    planning {
        item: DevelopmentBacklog.US01 assigner: DevelopmentTeam.Myke Complexity: 0 Label: developement
    } 

    performed {
        item: DevelopmentBacklog.US01 status: DOING 
    }

    comment: "Comentários da sprint"
   
}
```
Definition: 

* **Label**: A label is a tag that can be used to track activities of a specific department, categorizing tasks.

* **Complexity**: Indicates the complexity of items, represented by an integer.

* **Planning**: References items from the backlog, inserting them into the sprint and creating the Sprint Backlog.

* **Performed**: References items from the planning and assigns their status as `DOING` or `DONE`. This is useful for sprint reviews, as it allows the status of tasks within the timebox to be checked.


## Process

In projects, it's common for some activities to be repeated throughout their duration. To handle this, we've introduced the concept of a **process**, which can be used to instantiate repetitive activities in the project.

```js
process DevelopmentProcess {
    name: "Development Process"
    description: "Description of a process"

    activity UseCaseModelling {
        name: "Use Case Modelling"
        description: "Use Case Modelling"
        DefinitionDone: "The criteria that define when the activity is considered complete."
        DefinitionReady: "The criteria that define when the activity is ready to be worked on."
        Learning: "Specifies what needs to be studied or learned for the activity."
        Label: UseCaseModelling
       
    }

    task UseCaseDescription {
        name: "Use Case Description"
        description: "Use Case Description "
        DefinitionDone: "The criteria that define when the activity is considered complete."
        DefinitionReady: "The criteria that define when the activity is ready to be worked on."
        Learning: "Specifies what needs to be studied or learned for the activity."
        Label: UseCaseDescription
        Depends: DevelopmentProcess.UseCaseModelling
    }    
}
```
The dependency can occur in both the **user story** and the **epic**, functioning in the same way.

## RoadMap

Define o roteiro, suas versões e o planejamento das versões.
```js
roadmap RoadMapx {
    name: "Roadmap`s project X"
    description: "Description from a project"

    version Version1 {
        name: "Version1"
        description: "Version with CRUD elements"
        startDate: "01/01/2024"
        endDate: "12/12/2024"

        planning {
            item:DevelopmentBacklog.US01 
            item: DevelopmentBacklog.US02
        }
    }
}
```