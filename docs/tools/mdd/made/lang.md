---
sidebar_position: 3
title: Understanding the Language
---

MADE`s language is compose of following parts:

1. Project
2. Team
3. Backlog
4. TimeBox
5. Roadmap
6. Process

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
    responsible: TeamID.memberid  //Referência do membro responsável pela sprint

    planning {
        item: BacklogID.itemid assigner: TeamID.memberid Complexity: 0
    } 

    performed {
        item: BacklogID.itemid status: DOING
    }

    comment: "Comentários da sprint"
    Label: LabelID_1, LabelID_2
}
```
Label é uma tag que pode ser utilizada para rastreio de atividades de um setor específico, categorizando tarefas.
Complexity indica a complexidade dos itens, sendo um número inteiro;
Planning: Cita itens dos backlog, inserindo-os na sprint;
Performed: Cita itens do planning e atribuiu o seu status `DOING` ou `DONE`. Sendo útil para a sprint review, uma vez que é possível verificar o status das tarefas da timebox.

### Process:
Define o processo do projeto e suas atividades.
```js
process processID {
    name: "Nome do processo"
    description: "Descrição do processo"

    activity activityID {
        name: "Nome da atividade"
        description: "Descrição da atividade"
        DefinitionDone: "Definição para estar concluído"
        DefinitionReady: "Definição para estar pronto"
        Learning: "Definição para o que é necessário estudar"
        Label: LabelID
        Depends: processID.taskID
    }

    task TaskID {
        name: "Nome da atividade"
        description: "Descrição da atividade"
        DefinitionDone: "Definição para estar concluído"
        DefinitionReady: "Definição para estar pronto"
        Learning: "Definição para o que é necessário estudar"
        Label: LabelID
        Depends: processID.activityID
    }
    Label: LabelID
}
```
As definitions podem ser usadas para definir quando a atividade ou task estão prontas ou concluídas.
Depends define as dependências entre o que foi criado.


```
A dependência pode ocorrer na userstory e na epic, funcionando da mesma forma.

### RoadMap
Define o roteiro, suas versões e o planejamento das versões.
```js
roadmap RoadMapID {
    name: "Nome do roadmap"
    description: "Descrição do roadmap"

    version RoadMapVersionID {
        name: "Nome da versão do roadmap"
        description: "Descrição da versão do roadmap"
        startDate: "01/01/2024"
        endDate: "12/12/2024"

        planning {
            item: BackLogID.userstoryId //Referência da história de usuário
            item: "Item da planning"
        }
    }
}
```