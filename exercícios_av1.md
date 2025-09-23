# Exercícios para AV1

## Questões subjetivas

1. Explique como a escolha correta entre elementos semânticos do HTML (como `<section>`, `<article>`, `<aside>`) pode influenciar a acessibilidade e a indexação em mecanismos de busca.

2. Projete uma página simples que possua um cabeçalho, uma área principal com duas colunas e um rodapé. Indique em texto quais tags HTML e quais propriedades CSS usaria para estruturar e alinhar os elementos.

3. Por que é considerado uma má prática usar `<table>` para construir layouts em vez de CSS?

4. Dê um exemplo de uso incorreto do CSS em termos de responsividade e explique como você corrigiria.

5. Um desenvolvedor colocou muitas classes redundantes no HTML para aplicar estilos. Explique como os seletores CSS podem ser utilizados para reduzir a quantidade de classes no documento.

6. Em que situações você preferiria usar `em` ou `rem` em vez de `px` para definir tamanhos em CSS?

7. O que pode acontecer se um desenvolvedor esquecer de fechar corretamente uma tag HTML e como isso afeta o renderizador do navegador?

8. Justifique o uso de folhas de estilo externas em vez de CSS inline ou interno.

9. Como você explicaria para um iniciante a diferença entre “separação de responsabilidades” no uso de HTML e CSS?

10. Um site precisa ter boa acessibilidade para deficientes visuais. Cite três boas práticas em HTML e CSS que auxiliariam nesse objetivo.

## Questões objetivas

### 1

Qual tag HTML é mais apropriada para representar uma seção independente de conteúdo que poderia ser distribuída de forma autônoma (ex.: uma notícia)?

a) `<section>`

b) `<article>`

c) `<div>`

d) `<span>`

e) `<aside>`

### 2

No modelo de caixa do CSS, a área **interna de preenchimento** entre o conteúdo e a borda é:

a) Border

b) Margin


c) Padding

d) Content

e) Outline

### 3

O que o atributo `alt` em imagens promove?

a) Criação de legenda automática.

b) Texto alternativo em caso de falha no carregamento ou para acessibilidade.

c) Identificação do nome da imagem para SEO.

d) Referência a outra tag de descrição.

e) Nenhuma das anteriores.

### 4

Qual seletor CSS aplica estilo a todos os parágrafos dentro de uma `div`?

a) `div > p`

b) `div + p`

c) `p div`

d) `div p`

e) `.div p`

### 5

Para centralizar horizontalmente um bloco fixo em CSS, qual técnica é adequada?

a) `text-align: center;`

b) `margin: auto;`

c) `padding: auto;`

d) `display: block;`

e) `float: center;`

### 6

Um estudante quer aplicar estilos apenas a links ainda não visitados. Qual pseudo-classe deve ser usada?

a) `:hover`

b) `:active`

c) `:link`

d) `:visited`

e) `:focus`


### 7

Qual é o resultado de `position: absolute;` aplicado a um elemento dentro de um container `position: relative;`?

a) O elemento ignora o container.

b) O elemento se posiciona em relação ao documento inteiro.

c) O elemento se posiciona em relação ao container.

d) O elemento desaparece.

e) O elemento sobrepõe mas sem controle de posição.

### 8

Para criar listas numeradas no HTML, deve-se usar:

a) `<ol>`

b) `<ul>`

c) `<li>`

d) `<dl>`

e) `<table>`

### 9

Em um arquivo CSS externo, como se faz a importação no HTML?

a) `<link rel="stylesheet" href="style.css">`

b) `<style src="style.css">`

c) `<import href="style.css">`

d) `<script href="style.css">`

e) `@import url("style.css")` dentro do HTML

### 10

No HTML, a tag \_\_\_\_\_\_\_ é usada para destacar trechos de código-fonte.

a) `<pre>`

b) `<strong>`

c) `<code>`

d) `<kbd>`

e) `<samp>`

### 11

A propriedade CSS \_\_\_\_\_\_\_ controla a transparência de um elemento.

a) `opacity`

b) `z-index`

c) `filter`

d) `visibility`

e) `display`

### 12

A propriedade CSS \_\_\_\_\_\_\_ permite aplicar múltiplas fontes em ordem de preferência.

a) `font-stack`

b) `font-family`

c) `font-style`

d) `text-decoration`

e) `font-set`

### 13

Para criar links de navegação em HTML, usamos a tag \_\_\_\_\_\_\_.

a) `<a>`

b) `<link>`

c) `<nav>`

d) `<href>`

e) `<url>`

### 14

