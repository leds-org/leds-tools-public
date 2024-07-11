---
sidebar_position: 2
---

# Como iniciar o desenvolvimento?

## Clone o repositório do R2D2

1. Certifique-se de ter o git instalado
2. Utilize o git para clonar o [repositório](https://gitlab.com/ledsifes/tools/r2d2.git)
3. Dentro da pasta em que está o repositório, execute `npm i` para instalar as dependências

## Execute os comandos inciais para geração:

### Comando para geração da sintaxe da linguagem:
Utilize `npm run langium:generate`, para gerar o necessário sobre a sintaxe da linguagem.
Caso faça alguma alteração na linguagem em si, você terá que usar esse comando

### Comando de build
Utilize `npm run build` para fazer a build do programa.

### Para fazer debug:
1. Após rodar os dois comandos, aperte f5 para debugar.
2. Ele abrirá uma nova janela do VS Code e você utilizará normalmente, como já explicado na seção [como usar](../Usuário/howtouse.md)
