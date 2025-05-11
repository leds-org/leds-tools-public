---
sidebar_position: 5
title: SRC
---

Com o uso da lib precisamos modificar nosso código fonte dos geradores do spark, onde toda lógica de geração de código ficava dentro do codigo fonte, com o uso da nossa lib removemos toda essa parte da lógica do produto e mantivemos apenas as chamadas das lib que criamos, mantendo apenas um generator.ts dentro de cada linguagem respectiva.

Com isso ficamos com a estrutura do código fonte assim:


```mermaid

graph TD
  Backend/ --> A[csharp/]
  Backend/ --> B[java/]
  Backend/ --> C[python/]
  
  
  A --> A1[generator.ts]
  B --> B1[generator.ts]
  C --> C1[generator.ts]
```

Esses generators é aonde é feita a chamada da spark-generators-lib referente a cada linguagem, comunicando assim com os generators e index de dentro da lib.