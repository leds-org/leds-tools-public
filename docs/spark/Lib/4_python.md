---
sidebar_position: 4
title: Python
---


# Python Generator

A TypeScript library for automated backend code generation in Django.

## 📁 Project Structure and Descriptions

```text
python-generator/
├── index.ts
└── django/
    └── back/
        ├── generator.ts
        ├── setting-generator.ts
        ├── bdd/
        │   ├── generator.ts
        │   └── index.ts
        └── components/
            ├── admin-generator.ts
            ├── index.ts
            ├── model-generator.ts
            ├── module-generator.ts
            ├── serialize-generator.ts
            ├── url-generator.ts
            └── view-generator.ts
```

### `index.ts`
This is the main entry point of the library, consolidating and exposing all modules for use.
Arquivo principal de entrada ou reexportação, que consolida os módulos e oferece uma interface única para o uso da biblioteca.

### `django/back/generator.ts`
Main script responsible for orchestrating backend generators, executing tasks in a dependency-aware manner.
Script principal responsável por coordenar os geradores de backend, executando geração em cadeia conforme as dependências.

### `django/back/setting-generator.ts`
Generates or modifies `settings.py`, adding key configurations such as installed apps, middlewares, REST framework, and databases.
Gera ou modifica arquivos `settings.py`, adicionando configurações essenciais como apps instalados, middlewares, REST Framework e banco de dados.

### `django/back/bdd/generator.ts`
Generates database-related models and structure, supporting automatic relationships and normalization.
Gera estrutura de dados e modelos relacionados ao banco de dados, com suporte a relacionamentos e normalização automática.

### `django/back/bdd/index.ts`
Exports and organizes database generation functionalities.
Arquivo principal de entrada ou reexportação, que consolida os módulos e oferece uma interface única para o uso da biblioteca.

### `django/back/components/admin-generator.ts`
Creates `admin.py` configurations for Django Admin to register and manage models.
Cria registros e configurações no Django Admin (`admin.py`) para exibir e manipular modelos no painel administrativo.

### `django/back/components/index.ts`
Consolidates and exports Django component generators.
Arquivo principal de entrada ou reexportação, que consolida os módulos e oferece uma interface única para o uso da biblioteca.

### `django/back/components/model-generator.ts`
Generates Django models (`models.py`) based on defined structures including fields, types, and relationships, following Django ORM standards.
Responsável por gerar os modelos Django (`models.py`) automaticamente com base em estruturas definidas, incluindo campos, tipos e relacionamentos, seguindo padrões convencionais de ORM.

### `django/back/components/module-generator.ts`
Automates the creation of a Django module (app) with directory structure and initial setup.
Automatiza a criação de um novo módulo Django (app), incluindo estrutura de diretórios, arquivos padrão e inicialização básica.

### `django/back/components/serialize-generator.ts`
Generates Django REST Framework serializers with support for `ModelSerializer`, custom fields, and nested serializers.
Gera serializers do Django REST Framework a partir de modelos, com suporte a `ModelSerializer`, campos personalizados e nested serializers.

### `django/back/components/url-generator.ts`
Creates `urls.py` mapping RESTful endpoints to views using `path` or `re_path`.
Cria arquivos `urls.py` mapeando endpoints RESTful para as views geradas, utilizando path ou re_path conforme necessário.

### `django/back/components/view-generator.ts`
Generates Django views using Class-Based Views (CBV) or Function-Based Views (FBV), supporting CRUD operations, serializers, and REST permissions.
Gera views Django no formato de classes (CBV) ou funções (FBV), com suporte para operações CRUD, integração com serializers e permissões REST.


