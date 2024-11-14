---
title: "Máquinas e Aplicações"
sidebar_position: 2
---

## Máquinas no Proxmox VE

| Nome da Máquina    | IP              | URL             | Serviços                                 |
|--------------------|-----------------|-----------------|---------------------------------------------|
| Service Desk       | 192.168.211.169 | atendimento.leds.dev.br | [Sistema de Tickets](#service-desk)              |
| Rancher Master     | 192.168.211.170 |  | [Kubernetes](#rancher-master)              |
| Drone              | 192.168.211.171 | drone.leds.dev.br | [Drone CI](#drone)                |
| PfSense            | 192.168.211.172 | fw.intranet.leds.dev.br | [PfSense](#pfsense)                   |
| Rancher Worker     | 192.168.211.173 |  | [Kubernetes](#rancher-worker)              |
| Services           | 192.168.211.174 | services.leds.dev.br | [Portainer](#services)                 |
| ConectaFapes Test  | 192.168.211.175 | testing.conectafapes.leds.dev.br | [Testing](#conectafapes-test)                 |
| ConectaFapes Develop | 10.128.128.9  | developing.conectafapes.leds.dev.br | [Developing](#conectafapes-develop)        |
| Banco de Dados     | 10.128.128.10   |  | [Banco de Dados](#banco-de-dados)          |
| PeD                | 10.128.128.11   |  | [Jobs Paulo](#ped)              |
| ELK Stack                | 10.128.128.20   |  |          |

---
## Detalhes dos Serviços

### Service Desk
| Serviço         | Descrição                           | Porta     |
|-----------------|-------------------------------------|-----------|
| Request Tracker | Sistema de Gerenciamento de Tickets | 80, 443   |


### Rancher Master
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | Drone CI       | Plataforma de Integração Contínua | 8000  | -->
<!-- | PostgreSQL     | Banco de dados relacional     | 5432      | -->


### Drone
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
| Drone CI       | WebUi         | 80, 443   |
| Runner       | Docker Runner         | 3000   |



### PfSense
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
| PfSense        | WebUi       | 80, 443   |


### Rancher Worker
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | pfSense        | Firewall e roteamento         | 80, 443   | -->
<!-- | OpenVPN        | VPN para rede interna         | 1194      | -->



### Services
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
| Portainer |  | 9443 |
| Prometheus |  | 9090 |
| Grafana |  | 3000 |



### ConectaFapes Test
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | pfSense        | Firewall e roteamento         | 80, 443   | -->
<!-- | OpenVPN        | VPN para rede interna         | 1194      | -->



### ConectaFapes Develop
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | pfSense        | Firewall e roteamento         | 80, 443   | -->
<!-- | OpenVPN        | VPN para rede interna         | 1194      | -->



### Banco de Dados
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | pfSense        | Firewall e roteamento         | 80, 443   | -->
<!-- | OpenVPN        | VPN para rede interna         | 1194      | -->



### PeD
| Serviço        | Descrição                     | Porta     |
|----------------|-------------------------------|-----------|
<!-- | pfSense        | Firewall e roteamento         | 80, 443   | -->
<!-- | OpenVPN        | VPN para rede interna         | 1194      | -->

