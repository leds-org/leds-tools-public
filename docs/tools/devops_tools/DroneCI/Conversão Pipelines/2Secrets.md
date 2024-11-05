# Secrets

## O Que São Secrets?
Secrets são variáveis contendo informações sensíveis necessárias nas pipelines e que não devem ser expostas públicamente. 

## Criando uma Secret no Drone CI

Abra a interface do Drone e selecione o repositório desejado:

![Drone Dashboard](../media/conv1.png)

Selecione a aba "Settings":

![Settings do Repositório](../media/conv2.png)

Agora é só criar novas variáveis secretas!

Vamos criar duas Secrets de exemplo. Uma contendo o ID e outra o token de um webhook. Saiba que: após criadas, não poderão ter seus conteúdos acessados novamente.

![Aba de criação de Secrets](../media/conv3.png)

## Utilizando Secrets na pipeline
Um exemplo utilizando as Secrets criadas previamente:

```yml
steps:   
- name: exemplo-secret
  environment:
    DISCORD_WEBHOOK_ID:
      from_secret: webhook-id
    DISCORD_WEBHOOK_TOKEN:
      from_secret: webhook-token
  commands:
    - blablabla -i $DISCORD_WEBHOOK_ID -t $DISCORD_WEBHOOK_TOKEN
```
