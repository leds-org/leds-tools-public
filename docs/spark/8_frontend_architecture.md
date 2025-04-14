---
sidebar_position: 8
title: Frontend Architecture
---

# Generators
The generators, in TypeScript, creates the code, the files and the folders of the frontend.

The generators are organized acordingly with what they create.

The generators on the superiors parts create the structure and call the generators in the level below them. This generators will create a specific part of the code and the respective files and/or will create other folders and call their respective generators.

# Generator's Organization
## Gerador principal
- Create the App.vue and configuration files.
- - Vue's main file.
- - Calls the router (src/router).
- Create the cypress folder.
- Create the public folder.
- Create the src folder.

### frontend/cypress

### frontend/public

### frontend/src
Folder with multiple subfolders.
Each subfolder is responsible for part of the frontend components.

#### Components
Define the options for colors.

#### Composition
Define the available funcionabilities (e.g.: get by id, post, delete).

#### Layout
Define the components disposition on the screen.

#### Plugins
Imports Vuetify to style the components and define the default theme.

#### Router
Define the routes for src/composition.

#### Scss
Define the components used in src/layout.

#### Services
Generate the Factory and the Api (localhost port).

#### Stores
Make the user configurations (e.g.: authentication, followers, posts)

#### Theme
Define the colors to light theme and dark theme.

#### Utils
Define colors used in each theme.

#### Views
src/views/model: Create the responsible files for the Index, Detail and Form screens to each class.

src/views/authentication: Create the responsible file for the user sidebar login.