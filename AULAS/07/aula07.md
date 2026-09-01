# Aula 07

Sumário

- [Aula 07](#aula-07)
  - [Layout com CSS](#layout-com-css)
    - [Fluxo de layout normal](#fluxo-de-layout-normal)
    - [Floats](#floats)
    - [Posicionamento](#posicionamento)
    - [Flexbox](#flexbox)
    - [CSS grid](#css-grid)

## Layout com CSS

As técnicas de layout de página CSS permitem que peguemos elementos contidos em uma página da web e controlemos onde eles são posicionados em relação aos seguintes fatores: 

- Sua posição padrão no fluxo de layout normal; 
- Os outros elementos ao seu redor;
- Seu contêiner pai; e 
- A janela/viewport principal.

### Fluxo de layout normal

Os elementos de uma página web são dispostos em um fluxo normal se não houver qualquer regra CSS que modifique seu comportamento.

O processo do fluxo normal começa quando as caixas dos elementos individuais são dispostas de forma que qualquer preenchimento, borda ou margem que elas possuam seja adicionado ao seu conteúdo. É justamente o ***box model***.

Por padrão, o conteúdo de um `elemento de nível de bloco` ([*block-level element*](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content)) preenche o espaço em linha disponível do elemento pai que o contém, crescendo ao longo da dimensão do bloco para acomodar seu conteúdo. O tamanho dos `elementos de nível linha` ([*inline-level ements*](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content)) é simplesmente o tamanho do seu conteúdo. É possível definir a largura (`width`) ou a altura (`height`) de alguns elementos que têm o valor padrão da propriedade [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display) definido como `inline`, mesmo assim o valor de [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display) permanecerá `inline`.

Para fazer um elemento *`inline-level`* se comportar como um elemento *`block-level`*, basta ajustar a propriedade [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display). Por exemplo: `display: block;`, ou `display: inline-block;`.

- [Exemplo](exemplos/exemplo01.html)

Para sobrescrever o fluxo normal, podemos ajustar o valor da propriedade `display`, como vimos anteriormente, mas também incluindo outros sistemas de layout, como o [CSS grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) e o [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox).

Além deles, podemos utilizar também as propriedades [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/float) e [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position).

### [Floats](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Floats)

Usado originalmente para posicionar imagens dentro de um bloco de texto, a propriedade [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/float) passou a ser uma das ferramentas mais comuns para a criação de layouts de múltiplas colunas em páginas web. Porém, com o advento do ***flexbox*** e do ***grid***, essa propriedade voltou a ser usada em seu propósito original.

Portanto, não nos aprofundaremos muito e nos ateremos ao material disponibilizado nos links desta seção.

### [Posicionamento](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)

Permite modificar o comportamentl normal dos elementos. Por exemplo, podemos fazer com que um elemento fique em cima de outro, ou sempre ficar no mesmo lugar de um *viewport*. Para isso, é preciso ajustar o valor da propriedade [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position). São 5 (cinco) as possibilidades:

- `static`: basicamente dizendo que o comportamente deve ser o do fluxo normal.
- `relative`: o elemento ficará em uma nova posição relativa à que ela ficaria no fluxo normal. Para isso, é preciso utilizar as propriedades `top`, `bottom`, `left` e `right`.
- `absolute`: o elemento deixa de fazer parte do fluxo normal e passa a ser renderizado em sua própria camada, contudo, as distâncias especificadas pelas propriedades `top`, `bottom`, `left` e `right`, serão consideradas em relação ao seu ancestral *posicionado* mais próximo.
- `fixed`: o elemento é posicionado fixamente em relação à porção visível do *viewport*.
- `sticky`: um híbrido entre `relative` e `fixed`. Ele permite que um elemento *posicionado* aja como `relative` até um limite de rolagem de página, a partir do qual agirá como `fixed`.

### [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)

É um método de layout **unidimensional** para arranjar itens em linhas (*default*) ou colunas. Esses itens expandem para preencher espaço adicional ou diminuem para caber em espaços menores.

O flexbox permite:

- Centralizar verticalmente um bloco de conteúdo dentro de seu pai.
- Fazer com que todos os filhos de um contêiner ocupem o mesmo espaçamento de altura/comprimento, independente de quanto(a) altura/comprimento esteja disponível;
- Fazer com que todas as colunas em um layout de colunas adotem a mesma altura, mesmo que contenham quantidades diferentes de conteúdo.

<figure style="text-align: center;">
  <img src="imagens/flex_terms.png">
  <figcaption>The flex model (<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox">MDN</a>)</figcaption>
</figure>

Para aplicar o `flexbox` a um elemento contêiner, basta ajustar a propriedade `display: flex;`. Existem outros atributos que podem ser utilizados para melhor ajustar os elementos, como `flex-direction`, `flex-wrap`, `flex` (para dimensionamento dos elementos filhos), `align-items`, `justify-content`, etc.

- [Casos de uso típicos para o flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases).

### [CSS grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)

É um sistema de layout **bidimensional**, para a organização de elementos em linhas, colunas e suas lacunas.

Assim como no `flexbox`, para aplicar o `grid` a um contêiner, é preciso ajustar a propriedade `display: grid;`. Para refinar o ajuste, é preciso utilizar outros atributos como `grid-template-columns`. Também é interessante o uso da unidade de medida `fr`, que representa a fração do espaço disponível.

Para manipular as lacunas, pode-se usar as propriedades `column-gap`, `row-gap` ou `gap` (*shorthand*).

A quantidade de possibilidades é muito grande, e não dá para citá-las todas.

## Exemplo completo

Vejamos um [exemplo completo](exemplos/layout-css-completo.html)