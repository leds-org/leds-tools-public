---
sidebar_position: 1
title: Clean Architecture
---

It  was created by Robert C. Martin and promoted in his book *Clean Architecture: A Craftsman’s Guide to Software Structure*. Like other software design philosophies, Clean Architecture aims to provide a methodology to be used in coding to facilitate code development, enable better maintenance, updates, and reduce dependencies.

A key goal of Clean Architecture is to provide developers with a way to organize code that encapsulates business logic while keeping it separate from the delivery mechanism.

![alt text](theCleanArchitecture.webp)

* **Enterprise Business Rules**: The "Enterprise Business" layer is the innermost and most fundamental layer of Clean Architecture, also known as the domain layer. It houses the core business rules and the main entities of the application. In this layer, you define the domain entities, which represent business objects, and implement essential business rules. These entities and rules are independent of any technical details and should not rely on frameworks or external technologies.

* **Application Business Rules**: The "Application Business" layer sits just above the "Enterprise Business" layer. It coordinates the execution of use cases and manages the application flow. In this layer, you define the application's use cases, which represent specific functionalities or operations that the system can perform. Use cases are implemented here and are responsible for orchestrating the interaction between domain entities. The "Application Business" layer acts as an intermediary between the user interface and the domain.

* **Interface Adapters**: The "Interface Adapters" layer sits between the business layers and external layers such as the user interface and external frameworks. Here, you adapt technical details and input/output interfaces to meet the needs of the business layers. The "Interface Adapters" layer helps keep the internal layers isolated from external technologies.

* **Framework & Drivers**: This is the outermost layer of Clean Architecture, where you deal with the technical details and external technologies with which your system interacts. In this layer, you implement interaction with external frameworks, such as databases, graphical interface libraries, and others. This layer should be the most flexible to allow the replacement or updating of technologies without affecting the internal layers.

**Referência**: https://medium.com/@gabrielfernandeslemos/clean-architecture-uma-abordagem-baseada-em-princ%C3%ADpios-bf9866da1f9c
