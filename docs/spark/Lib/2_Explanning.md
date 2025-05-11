---
sidebar_position: 2
title: Explanning
---


Para modularizar copiamos a estrutura de pasta dos geradores de backend para dentro da nossa lib, afim de remover essa parte do processamento de dentro do programa principal.

Criamos essa estrutura de diretório
```mermaid
graph TD
  A[packages/]
  A --> C[java-generator/]
  A --> D[python-generator/]
  A --> B[csharp-generator/]
  A --> F[Shared/]
  A --> G[generators/]
  B --> B1[cleanArchitecture-generator/]
  B --> B2[minimal-API-generator/]
  A --> E[index.ts]

```
Criamos a pasta generators para tornar as chamadas uniformes e num mesmo diretório, isso se torna necessário

```mermaid
graph TD

  Packages/ --> C[generators/]
  C --> C1[cleanArchitecture-generators/]
  C --> C2[minimal-API-generators/]
  C --> C3[django.ts]
  C --> C4[index.ts]
  C --> C5[springboot.ts]
```

A pasta Shared foi criada devido a necessidade comum de utilizar arquivos que eram também compartilhado na pasta util/ dentro da estrutura original do Spark.

```mermaid

graph TD
  Shared/ --> D[ast.js]
  Shared/ --> A[generator-util.js]
  Shared/ --> B[relations.js]
  Shared/ --> C[index.js]
```
