# Aula 02

## Listas

**TODO**
  - Listas de definições

As listas podem ser **ordenadas** (seus elementos são ordenados de acordo com algum tipo de numeração) ou **não ordenadas** (não há qualquer tipo de ordenação).

A tag para listas ordenadas é [`<ol>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/ol) de *ordered list*. Seus elementos devem estar entre tags `<li>` (*list item*).

Atributos: `reversed`, `start` e `type`.

Exemplo:

```html
<ol start="5", type="A">
  <li> Primeiro item</li>
  <li>
    segundo item
    <!-- Veja que a tag de fechamento </li> não é colocada aqui! -->
    <ol>
      <li>segundo item primeiro subitem</li>
      <li>segundo item segundo subitem</li>
      <li>segundo item terceiro subitem</li>
    </ol>
  </li>
  <!-- Aqui está a tag de fechamento </li> -->
  <li>terceiro item</li>
</ol>
```

A tag para listas não-ordenadas é [`<ul>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/ul) de *unordered list*. Seus elementos devem estar entre tags `<li>` (*list item*).

Ambas as listas podem ser aninhadas e misturadas, ou seja, `<ol>` dentro de `<ul>` e vice-versa.

## Tabelas

Tabelas podem ser construídas com o uso da tag [`<table>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/table). O conteúdo permitido em seu interior deve seguir a seguinte ordem:

1. Um elemento `<caption>` (opcional).
2. Zero ou mais `<colgroup>` elementos.
3. Um elemento `<thead>` (opcional).
4. Uma das duas alternativas:
   1. Zero ou mais elementos `<tbody>`
   2. Um ou mais elementos `<tr>`
5. Um elemento `<tfoot>` (opcional).

**Elementos**

- [`<caption>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/caption): tag usada para legendas.
- [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup): serve para definir um grupo de colunas dentro uma tabela.
- [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead): encapsula um conjunto de linhas de tabela (`<tr>`), indicando que fazem parte do cabeçalho de uma tabela, com informações sobre as colunas da tabela (comumente elementos `<th>`).
- [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody): encapsula um conjunto de linhas de tabela (`<tr>`), indicado que compõem o corpo de dados da tabela
- [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr): define uma linha de células em uma tabela. As células da linha podem então consistir em um misto de células de dado (`<td>`) e células de cabeçalho (`<th>`).
- [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th): define uma célula como o cabeçalho de um grupo de células, e pode ser usado como filho de um elemento `<tr>`. A natureza exata de seu grupo é definida pelos atributos `scope` e `headers`.
- [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td): define uma célula de tabela que contém dados e pode ser usada como filha do elemento `<tr>`.
- [`<tfoot>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/tfoot): define um conjunto de linhas as quais farão parte do rodapé de uma tabela HTML.

Exemplo:

```html
<table>
  <caption>Exemplo de tabela</caption>
  <thead>
    <tr>
      <th colspan="3">CABEÇALHO</th>
    </tr>
    <tr>
      <th>Coluna 1</th>
      <th>Coluna 2</th>
      <th>Coluna 3</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Linha 1 - Coluna 1</td>
        <td>Linha 1 - Coluna 2</td>
        <td>Linha 1 - Coluna 3</td>
      </tr>
      <tr>
        <td>Linha 2 - Coluna 1</td>
        <td>Linha 2 - Coluna 2</td>
        <td>Linha 2 - Coluna 3</td>
      </tr>
      <tr>
        <td>Linha 3 - Coluna 1</td>
        <td>Linha 3 - Coluna 2</td>
        <td>Linha 3 - Coluna 3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3">RODAPÉ</th>
      </tr>
    </tfoot>
</table>
```

## Formulários

**TODO**: 
  - exemplos

Formulários são construídos com a tag [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form), se tornando um "container" para vários elementos.

**Elementos**

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button): elemento interativo que pode ser ativado pelo usuário. Quando ativado, executa alguma ação, por exemplo, a submissão do formulário, ou fazer aparecer um *dialog*.
- [`<fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset): é usado para agrupar elementos dentro um de formulário.
- [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input): é usado para criar controles interativos os quais aceitam dados inseridos pelo usuário. Existem vários tipos de dados e widgets de controle, a depender do disipositivo e agente de usuário.
- [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object): representa um recurso externo, o qual pode ser tratado como uma imagem, um contexto de navegação aninhado, ou um recurso para ser manipulado por um plugin. Pode ser vinculado a um formulário.
- [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output): é um elemento container pelo qual um site ou um aplicativo pode inserir os resultados de algum cálculo ou o resultado de uma ação de usuário.
- [`<select`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select): representa um controle que provê um menu de opções.
- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea): representa um controle de edição de texto de múltiplas linhas. É usado para permitir ao usuário inserir um texto maior.

## Elementos semânticos

**TODO:**
  - exemplos

Os elementos semânticos descrevem claramente o seu significado, tanto para o navegador quanto para o desenvolvedor. A partir dessa definição, quase todos os elementos HTML podem ser considerados semânticos. Entretanto, costumam ser listados os elementos estruturais, ou de layout:

