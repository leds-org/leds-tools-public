---
sidebar_position: 3
title: Understanding the Language
---

Spark`s language is compose of following parts: Configuration and Class Diagram. 

## Configuration:

This constructor allows to define: Software Name, description about the software, language that desires to develope the information system, and database name.

```js
   Configuration {
       software_name: "SlaveOne" // software`s name
       about: "Slave One project example" // description about the software
       language: python // language and pattern that will be devoped the software
       database_name: "SlaveOneDB" // Database Name
   }
```
For the `language`, we have the options: `python, java, csharp-minimal-api, csharp-clean-architecture`.

## Class Diagram

Spark allows us to create organize a class diagram on Modules.  The declaration of a module is simple, following this pattern:

```js
   module Main {
       // Aqui ficam os componentes dos módulos
   }
```

Inside in each module it is possible define Entities, relations between entities, and Enuns.

```js
   entity Project {
       name: string
       start_date: date
       end_date: date
       budget: decimal
       client: string
       sponsor: string
       goal: string
       project_father OneToMany Project
       time OneToMany Time
       status uses Status
   }

   enum Status {
       Ativo
       Cancelado
       Entregue
   }
```

## Attribute and Relationship Types:

Entities have attributes, and the available types are: `string, integer, decimal, datetime, date, boolean, uuid, email, brazilian_person_id, brazilian_organization_id, currency, mobilePhoneNumber, phoneNumber, file, void`.

Finally, Spark allows to define the following relationships: `OneToOne, OneToMany, ManyToOne, ManyToMany`