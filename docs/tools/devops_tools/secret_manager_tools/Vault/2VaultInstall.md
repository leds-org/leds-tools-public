# Instalação do Vault

O Vault pode ser instalado de diversas formas, mas vamos instalar ele adicionando o repositório oficial em uma VM com Ubuntu Server 22.04 LTS com essas especificações (conforme a recomendação da [documentação oficial](https://developer.hashicorp.com/vault)):

CPU|Memory|Disk Capacity
---|---|---
2-4 core|8-16 GB RAM|100+ GB

Rode os seguintes comandos:

```bash
# Atualize os repositórios e instale o gpg e wget
sudo apt update && sudo apt install gpg wget
```
Com esses comandos, você vai adicionar o chaveiro (*keyring*) do Vault na sua máquina, é uma forma segura de armazenar e gerenciar senhas.

```bash
# Baixe as senhas e adicione no chaveiro
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
```
Verifique o keyring:
```bash
# Baixe as senhas e adicione no chaveiro
gpg --no-default-keyring --keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg --fingerprint
```
Observe a saída e procure por `HashiCorp Security (HashiCorp Package Signing) <security+packaging@hashicorp.com>`. Se está lá, prossiga com a instalação:

```bash
# Adicione o repositório do Vault
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
```
Instale o vault:
```bash
# Instalando o vault
sudo apt update && sudo apt install vault
```

## Verificando a instalação

Abra um novo terminal e digite apenas `vault`.

A saída deverá se parecer com isso:
```
Usage: vault <command> [args]

Common commands:
    read        Read data and retrieves secrets
    write       Write data, configuration, and secrets
    delete      Delete secrets and configuration
    list        List data or secrets
    login       Authenticate locally
    agent       Start a Vault agent
    server      Start a Vault server
    status      Print seal and HA status
    unwrap      Unwrap a wrapped secret

Other commands:
    audit                Interact with audit devices
    auth                 Interact with auth methods
    debug                Runs the debug command
    events
    hcp
    kv                   Interact with Vault's Key-Value storage
    lease                Interact with leases
    monitor              Stream log messages from a Vault server
    namespace            Interact with namespaces
    operator             Perform operator-specific tasks
    patch                Patch data, configuration, and secrets
    path-help            Retrieve API help for paths
    pki                  Interact with Vault's PKI Secrets Engine
    plugin               Interact with Vault plugins and catalog
    policy               Interact with policies
    print                Prints runtime configurations
    proxy                Start a Vault Proxy
    secrets              Interact with secrets engines
    ssh                  Initiate an SSH session
    token                Interact with tokens
    transform            Interact with Vault's Transform Secrets Engine
    transit              Interact with Vault's Transit Secrets Engine
    version-history      Prints the version history of the target Vault server
```

### Pronto, instalação feita :)

Para mais conteúdos sobre Vault, refira-se a documentação oficial (que é muito boa e intuitiva):
https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-dev-server