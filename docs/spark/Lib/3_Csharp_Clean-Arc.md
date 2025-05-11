---
sidebar_position: 3
title: Csharp Clean Architecture
---
# 📄 Technical Documentation: C# Clean Architecture Code Generator Library Refactoring

This technical document outlines the structural and functional modifications implemented in the C# code generation library oriented towards Clean Architecture. The primary objective was to optimize modularity, centralize shared components, and refine the generation workflow.

## 📌 Summary of Changes

The implemented modifications include:

1.  **📦 Artifact Structural Reorganization**: The C# backend generation modules, previously located in `src/cli/backend/csharp/clean-architecture`, have been relocated to the dedicated `cleanArchitecture-generator` library.

2.  **📚 Centralization of Cross-Cutting Utilities**: A new directory, `spark-generator-lib/packages/shared`, has been established to consolidate commonly used TypeScript utilities. This directory now contains:
    * `ast.ts`: Defines the Abstract Syntax Tree (AST) representation used as the foundation for code generation.
    * `generator-utils.ts`: Groups utility functions that support and simplify the generation process.
    * `index.ts`: Serves as the unified entry point (barrel) for the shared package utilities.
    * `relations.ts`: Encapsulates the logic for processing and interpreting relationships between model entities.

3.  **🔗 Layered Indexing and Generation**: The C# generator's architecture has been decomposed to allow for individual and orchestrated generation of each Clean Architecture layer, thereby increasing granularity and control over the process.

## 🏗️ Detailed Structure of the `cleanArchitecture-generator` Library

The `cleanArchitecture-generator` library has been restructured to reflect a modular and hierarchical organization, as detailed below:

* **📍 Root Directory (`cleanArchitecture-generator/`)**:
    * `docker-generator.ts`: Module responsible for generating Docker-related artifacts (e.g., `Dockerfile`, `docker-compose.yml`).
    * `generator.ts`: Central orchestrator that invokes generation submodules for each Clean Architecture layer (Application, Domain, Infrastructure, WebAPI, DomainTest, InfraTest).
    * `index.ts`: The main entry point of the library, exporting primary generation functionalities (`cleanArchitecture`, `cleandocker`, `cleanproject`) and re-exporting modules from each layer.
    * `project-generator.ts`: Utility for generating the C# project's solution file (`.sln`).

* **🏷️ Application Layer (`cleanArchitecture-generator/Application/`)**:
    * Structured with subdirectories for `Configuration`, `DTOs`, `Interfaces`, `Mappers`, `Security`, `Services`, `Shared`, and `UseCase`.
    * `generate.ts`: Orchestrates the generation of components specific to the Application layer.
    * `project-generator.ts`: Generates the project file (`.csproj`) for the Application layer.
    * `index.ts`: Barrel file for the internal modules of the Application layer.

* **🧠 Domain Layer (`cleanArchitecture-generator/Domain/`)**:
    * Organized into subdirectories for `Common`, `Entities`, `Enums`, `Interfaces`, `Security`, and `Validation`.
    * `generate.ts`: Coordinates the generation of Domain layer components.
    * `project-generator.ts`: Generates the project file (`.csproj`) for the Domain layer.
    * `index.ts`: Barrel file for the internal modules of the Domain layer.
    * `Entities/model-generator.ts`: Contains the specific logic for generating entity models.

* **🔬 Domain Test Layer (`cleanArchitecture-generator/DomainTest/`)**:
    * Includes a `Helpers` subdirectory for test utilities.
    * `generate.ts`: Orchestrates the generation of test artifacts for the Domain layer.
    * `modeltest-generator.ts`: Generates test files for domain entities.
    * `project-generator.ts`: Generates the project file (`.csproj`) for Domain tests.
    * `index.ts`: Barrel file for the modules of the Domain Test layer.

* **🛠️ Infrastructure Layer (`cleanArchitecture-generator/Infrastructure/`)**:
    * Contains subdirectories for `Context`, `EntitiesConfiguration`, `Migrations`, `Repositories`, and `Security`.
    * `generate.ts`: Manages the generation of Infrastructure layer components.
    * `project-generator.ts`: Generates the project file (`.csproj`) for the Infrastructure layer.
    * `serviceextensions-generator.ts`: Responsible for generating service extensions for dependency injection configuration.
    * `index.ts`: Barrel file for the modules of the Infrastructure layer.

* **⚙️ Infrastructure Test Layer (`cleanArchitecture-generator/InfraTest/`)**:
    * Features a `Repositories` subdirectory for repository tests.
    * `generate.ts`: Orchestrates the generation of tests for the Infrastructure layer.
    * `helpers-generator.ts`: Generates configuration and auxiliary files for the test environment (e.g., `appsettings.json`, `xunit.runner.json`).
    * `project-generator.ts`: Generates the project file (`.csproj`) for Infrastructure tests.
    * `index.ts`: Barrel file for the modules of the Infrastructure Test layer.

* **🌐 WebAPI Layer (`cleanArchitecture-generator/WebAPI/`)**:
    * Composed of subdirectories such as `.config`, `Controllers`, `Extensions`, `Properties`, and `Scripts`.
    * `generate.ts`: Directs the generation of WebAPI layer components.
    * `helpers-generator.ts`: Generates configuration files (e.g., `appsettings.json`) and HTTP request files (`.http`).
    * `program-generator.ts`: Generates the `Program.cs` file, the entry point for the ASP.NET Core application.
    * `project-generator.ts`: Generates the project file (`.csproj`) for the WebAPI layer.
    * `index.ts`: Barrel file for the modules of the WebAPI layer.

## 🔄 Impact on Import Paths (Path Refactoring)

The consolidation of utilities into the `spark-generator-lib/packages/shared` package necessitated adjustments to relative import paths within the various modules of the `cleanArchitecture-generator` library. An illustrative example can be seen in a file such as `cleanArchitecture-generator/Application/DTOs/generate.ts`, which now references the AST `Model` as follows:

```typescript