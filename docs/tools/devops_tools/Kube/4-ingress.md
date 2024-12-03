O ingress é um recurso do Kubernetes que permite a exposição de serviços HTTP e HTTPS para fora do cluster. Ele é um recurso que permite a configuração de regras de roteamento baseadas em host e caminho. O ingress é um recurso de nível de aplicação e pode ser configurado para fornecer balanceamento de carga, SSL e hospedagem virtual.

## Instalação do Ingress Controller

Ele já vem instalado junto com o Rancher. Para instalar o Rancher, siga o [tutorial](./1-rancher.md).

## Configuração do Ingress:

Para subir o deployment da nossa aplicação, use esse arquivo:

```yaml