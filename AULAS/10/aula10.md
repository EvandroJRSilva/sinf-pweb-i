# Aula 10

Sumário

- [Aula 10](#aula-10)
  - [Module Bundlers](#module-bundlers)
  - [Frameworks para React](#frameworks-para-react)
  - [Voltando aos frameworks](#voltando-aos-frameworks)


## Module Bundlers

Os *module bundlers* (ou empacotadores de módulos), ou *build tools*, combinam vários arquivos JavaScript em pacotes otimizados para navegadores. Eles gerenciam dependências, transformam o código e o dividem para melhorar o desempenho, habilitam recursos modernos do JavaScript, melhoram os tempos de carregamento e simplificam os fluxos de trabalho de desenvolvimento.

Por exemplo, suponha uma aplicativo básico de CRUD, como uma lista de compras. Para deixar o código mais modularizado e organizado, várias das funções podem ser implementadas em arquivos diferentes. Para deixar o aplicativo um pouco mais sofisticado podem ser incorporadas bibliotecas de terceiros. Sem o uso de *bundlers* isso exigiria que o arquivo HTML fizesse várias consultas ao ser carregado, por exemplo (exemplo retirado [deste site](https://snipcart.com/blog/javascript-module-bundler)):

```html
<head>
  <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
  <script type='text/javascript' src='tinycolor.js'></script>
  <script type='text/javascript' src='/nav.js'></script>
  <script type='text/javascript' src='/crud.js'></script>
  <script type='text/javascript' src='/main.js'></script>
</head>
```

Com o uso de um *bundler* todos esses arquivos são unificados e suas dependências também já são tratadas em um único arquivo, o que resultaria em:

```html
<head>
  <script type='text/javascript' src='/bundle.js'></script>
</head>  
```

O funcionamento dos *bundlers* ocorre normalmente em 2 estágios:

1. Mapeamento de Grafo de Dependência.
2. Empacotamento.

Alguns dos principais *bundlers* do JavaScript atualmente são:

- [Vite](https://vite.dev/): é o que está explodindo em popularidade atualmente.
- [Webpack](https://webpack.js.org/): o mais utilizado, pois já está há mais tempo no mercado e, portanto, já é bem maduro e testado.
- [Rollup](https://rollupjs.org/).
- [esbuild](https://esbuild.github.io/).
- [Parcel](https://parceljs.org/).

O `React` sugere a utilização do [Vite](https://vite.dev/), [Parcel](https://parceljs.org/) ou [Rsbuild](https://rsbuild.rs/).

## Frameworks para React

[Oficialmente](https://react.dev/learn/creating-a-react-app) o `React` sugere a utilização de um framework para a criação de novas aplicações com `React`. 

É possível utilizar o `React` sem frameworks, como já vimos antes, mas para isso é necessário fazer umas *gambiarras*. A que a gente fez foi utilizar um arquivo `package.json` e instalar com o `npm`. A [recomendação oficial](https://react.dev/learn/build-a-react-app-from-scratch), entretanto, é com a utilização de algum ***bundler***.

Uma alternativa para usar o `React` sem framework e sem *bundler* é referenciando um CDN (*Content Delivery Network*). Basicamente, no arquivo HTML acrescentamos as seguintes tags no cabeçalho:

```
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
```

Além do `React` é necessária a utilização de um renderizador. No nosso caso é o `react-dom`. Para as versões mais recentes, são necessários *endpoints* específicos do `React`:

```
<script src="https://react.dev/19.2.6/react.development.js"></script>
<script src="https://react.dev/19.2.6/react-dom.development.js"></script>
```

E provavelmente não vai dar certo, porque vai ser necessária a utilização de algum *bundler*. Fazer o que...

Porém, ainda vai ficar faltando um detalhe: o JSX, que vai precisar de um compilador como o [Babel](https://babeljs.io/). A solução nesse caso é bastante simples: retornar um `React.createElement()`, o qual recebe 3 parâmetros:

- O tipo de elemento a ser criado.
- Um objeto de propriedades para especificar valores de propriedades para o elemento.
- Elementos filhos.

Um [**exemplo simples**](react-puro.html) (fonte: [Chris Lewis](https://medium.com/@chrislewisdev/react-without-npm-babel-or-webpack-1e9a6049714)).

## Voltando aos frameworks

Os dois recomentados pelo React são: 

- [Next.js App Router](https://nextjs.org): é um framework `React` *full-stack*. Ele utiliza uma abordagem de roteamento baseada em arquivos, onde a estrutura do arquivo determina diretamente as rotas disponíveis. O `Next.js Router` suporta renderização tanto no lado do cliente quanto no lado do servidor (**SSR** - *Server-Side Rendering*).
  - **Quando usar**
    - Quando se é necessário SSR ou geração de site estático.
    - Quado SEO (*Search Engine Optimization*) e tempo de carregamento são importantes.
    - Quando existe uma preferênia por sistema de roteamento baseado em arquivos.
    - Quando se quer aproveitar recursos como regeneração estática incremental (ISR - *Incremental Static Regeneration*) e rotas de API.
- [React Router](https://reactrouter.com/): é a biblioteca de roteamento mais popular para `React` e pode ser combinada com [Vite](https://vite.dev/) para criar um framework `React` *full-stack*. Ele permite o roteamento no lado do cliente em aplicações `React`, e também permite definir rotas e gerenciar a navegação em uma aplicação de página única (**SPA** - *Single-Page Application*).
  - **Quando usar**
    - Quando se está criando um SPA.
    - Quando for desejado/necessário controle completo do comportamento de roteamento do lado do cliente.
    - Quando SEO e SSR não são importantes.
    - Quando existe uma preferência por roteamento baseado em componente.