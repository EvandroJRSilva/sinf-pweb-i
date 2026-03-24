# Aula 05


Sumário

- [Aula 05](#aula-05)
  - [Estilização de texto](#estilização-de-texto)
    - [Fontes](#fontes)
    - [Layout](#layout)
    - [Lista de outras propriedades interessantes](#lista-de-outras-propriedades-interessantes)
    - [Exemplo](#exemplo)
  - [Estilização de listas](#estilização-de-listas)
    - [Estilos específicos de lista](#estilos-específicos-de-lista)
  - [Estilização de links](#estilização-de-links)
  - [Estilização de tabelas](#estilização-de-tabelas)
  - [Exercícios](#exercícios)
    - [Estilização de texto](#estilização-de-texto-1)
      - [Fácil](#fácil)
      - [Médio](#médio)
      - [Difícil](#difícil)
    - [Estilização de Listas](#estilização-de-listas-1)
      - [Fácil](#fácil-1)
      - [Médio](#médio-1)
      - [Difícil](#difícil-1)
    - [Estilização de Links](#estilização-de-links-1)
      - [Fácil](#fácil-2)
    - [Médio](#médio-2)
      - [Difícil](#difícil-2)
    - [Estilização de Tabelas](#estilização-de-tabelas-1)
      - [Fácil](#fácil-3)
      - [Médio](#médio-3)
      - [Difícil](#difícil-3)


## Estilização de texto

As propriedades CSS usadas para estilizar texto geralmente caem em duas categorias:

- **Estilo de fonte**: propriedades que afetam a fonta como tamanho, negrito, itálico, etc.
- **Estilo de layout de texto**: propriedades que afetam o espaçamento e outras características de layout do texto, o que permite a manipulação de, por exemplo, o espaço entre linhas e entre letras e como o texto é alinhado dentro de uma *caixa de conteúdo*.

### Fontes

Atributos que podem ser estilizados:

- `color`: as cores podem ser definidas a partir de uma [palavra-chave](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color), valores RGB em hexadecimal, valores RGB (com ou sem opacidade), matiz (*hue*), HWB (*Hue Whiteness Blackness*) e HSL (*Hue Saturation Lightness*).
- `font-family`: permite especificar uma fonte, ou uma lista de fontas para serem aplicadas a elementos selecionados. A fonte só será aplicada se estiver disponível na máquina que está acessando a página, senão, será utilizada uma fonte padrão.
  - As fontes padrões são: `serif`, `sans-serif`, `monospace`, `cursive` e `fantasy`.
  - Existe uma forma de contornar o problema da fonte não estar presente na máquina do usuário. Pesquise sobre `@font-face`.
- `font-size`: o tamanho da fonte pode ser definido em unidades como `px` (pixels), `em`, `rem`, e também em porcentagem.
- `font-style`: serve para aplicar itálico a uma fonte. Valores possíveis:
  - `normal`
  - `italic`
  - `oblique`
- `font-weight`: configura o quão negrito vai ser o texto. Os valores possíveis:
  - `normal`
  - `bold`
  - `lighter`, `bolder`
  - `100` - `900`
- `text-transform`: permite configurar alguns tipos de transformação. Valores possíveis:
  - `none`
  - `uppercase`
  - `lowercase`
  - `capitalize`
  - `full-width`
- `text-decoration`: permite configurar decorações no texto. Valores possíveis:
  - `none`
  - `underline`
  - `overline`
  - `line-through`
- `text-shadow`: aplica efeito de sombra sobre um texto.

### Layout

Atributos a serem estilizados:

- `text-align`: controla o alinhamento do texto. Valores:
  - `left`
  - `right`
  - `center`
  - `justify`
- `line-height`
- `letter-spacing`
- `word-spacing`

### Lista de outras propriedades interessantes

[Neste link](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#other_properties_worth_looking_at) você pode encontrar uma lista com várias outras propriedades de texto que podem ser estilizadas.

### Exemplo

**[Arquivo de exemplo](./exemplos/estilo-texto.html)**

## Estilização de listas

Uma primeira, e simples, estilização, pode ser sobre o espaçamento. Exemplo:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,ol,dl,p {
  font-size: 1.5rem;
}

ul,ol,dl {
    padding-left: 2rem;
}

li,p,dd,dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

### Estilos específicos de lista

Existem três propriedades que podem ser manipuladas para estilizar listas `<ul>` e `<ol>`:

- [`list-style-types`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style-type): para configurar o marcador da lista, ou sua numeração. Algums valores:
  - `<ul>`: `disc`, `circle`, `square` (pode ser emoji também).
  - `<ol>`: `decimal`, `georgian`, `lower-roman`, etc.
- [`list-style-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style-position): para configurar a posição dos marcadores. Valores: `inside` e `outsite`.
- [`line-style-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style-image): para selecionar uma imagem como um marcador.

**[Arquivo de exemplo](./exemplos/estilo-listas.html)**.

## Estilização de links

Os links podem ser estilizados a partir dos seus estados, os quais podemos acessar através das pseudo-classes: `:link`, `:visited`, `:hover`, `:focus` e `:active`.

A partir disso, o limite da estilização é seu conhecimento e criatividade. Lembrando que é possível incluir ícones também (com o `::after`, por exemplo).

## Estilização de tabelas

A estilização de tabelas vai seguir uma "estilização geral", ou seja, manipulação dos atributos dos elementos de tabela. Por exemplo, pode ser possível a estilização de espaçamento, alinhamento dentro das células, bordas, coloração das linhas em zebra, e de outros elementos, como o `caption`.

**[Arquivo de exemplo](./exemplos/estilo-tabela.html)**

## Exercícios

### Estilização de texto

#### Fácil

1. Crie um parágrafo com texto vermelho e fonte Arial.
2. Altere o tamanho da fonte de um título `<h1>` para 48px.
3. Faça um texto ficar em negrito usando `font-weight`.
4. Transforme todo o texto de um parágrafo em maiúsculas com `text-transform`.
5. Centralize o texto de um `<h2>` usando `text-align`.
6. Aplique `italic` em um trecho de texto com `font-style`.
7. Adicione sombra ao texto de um título com `text-shadow` (simples, 2px 2px cinza).
8. Defina `line-height: 1.8` em um parágrafo longo para melhorar a legibilidade.
9. Aumente o espaçamento entre letras (`letter-spacing: 2px`) em um subtítulo.
10. Mude a cor de fundo de um parágrafo e a cor do texto para contraste alto.

#### Médio

1. Crie um título que combine `font-family: 'Georgia', serif`, `font-size: 2.5rem`, `font-weight: 700` e `color: navy`.
2. Faça um parágrafo com `text-decoration: underline wavy red` e `text-shadow`.
3. Use `word-spacing: 8px` em um texto e compare com o padrão.
4. Aplique diferentes `font-size` em `<h1>`, `<h2>` e `<p>` usando `rem` e `px`.
5. Crie um bloco de citação com `font-style: italic`, `line-height: 2` e borda esquerda colorida.
6. Estilize um texto selecionado (`::selection`) com fundo amarelo e texto preto.
7. Combine `text-align: justify`, `letter-spacing` e `word-spacing` em um parágrafo longo.
8. Crie um título com `text-transform: capitalize` e sombra suave.
9. Use `font-family` com fallback (ex: Arial, Helvetica, sans-serif) em todo o body.
10. Faça um efeito de texto “drop cap” (primeira letra grande) usando `::first-letter`.

#### Difícil

1. Crie um título com múltiplas sombras (`text-shadow`) em camadas para efeito 3D.
2. Implemente um parágrafo com `font-variant: small-caps`, `letter-spacing` negativo e `text-decoration`.
3. Desenvolva um layout de texto responsivo que ajuste `font-size` e `line-height` com media queries.
4. Crie um efeito de texto gradiente usando `background-clip: text` e `color: transparent`.
5. Estilize um artigo completo combinando todas as propriedades de texto + `text-indent` e `white-space`.
6. Faça um título animado que muda `letter-spacing` e `color` no `:hover`.
7. Crie um sistema de tipografia com variáveis CSS (`--font-primary`, `--base-size`) e aplique em múltiplos elementos.
8. Combine `::first-line` e `::first-letter` com diferentes estilos em um parágrafo longo.
9. Desenvolva um cartão com texto justificado, sombra no texto e espaçamentos personalizados que fique bonito em mobile e desktop.
10. Crie um efeito de “texto neon” usando múltiplas `text-shadow` coloridas e `text-transform: uppercase`.

### Estilização de Listas

#### Fácil

1. Mude o marcador de uma lista não ordenada para quadrados (`list-style-type: square`).
2. Use números romanos maiúsculos em uma lista ordenada.
3. Remova completamente os marcadores de uma lista (`list-style-type: none`).
4. Coloque os marcadores dentro do conteúdo (`list-style-position: inside`).
5. Crie uma lista com marcadores circulares.
6. Use `list-style-type: lower-alpha` em uma lista ordenada.
7. Aplique `list-style: none` e adicione `padding` nos itens.
8. Mude a cor dos itens de lista com `color`.
9. Crie uma lista simples com fundo claro em cada item.
10. Use `list-style-type: disc` e aumente o espaçamento entre itens.

#### Médio

1. Use uma imagem como marcador com `list-style-image`.
2. Combine `list-style-type`, `list-style-position` e `list-style-image` usando o `shorthand list-style`.
3. Crie marcadores personalizados com `::before` e conteúdo Unicode (ex: seta →).
4. Faça uma lista com zebra stripes usando `nth-child(even)`.
5. Estilize uma lista de navegação horizontal com Flexbox e remova marcadores.
6. Use `::marker` para mudar a cor e tamanho dos números em uma lista ordenada.
7. Crie uma lista de tarefas com checkbox visual usando `::before` e hover.
8. Aplique bordas inferiores em cada item de lista exceto o último.
9. Faça uma lista com contadores personalizados (`counter-reset` e `counter-increment`).
10. Estilize uma lista aninhada com diferentes marcadores em cada nível.

#### Difícil

1. Crie uma lista totalmente customizada sem usar `list-style`, apenas com `::before` e posicionamento absoluto.
2. Desenvolva uma lista de preços com ícones SVG como marcadores e hover que expande o item.
3. Implemente uma lista com numeração contínua em múltiplas seções usando counters.
4. Crie um menu dropdown usando lista aninhada + `:hover` e transições.
5. Faça uma lista “timeline” vertical com linhas conectando os itens usando pseudo-elementos.
6. Estilize uma lista de cards usando grid/flex e marcadores personalizados que mudam no hover.
7. Crie uma lista com imagens de fundo diferentes para cada item usando `:nth-child`.
8. Desenvolva uma lista acessível com `::marker` customizado e foco visível.
9. Combine `list-style-image` com fallback para `list-style-type` e animação no marcador.
10. Crie uma lista interativa que muda o marcador de “não feito” para “feito” ao clicar (usando classe + JS simples ou apenas CSS com `:checked` se for checkbox).

### Estilização de Links

#### Fácil

1. Mude a cor de links não visitados para azul.
2. Mude a cor de links visitados para roxo.
3. Adicione sublinhado removido em links e reaparecendo no `:hover`.
4. Mude a cor e cursor no `:hover`.
5. Adicione uma borda inferior no `:hover`.
6. Remova o outline padrão e crie um outline customizado no `:focus`.
7. Mude a cor no momento do clique (`:active`).
8. Faça links ficarem bold no `:hover`.
9. Estilize links dentro de um parágrafo de forma diferente.
10. Adicione seta após o link no `:hover` usando `::after`.

### Médio

1. Crie estilos completos seguindo a ordem correta: `:link`, `:visited`, `:hover`, `:focus`, `:active`.
2. Faça um link mudar de cor, fundo e adicionar sombra no `:hover`.
3. Crie botões estilizados como links com transições suaves.
4. Use `:focus-visible` para melhorar acessibilidade (outline só no teclado).
5. Faça links visitados terem texto riscado leve.
6. Crie efeito underline que cresce do centro no `:hover`.
7. Estilize links externos com ícone diferente.
8. Combine `:hover` e `:focus` com as mesmas propriedades.
9. Faça um menu de links com fundo colorido no estado ativo.
10. Adicione transição de cor e escala no `:hover` e `:active`.

#### Difícil

1. Crie links com efeito “neon” que brilha no `:hover` e `:focus` usando múltiplas sombras.
2. Desenvolva um card de link que levanta e muda várias propriedades no :hover.
3. Implemente links com underline animado (de baixo para cima).
4. Crie um sistema de navegação onde o link atual fica com classe `.active` e estilos especiais.
5. Faça links que mudam de ícone e texto no `:visited`.
6. Use `:not()` para estilizar links exceto os de uma classe específica.
7. Crie um efeito de ripple (onda) no clique usando `:active` e pseudo-elemento.
8. Desenvolva links em um footer com múltiplos estados e responsividade.
9. Combine pseudo-classes com pseudo-elementos (`::before` ou `::after`) para adicionar conteúdo dinâmico.
10. Crie um menu hamburger que usa links com estados complexos e animações.

### Estilização de Tabelas

#### Fácil

1. Adicione bordas em todas as células da tabela.
2. Use `border-collapse: collapse` para unir as bordas.
3. Centralize o texto das células.
4. Dê padding maior nas células (`th` e `td`).
5. Mude a cor de fundo do cabeçalho (`thead` ou `th`).
6. Altere a cor do texto do cabeçalho.
7. Faça a tabela ocupar 100% da largura.
8. Adicione borda externa mais grossa na tabela.
9. Mude o alinhamento de colunas específicas (ex: números à direita).
10. Aplique fundo claro alternado em linhas (zebra simples).

#### Médio

1. Crie zebra stripes completas com `tr:nth-child(even)`.
2. Adicione hover nas linhas (`tr:hover`).
3. Estilize cabeçalho com fundo escuro e texto branco.
4. Use `border-spacing` quando `border-collapse: separate`.
5. Faça tabela responsiva com scroll horizontal em telas pequenas.
6. Estilize células específicas com classes (ex: `.total` em negrito).
7. Crie tabela com linhas divisórias internas diferentes.
8. Adicione sombra suave na tabela inteira.
9. Use `caption` estilizado acima da tabela.
10. Combine zebra + hover com transição de cor.

#### Difícil

1. Crie tabela com zebra em colunas e linhas ao mesmo tempo.
2. Desenvolva tabela com linhas que expandem detalhes ao clicar (usando `:target` ou classe).
3. Faça tabela com `rowspan` e `colspan` mantendo zebra e hover corretos.
4. Crie tabela comparativa com colunas destacadas no hover.
5. Implemente tabela responsiva que vira cards em mobile (usando media queries avançadas).
6. Adicione ordenação visual (setas) no cabeçalho com CSS puro.
7. Crie efeito de “striped” diagonal ou personalizado.
8. Desenvolva tabela com sticky header (cabeçalho fixo ao rolar).
9. Combine bordas arredondadas, sombras e hover complexo.
10. Crie um dashboard table com múltiplas cores por status (usando classes e `:nth-child` avançado).