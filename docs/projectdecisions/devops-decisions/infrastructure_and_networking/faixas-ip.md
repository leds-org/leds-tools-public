---
title: "Faixas de IP e IPs em Uso"
sidebar_position: 1
---

## Faixas de IP
Nossa infraestrutura contém algumas faixas de IP, cada uma atrelada a uma interface de rede. As interfaces que tem uso em máquinas virtuais são as seguintes:

- **Intranet:** usa a interface VMBR3 no Proxmox, tem uma faixa grande de IPs (32.768 IPs), é uma rede que têm acesso externo no sentido de saída, mas não no de entrada, portanto, o seu acesso é apenas por VPN. Deve ser usada para hospedar serviços internos do LEDS, que usuários de fora não acessariam. É importante entender que a rede POSSUI acesso externo para saída, portanto, consegue acessar a internet, baixar arquivos, commitar em repositórios, etc.

- **Extranet:** utiliza a interface VMBR4 no Proxmox e possui uma faixa de IPs extremamente limitada, com apenas 8 disponíveis. Diferentemente da Intranet, a Extranet tem acesso externo tanto para entrada quanto para saída, o que a torna adequada para hospedar serviços que precisam ser acessíveis ao público externo, como sites, APIs ou outras aplicações públicas. No entanto, o uso desses IPs deve ser feito de maneira extremamente criteriosa, sendo reservado apenas para serviços essenciais. A Extranet herda IPs da faixa 200.137.75.x de uma interface WAN, que utiliza NAT para traduzir para os IPs internos do Ifes (faixa 172.168.19.x). Esses IPs passam por um segundo NAT em nosso firewall, que os traduz para a faixa interna 192.168.211.x. Os IPs da WAN, começando com 200, são expostos para acesso externo.

- **DB:** usa a interface VMBR5 no Proxmox, possui uma grande faixa de IPs e deve ser usada apenas para conexões com bancos de dados, não possui acesso nem de saída, nem de entrada à Internet. Portanto, deve ser usada junto com outras interfaces.

### Nossas redes

| Rede | Interface | Faixa Disponível | Range de IPs | IPs Disponíveis | 
| --- | --- | --- | --- | --- |
| Intranet | VMBR3 | 10.128.128.0/17 |  10.128.128.0 - 10.128.255.255 | 32.768 | 
| Extranet | VMBR4 | 192.168.211.168/24* | 192.168.211.168 - 192.168.211.175 | 8 |
| DB | VMBR5 | 10.255.255.0/24 | 10.255.255.0 - 10.255.255.255 | 256

:::warning[Excluindo os NATs]
:::  

## IPs em uso e vacantes
#### EXTRANET

| IP | Serviço | Domínio atrelado | 
| --- | --- | --- |
| 192.168.211.168 | Proxmox | vostok.leds.dev.br |
| 192.168.211.169 | Service Desk | atendimento.leds.dev.br |
| 192.168.211.170 | Rancher Control | - |
| 192.168.211.171 | Drone | drone.leds.dev.br |
| 192.168.211.172 | PF Sense | fw.intranet.leds.dev.br  |
| 192.168.211.173 | Rancher Work | - |
| 192.168.211.174 | Services (Portainer) | services.leds.dev.br |
| 192.168.211.175 | - | - |