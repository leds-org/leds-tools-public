---
sidebar_position: 2
---

# Como funciona a linguagem?

A linguagem usada pelo MADE permite configurar projetos, equipes, cronogramas, processos, backlog e roteiros de maneira estruturada e intuitiva. A seguir, uma breve explicação dos principais componentes da linguagem:

## Componentes da linguagem:

### Project:
Define a configuração do projeto e o token para criação do projeto no seu gerenciador de projetos.
```js
project "Nome do projeto" {
  id: projectid //Id do projeto(O Id que vem do gerenciador de projetos)
  description: "Descrição do projeto"
  email: "editor@mail.com" //Email do editor do projeto
  host: "host.projeto.net" //Link do projeto
  token: "A12ADK53218FA" //Token da api do projeto
}
```
### Team:
Define uma equipe e seus membros.
```js
team TeamID {
    name: "nome do time"
    description: "descrição do time"
    
    teammember memberid {
      name: "nome do membro" 
      email: "mmebro@mail.com"
    }
}
```

### Timebox:
Define a timebox, que seria a sprint em alguns gerenciadores de projetos, com seus responsáveis, planejamento e execução.
```js
timebox timeboxid {
    name: "Nome da timebox"
    description: "descrição timebox"
    startDate: "01/01/2024"
    endDate: "12/12/2024"
    responsible: TeamID.memberid  //Referência do membro responsável

    planning {
        item: "item planejado" assigner: "nome do membro"
    } 

    performed {
        item: "item feito" status: DOING
    }
}
```

### Process:
Define o processo do projeto e suas atividades.
```js
process processID {
    name: "Nome do processo"
    description: "Descrição do processo"

    activity activityID {
        name: "Nome da atividade"
        description: "Descrição da atividade"
    }
}
```

### BackLog
Define o backlog, seus épicos e histórias de usuário.
```js
backlog BackLogID {
    name: "Nome do backlog"
    description: "Descrição do backlog"
    epic EpicId {
        name: "Nome do épico"
        process: processID
    }
    userstory userstoryId {
        name: "Nome da história de usuário"
        activity: processID.activityID //Referência da atividade
    }
}
```

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