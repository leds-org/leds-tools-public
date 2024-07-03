---
sidebar_position: 3
---

# Como funciona a linguagem?

A linguagem do langium segue uma sintaxe simples, utilizando pequenas declarações explicitando as entidades, seus tipos e suas relações.

## Explicando a sintaxe e seus elementos:

### Configuração:
Primeiro, definimos a configuração do projeto a ser gerado. Para fins de exemplo, vamos seguir o modelo de exemplo do Slave-One (Outro projeto do Leds).

```
   Configuration {
       software_name: "SlaveOne" // O nome do projeto
       about: "Slave One project example" // Uma descrição do projeto
       language: python // Escolha a linguagem em que o código será gerado
       database_name: "SlaveOneDB"
   }
```

Para a language, temos as opções: ` python, java, csharp-minimal-api, csharp-clean-architecture `

### Módulos:
Para conseguirmos definir as entidades e suas relações primeiro temos que definir os módulos. A declaração de um módulo é simples, seguindo esse padrão:

```
   module Main {
       // Aqui ficam os componentes dos módulos
   }
```

Um projeto pode ter diversos módulos com diferente entidades e relações.

### Componentes dos módulos:

Dentro de módulos podemos declarar diversas entidades, enums e relações entre esses componentes.

```
   entity Projeto {
       nome: string
       data_inicio: date
       data_fim: date
       orcamento: decimal
       cliente: string
       patrocinador: string
       objetivo: string
       Projeto OneToMany Projeto
       Projeto OneToMany Time
       Projeto uses ProjetoStatus
   }

   enum ProjetoStatus {
       Ativo
       Cancelado
       Entregue
   }
```

As entidades tem atributos, para tipos temos as opções: `string, integer, decimal, datetime, date, boolean, uuid, email, brazilian_person_id, brazilian_organization_id, currency, mobilePhoneNumber, phoneNumber, file, void`

Para as relações entre entidades, elas devem seguir a sintaxe: `Projeto OneToMany Projeto` e para relações temos as opções: `OneToOne, OneToMany, ManyToOne, ManyToMany`