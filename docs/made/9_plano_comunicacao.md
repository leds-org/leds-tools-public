---
title: Documentação GPS – Gestão do MADE
sidebar_label: Documentação
---

# DISC
> **Objetivo:** Preencher resultados do DISC dos membros GPS e MADE.  
> *Você complementa os valores após o teste.*

| Nome                                  | Dominância | Influência | Estabilidade | Conscienciosidade |
|---------------------------------------|:----------:|:----------:|:------------:|:-----------------:|
| Mafe Mattos                           |            |            |              |                   |
| Lucas Lopes                           |            |            |              |                   |
| Marlon Silva                          |            |            |              |                   |
| Breno Ricardo Ferreira Antunes        |            |            |              |                   |
| Luiz Zottich                          |            |            |              |                   |
| Josias Neves                          |            |            |              |                   |
| Breno Amâncio Affonso                 |            |            |              |                   |
| Rafael Barros Leão Borges             |            |            |              |                   |
| Paulo Sousa Sanches Lopes             |            |            |              |                   |
| Josias Neves Jardins Borba            |            |            |              |                   |
| Jonathan Castro Silva                 |            |            |              |                   |

---

# Team Topology
Este diagrama de times orienta papéis, objetivos e fluxo de comunicação:

| Tipo de Time        | Nome do Time    | Membros                                                         | Objetivo                                                      | Interação Principal                  |
|---------------------|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------|
| **Stream-aligned**  | Equipe GPS      | Mafe, Lucas, Marlon, Breno R. Antunes, Luiz                     | Gerir adoção, governança e evolução do MADE no Projeto X      | ↔ Equipe MADE (feedback & suporte)   |
| **Platform Team**   | Equipe MADE     | Josias N., Breno A.A., Rafael B.L.B., Paulo S.S.L., Josias N.B., Jonathan C.S. | Desenvolver, manter e evoluir a plataforma MADE (DSL, APIs, dashboards) | ↔ Equipe GPS (requisitos & uso)      |
| **Enabling Team**   | Agile Coaches   | — (consultores externos)                                        | Capacitar equipes em métodos ágeis e no uso do DSL do MADE    | ↔ GPS & MADE                         |

**Fluxo de Interação**  
- **Equipe GPS → Equipe MADE:** requisições de novas funcionalidades, suporte operacional e sugestões de melhoria.  
- **Equipe MADE → Equipe GPS:** releases de plataforma, correções, documentação técnica e treinamentos.  
- **Agile Coaches → GPS/MADE:** workshops, sessões de coaching e revisão de práticas.

---

# Backlog
Backlog de gestão do MADE pela Equipe GPS. Itens priorizados conforme impacto no sucesso e na adoção.

| ID      | Tipo  | Título                                           | Descrição                                                                                 | Prioridade |
|---------|-------|--------------------------------------------------|-------------------------------------------------------------------------------------------|:----------:|
| EPIC-01 | Epic  | Governança e Suporte ao MADE                     | Estruturar papéis, processos e comunicação para gestão eficaz do MADE                    | Alta       |
| US-01   | Story | Definir Papéis e Responsabilidades               | Documentar e publicar no Docusaurus os papéis de uso, suporte e evolução do MADE          | Alta       |
| US-02   | Story | Criar Guia de Uso do DSL                         | Elaborar seção “Modelagem de EPICs, User Stories, Sprints e Releases” na doc             | Alta       |
| US-03   | Story | Configurar Canal de Suporte no Discord           | Criar servidor e channels específicos para dúvidas, suporte e avisos do MADE              | Média      |
| US-04   | Story | Estabelecer Alertas de CI/CD                     | Configurar notificações de build/test/releases no Discord e WhatsApp                     | Média      |
| US-05   | Story | Desenvolver Dashboards de Métricas               | Validar e apresentar burndown, velocity e status de sprints no site e no Discord         | Média      |
| TASK-01 | Task  | Workshop “Como Gerir o MADE”                     | Realizar treinamento interno com Agile Coaches via Discord                               | Alta       |
| TASK-02 | Task  | Publicar Documentação Inicial no Docusaurus      | Deploy da doc no site Docusaurus e validação de acesso                                  | Alta       |
| TASK-03 | Task  | Monitorar Adoção e Coletar Feedback              | Coletar dados de uso e feedback no canal #feedback-made e ajustar backlog conforme necessário | Média      |

---

# Plano de Comunicação
Define canais, frequência e responsáveis para manter todos alinhados.

| De               | Para                 | Canal                  | Frequência       | Formato                        | Responsável          |
|------------------|----------------------|------------------------|------------------|--------------------------------|----------------------|
| Equipe GPS       | Equipe GPS           | Discord (#daily-standup) | Diária (09:00)   | Daily Standup (voice + text)   | Marlon Silva         |
| Equipe GPS       | Equipe MADE          | Discord (📹 video call)  | Semanal (qua 14:00) | Sync Meeting (30 min)      | Lucas Lopes          |
| Equipe GPS       | Agile Coaches        | Discord (#training)      | Quinzenal         | Workshop interativo            | Mafe Mattos          |
| Equipe MADE      | Equipe GPS           | Discord (#releases)      | A cada release    | Release Notes + Q&A            | Rafael Barros L. Borges |
| Equipe GPS ↔ MADE| —                    | WhatsApp (grupo “MADE Support”) | Contínuo/urgente | Alerts de incidentes           | Paulo Sousa S. Lopes  |
| Equipe GPS       | Stakeholders da Disciplina | E-mail                 | Quinzenal         | Relatório de Progresso (PDF)   | Breno R. F. Antunes  |
| GPS & MADE       | GPS & MADE           | Discord (voice)         | Mensal            | Retrospectiva                  | Marlon Silva         |
