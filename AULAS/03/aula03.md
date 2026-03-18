# Aula 03

**Sumário**

- [Aula 03](#aula-03)
  - [Tabelas](#tabelas)
  - [Formulários](#formulários)
    - [Elementos](#elementos)
  - [Elementos semânticos do HTML](#elementos-semânticos-do-html)
  - [Exercícios](#exercícios)
    - [Tabelas](#tabelas-1)
    - [Formulários](#formulários-1)
    - [Elementos Semânticos](#elementos-semânticos)

---

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

Exemplos: [1](exemplos/exemplo1.html) e [2](exemplos/exemplo2.html).

## Formulários

Formulários são construídos com a tag [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form), se tornando um "container" para vários elementos.

### Elementos

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button): elemento interativo que pode ser ativado pelo usuário. Quando ativado, executa alguma ação, por exemplo, a submissão do formulário, ou fazer aparecer um *dialog*.
- [`<fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset): é usado para agrupar elementos dentro um de formulário.
- [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input): é usado para criar controles interativos os quais aceitam dados inseridos pelo usuário. Existem vários tipos de dados e widgets de controle, a depender do disipositivo e agente de usuário.
- [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object): representa um recurso externo, o qual pode ser tratado como uma imagem, um contexto de navegação aninhado, ou um recurso para ser manipulado por um plugin. Pode ser vinculado a um formulário.
- [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output): é um elemento container pelo qual um site ou um aplicativo pode inserir os resultados de algum cálculo ou o resultado de uma ação de usuário.
- [`<select`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select): representa um controle que provê um menu de opções.
- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea): representa um controle de edição de texto de múltiplas linhas. É usado para permitir ao usuário inserir um texto maior.

## Elementos semânticos do HTML

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

---



## Exercícios

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

