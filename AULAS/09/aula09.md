# Aula 09

**Sumário**

- [Aula 09](#aula-09)
  - [React](#react)
    - [O que é React\[^1\]](#o-que-é-react1)
    - [Primeiros passos](#primeiros-passos)
    - [Primeiro aplicativo](#primeiro-aplicativo)
    - [Tarefa de casa](#tarefa-de-casa)
  - [Exercícios](#exercícios)
    - [Fáceis – Fixação de conceitos básicos](#fáceis--fixação-de-conceitos-básicos)
    - [Médios – Generalização dos conceitos](#médios--generalização-dos-conceitos)
    - [Desafios](#desafios)


## React

### O que é React[^1]

[^1]: A conceituação foi baseada na [Wikipedia](https://en.wikipedia.org/wiki/React_(software)).

Também conhecido como **React.js** ou **ReactJS** é uma biblioteca JavaScript de front-end gratuita e de código aberto que visa tornar a criação de interfaces de usuários baseadas em **componentes** de forma melhorada. É mantido pela **Meta** e uma comunidade de desenvolvedores e outras empresas. De acordo com uma [pesquisa do Stack Overflow](https://survey.stackoverflow.co/2025/technology#1-web-frameworks-and-technologies) de 2025, é a segunda tecnologia/framework mais utilizada, perdendo apenas para Node.js.

O **React** pode ser usado para desenvolver aplicações de página única, para dispositivos móveis ou renderizadas no servidor com frameworks como `Next.js` e `React Router`. Como o **React** se preocupa apenas com a interface do usuário e a renderização de componentes no DOM, as aplicações **React** geralmente dependem de bibliotecas para roteamento e outras funcionalidades do lado do cliente. Uma das principais vantagens do **React** é que ele renderiza novamente apenas as partes da página que foram alteradas, evitando a renderização desnecessária de elementos DOM inalterados.

<!--### Criando aplicativos React

A criação de um aplicativo React (***React App***) normalmente ocorre a partir do uso de algum framework. Alguns dos mais comuns: **Next.js**, **React Router** e **Expo** (*mobile*). Entretanto, queremos ver o **React** de forma mais "crua" por enquanto.

Para isso vamos precisar utilizar uma ferramenta de *build*. Algumas das mais comuns são: [**Vite**](https://vite.dev/), **Parcel** e **Rsbuild**. Vamos começar com o [**Vite**](https://vite.dev/).

Para instalá-lo é preciso executar no terminal o seguinte comando:

```
npm create vite@latest my-app -- --template react-ts
```

Onde `my-app` é o nome do aplicativo, e `react-ts` é um modelo (*template*) de projeto para **React** que permite também o uso de TypeScrip.
-->

### Primeiros passos

Para uma visualização rápida dos principais conceitos do React, vamos visitar e seguir o conteúdo da página oficial [Quick Start](https://react.dev/learn).

### Primeiro aplicativo

Vamos agora seguir o [tutorial](https://react.dev/learn/tutorial-tic-tac-toe) e fazer nosso Jogo da Velha com React!

### Tarefa de casa

Leia, estude e faça um resumo da página [Pensando em React](https://react.dev/learn/thinking-in-react). O texto deve ser manuscrito e o arquivo pode ser `.pdf` ou arquivo de imagem, e deve ser **enviado para o meu e-mail até a próxima sexta (08/05/26) às 23:59**.

## Exercícios

Você pode tentar fazer na sua máquina, ou online, através do `codesandbox`.

### Fáceis – Fixação de conceitos básicos

1. Crie um componente funcional chamado `HelloWorld` que renderize “Olá, React!”.
2. Crie um componente `Greeting` que receba uma prop `name` e exiba “Olá, [nome]!”.
3. Crie três componentes diferentes (`Header`, `Main` e `Footer`) e compose-os dentro de um componente `App`.
4. Use JSX para criar uma lista não ordenada com 5 itens de frutas.
5. Crie um componente que mostre uma imagem usando a tag `<img>` com uma URL via prop.
6. Crie um componente `Card` que receba `title`, `description` e `image` como props.
7. Use `useState` para criar um botão que alterna entre “Ligado” e “Desligado”.
8. Crie um contador simples com `useState` e dois botões (+ e -).
9. Mostre um texto que muda de cor (vermelho/azul) ao clicar em um botão.
10. Crie um componente que recebe uma lista de nomes via props e renderiza em uma `<ul>`.
11. Use renderização condicional para mostrar “Usuário logado” ou “Faça login” com base em um estado booleano.
12. Crie um componente `ToggleMessage` que mostra/esconde uma mensagem ao clicar em um botão.
13. Liste números de 1 a 10 usando `.map()` dentro do JSX.
14. Crie um componente que recebe um array de objetos (produtos) e exibe nome e preço.
15. Implemente um input de texto controlado com `useState`.
16. Crie um formulário simples com nome e email que exibe os valores abaixo ao enviar.
17. Use `useEffect` para exibir uma mensagem “Componente montado” no console quando o componente carregar.
18. Crie um relógio digital que atualiza a cada segundo usando `useEffect` e `setInterval`.
19. Faça um botão que muda o tema da página (claro/escuro) usando classes CSS e estado.
20. Crie um componente `Tab` simples com duas abas que alternam o conteúdo exibido.

### Médios – Generalização dos conceitos

1. Crie um formulário completo de cadastro (nome, email, senha, idade) com validação básica.
2. Implemente um filtro de lista: digite no input e filtre uma lista de usuários em tempo real.
3. Crie um componente de contador com `useReducer` ao invés de `useState`.
4. Desenvolva um carrinho de compras simples (adicionar, remover e mostrar total).
5. Crie um custom hook `useLocalStorage` para persistir um valor no localStorage.
6. Implemente um componente de busca que faz fetch em uma API pública (ex: JSONPlaceholder) ao digitar.
7. Crie um sistema de rotas com React Router (Home, Sobre, Contato).
8. Use Context API para criar um tema global (dark/light) acessível em vários componentes.
9. Desenvolva um componente de accordion (perguntas que expandem/colapsam).
10. Crie uma galeria de imagens com modal ao clicar em uma foto.
11. Implemente paginação em uma lista de itens vindos de uma API.
12. Crie um formulário multi-etapa (wizard) com 3 passos.
13. Desenvolva um componente `TodoList` com adicionar, marcar como feito e remover.
14. Use `useEffect` para sincronizar um estado com o título da página (`document.title`).
15. Crie um hook customizado `useDebounce` para atrasar a busca enquanto o usuário digita.
16. Implemente drag and drop simples para reordenar uma lista de tarefas.
17. Crie um componente de tabs dinâmicas (quantidade de abas definida por props).
18. Desenvolva um seletor de emoji com busca e lista filtrada.
19. Crie um dashboard simples com cards de estatísticas que atualizam via botão “Atualizar”.
20. Implemente lazy loading de componentes com `React.lazy` e `Suspense`.

### Desafios

1. Construa uma aplicação completa de To-Do List com login falso, persistência no localStorage, filtro por status e busca.
2. Crie um clone simplificado do Twitter/X com feed, like, retweet e modal de post (use Context + Reducer).
3. Desenvolva um gerenciador de tarefas com Kanban (3 colunas: To Do, Doing, Done) usando drag and drop.
4. Implemente um formulário avançado com React Hook Form + Zod para validação completa.
5. Crie um player de música simples que toca faixas de uma playlist (use HTML5 Audio).
6. Desenvolva um chat em tempo real simulado (vários usuários fictícios trocando mensagens com Context).
7. Implemente Infinite Scroll em uma lista de posts vindos de uma API.
8. Crie um dashboard financeiro com gráficos (use Chart.js ou Recharts) e filtros por data.
9. Construa um e-commerce mini com carrinho, produto detalhe, filtro por categoria e preço (use Context ou Zustand).
10. Desenvolva um editor de texto rico simples (negrito, itálico, lista) com contentEditable ou Slate.js (opcional) e botão de salvar no localStorage.