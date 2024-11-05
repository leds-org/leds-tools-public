# Sintaxe

Este guia fornece uma explicação detalhada sobre como converter um arquivo de configuração do GitLab CI (.gitlab-ci.yml) para um arquivo de configuração do Drone CI (.drone.yml). Vamos comparar e traduzir cada seção da sintaxe da pipeline do GitLab CI para o Drone CI.

## Introdução

### GitLab CI/CD
O GitLab CI/CD usa o arquivo .gitlab-ci.yml para definir os stages do pipeline, trabalhos e scripts a serem executados. Ele suporta várias palavras-chave e recursos, como stages, scripts, ambientes, serviços e muito mais.

### Drone CI
O Drone CI usa o arquivo .drone.yml para definir seus pipelines. A configuração do Drone é mais simples e foca em definir steps e serviços dentro de um ambiente Docker.

## Principais Diferenças
- Stages vs. Steps: O GitLab CI usa Stages para definir fases do pipeline, enquanto o Drone usa Steps.
- Imagens: Ambos o GitLab CI e o Drone usam imagens Docker, mas o Drone as define por Step.
- Environment Variables: Ambos os sistemas suportam variáveis de ambiente, mas sua declaração é diferente.
- Serviços: Ambos suportam serviços, mas a sintaxe e a colocação na configuração diferem.

## Comparação Detalhada e Conversão

### 1. Stages e Steps

#### GitLab CI
No GitLab CI, você define stages e jobs dentro desses stages. Cada job pode ter scripts que executam comandos.
```yml
stages:
  - build
  - test

build:
  stage: build
  image: node:14
  script:
    - npm install

test:
  stage: test
  image: node:14
  script:
    - npm test
```

#### Drone CI
No Drone, não há stages. Em vez disso, você define steps diretamente, cada uma executando um conjunto de comandos.

```yml
kind: pipeline
type: docker
name: default

steps:
  - name: build
    image: node:14
    commands:
      - npm install

  - name: test
    image: node:14
    commands:
      - npm test
```

### 2. Imagens
Ambos o GitLab CI e o Drone usam imagens Docker. No GitLab CI, a imagem é especificada por job. No Drone, a imagem é especificada por step.

#### GitLab CI
```yml
build:
  stage: build
  image: node:14
  script:
    - npm install
```

#### Drone CI
```yml
steps:
  - name: build
    image: node:14
    commands:
      - npm install
```

### 3. Variáveis de Ambiente
Ambos os sistemas suportam variáveis de ambiente.

#### GitLab CI
```yaml
variables:
  NODE_ENV: production

build:
  stage: build
  script:
    - echo $NODE_ENV
    - npm install
```

#### Drone CI
```yml
steps:
  - name: build
    image: node:14
    environment:
      NODE_ENV: production
    commands:
      - echo $NODE_ENV
      - npm install
```

### 4. Serviços
Ambos os sistemas permitem definir serviços (por exemplo, bancos de dados) que podem ser usados pelas steps/jobs.

#### GitLab CI
```yaml
services:
  - name: mysql
    alias: db

test:
  stage: test
  image: node:14
  script:
    - npm test
```

#### Drone CI
```yaml
steps:
  - name: test
    image: node:14
    commands:
      - npm test

services:
  - name: db
    image: mysql
```

### 5. Exemplo Completo
Aqui está um exemplo completo de conversão de um pipeline do GitLab CI para um pipeline do Drone CI.

#### Exemplo GitLab CI
```yaml
stages:
  - build
  - test
  - deploy

variables:
  NODE_ENV: production

services:
  - name: mysql
    alias: db

build:
  stage: build
  image: node:14
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  image: node:14
  script:
    - npm test

deploy:
  stage: deploy
  image: node:14
  script:
    - npm run deploy
```

#### Convertido para   Drone CI
```yaml
kind: pipeline
type: docker
name: default

steps:
  - name: build
    image: node:14
    environment:
      NODE_ENV: production
    commands:
      - npm install
      - npm run build

  - name: test
    image: node:14
    environment:
      NODE_ENV: production
    commands:
      - npm test

  - name: deploy
    image: node:14
    environment:
      NODE_ENV: production
    commands:
      - npm run deploy

services:
  - name: db
    image: mysql
```
