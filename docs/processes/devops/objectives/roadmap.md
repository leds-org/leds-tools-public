---
title: Roadmaps e Epics
---
# Roadmaps e Epics

| Índice | Roadmap |
|--------|---------|
| [R1](#r1-desenvolver-um-guia-interno-e-boas-práticas) | Desenvolver um guia interno e boas práticas |
| [R4](#r4-desenvolvimento-de-pipeline-de-cicd-automatizado) | Desenvolvimento de Pipeline de CI/CD Automatizado |
| [R5](#r5-criação-de-um-processo-de-revisão-de-código-automatizado) | Criação de um Processo de Revisão de Código Automatizado |
| [R6](#r6-criação-de-um-processo-contínuo-de-gestão-de-segredos-tokens-e-certificados) | Criação de um processo contínuo de gestão de segredos, tokens e certificados |
| [R7](#r7-definir-e-implantar-um-sistema-de-aaa-autenticação-autorização-e-auditoria-para-acesso-aos-recursos-e-sistemas) | Definir e implantar um sistema de AAA para acesso aos recursos e sistemas |
| [R10](#r10-treinamento-em-aplicações-escaláveis-com-microserviços) | Treinamento em Aplicações Escaláveis com Microserviços |
| [R11](#r11-implantação-de-ambiente-seguro-em-nuvem-local-ou-pública-para-build-e-deploy-de-aplicações-escaláveis) | Implantação de ambiente seguro em nuvem local ou pública para build e deploy de aplicações escaláveis |
| [R12](#r12-criação-de-um-processo-de-gestão-de-infraestrutura-em-iac-infrastructure-as-code-executado-em-pipeline) | Criação de um processo de gestão de infraestrutura em IaC |
| [R13](#r13-implantação-de-um-sistema-de-monitoramento-de-ativos-e-aplicações-para-acompanhamento-de-kpi-de-sla) | Implantação de um sistema de monitoramento de ativos e aplicações |
| [R14](#r14-implantação-de-um-sistema-inteligente-de-coleta-e-análise-de-logs-com-suporte-a-trace-de-aplicações) | Implantação de um sistema inteligente de coleta e análise de logs |
| [R15](#r15-conectafapes) | ConectaFapes |


### R1: Desenvolver um guia interno e boas práticas
#### R1.1: Desenvolver um guia interno que documente as melhores práticas de desenvolvimento e QA para ser seguido por toda a equipe.
- E1.1: Modelagem de processo de desenvolvimento e entrega de software
    - US.1.1.1: Criar processo do Gitflow CI/CD padrão do LEDS em BPMN
    - US.1.1.2: Validar processo Gitflow CI/CD com equipe
    - US.1.1.3: Criar documentação das tarefas de usuário do processo
    - US.1.1.4: Disponibilizar documentação e capacitar a equipe

#### R1.2: Treinamento em Boas Práticas de Produção e Revisão de Código
    - E1.2: Realizar workshops e treinamentos sobre padrões de codificação e QA
        - E1.2.1: Realizar workshops e treinamentos regulares sobre padrões de codificação, revisão de código e práticas de QA.
        - E1.2.2: Produzir artigos e vídeos para treinamento contínuo da equipe.

#### R1.3: Criação de um Manual de Boas Práticas de Deploy e Segurança de Código
- E1.3: Desenvolver um guia interno de implantação segura de código

#### R1.4: Implementação de Testes de Software
- E1.4: Estruturas de referência para testes
    - Implementar estrutura de referência para testes unitários e geração de relatórios de cobertura de código.
    - Implementar estrutura de referência para testes de integração que cubra todas as funcionalidades críticas do software.
    - Definir e implementar uma solução de testes de qualidade de código.
    - Integrar os testes automatizados no pipeline de CI/CD para execução em cada commit e pull request.

---
### R4: Desenvolvimento de Pipeline de CI/CD Automatizado

- E4.1: Configurar pipelines de CI/CD completos para build, testes e deploy automático
    - US.4.1.1: Implantar um executor de pipeline on-premise no LEDS
    - Instalar o Drone CI em ambiente de testes.
    - Criar documentação de instalação do Drone.
    - Instalar o Drone CI em ambiente de produção a partir da documentação.
    - Criar documentação de pipeline para projeto de software a partir do processo Gitflow CI/CD.
    - Capacitar a equipe na criação de pipeline.

- E4.2: Automatizar o deploy das aplicações
    - US.4.2.1: Criar um processo padrão de deploy
    - Estudar estratégias de deploy.
    - Definir estratégia padrão de deploy para projetos do LEDS.
    - Criar documentação para implementação do deploy.


### R5: Criação de um Processo de Revisão de Código Automatizado
- E5.1: Definir metodologia referencial de revisão de código
- E5.2: Capacitar a equipe em revisão de código
- E5.3: Desenvolver scripts e ferramentas que verifiquem automaticamente a conformidade com padrões de código e testes antes da aprovação de PRs.

### R6: Criação de um processo contínuo de gestão de segredos, tokens e certificados

### R7: Definir e implantar um sistema de AAA (Autenticação, Autorização e Auditoria) para acesso aos recursos e sistemas

### R10: Treinamento em Aplicações Escaláveis com Microserviços

### R11: Implantação de ambiente seguro em nuvem local ou pública para build e deploy de aplicações escaláveis

### R12: Criação de um processo de gestão de infraestrutura em IaC (Infrastructure as Code) executado em pipeline

### R13: Implantação de um sistema de monitoramento de ativos e aplicações para acompanhamento de KPI de SLA

### R14: Implantação de um sistema inteligente de coleta e análise de logs com suporte a trace de aplicações
---

### R15: ConectaFapes
- E15.1: Implantar CI/CD para os softwares desenvolvidos
    - *BACKEND ADMIN*
        - Implementar um CI de build, testes e análise de qualidade de código.
        - Implementar um CD para ambientes de desenvolvimento, testes e produção.
        - Definir métricas de validação para testes, desempenho e segurança.
        - Criar monitoramento de KPI da aplicação para monitoramento de qualidade, desempenho e segurança.

    - *FRONTEND ADMIN*
        - Implementar um CI de build, testes e análise de qualidade de código.
        - Implementar um CD para ambientes de desenvolvimento, testes e produção.
        - Definir métricas de validação para testes, desempenho e segurança.
        - Criar monitoramento de KPI da aplicação para monitoramento de qualidade, desempenho e segurança.

 - E15.3: Criar uma pipeline de deploy da aplicação: Frontend e Backend
 - E15.4: Criar o monitoramento dos KPI das aplicações nos respectivos ambientes (desenvolvimento, teste e produção)
