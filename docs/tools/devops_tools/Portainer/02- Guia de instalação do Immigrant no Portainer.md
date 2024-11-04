---
date: 2024-09-12T13:29
tags:
  - Trabalho
---
O Immigrant é uma abordagem baseada em ontologia que auxilia na identificação das necessidades de informação da organização, recuperando dados de diferentes plataformas e fornecendo dados integrados que atendam às necessidades de informação.

### Pré-requisitos

- Leitura da Central de Conhecimentos sobre Portainer
- Acesso ao painel de controle do **Portainer**.
- Acesso ao [repositório do Immigrant](https://gitlab.com/immigrant-data-driven-development)

## Base Infrastructure

A base onde todas as aplicações básicas, como kafka, banco de dados, etc., rodam para garantir o funcionamento do Immigrant.

### Passo a Passo

### 1. Navegue até a opção de Stacks

1. No menu lateral esquerdo, clique em **Stacks**.

2. Após abrir a página de Stacks, clique no botão **+ Add stack**.

### 2. Configure a Stack

1. Defina o nome da stack como **base-infrastructure**. Este será o identificador da sua stack dentro do Portainer.

2. Na seção **Web editor**, insira o conteúdo do arquivo `docker-compose.yml` presente no [repositório base-infrastructure](https://gitlab.com/immigrant-data-driven-development/infrastructure/base-infrastructure).

### 3. Deploy da Stack

1. Após configurar o conteúdo, clique no botão Deploy the stack.

2. O Portainer irá iniciar a stack automaticamente. Você será redirecionado para a página da stack, onde poderá ver os serviços sendo criados e executados.


## ETL Infrastructure

O ETL Infrastructure é a aplicação responsável por extrair os dados das diversas plataformas e incluir essas informações em uma fila Kafka.

### Passo a Passo

### 1. Navegue até a opção de Stacks

1. No menu lateral esquerdo, clique em **Stacks**.

2. Após abrir a página de Stacks, clique no botão **+ Add stack**.

### 2. Configure a Stack

1. Defina o nome da stack como **etl-infrastructure**. Este será o identificador da sua stack dentro do Portainer.

2. Na seção **Web editor**, insira o conteúdo do arquivo `docker-compose.yml` presente no [repositório etl-infrastructure](https://gitlab.com/immigrant-data-driven-development/infrastructure/etl-infrastructure).

3. Carregue o .env do repositório utilizando a opção **Load variables from .env file**.

### 3. Deploy da Stack

1. Após configurar o conteúdo, clique no botão Deploy the stack.

2. O Portainer irá iniciar a stack automaticamente. Você será redirecionado para a página da stack, onde poderá ver os serviços sendo criados e executados.


## Transform Infrastructure

O Transform Infrastructure é o responsável por ler os dados da fila Kafka e mapeá-los para a ontologia, guardando os dados em um banco de dados.

### Passo a Passo

### 1. Navegue até a opção de Stacks

1. No menu lateral esquerdo, clique em **Stacks**.

2. Após abrir a página de Stacks, clique no botão **+ Add stack**.

### 2. Configure a Stack

1. Defina o nome da stack como **transform-infrastructure**. Este será o identificador da sua stack dentro do Portainer.

2. Na seção **Web editor**, insira o conteúdo do arquivo `docker-compose.yml` presente no [repositório transform-infrastructure](https://gitlab.com/immigrant-data-driven-development/infrastructure/transform-infrastruture).

3. Carregue o .env do repositório utilizando a opção **Load variables from .env file**.

### 3. Deploy da Stack

1. Após configurar o conteúdo, clique no botão Deploy the stack.

2. O Portainer irá iniciar a stack automaticamente. Você será redirecionado para a página da stack, onde poderá ver os serviços sendo criados e executados.


## Dremio Infrastructure

O Dremio Infrastructure é onde todas as queries são armazenadas em views para facilitar o acesso pelo dashboard.

### Passo a Passo

### 1. Navegue até a opção de Stacks

1. No menu lateral esquerdo, clique em **Stacks**.

2. Após abrir a página de Stacks, clique no botão **+ Add stack**.

### 2. Configure a Stack

1. Defina o nome da stack como **dremio-infrastructure**. Este será o identificador da sua stack dentro do Portainer.

2. Na seção **Web editor**, insira o conteúdo do arquivo `docker-compose.yml` presente no [repositório dremio-infrastructure](https://gitlab.com/immigrant-data-driven-development/infrastructure/dremio-infrastrutrure).

3. Carregue o .env do repositório utilizando a opção **Load variables from .env file**.

### 3. Deploy da Stack

1. Após configurar o conteúdo, clique no botão Deploy the stack.

2. O Portainer irá iniciar a stack automaticamente. Você será redirecionado para a página da stack, onde poderá ver os serviços sendo criados e executados.


## Dashboard Infrastructure

O Dashboard Infrastructure é onde os dados coletados são exibidos para facilitar a visualização e entendimento das informações.

### Passo a Passo

### 1. Navegue até a opção de Stacks

1. No menu lateral esquerdo, clique em **Stacks**.

2. Após abrir a página de Stacks, clique no botão **+ Add stack**.

### 2. Configure a Stack

1. Defina o nome da stack como **dashboard-infrastructure**. Este será o identificador da sua stack dentro do Portainer.

2. Na seção **Web editor**, insira o conteúdo do arquivo `docker-compose.yml` presente no [repositório dashboard-infrastructure](https://gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture/-/tree/main/superset).

3. Clique em **+ Add an environment variable** e adicione a variável `SUPERSET_SECRET_KEY` com um valor a sua escolha.

#### Observações

Caso haja dificuldades em buildar a stack é possível alterar a imagem no compose da seguinte forma:
```
image: registry.gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture:latest
```

### 3. Deploy da Stack

1. Após configurar o conteúdo, clique no botão Deploy the stack.

2. O Portainer irá iniciar a stack automaticamente. Você será redirecionado para a página da stack, onde poderá ver os serviços sendo criados e executados.

### 4. Configuração do superset

1. Utilize ssh para se conectar na máquina do portainer e execute os seguintes comandos:
```
docker exec -it theband_dashboard superset fab create-admin
docker exec -it theband_dashboard superset db upgrade
docker exec -it theband_dashboard superset init
```

2. Entre no superset utilizando a porta 8088 
- Clique em **Dashboards**
- No canto superior direito clique no botão de **Import dashboards**
- Selecione o arquivo `dashboard_export` presente no [repositório](https://gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture/-/tree/main/superset).

## Conclusão

Agora todo o ambiente do Immigrant está sendo executado utilizando Portainer.

[Link do repositório do Immigrant](https://gitlab.com/immigrant-data-driven-development)

---

# Immigrant Installation Guide on Portainer

Immigrant is an ontology-based approach that helps identify an organization's information needs by retrieving data from various platforms and providing integrated data that meets those needs.

### Prerequisites

- Familiarity with the Portainer Knowledge Hub
- Access to the **Portainer** control panel
- Access to the [Immigrant repository](https://gitlab.com/immigrant-data-driven-development)

## Base Infrastructure

This is the foundation where all essential applications, such as Kafka and databases, run to ensure the proper functioning of Immigrant.

### Step-by-Step Guide

### 1. Navigate to the Stacks Option

1. In the left-side menu, click on **Stacks**.

2. Once the Stacks page opens, click on the **+ Add stack** button.

### 2. Configure the Stack

1. Name the stack **base-infrastructure**. This will be the identifier for your stack within Portainer.

2. In the **Web editor** section, insert the content from the `docker-compose.yml` file found in the [base-infrastructure repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/base-infrastructure).

### 3. Deploy the Stack

1. After configuring the content, click on **Deploy the stack**.

2. Portainer will start the stack automatically. You will be redirected to the stack page, where you can see the services being created and executed.

---

## ETL Infrastructure

ETL Infrastructure is responsible for extracting data from various platforms and adding it to a Kafka queue.

### Step-by-Step Guide

### 1. Navigate to the Stacks Option

1. In the left-side menu, click on **Stacks**.

2. Once the Stacks page opens, click on the **+ Add stack** button.

### 2. Configure the Stack

1. Name the stack **etl-infrastructure**. This will be the identifier for your stack within Portainer.

2. In the **Web editor** section, insert the content from the `docker-compose.yml` file found in the [etl-infrastructure repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/etl-infrastructure).

3. Load the `.env` file from the repository using the **Load variables from .env file** option.

### 3. Deploy the Stack

1. After configuring the content, click on **Deploy the stack**.

2. Portainer will start the stack automatically. You will be redirected to the stack page, where you can see the services being created and executed.

---

## Transform Infrastructure

Transform Infrastructure reads data from the Kafka queue, maps it to the ontology, and stores the data in a database.

### Step-by-Step Guide

### 1. Navigate to the Stacks Option

1. In the left-side menu, click on **Stacks**.

2. Once the Stacks page opens, click on the **+ Add stack** button.

### 2. Configure the Stack

1. Name the stack **transform-infrastructure**. This will be the identifier for your stack within Portainer.

2. In the **Web editor** section, insert the content from the `docker-compose.yml` file found in the [transform-infrastructure repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/transform-infrastruture).

3. Load the `.env` file from the repository using the **Load variables from .env file** option.

### 3. Deploy the Stack

1. After configuring the content, click on **Deploy the stack**.

2. Portainer will start the stack automatically. You will be redirected to the stack page, where you can see the services being created and executed.

---

## Dremio Infrastructure

Dremio Infrastructure stores all queries in views to simplify access via the dashboard.

### Step-by-Step Guide

### 1. Navigate to the Stacks Option

1. In the left-side menu, click on **Stacks**.

2. Once the Stacks page opens, click on the **+ Add stack** button.

### 2. Configure the Stack

1. Name the stack **dremio-infrastructure**. This will be the identifier for your stack within Portainer.

2. In the **Web editor** section, insert the content from the `docker-compose.yml` file found in the [dremio-infrastructure repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/dremio-infrastrutrure).

3. Load the `.env` file from the repository using the **Load variables from .env file** option.

### 3. Deploy the Stack

1. After configuring the content, click on **Deploy the stack**.

2. Portainer will start the stack automatically. You will be redirected to the stack page, where you can see the services being created and executed.

---

## Dashboard Infrastructure

Dashboard Infrastructure is where the collected data is displayed to facilitate the visualization and understanding of the information.

### Step-by-Step Guide

### 1. Navigate to the Stacks Option

1. In the left-side menu, click on **Stacks**.

2. Once the Stacks page opens, click on the **+ Add stack** button.

### 2. Configure the Stack

1. Name the stack **dashboard-infrastructure**. This will be the identifier for your stack within Portainer.

2. In the **Web editor** section, insert the content from the `docker-compose.yml` file found in the [dashboard-infrastructure repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture/-/tree/main/superset).

3. Click on **+ Add an environment variable** and add the variable `SUPERSET_SECRET_KEY` with a value of your choice.

#### Notes

If there are difficulties building the stack, you can modify the image in the compose file as follows:
```
image: registry.gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture:latest
```

### 3. Deploy the Stack

1. After configuring the content, click on **Deploy the stack**.

2. Portainer will start the stack automatically. You will be redirected to the stack page, where you can see the services being created and executed.

### 4. Superset Configuration

1. Use SSH to connect to the Portainer machine and execute the following commands:
```
docker exec -it theband_dashboard superset fab create-admin
docker exec -it theband_dashboard superset db upgrade
docker exec -it theband_dashboard superset init
```

2. Access Superset using port 8088:
- Click on **Dashboards**
- In the top right corner, click the **Import dashboards** button.
- Select the `dashboard_export` file found in the [repository](https://gitlab.com/immigrant-data-driven-development/infrastructure/dashboard-infrastruture/-/tree/main/superset).

---

## Conclusion

Now the entire Immigrant environment is running using Portainer.

[Link to the Immigrant repository](https://gitlab.com/immigrant-data-driven-development)