Relacione a propriedade CSS com sua função:

1. `border`
2. `margin`
3. `padding`
4. `width`
5. `height`

a) Espaço externo.
b) Espaço interno.
c) Espessura da borda.
d) Largura do elemento.
e) Altura do elemento.

### 15

Relacione tags e usos:

1. `<dl>`
2. `<ul>`
3. `<ol>`
4. `<li>`
5. `<dt>`

a) Lista de definições.
b) Item de lista.
c) Lista numerada.
d) Título de termo em lista de definições.
e) Lista não ordenada.

### 16

Ordene as etapas para aplicar CSS externo:

1. Criar arquivo `.css`.
2. Escrever regras CSS.
3. Referenciar no HTML.
4. Abrir em navegador.
5. Criar estrutura HTML.

### 17

Ordene os elementos HTML da estrutura mínima de um documento:

1. `<body>`
2. `<head>`
3. `<html>`
4. `<!DOCTYPE html>`
5.  `<title>`

### 18

Ordene a especificidade do CSS do menor para o maior:

1. Seletor de ID
2. Seletor universal
3. Seletor de classe
4. Estilo inline
5. Seletor de elemento

### 19

Marque as alternativas como V ou F. Sobre HTML:

a) `<span>` é um elemento de bloco.

b) `<strong>` representa importância semântica.

c) `<em>` dá ênfase e pode afetar leitura por leitores de tela.

d) `<div>` sempre deve ter `id` ou `class`.

e) `<br>` cria uma quebra de linha.

### 20

Marque as alternativas como V ou F. Sobre CSS responsivo:

a) `@media` permite regras condicionais.

b) `viewport` define área visível no dispositivo.

c) `flexbox` substitui completamente o grid.

d) `%` é relativo ao elemento pai.

e) `rem` é relativo ao elemento pai.

### 21

Marque as alternativas como V ou F. Sobre cores em CSS:

a) `rgb(255,0,0)` representa azul.

b) `#000000` é preto.

c) `rgba(0,0,0,0.5)` é preto translúcido.

d) `hsl(0,100%,50%)` representa vermelho.

e) `transparent` é equivalente a `opacity: 0`.

### 22

**Asserção**: O uso de elementos semânticos em HTML melhora a acessibilidade.

**Razão**: Leitores de tela e buscadores interpretam melhor a estrutura semântica.

a) Asserção e razão verdadeiras, e a razão justifica.

b) Asserção e razão verdadeiras, mas sem relação.

c) Asserção verdadeira, razão falsa.

d) Asserção falsa, razão verdadeira.

e) Ambas falsas.

### 23

**Asserção**: O atributo `alt` em imagens é importante para SEO.

**Razão**: Ele fornece texto alternativo que pode ser interpretado por mecanismos de busca.

a) Asserção e razão verdadeiras, e a razão justifica.

b) Asserção e razão verdadeiras, mas sem relação.

c) Asserção verdadeira, razão falsa.

d) Asserção falsa, razão verdadeira.

e) Ambas falsas.

### 24

**Asserção**: `display: none;` e `visibility: hidden;` produzem o mesmo efeito.

**Razão**: Ambos ocultam o elemento da renderização, mas mantêm o espaço reservado.

a) Asserção e razão verdadeiras, e a razão justifica.

b) Asserção e razão verdadeiras, mas sem relação.

c) Asserção verdadeira, razão falsa.

d) Asserção falsa, razão verdadeira.

e) Ambas falsas.

### 25

**Asserção**: CSS Grid é mais indicado para layouts bidimensionais do que Flexbox.

**Razão**: Grid permite trabalhar com linhas e colunas ao mesmo tempo.

a) Asserção e razão verdadeiras, e a razão justifica.

b) Asserção e razão verdadeiras, mas sem relação.

c) Asserção verdadeira, razão falsa.

d) Asserção falsa, razão verdadeira.

e) Ambas falsas.

### 26

Qual opção **não** é um atributo de `<img>`?

a) src

b) alt

c) width

d) href

e) height

### 27

Qual opção **não** é um valor válido para `position` em CSS?

a) static

b) fixed

c) sticky

d) relative

e) floating

### 28

Qual opção **não** é um elemento semântico em HTML5?

a) `<section>`

b) `<article>`

c) `<aside>`

d) `<nav>`

e) `<div>`

### 29

Qual opção **não** é uma unidade de medida em CSS?

a) em

b) rem

c) vh

d) px

e) len

### 30

Qual opção **não** é um método para aplicar CSS?

a) Inline

b) Interno

c) Externo

d) Integrado

e) @import