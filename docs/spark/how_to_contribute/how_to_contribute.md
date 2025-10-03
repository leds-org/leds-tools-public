---
sidebar_position: 1
title: How to Contribute
---

# I Want to Improve the Spark Code
When dealing with Spark, you must know that there are two different source codes. The first is about the grammar specifier, called Spark, and the compiler, called SparkLib. To improve the code, you need to integrate both of them.

## Prerequisites
Here we will specify each major knowledge area you will need to know to improve the code. In each area, there are too many references. You don’t need to get all of them, just choose the ones that work best for you.

For Theoretical Principles, you will need to know about:
- Automata Theory:
  - Internet Text Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Automata_theory);
    - [State Machines Reference](https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/106a1124-18-24-study-of-finite-state-machines-as-language-recognizer.pdf);
    - [Chomsky Hierarchy](https://www.geeksforgeeks.org/theory-of-computation/chomsky-hierarchy-in-theory-of-computation/);
  - Books:
    - Introduction to Automata Theory, Languages, and Computation, third edition (John E. Hopcroft, Rajeev Motwani, and Jeffrey D. Ullman);
  - Video Content:
    - [A Complete Introduction to Computation Theory](https://www.youtube.com/watch?v=58N2N7zJGrQ&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev);
  - Portuguese Content:
    - [Linguagens Formais e Autômatos, playlist](https://www.youtube.com/watch?v=XZUz2qjfZos&list=PLqlIQgAFrQ14oDPZliY1-tyupYs0prBmW);
    - Linguagens Formais e Autômatos, fifth edition (Paulo Blauth Menezes);
    - [Apostila, Linguagens Formais e Autômatos](https://www2.fct.unesp.br/docentes/dmec/olivete/lfa/arquivos/Apostila.pdf);
- Domain-Specific Languages (DSL):
  - Internet Text Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Domain-specific_language);
    - [State Machines Reference](https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/106a1124-18-24-study-of-finite-state-machines-as-language-recognizer.pdf);
  - Articles and Papers:
    - [Ontology-Driven Development of Domain-Specific Languages](https://pdfs.semanticscholar.org/bf5b/2633e02775f54c1065252c9f5020e090df19.pdf);
- The Abstract Syntax Tree (AST) data structure:
  - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Abstract_syntax_tree);
  - [Another Simple Explanation](https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38).

In the Technical Area, you will need:
- Langium:
  - Internet Text Content:
    - [Lib Reference](https://langium.org/docs/learn/workflow/);
- Object-Oriented Programming:
  - Internet Content:
    - [Wikipedia, a Great Start](https://en.wikipedia.org/wiki/Object-oriented_programming);
    - [Advanced Content with Refactoring Guru](https://refactoring.guru/);
  - Video Content:
    - [What is OOP](https://www.youtube.com/watch?v=SiBw7os-_zI);
  - Portuguese Content:
    - [Um bom começo com a Alura](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos);
    - [Curso de POO do Gustavo Guanabara](https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY);
- TypeScript:
  - Internet Text Content:
    - [Official Documentation](https://www.typescriptlang.org/docs/);
    - [Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html);
  - Video Content:
    - [Learn TypeScript in 1 Hour](https://www.youtube.com/watch?v=NjN00cM18Z4);
  - Portuguese Content:
    - [Cursinho de TypeScript](https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=498s).

## Suggested Route
- See [An Advanced Study](../advanced_concepts/1_advanced_study.md) to understand the grammar tokens and their uses;
- See [Metamodel](../advanced_concepts/2_spark_advanced/1_metamodel.md) to check the grammar metamodel;
- See [Architecture](../advanced_concepts/2_spark_advanced/3_Architecture/1_overview.mdx) to check the Spark source code architecture;
- See [Library Architecture - Backend](../advanced_concepts/3_sparklib_advanced/2_backend/1_Explanning.md) to check the library backend scoped architecture;
- See [Library Architecture - Frontend](../advanced_concepts/3_sparklib_advanced/3_frontend/1_frontend.mdx) to check the library frontend scoped architecture;