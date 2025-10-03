---
sidebar_position: 1
title: Project Management
description: Presents the project`s developing planning.
---

# 📌 Project Development Plan

Presents the project's overall development planning and structure, including backlog, team organization, goals, and estimated costs.

---

## 📋 Backlog

| ID | Team         | Feature                                       | Description                                                                                      | Importance | Proposal                                              |
|----|--------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------|
| 1  | Management   | Metric Results                                | Collect, analyze, and document project metrics throughout development.                           | 100        | Improve performance tracking                          |
| 2  | Developers   | Dynamic Data Import                           | User inserting more repostories's data with the system running.                                  | 90         | Improve user experience                               |
| 3  | Developers   | LLM Memory Implementation                     | Implement context in the conversation with the LLM.                                              | 70         | Improve user chat experience                          |
| 4  | Developers   | Centralized Data and Access Control           | Different repositories in one place with access control mapping to users.                        | 95         | Improve setup configuration and ensure data security  |
| 5  | Developers   | LLM Answers Generating Graphical Data         | Deliver graphic information through the LLM chat.                                                | 80         | Improve LLM answers                                   |

---
---

## 📊 Project Metrics

These are the management metrics chosen for the Oráculo project. Each metric indicates how it will be measured using **GitHub data integrated into Oráculo**, and its expected impact on improving project outcomes.

### 1. Committed vs. Completed
- **Measurement**: Count the number of issues (or story points) marked as **planned for the sprint** (Committed) versus the number of issues **closed in GitHub** within that sprint (Completed). Oráculo will calculate the percentage with the formula:  
  `(Completed Work Items * 100) / (Committed Work Items)`  
- **Impact**: Provides visibility into the team’s ability to meet commitments and improves estimation accuracy. Discrepancies highlight unrealistic planning or blockers, allowing managers to act early and keep delivery predictable.

---

### 2. Team Velocity
- **Measurement**: Based on the **sum of completed story points in GitHub issues** per sprint. Oráculo will present historical velocity per sprint and calculate a rolling average across the last 3–4 sprints.  
- **Impact**: Enables forecasting of future deliveries and workload capacity. Consistent velocity indicates maturity; sudden changes point to problems like absences, scope changes, or technical obstacles, helping managers anticipate risks.

---

### 3. Automated Test Coverage
- **Measurement**: Integration with CI/CD pipelines (e.g., GitHub Actions) will provide reports on **percentage of code covered by automated tests**. Coverage = `(Lines of Code Tested / Total Lines of Code) * 100`. Data will be automatically collected after each pipeline execution.  
- **Impact**: Ensures quality and reduces regression risks. High coverage means safer deployments, faster detection of anomalies, and more robust improvements in Oráculo without breaking existing features.

---

### 4. Cycle Time / Lead Time
- **Measurement**:  
  - **Cycle Time**: Calculated from the time an issue is moved to “In Progress” until it is **closed in GitHub**.  
  - **Lead Time**: Calculated from the time an issue is created until it is **closed**.  
  Data will be extracted directly from GitHub issue and pull request timestamps.  
- **Impact**: Shorter times reflect greater agility and efficiency in delivery. Tracking delays highlights bottlenecks (e.g., review queues, unclear requirements) and supports process optimization for faster, more consistent releases.

---

## 🧩 Project Model Canvas

### 🔍 Justifications
1. Ease github data visualization via LLM chat.

---

### 🎯 Product
Oráculo improvement.

---

### 🧠 SMART Goal
Improve Oráculo overall usability and chat experience in up to 4 months with 3 managers and 3 developers.

---

### ✅ Requirements
- User must be able to add repositories through a screen;  
- LLM should have memory, for context storage;  
- User acess must be restricted to their respective repositories;

---

### 🎁 Benefits
- Flexibility in importing data from multiple repositories while running;
- Time optimization when analyzing project progress.

---

### 👥 External Stakeholders & Factors
Advisors, scholarship holders, staff, and other stakeholders involved in LEDS and FAPES.

---

### 🔮 Assumptions
- There will be access to AWS servers;
- Use of Open-source dependencies.
- Improvements implemented in 4 months.

---

### ⚠️ Risks

#### 1. Lack of technical capacity of the developers  
- **Probability**: 70%  
- **Mitigation**: Rething the delivery deadlines.

#### 2. Project complexity being increased by Paulo Sergio  
- **Probability**: 50%  

#### 3. Withdrawal of team members  
- **Probability**: 20%  

#### 4. Unaccessible dependencies  
- **Probability**: 5%  
- **Mitigation**: Search and study replacement dependencies.

---

### 👥 Team

#### 🧭 Management:
- Lívia Hombre (Steadiness);
- Pedro Henrique Fonseca (Steadiness);
- Thiago Fabiano (Dominance);
- Felipe Trindade.

#### 🛠️ Developers:
- Alicia Caporalli (Steadiness);
- Sofia Nascimento;
- Vitor Nascimento.

---

### 🧱 Team Topology

**Platform Team**  
Enables stream-aligned teams to deliver work autonomously. While stream-aligned teams maintain full ownership of their work, the platform team provides internal services and tools to support delivery.

---

### 📦 Deliverables

#### Management:
- Results with collected metrics  

#### Developers:
- Dynamic Data Import;
- LLM Memory Implementation;
- Centralized Data and Access Control;
- LLM Answers Generating Graphical Data.

---

### ⛓ Constraints
- Delivery deadline: 4 months.

---

### 🗓 Timeline
- First delivery:  31/08
- Second delivery: 28/09
- Third delivery:  02/11
- Fourth delivery: 30/11

---

### 💰 Costs

- **Developer Cost**: R$1,000.00 × 7 members = **R$7,000.00**  
- **AWS Hosting Cost (4 months)**: R$ 5.0 × 120 days × 7 members= **R$4,200.00**  
- **Gemini API Cost**: R$12.00 × 120 days × 7 members = **R$10,080.00**  

#### **Total: R$21,280.00**

---

