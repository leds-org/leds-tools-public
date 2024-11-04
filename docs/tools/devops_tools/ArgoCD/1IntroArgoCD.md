---
title: "Introdução"
---

# Introdução ao ArgoCD

O Argo CD é uma ferramenta de GitOPS e CD (duh) para o Kubernetes, que visa garantir que nosso repositório seja a fonte única da verdade, ou seja, que o estado do nosso cluster Kube esteja automaticamente sincronizado com nosso repositório. Para o Argo, definimos (ou melhor, declaramos) um estado-alvo em algum arquivo YAML dentro do repositório Git, e, com isso, ele fará o possível para sincronizar o estado-vivo (live state) do cluster com a verdade, ou seja, o estado-alvo definido dentro do repositório. Ele não tem nenhuma ferramenta de integração, portanto, é preciso de algo como o Drone para fazer as builds e testes. 

O benefício de se usar algo como o Argo CD é a automatização e, com isso, a minimização do erro humano na hora de fazer o deploy. Ele também sincroniza automaticamente e mantém a integridade do ambiente, e por sua configuração ser um arquivo YAML, ele pode ser versionado e "backupado" facilmente. E um benefício do próprio Argo em comparação com outras ferramentas como o Jenkins, é ter uma interface gráfica muito intuitiva e amigável. Você tem diversas ferramentas gráficas para acompanhar o estado e manejar o Argo.

É uma boa prática para o Argo, manter as configurações dele em alguma branch separada, para evitar qualquer tipo de problema com merge ou coisa parecida.

## Recursos LEDS DevOPS para o Argo:
- [Instalação do ArgoCD](2InstallArgoCD.md)
- [Deploy de uma aplicação Python com o Argo CD](3DeployArgoCD.md)
