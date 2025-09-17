# Aula 03

**Sumário**

- [Aula 03](#aula-03)
  - [Estilização](#estilização)
    - [Sintaxe básica](#sintaxe-básica)
    - [Aplicando o CSS](#aplicando-o-css)
  - [Seletores](#seletores)
    - [Seletor de tipo](#seletor-de-tipo)
    - [Seletores de classe](#seletores-de-classe)
    - [Seletores de id](#seletores-de-id)
    - [Lista de seletores](#lista-de-seletores)
    - [Seletor universal](#seletor-universal)
  - [Exercícios](#exercícios)
    - [Seletores de tipo](#seletores-de-tipo)
    - [Seletores de ID](#seletores-de-id-1)
    - [Seletores de classe](#seletores-de-classe-1)
    - [Lista de seletores](#lista-de-seletores-1)
  - [Desafios](#desafios)
    - [Seletores de atributo (15 exercícios)](#seletores-de-atributo-15-exercícios)
    - [Pseudo-classes (15 exercícios)](#pseudo-classes-15-exercícios)
    - [Pseudo-elementos (10 exercícios)](#pseudo-elementos-10-exercícios)
    - [Combinadores (15 exercícios)](#combinadores-15-exercícios)

---

O **CSS** (*Cascading Style Sheets*, ou Folhas de Estilo em Cascata, numa tradução livre) é uma linguagem usada para descrever a apresentação de um documento escrito em HTML ou XML. Uma `folha de estilo` consiste em um conjunto de regras que especificam a apresentação de um documento. Portanto, o CSS descreve como elementos devem ser renderizados na tela ou em outras mídias. 

É uma das principais linguagens da web e suas [especificações](https://www.w3.org/Style/CSS) são padronizadas pelo W3C. As especificações não são versionadas, porém, o W3C compila um panorama (*snapshot*) do **último estado estável das especificações** e também do progresso de **módulos individuais**. O *snapshot* de 2025 pode ser acessado com [este link](https://www.w3.org/TR/css-2025/). As últimas especificações são o CSS Nível 2 Revisão 1 (título em Inglês: *Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification*), ou [CSS 2.1](https://www.w3.org/TR/CSS2/).

O CSS pode ser usado em várias situações relacionadas à aparência de uma página, por exemplo:

- Estilização de texto, incluindo modificação da cor e tamanho de títulos e links.
- Criação de layouts, como layouts de grade (*grid layout*) ou de múltiplas colunas.
- Aplicação de efeitos especiais, como animação.


## Estilização

Vamos relembrar do [seguinte exemplo](../02/tabela.html):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Tabela</title>
</head>

<body>
    <!--
        Comentário
    -->
    <h1>Exemplo de Tabela em HTML</h1>
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
</body>
</html>
```

Apesar de ser uma tabela funcional, visualmente está bem ruim:

![Tabela sem CSS](./imagens/tabela_sem_css.png)

A partir de agora vamos usar essa tabela como material para aprendermos sobre CSS.

### Sintaxe básica

O CSS é uma linguagem baseada em regras, as quais são definidas ao se especificar grupos de estilos que devem ser aplicados a um elemento particular ou um grupo de elementos da página. Exemplo:

```css
h1{
    color: red;
    font-size: 2.5em;
}
```

- A regra acima inicia com um `seletor`, ou seja, uma seleção de qual elemento será estilizado. No exemplo o cabeçalho de primeiro nível foi selecionado. Logo após o `seletor` são abertas as *chaves*, delimitando o bloco da regra em questão.
- Dentro do bloco podemos ter uma ou mais declarações, as quais possuem a forma de um par `propriedade: valor;`. No exemplo, foram declaradas duas prorpridades, `color` e `font-size`. A cor escolhida foi vermelho (`red`), e o tamanho escolhido foi `2.5em`. Esse `em` é um valor proporcional relativo ao elemento pai do elemento atual.

### Aplicando o CSS

Existem três formas de se aplicar o CSS a um elemento:

1. **Estilo *inline***: quando utilizamos o atributo `style` de um elemento. [Exemplo](./exemplo_estilo-1.html).
2. **Estilo interno**: quando definimos o CSS em uma tag `<style>` dentro da tag `<head>`. [Exemplo](./exemplo_estilo-2.html).
3. **Estilo externo**: quando o CSS é definido em um arquivo próprio de extensão `.css` e importado dentro da tag `<head>`. [Exemplo](./exemplo_estilo-3.html).

## Seletores

### Seletor de tipo

Um `seletor de tipo` é conhecido também como `seletor de tag` ou `seletor de elemento`, porque ele seleciona uma `tag` ou elemento do documento. Exemplo: [Seletores de Tipo](./seletor_tipo.html).

### Seletores de classe

Começa com um `.`, e diferencia letras maiúsculas de minúsculas. Seleciona todos os elementos do documento que sejam dessa `classe`. [Exemplo](./seletor_classe.html).

É possível definir uma `classe` para elementos específicos: [exemplo](./seletor_classe2.html). E também múltiplas `classes` para um mesmo elemento: [exemplo](./seletor_classe3.html).

### Seletores de id

Começa com `#` e também diferencia letras maiúsculas de minúsculas. Funciona da mesma forma que os `seletores de classe`, com a diferença de que um `id` só pode ser usado uma vez por página, e os elementos só podem ter um único valor de `id`.

É possível preceder o `id` com um `seletor de tipo` para estilizar apenas um elemento que seja do mesmo `tipo` e `id`: [exemplo](./seletor_id.html).

### Lista de seletores

Caso mais de um elemento use a mesma estilização, eles podem ser declarados juntos, mas separados por uma vírgula: [exemplo](./lista_seletor.html).

### Seletor universal

O `*` serve como seletor universal e serve para selecionar tudo. É melhor utilizando a combinação de seletores. Exemplo:

```css
p * {
    ...
}
```

Neste caso estão sendo selecionados todos os elementos que estejam dentro de um parágrafo.

## Exercícios

### Seletores de tipo

1. Use CSS para mudar a cor de todos os parágrafos (`<p>`) para azul.
2. Aplique uma fonte diferente apenas para os títulos `<h1>`.
3. Defina que todos os `<h2>` terão fundo cinza.
4. Aumente o tamanho da fonte de todos os `<li>` de uma lista.
5. Alinhe o texto de todos os parágrafos ao centro.
6. Faça com que todos os links `<a>` fiquem em negrito.
7. Estilize todas as imagens `<img>` para terem uma borda de 2px preta.
8. Defina que todos os `<h3>` terão a cor vermelha e um espaçamento inferior de 10px.
9. Aplique sombra em todos os títulos `<h1>`.
10. Faça todos os `<p>` terem espaçamento entre linhas de 1.5.
11. Altere a cor de fundo de todos os `<table>`.
12. Faça com que todos os `<ul>` fiquem sem marcadores (list-style: none).
13. Estilize todos os `<blockquote>` com itálico e margem lateral de 20px.
14. Faça todos os `<button>` ficarem com fundo verde e texto branco.
15. Estilize todos os `<form>` para terem largura máxima de 400px.

### Seletores de ID

1. Crie um seletor para um parágrafo com `id="intro"` e defina a cor do texto como roxa.
2. Estilize um título `<h1 id="principal">` com sublinhado.
3. Faça com que o elemento com `id="menu"` tenha fundo preto e texto branco.
4. Defina altura e largura para o elemento com `id="caixa"`.
5. Centralize o texto do elemento com `id="rodape"`.
6. Aplique `border-radius: 10px` ao elemento com `id="avatar"`.
7. Defina que o `id="logo"` terá um tamanho fixo de 200px.
8. Faça com que o `id="mensagem"` tenha fonte maior e negrito.
9. Crie uma sombra para o elemento com `id="painel"`.
10. Faça o `id="cabecalho"` ter borda inferior sólida de 2px.

### Seletores de classe

1. Crie uma classe `.destaque` e aplique fundo amarelo.
2. Estilize a classe `.erro` para exibir texto em vermelho.
3. Aplique `.sucesso` com fundo verde e texto branco.
4. Crie a classe `.botao` e estilize com padding e borda arredondada.
5. Crie `.caixa` e aplique sombra e espaçamento interno.
6. Crie `.texto-grande` para aumentar o tamanho da fonte.
7. Crie `.subtitulo` para alterar a cor de `<h2>`.
8. Crie `.menu-horizontal` para organizar `<li>` lado a lado.
9. Crie `.imagem-redonda` para aplicar `border-radius: 50%`.
10. Crie `.oculto` que oculte o elemento (`display: none`).
11. Crie `.alerta` que exiba texto em caixa alta (`text-transform: uppercase`).
12. Crie `.negrito` para texto em `bold`.
13. Crie `.sublinhado` para aplicar `text-decoration: underline`.
14. Crie `.margem` para adicionar espaçamento externo.
15. Crie `.texto-azul` para alterar a cor para azul.

### Lista de seletores

1. Estilize todos os `<h1>`, `<h2>`, `<h3>` para usarem a mesma fonte.
2. Faça `<p>`, `<li>` terem a mesma cor de texto.
3. Defina `<table>`, `<th>`, `<td>` com bordas visíveis.
4. Estilize `<a>`, `<button>` para terem o mesmo estilo de link.
5. Faça `<header>`, `<footer>` terem o mesmo fundo cinza.
6. Aplique `text-align: center` em `<h1>`, `<h2>`.
7. Crie fundo amarelo para `<input>`, `<textarea>`.
8. Aplique borda arredondada em `<img>`, `<video>`.
9. Faça `<ul>`, `<ol>` sem marcadores.
10. Estilize `<section>`, `<article>` com sombra leve.

## Desafios

Pesquise sobre [`seletores de atributo`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [`seletores de pseudo classe`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements), [`seletores de pseudo elemetos`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) e [`combinadores`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators). Então faça os seguintes exercícios.

### Seletores de atributo (15 exercícios)

1. Estilize todos os links `<a>` com `target="_blank"` em vermelho.
2. Faça com que os inputs `type="text"` tenham fundo cinza.
3. Estilize `input[type="password"]` com borda vermelha.
4. Altere a cor de todos os `input[type="email"]`.
5. Aplique padding a todos os `input[type="number"]`.
6. Estilize links `a[href^="https"]` (iniciam com https).
7. Estilize `a[href$=".pdf"]` (terminam com .pdf).
8. Faça com que `a[href*="google"]` tenham cor verde.
9. Estilize `input[disabled]` com fundo claro.
10. Altere a cor de fundo dos `input[required]`.
11. Estilize imagens `<img[alt]>` com borda azul.
12. Estilize `<input[placeholder]>` com texto itálico.
13. Altere links `<a[title]>` para cor roxa.
14. Estilize `<option[selected]>` com fundo diferente.
15. Aplique estilo a todos os `button[type="submit"]`.

### Pseudo-classes (15 exercícios)

1. Estilize links `<a:hover>` para ficarem sublinhados.
2. Mude a cor dos links `<a:visited>`.
3. Estilize `<input:focus>` para ter borda azul.
4. Faça `<button:hover>` mudar de cor ao passar o mouse.
5. Estilize `<li:first-child>` em negrito.
6. Estilize `<li:last-child>` em itálico.
7. Faça `<tr:nth-child(even)>` ter fundo cinza.
8. Faça `<tr:nth-child(odd)>` ter fundo branco.
9. Estilize `<p:first-of-type>` em vermelho.
10. Estilize `<p:last-of-type>` em azul.
11. Faça `<input:checked>` ficar em negrito.
12. Estilize `<input:disabled>` em cinza claro.
13. Faça `<div:hover>` p mudar de cor.
14. Crie um estilo para `<input:valid>` com fundo verde.
15. Crie um estilo para `<input:invalid>` com fundo vermelho.

### Pseudo-elementos (10 exercícios)

1. Use `p::first-letter` para aumentar a primeira letra.
2. Use `p::first-line` para mudar a cor da primeira linha.
3. Use `p::selection` para alterar a cor do texto selecionado.
4. Use `p::before` para adicionar “→ ” antes de cada parágrafo.
5. Use `p::after` para adicionar “ ✓” no fim de cada parágrafo.
6. Use `li::marker` para trocar os marcadores da lista.
7. Use `input::placeholder` para mudar a cor do placeholder.
8. Use `blockquote::before` e `::after` para aspas.
9. Use `h1::first-letter` para aplicar cor diferente apenas na inicial.
10. Use `a::after` para mostrar um ícone “🔗” em links externos.

### Combinadores (15 exercícios)

1. Estilize todos os `<p>` que estão dentro de `<div>` (descendente).
2. Estilize `<h2>` que vem logo após `<h1>` (adjacente +).
3. Estilize `<p>` que vem imediatamente depois de uma `<img>`.
4. Estilize `<ul>` `<li>` que estão dentro de uma `<nav>`.
5. Estilize `<p>` filhos diretos de `<article>` (>).
6. Estilize `<span>` que está dentro de `<h1>`.
7. Estilize todos os `<input>` dentro de `<form>`.
8. Estilize `<a>` que está dentro de `<footer>`.
9. Estilize `<li>` dentro de `<ul class="menu">`.
10. Estilize todos os `<section> > p` para cor azul.