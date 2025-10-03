---
title: Spark Frontend Backlog
sidebar-position: 5
---

# Backlog - Frontend

|  ID | Feature | Description | Importance | Proposal |
|-----|---------|-------------|------------|----------|
|  1  | Implements the Github Actions Module | Implementation of the generation of the GitHub Actions for the generated code | 85 | Understand how compilers works and a bit about spark-lib architecture |
| 2.1 | Generate a example case | Generate a example case and document the frontend architecture | 80 | Better comprehension of the frontend architecture |
| 2.2 | Corrections in the frontend generated code | Corrections in the new frontend generation so it runs properly without the necessity of user made corrections | 100 | Generated frontend works properly from the start |
| 2.3 | Documentation of the frontend generated code | Addition of the generation of the documentation for the frontend generated code | 90 | Documented frontend code generation |
|  3  | Creation of the Module Doc Lib | Creation of a modular lib to centralize reusable components of the Spark-Lib and Andes-Lib | 95 | Reuseble modular lib for Spark and Andes |

## Frontend Development Plan

|  ID | Description | Expected Time to Conclude (in weeks) | Related Feature |
|-----|-------------|--------------------------------------|-----------------|
|  1  | Implements the Github Actions Module | 1 | 1 |
|  2  | Study of the generated frontend code, Corrections in the generated frontend code, Documentation of the generated frontend code | 4 | 2 |
|  3  | Creation of the Module Doc Lib | 4 | 3 |

## Timeline

```mermaid
%%{init: {'theme': 'forest' } }%%
timeline
    title Frontend Delivery Timeline

    Delivery 1 - September/2025
      : Feature 1 - Implements the Github Actions Module

    Delivery 2 October/2025
      : Feature 2.1 - Study of the generated frontend code
      : Feature 2.2 - Corrections in the frontend generated code
      : Feature 2.3 - Documentation of the generated frontend code

    Delivery 3 November/2025
      : Feature 3 - Creation of the Module Doc Lib
```