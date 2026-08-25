# Aula 05


Sumário

- [Aula 05](#aula-05)
  - [CSS (*Cascading Style Sheets*)](#css-cascading-style-sheets)
  - [Sintaxe básica](#sintaxe-básica)
    - [Aplicando o CSS](#aplicando-o-css)
  - [Seletores](#seletores)
    - [Seletor de tipo (ou Seletor de Elemento/Tag)](#seletor-de-tipo-ou-seletor-de-elementotag)
    - [Seletor de classe](#seletor-de-classe)
    - [Seletor de id](#seletor-de-id)
    - [Seletor universal](#seletor-universal)
    - [Lista de Seletores (ou Grupo de Seletores)](#lista-de-seletores-ou-grupo-de-seletores)
    - [Seletores de atributo](#seletores-de-atributo)
      - [Seletores de presença e valor](#seletores-de-presença-e-valor)
      - [Seletores de substring](#seletores-de-substring)
    - [Pseudo-classes](#pseudo-classes)
    - [Pseudo-elementos](#pseudo-elementos)
  - [Combinadores](#combinadores)
    - [Combinador Descendente](#combinador-descendente)
    - [Combinador Filho Direto (Child combinator)](#combinador-filho-direto-child-combinator)
    - [Combinador Irmão Adjacente (Adjacent sibling / Next-sibling)](#combinador-irmão-adjacente-adjacent-sibling--next-sibling)
    - [Combinador Irmão Geral (General sibling / Subsequent-sibling)](#combinador-irmão-geral-general-sibling--subsequent-sibling)
  - [Tópicos](#tópicos)
    - [Herança](#herança)
    - [Especificidade](#especificidade)
    - [Propriedades abreviadas (*shorthand properties*)](#propriedades-abreviadas-shorthand-properties)
  - [Exercícios](#exercícios)
    - [Fácil](#fácil)
    - [Médio](#médio)
    - [Difícil](#difícil)



## CSS (*Cascading Style Sheets*)

O CSS (Folhas de Estilo em Cascata, numa tradução livre), de acordo com o [W3C](https://www.w3.org/TR/css/#css) 

> é uma linguagem para a escrita de `folhas de estilo`, projetada para descrever a renderização de documentos estruturados (e.g., HTML e XML) em uma variedade de mídias. O CSS é usado para descrever a apresentação de um documento fonte, e normalmente não modifica a semântica subjacente expressa por seu documento de linguagem.

Uma `folha de estilo` consiste em um conjunto de regras que especificam a apresentação de um documento.

É uma das principais linguagens da web ([*home page* do CSS](https://www.w3.org/Style/CSS)) e suas especificações são padronizadas pelo W3C. As especificações não são versionadas, porém, o W3C compila um panorama (*snapshot*) do **último estado estável das especificações** e também do progresso de **módulos individuais**. O *snapshot* de 2026 pode ser acessado com [este link](https://www.w3.org/TR/css-2026/). As últimas especificações são o CSS Nível 2 Revisão 1 (título em Inglês: *Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification*), ou [CSS 2.1](https://www.w3.org/TR/CSS2/).

O CSS pode ser usado em várias situações relacionadas à aparência de uma página, por exemplo:

- Estilização de texto, incluindo modificação da cor e tamanho de títulos e links.
- Criação de layouts, como layouts de grade (*grid layout*) ou de múltiplas colunas.
- Aplicação de efeitos especiais, como animação.

## Sintaxe básica

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

1. **Estilo *inline***: quando utilizamos o atributo `style` de um elemento. [Exemplo](./exemplos/exemplo_estilo-1.html).
2. **Estilo interno**: quando definimos o CSS em uma tag `<style>` dentro da tag `<head>`. [Exemplo](./exemplos/exemplo_estilo-2.html).
3. **Estilo externo**: quando o CSS é definido em um arquivo próprio de extensão `.css` e importado dentro da tag `<head>`. [Exemplo](./exemplos/exemplo_estilo-3.html).

## Seletores

### Seletor de tipo (ou Seletor de Elemento/Tag)

Seleciona todos os elementos HTML de acordo com o nome da tag. É o seletor mais básico e direto. Ele afeta todos os elementos daquele tipo na página.

**Sintaxe**: 

`nome-da-tag { propriedade: valor; }`

**Exemplos**:

```css
p { color: navy; }                  /* todos os parágrafos */
h1 { font-size: 2.5rem; }           /* todos os títulos h1 */
div { background-color: #f0f0f0; }  /* todos os divs */
a { text-decoration: none; }        /* todos os links */
```

### Seletor de classe

Seleciona elementos que possuem um atributo `class`. Uma mesma classe pode ser usada em vários elementos diferentes. É o seletor mais flexível e mais utilizado em projetos reais.

**Sintaxe**:

`.nome-da-classe { propriedade: valor; }`

**Exemplos**:

```css
.destaque { font-weight: bold; color: red; }
.botao { padding: 12px 24px; background: #007bff; color: white; }
.card { border: 1px solid #ddd; border-radius: 8px; }
```

É possível definir uma `classe` para elementos específicos:

```css
span.highlight { background-color: yellow; }
h1.highlight { background-color: pink; }
```

E também múltiplas `classes` para um mesmo elemento:

```css
.notebox {
   border: 4px solid #666666;
   padding: 0.5em;
   margin: 0.5em;
}

.notebox.warning {
   border-color: orange;
   font-weight: bold;
}

.notebox.danger {
   border-color: red;
   font-weight: bold;
}
```

### Seletor de id

Seleciona um único elemento da página através do atributo `id`. Tem a maior especificidade entre os seletores básicos.

**Sintaxe**:

`#nome-do-id { propriedade: valor; }`

**Exemplos**:

```css
#cabecalho { background: #333; color: white; padding: 20px; }
#menu-principal { position: sticky; top: 0; }
#rodape { text-align: center; font-size: 0.9rem; }
```

### Seletor universal

Seleciona todos os elementos da página (incluindo `<html>`, `<body>`, etc.). Muito usado para resets globais ou para aplicar uma propriedade a tudo.

**Sintaxe**:

`* { propriedade: valor; }`

**Exemplos**:

```css
* { margin: 0; padding: 0; box-sizing: border-box; }   /* reset clássico */
* { font-family: 'Arial', sans-serif; }                /* fonte padrão para tudo */
```

### Lista de Seletores (ou Grupo de Seletores)

Permite aplicar as mesmas regras de estilo a vários seletores diferentes de uma só vez. Separa os seletores por vírgula. Economiza código e facilita a manutenção.

**Sintaxe**:

`seletor1, seletor2, seletor3 { propriedade: valor; }`

**Exemplo**:

```css
h1, h2, h3, h4 { color: #2c3e50; font-family: 'Georgia', serif; }
p, li, span { line-height: 1.6; }
button, .botao, input[type="submit"] { cursor: pointer; }
```

**[Exemplo com todos os seletores básicos](./exemplos/seletores_basicos.html)**.

### Seletores de atributo

#### Seletores de presença e valor

Esses seletores permitem a seleção de um elemento baseado na presença de um atributo, ou em várias correspondências diferentes com o valor do atributo.

| **Seletor** | **Exemplo** | **Descrição** |
|---|---|---|
| `[attr]` | `a[title]` | Seleciona elementos que possuam o elemento `attr`. |
| `[attr=valor]` | `a[href="https://exemplo.com"]` | Seleciona elementos com um atributo `attr` cujo valor seja exatamente `valor`. |
| `[attr~=valor]` | `p[class~="especial"]` | Seleciona elementos com um atributo `attr` cujo valor seja exatamente `valor` ou contenha `valor` em sua lista de valores. |
| `[attr\|=valor]` | `div[lang\|="pt"]` | Seleciona elementos com um atributo `attr` cujo valor seja exatamente `valor` ou comece com `valor` imediatamente seguido por um hífen. |

**[Exemplo de seletores de presença e valor](./exemplos/seletor_presenca-valor.htmll)**.

#### Seletores de substring

Esses seletores permitem uma correspondência mais avançada de substrings dentro do valor do seu atributo. Por exemplo, se você tivesse classes de `box-warning` e `box-error` e quisesse combinar tudo que começou com a string "box-", você poderia usar `[class^="box-"]` para selecionar os dois (ou `[class|="box"]` como descrito abaixo).

| **Seletor** | **Exemplo** | **Descrição** |
|---|---|---|
| `[attr^=value]` | `li[class^="box-"]` | Corresponde a elementos com um atributo `attr` cujo valor começa com `valor`. |
| `[attr$=value]` | `li[class$="-box"]` | Corresponde a elementos com um atributo `attr` cujo valor termina com `valor`. |
| `[attr*=value]` | `li[class*="box"]` | Corresponde a elementos com um atributo `attr` cujo valor contém o `valor` em qualquer lugar dentro da string. |

**[Exemplo de seletores de substring](./exemplos/seletor_substring.html)**.

### Pseudo-classes

As pseudo-classes são palavras-chave que definem um **estado especial de um elemento**. Elas não existem no HTML, mas são ativadas pelo navegador conforme a interação do usuário ou pela posição/condição do elemento na estrutura.

Elas sempre começam com dois pontos (`:`) e são colocadas depois do seletor normal. As pseudo-classes mais comuns:

| Pseudo-classe | Quando é ativada? | Uso comum |
|---|---|---|
| `:hover` | Mouse passa por cima | "Efeitos de botão, link, card" |
| `:active` | Elemento está sendo clicado (pressionado) | Feedback de clique |
| `:focus` | Elemento recebe foco (teclado ou clique) | "Formulários, acessibilidade" |
| `:visited` | Link já foi visitado | Links visitados |
| `:link` | Link ainda não foi visitado | Links não visitados |
| `:first-child` | Primeiro filho do pai | "Listas, tabelas" |
| `:last-child` | Último filho do pai | "Listas, tabelas" |
| `:nth-child(n)` | Elemento na posição específica | "Zebra stripes, galerias" |
| `:checked` | Checkbox/radio está marcado | Formulários |
| `:disabled` | Elemento está desabilitado | Inputs bloqueados |
| `:not()` | Negação (exclui algo) | `:not(:hover)` |

**Exemplos**:

```css
a:hover { color: red; }
button:active { transform: scale(0.95); }
input:focus { outline: 3px solid blue; }
li:nth-child(2n) { background: #f0f0f0; }
```

### Pseudo-elementos

Pseudo-elementos permitem criar conteúdo fictício ou estilizar partes específicas de um elemento sem precisar adicionar tags extras no HTML.

Eles representam uma “parte virtual” do elemento e sempre começam com dois dois-pontos (`::`). Os pseudo-elementos mais comuns:

| Pseudo-elemento | O que faz? | Uso comum |
|---|---|---|
| `::before` |Insere conteúdo antes do elemento | "Ícones, setas, contadores" |
| `::after` | Insere conteúdo depois do elemento | "Ícones, marca d’água, aspas" |
| `::first-letter` |Estiliza a primeira letra | "Drop caps, capitulares" |
| `::first-line` | Estiliza a primeira linha do texto | Destaque inicial de parágrafo |
| `::selection` | Estiliza o texto selecionado pelo usuário | Highlight personalizado |
| `::marker` | Estiliza o marcador de listas (`<ul>` e `<ol>`) | Bolinhas ou números customizados |

**Exemplos**:

```css
.card::before { content: "⭐"; }
blockquote::after { content: "”"; font-size: 4rem; }
p::first-letter { font-size: 3rem; float: left; }
::selection { background: gold; color: black; }
```

**[Exemplo completo de pseudo-classes e pseudo-elementos](./exemplos/pseudo-classes_pseudo-elementos.html)**.

## Combinadores

### Combinador Descendente

Seleciona elementos que são **descendentes** (filhos, netos, bisnetos etc.) de outro elemento, **independentemente do nível de aninhamento**. É o combinador mais amplo e mais usado.

Símbolo: ` ` (um ou mais espaços).

**Exemplos**:

```css
article p          { color: #444; }              /* todo <p> que esteja dentro de <article> (qualquer nível) */
nav a              { text-decoration: none; }    /* todo link dentro de nav */
.card .preco       { font-weight: bold; }        /* classe .preco dentro de .card */
```

### Combinador Filho Direto (Child combinator)

Seleciona apenas elementos que são **filhos diretos** (nível imediatamente abaixo) do elemento anterior. Ignora netos e níveis mais profundos.

Símbolo: `>`

**Exemplos**:

```css
ul > li            { list-style: square; }       /* apenas filhos diretos de ul */
article > h2       { margin-top: 0; }            /* h2 que é filho direto de article */
.menu > .item      { padding: 10px; }            /* apenas itens diretos do menu */
```

### Combinador Irmão Adjacente (Adjacent sibling / Next-sibling)

Seleciona um elemento que é irmão imediato (vem logo em seguida) do elemento anterior, e **ambos devem ter o mesmo pai**.

Símbolo: `+`

**Exemplos**:

```css
h2 + p             { margin-top: 0; }               /* primeiro parágrafo após h2 (muito usado em textos) */
dt + dd            { margin-bottom: 1.2em; }        /* definição após termo em <dl> */
li.active + li     { border-top: 1px solid gray; }  /* primeiro item de lista após um item de lista da classe active */
```

### Combinador Irmão Geral (General sibling / Subsequent-sibling)

Seleciona todos os irmãos que aparecem depois (em qualquer posição posterior) do elemento anterior, desde que tenham o mesmo pai. Mais amplo que o `+`.

Símbolo: `~`

**Exemplos**:

```css
h2 ~ p             { color: #555; line-height: 1.7; }           /* todos <p> após h2 */
img ~ figcaption   { font-style: italic; font-size: 0.9em; }    /* todos os <figcaption> após img */
dt ~ dd            { margin-left: 2em; }                        /*todos os <dd> após dt */
```

**[Exemplo geral de combinadores](./exemplos/combinadores.html)**.

## Tópicos

### [Herança](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)

A **herança** controla o que acontece quando nenhum valor é especificado para uma propriedade ou elemento.

As propriedades do CSS podem ser categorizadas em dois tipos:

1. **propriedades herdadas**, as quais, por padrão, são definidas de acordo com o `valor computado` do elemento pai.
2. **propriedades não-herdades**, as quais, por padrão, são definidas de acordo com o `valor inicial` da propriedade.

Acesse o link para estudar mais a fundo.

### [Especificidade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)

A **especificidade** é o peso que os navegadores usam no algoritmo em cascata para determinar a declaração CSS **mais relevante** para um elemento, o que, por sua vez, determina o valor da propriedade a ser aplicada ao elemento. O algoritmo de especificidade calcula esse peso a partir de um seletor CSS e compara os valores resultantes para decidir qual regra, dentre as declarações CSS concorrentes dentro da mesma origem e camada, será aplicada a um elemento.

Acesse o link para estudar mais a fundo.

### [Propriedades abreviadas](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) (*shorthand properties*)

São propriedades CSS que permitem a definição dos valores de múltiplas propriedades em uma única declaração. Por exemplo, as seguintes declarações:

```CSS
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

Podem ser abreviadas para:

```CSS
background: black url("images/bg.gif") no-repeat left top;
```

Acesse o link para estudar mais a fundo.

## Exercícios

### Fácil

1. Escreva o CSS necessário para que a cor de fundo de todo o `<body>` seja `#f0f8ff`.
2. Alinhe o texto de todos os elementos `<h1>` rigorosamente ao centro.
3. Remova a linha sublinhada padrão de todos os links (`<a>`).
4. Crie uma classe CSS chamada `.texto-forte` que torne qualquer texto aplicado em negrito.
5. Escreva um seletor de tipo para que as imagens (`<img>`) ocupem sempre 100% da largura do contêiner em que estiverem.
6. Mude a cor do texto para branco apenas nos elementos `<button>` que também possuam a classe `.btn`.
7. Adicione uma margem de `1.5rem` abaixo (bottom) de todos os parágrafos.
8. Defina a fonte padrão global da página para `'Inter', sans-serif`.
9. Escreva a regra que fará um elemento com o ID `alerta-secreto` desaparecer completamente do layout (sem ocupar espaço).
10. Estilize os textos que estão dentro de `<span>` para que fiquem obrigatoriamente em itálico.
11. Use o seletor universal para zerar a `margin` e o `padding`, além de definir `box-sizing` como `border-box`.
12. Aplique uma borda sólida (solid), de 2px, na cor preta, a todos os elementos `<table>`.
13. Escreva a regra que altera a cor de um link (`<a>`) para `#ff0000` apenas quando o usuário posicionar o mouse sobre ele.
14. Aplique a propriedade que transforma o texto de qualquer `<h2>` em letras totalmente maiúsculas.
15. Ajuste o tamanho da fonte (font-size) de um elemento com ID `titulo-principal` para `32px`.
16. Adicione um espaçamento interno de `12px` em todos os lados para todas as células do cabeçalho de uma tabela (`<th>`).
17. Remova as 'bolinhas' (marcadores) que aparecem por padrão ao lado dos itens (`<li>`) de listas não ordenadas (`<ul>`).
18. Adicione uma sombra simples ao redor de uma classe `.caixa` usando `box-shadow`.
19. Crie uma regra na classe `.avatar-redondo` que arredonde as bordas de uma imagem quadrada transformando-a em um círculo perfeito.
20. Modifique a cor da borda de um campo `<input>` para azul vivo, estritamente enquanto ele estiver em foco (digitando nele).

### Médio

21. Escreva o CSS de um botão (`.btn-suave`) com fundo verde, cantos arredondados, texto sem sublinhado, e implemente uma transição fluida de cor ao receber hover.
22. Utilizando *Flexbox*, posicione uma `<div>` filha perfeitamente centralizada (eixos X e Y) dentro do seu elemento pai que tem a classe `.container-flex`.
23. Monte o CSS de uma classe `.grid-container` estruturando um layout de exatas 3 colunas iguais usando CSS Grid.
24. Aplique uma cor de fundo cinza clara (`#eeeeee`) alternadamente (linhas ímpares ou pares) nas linhas (`<tr>`) de uma `<tbody>` para gerar efeito zebrado.
25. Converta uma simples lista horizontal de links `<ul>` em uma barra de navegação alinhada e espaçada equitativamente utilizando `display: flex;` e `justify-content`.
26. Escreva a lógica CSS para criar um checkbox personalizado: oculte visualmente o `<input type="checkbox">` e estilize o `label` com um pseudo-elemento.
27. Desenvolva o CSS de um *Tooltip*: ao dar hover em `.item`, exiba uma caixa de texto customizada baseada no valor de um atributo `data-tooltip` via `content`.
28. Aplique a propriedade `filter` em uma imagem de perfil para deixá-la em preto e branco por padrão, e restaurar as cores reais ao evento de *hover*.
29. Construa as propriedades necessárias em um `<header>` para que ele se comporte como um "Sticky Header" no topo da página durante o scroll vertical.
30. Declare duas variáveis nativas do CSS (`--cor-primaria` e `--cor-secundaria`) no bloco `:root` e aplique a variável primária na cor de texto de um título.
31. Escreva a sequência de propriedades para recortar o plano de fundo em formato gradiente e aplicá-lo ao texto (efeito texto gradiente) com `-webkit-background-clip`.
32. Com CSS Grid, configure um `.card-container` responsivo para criar colunas que tenham no mínimo 300px e expandam até uma fração do espaço disponível (`minmax`).
33. Crie uma animação completa chamada `pulsar` com `@keyframes` (aumentando e diminuindo a escala/scale) e a atribua a uma classe `.alerta-critico`.
34. Usando Flexbox, posicione em uma linha horizontal um ícone e um texto dentro de um botão `.btn-icone`, forçando um espaçamento exato de `8px` entre eles sem usar margin.
35. Estilize com formatação de capitular (*drop cap*) gigante a primeira letra apenas do primeiro parágrafo de um contêiner `.artigo`.
36. Altere o formato do cursor do mouse para a "mão com dedo apontando" apenas nos elementos `<article class="card-clicavel">`.
37. Implemente o CSS em um texto `.truncado` limitando-o a uma linha e cortando o texto excedente em formato de reticências "...".
38. Crie a lógica (posições e transições) para uma `<aside class="sidebar">` inicialmente escondida (fora da tela à esquerda) que desliza para dentro quando ganha a classe `.ativa`.
39. Utilize a função `calc()` para determinar que a largura da classe `.painel` deve corresponder a `100%` da tela, descontando `250px`.
40. Escreva uma Media Query `@media` que faça um elemento `.colunas-duplas` (que usava grid ou flex) assumir um empilhamento em bloco simples (1 coluna) em telas menores que `768px`.

### Difícil

41. Desenvolva a interação de um menu dropdown em múltiplos níveis apenas com CSS nativo, estruturando o comportamento dos submenus (`ul > li > ul`) visíveis através do seletor `:hover` no ancestral.
42. Escreva as regras de Media Query focadas em acessibilidade sistêmica (`prefers-color-scheme: dark`) para inverter de forma otimizada as variáveis de fundo claro para fundo escuro.
43. Crie uma seta triangular pura em CSS (sem SVG ou imagens), apontada para cima, utilizando um elemento `<div class="seta-cima">` de tamanho zero, modelada exclusivamente através das propriedades e larguras de `border`.
44. Construa um "loader spinner" circular contínuo implementando máscaras avançadas (`mask` ou `-webkit-mask`) combinadas a um background conic-gradient animado girando 360 graus infinitamente.
45. Formule um seletor robusto via função `:has()` no `.form-group` de modo a desenhar uma borda externa em todo o formulário ou label apenas quando algum dos seus `<input>` internos estiver no estado `:invalid`.
46. Manipule a pseudo-árvore sombra para sobrescrever a barra de progresso nativa `<progress class="custom-progress">`, alterando suas cores nas *engines* `-webkit-progress-bar` e `-webkit-progress-value`.
47. Implemente CSS Scroll Snap nativo fixando (`scroll-snap-align`) seções verticais com tamanho `100vh` dentro de um container mandatório (`scroll-snap-type: y mandatory`), fazendo a rolagem travar por página completa.
48. Utilize *Container Queries* (`@container`) nomeadas para alterar o visual de um *card* (display flex-row vs flex-column) baseando-se estritamente na largura do próprio `.card-wrapper` e ignorando a *viewport* da janela.
49. Reproduza fielmente o efeito *Glassmorphism* em um `.painel-vidro`: estabeleça um fundo semitransparente, desfoque o background externo com `backdrop-filter: blur`, adicione brilho na borda superior, preservando a legibilidade dos textos internos.
50. Planeje uma estrutura para renderizar uma Galeria estilo Masonry leve usando apenas os módulos de *CSS Multi-column Layout*, distribuindo blocos variáveis e definindo `break-inside: avoid` para que os itens não fiquem divididos visualmente nas quebras de coluna.