- [`<article`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article): representa uma composição auto-contida em um documento, página, aplicação ou site, cujo intuito é ser livremente distribuído ou reusado. Por exemplo: um post em um fórum, um artigo de jornal, um post de um blog, um comentário, etc.
- [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside): representa a porção de um documento cujo contéudo é somente indiretamente relacionado ao conteúdo principal do documento. É frequentemente utilizado como barras laterais.
- [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details): cria um widget de divugação cuja informação só é visível quando o widget é acionado. Um sumário ou texto precisa ser fornecido a partir do elemento `<summary>`.
- [`<figcaption`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption): representa a legenda que descreve o conteúdo de seu elemento pai `<figure>`.
- [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure): representa um conteúdo auto-contido que pode ser especificado com o uso do elemento `<figcaption>`. Esses dois elementos, se usados juntos, são tratados como uma unidade.
- [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer): representa o rodapé para o conteúdo do ancestral mais próximo ou do elemento raiz de seccionamento.
- [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form).
- [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header): representa conteúdo introdutório a ser inserido no topo da página.
- [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main): representa o conteúdo dominante do `<body>` de um documento.
- [`<mark>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark): representa texto que está marcado ou destacado.
- [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav): representa a seção de uma página cujo propósito é fornecer links de navegação, por exemplo, menus, sumário, etc.
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section): representa uma seção genérica e autônoma de um documento.
- [`<summary`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary): especifica um sumário, legenda, ou o conteúdo para um elemento `<details>`.
- [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time): representa um período específico de tempo, por exemplo, um horário, uma data, ou uma duração de tempo.

## Exercícios

### Listas

1. Crie uma lista não ordenada com os nomes de três linguagens de programação.
2. Crie uma lista ordenada com os passos para preparar um café.
3. Crie uma lista de compras usando `<ul>`.
4. Crie uma lista numerada com os meses do ano.
5. Crie uma lista de filmes favoritos e use sublistas para organizar por gênero (ação, drama, comédia).
6. Crie uma lista ordenada com tipos de protocolos da Internet (HTTP, HTTPS, FTP, SMTP).
7. Crie uma lista de tópicos de um curso, onde cada item da lista contém também uma breve descrição em parágrafo.
8. Crie uma lista não ordenada de três países, cada um contendo uma sublista com duas cidades.
9. Crie uma lista ordenada onde cada item contém também um link externo.
10. Crie uma lista de definições usando `<dl>`, `<dt>`, `<dd>` explicando termos como “HTML”, “CSS” e “JavaScript”.
11. Monte uma lista aninhada de músicas organizadas por cantores.
12. Crie uma lista ordenada de navegadores web e destaque o navegador favorito com a tag `<mark>`.

### Tabelas

1. Crie uma tabela simples com duas colunas: Nome e Idade.
2. Crie uma tabela de três colunas: Produto, Preço e Quantidade.
3. Adicione um cabeçalho à tabela do exercício anterior usando `<thead>`.
4. Crie uma tabela com cabeçalho e rodapé (`<tfoot>`) mostrando o total de uma compra.
5. Crie uma tabela com 3 linhas e 3 colunas representando um calendário semanal.
6. Crie uma tabela com mesclagem de células usando rowspan e colspan.
7. Crie uma tabela com bordas visíveis para exibir notas de alunos em três disciplinas.
8. Crie uma tabela que mostre os horários de um dia letivo (matéria x horário).
9. Crie uma tabela que contenha links em algumas células.
10. Crie uma tabela com imagens dentro das células (exemplo: tabela de bandeiras e países).
11. Crie uma tabela com formatação de cabeçalho usando `<th scope="col">` e `<th scope="row">`.
12. Crie uma tabela de comparação entre dois produtos (smartphones), destacando diferenças.

### Formulários

1. Crie um formulário com campos de texto para nome e email.
2. Crie um formulário com campo de senha.
3. Crie um formulário com botão de envio (`<input type="submit">`).
4. Crie um formulário com caixa de seleção (checkbox) para selecionar hobbies.
5. Crie um formulário com botões de opção (radio) para escolher gênero.
6. Crie um formulário com lista suspensa (`<select>`).
7. Crie um formulário com área de texto (`<textarea>`).
8. Crie um formulário com campo de data.
9. Crie um formulário com campo de número.
10. Crie um formulário de login com nome de usuário e senha.
11. Crie um formulário de cadastro com nome, email, senha e data de nascimento.
12. Crie um formulário para avaliação de produto com estrelas (radio buttons).
13. Crie um formulário de pesquisa de satisfação com diferentes tipos de campos.
14. Crie um formulário de upload de arquivo (`<input type="file">`).

### Elementos Semânticos

1. Crie uma página que use `<header>` para o título e `<footer>` para os créditos.
2. Crie uma página que use `<article>` para um texto sobre tecnologia.
3. Crie uma página que use `<section>` para organizar conteúdo em três partes.
4. Crie uma página que use `<nav>` para links de navegação.
5. Crie uma página que use `<aside>` para uma barra lateral com anúncios.
6. Crie uma página que use `<main>` para o conteúdo principal.
7. Crie uma página que combine `<article>` e `<section>` para dividir tópicos de um blog.
8. Crie uma página com `<figure>` e `<figcaption>` para uma imagem ilustrativa.
9. Crie uma página que use `<time>` para marcar uma data de publicação.
10. Crie uma página que use `<mark>` para destacar um trecho importante em um parágrafo.
11. Crie uma página que use `<address>` para exibir informações de contato.
12. Crie uma página que combine todos os elementos semânticos em uma estrutura de blog simples.