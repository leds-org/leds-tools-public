---
sidebar_position: 0
title: Anchor
---

This is an Anchor Page. It is used to centralize all links and dependencies.

# Guide Map
The Spark Documentation is very large, and you could get lost in it. Don’t worry, here we will explain how you should read it. First, you need to know which kind of user you are...

- If you want to **USE SPARK**, check [this section](#i-want-to-use-spark);
- If you want to **IMPROVE SPARK CODE**, check [this section](../how_to_contribute/how_to_contribute.md).

## I Want to Use Spark

### Prerequisites
To use Spark, you must know System Analysis, at least class modeling. You can also see the following links:

- Internet Text Content:
  - [Free Online Course](https://www.tutorialspoint.com/system_analysis_and_design/system_analysis_and_design_overview.htm);
- Books:
  - Systems Analysis and Design (Howard Gould);
- Portuguese Content:
  - [Apostila de Análise de Sistemas](https://www.inf.ufes.br/~vitorsouza/falbo/Notas_Aula_Engenharia_Requisitos_Falbo_2017.pdf);

To understand the Spark-generated architecture, you will need different content for each one...

For MVC-Based Architectures:
- Internet Text Content:
  - [For Django MVC](https://docs.djangoproject.com/pt-br/5.2/faq/general/);
  - [For Spring Boot](https://docs.spring.io/spring-boot/how-to/spring-mvc.html);
- Portuguese Content:
  - [O que é MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308);

For Clean Architecture-Based Architectures:
- Book:
  - Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert Martin);
- Portuguese Content:
  - [Clean Architecture com o Macoratti](https://youtube.com/playlist?list=PLJ4k1IC8GhW3GICba2dLmiTZrVPw0SthC&si=Vgn5xPDEmq1eL9mE);

For Minimal API-Based Architectures:
- Video Content:
  - [Learn Minimal API in C# .NET](https://www.youtube.com/watch?v=lFo3Yy8Ro7w);
- Portuguese Content:
  - [Aprendendo a Minimal API em C# .NET](https://youtu.be/86FXD0faF4o?si=jH3IA0o6obpKS2qn);

About the frontend: it will generate a LEDS internal architecture, so it will be properly explained in section [Front-end Architecture](../advanced_concepts/3_sparklib_advanced/3_frontend/3_generated_arch/1_frontend_architecture.mdx)

If you want to understand what REST APIs are, you can also check:
- PhD Thesis:
  - [Architectural Styles and the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf);
- Internet Text Content:
  - [An Introduction to REST APIs](https://www.freecodecamp.org/news/what-is-rest-rest-api-definition-for-beginners/).

### Suggested Route
- See [Overview](./1_overview.md) to understand the Spark principles and objectives;
- See [Installation](./2_how_to_use/3_run_and_debug.md) to install and use Spark;
- See [Writing a File](./2_how_to_use/1_writting_a_file.md) to learn how to write your first ".spark"; and
- See [File Examples](./2_how_to_use/2_file_examples/1_conecta_fapes.md) to see example files.

### For Advanced Users
- See [Understanding the Generated Code Architecture](../advanced_concepts/3_sparklib_advanced/1_OverView.md) to understand the generated code architecture;
    - For the Backend, see the section of the language and architecture you are intested in:
      - For Clean Architecture C#, see [Clean Architecture Csharp](../advanced_concepts/3_sparklib_advanced/2_backend/4_generated_arch/4_Csharp_Clean.md);
      - For MVC Django Rest Framework Architecture in Python, see [Python Architecture](../advanced_concepts/3_sparklib_advanced/2_backend/4_generated_arch/2_Python.md);
      - For Minimal API C#, see [Minimal API Csharp](../advanced_concepts/3_sparklib_advanced/2_backend/4_generated_arch/3_Csharp_Minimal-API.md); and
      - For MVC Spring-Boot Architecture in Java, see [Java Architecture](../advanced_concepts/3_sparklib_advanced/2_backend/4_generated_arch/1_Java.md).
    - For the Frontend, made in Vue + Tailwind, as said before, see [Front-end Architecture](../advanced_concepts/3_sparklib_advanced/3_frontend/3_generated_arch/1_frontend_architecture.mdx).