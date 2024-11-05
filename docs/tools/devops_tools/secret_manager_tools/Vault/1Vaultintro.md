# Introdução ao Vault

O Vault é um gerenciador de segredos (secrets), que roda em um server. Ele possui uma API que dá o acesso aos segredos para as aplicações solicitantes. 

## Qual problema ele resolve?

Aplicações precisam de segredos. Coisas como usuários, senhas, chaves TLS, certificados, não podem ficar com acesso público. Mas, às vezes, elas ficam. Segredos ficam espalhados em muitos lugares, eles ficam salvos em blocos de nota, discords, "hardcodados" em arquivos, e isso é uma prática ruim (duh), que possui péssimas implicações para segurança.

O Vault resolve esse problema centralizando todas essas informações em um ambiente seguro e controlável. 

## Como ele funciona?

Aplicações geralmente não implementam gerenciamento de segredos de uma forma satisfatória, ou não as implementam de modo geral. E esses erros podem comprometer a segurança do sistema.

O Vault guarda e criptografa nossos segredos em (no nosso caso) tabelas de chave e valor, quando uma aplicação solicita uma chave, ele retorna um valor (nosso segredo) de forma segura.

