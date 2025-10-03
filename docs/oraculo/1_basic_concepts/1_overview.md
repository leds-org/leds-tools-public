---
sidebar_position: 1
title: Project Overview
description: Presents the project's scope, context, objectives, and key features.
---

# Oráculo: Team Wisdom in Real Time

## What is Oráculo?

Oráculo is a system that accesses key team information via Git integration data to offer a **real-time view** of what's happening in the project.  
It was created to address the challenges of dispersed project data and manual analysis by using **AI** to transform raw GitHub data into **natural language answers**.

---

## Mini-World: Project Scope and Context

In software development teams, project information is often spread across **GitHub repositories**, where tasks, issues, and pull requests are managed.  
Analyzing this data manually is time-consuming and makes it difficult to obtain a clear and real-time view of the project’s progress.  

This causes problems such as:  
- Difficulty in identifying pending tasks and bottlenecks.  
- Lack of agility in tracking team performance.  
- Limited visibility for managers and advisors to support decision-making.  

Oráculo aims to solve these challenges by providing a **centralized AI-driven system** for querying and analyzing project data.

---

## Target System

- **Tool**: Oráculo (Chatbot System).  
- **Main functions to be validated**:  
  - Extract and organize data from GitHub repositories.  
  - Allow queries in natural language about project status.  
  - Provide clear insights into sprint progress and team performance.  
  - Ensure transparency and agility in project management.  

---

## Objectives

- Provide a **real-time view of project progress**.  
- Support managers in **decision-making**.  
- Facilitate **performance tracking** of teams and individuals.  

---

## Git Integration

Connected to the team's repository, Oráculo answers key questions about development progress:

- **What tasks are pending for team X or product Y?**  
- **Which sprint tasks are still open for product Y?**  

This helps to:  
- Identify bottlenecks  
- Get insights on a specific feature in development  
- Track what’s still open  
- Speed up planning meetings  

All answers are based on the latest state of repositories and team boards.

---

## Rules and Restrictions

- Must extract data from **GitHub repositories**.  
- Queries must be answered through **natural language processing (NLP)**.  
- Data must be stored and structured in a **PostgreSQL database**.  
- System must ensure **transparency and reliability** in the information provided.

---

> ℹ **Transparency, context, and agility.**  
> Oráculo exists to turn raw data into better decisions.
