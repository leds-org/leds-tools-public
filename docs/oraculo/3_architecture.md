---
sidebar_position: 4
title: Architecture and Modularization
description: The modular architecture of the project.
---

# Architecture and Modularization

The project is divided into well-defined modules that follow a decoupled architecture with specific responsibilities. Below is a clear explanation of the role of each component:

## Main Components

- 🔁 **Airbyte (ETL)**  
  Responsible for extracting data from external sources like GitHub. It collects this information and sends it to the database.

- ⚙️ **Backend (FastAPI)**  
  API developed with FastAPI, responsible for receiving questions, processing them with the help of AI (Vanna.AI), generating the SQL query, and returning the response to the user.  
  Location: `src/fastapi/`

- 🧠 **Vanna.AI (LLM)**  
  Language model used to interpret natural language questions and generate the corresponding SQL.  
  Location: `src/vanna/`

- 🌐 **OpenWebUI (Interface)**  
  Web interface used to interact with the end user. Allows sending questions and viewing responses.  
  Location: `src/open-web-ui/`

- 🔗 **n8n (Automation)**  
  Automation platform that connects OpenWebUI to the backend via Webhook. Manages communication between components.  
  Location: `src/n8n/`

## Overview of the Data Flow

User (OpenWebUI interface)  
        ↓  
     Webhook  
        ↓  
      n8n (automation)  
        ↓  
 FastAPI (backend/API)  
        ↓  
    Vanna.AI (LLM)  
        ↓  
 SQL → Database  
        ↓  
 ↪ Response shown to the user

## Architecture Summary by Role

| Component     | Role             | Description |
|---------------|------------------|-------------|
| OpenWebUI     | Interface         | Frontend for user interaction |
| FastAPI       | Backend/API       | Processes questions and coordinates responses |
| Airbyte       | ETL               | Collects external data and injects into the database |
| Vanna.AI      | LLM / AI          | Converts natural language questions into SQL |
| n8n           | Orchestrator      | Routes data between frontend, backend, and AI using Webhooks |
| Postgres/Chroma | Database        | Stores collected data used by the AI |