# Aula 04

## CSS Avançado

### [Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

Enquanto renderiza um documento, o motor de renderização do navegador representa cada elemento como uma caixa retangular de acordo com o padrão do CSS de modelo de caixa básico. O CSS determina o tamanho, posição e propriedades (cor, background, tamanho da borda, etc.) dessas caixas.

Cada caixa é composta por quatro partes (ou áreas), definidas por seus respectivos limites (ou bordas): limite do conteúdo, limite do preenchimento, limite da borda e limite da margem.

![](./imagens/boxmodel.png)

#### Exercícios

1. Crie um parágrafo com borda sólida de 2px.
2. Aplique margin de 20px e padding de 15px em um `<div>`.
3. Crie três caixas lado a lado e aplique espaçamentos diferentes usando margin.
4. Defina bordas arredondadas (border-radius) para imagens.
5. Crie uma caixa com sombra usando box-shadow.
6. Estilize uma `<div>` com largura fixa e centralize usando margin: auto.
7. Faça duas caixas com tamanhos diferentes, mas com box-sizing: border-box para manter alinhamento.
8. Crie uma caixa com borda pontilhada azul e padding de 30px.
9. Teste os efeitos de overflow: hidden, scroll e auto em um `<div>`.
10. Crie um layout simples de duas caixas sobrepostas usando z-index.

### [Posicionamento](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context)

### Exercícios

1. Crie uma `<div>` posicionada absolutamente no canto superior direito da tela.
2. Fixe um cabeçalho no topo da página usando position: fixed.
3. Faça uma caixa que se mova junto com o scroll até certo ponto (position: sticky).
4. Posicione uma imagem no centro da tela com position: absolute.
5. Sobreponha duas caixas usando z-index.
6. Crie um rodapé fixo no final da página.
7. Use relative para deslocar um parágrafo 20px para baixo e 30px para a direita.
8. Crie um menu lateral fixo à esquerda da tela.
9. Faça uma caixa transparente sobreposta a outra com absolute + opacity.
10. Posicione elementos numerados em cada canto da tela (superior/esquerda, superior/direita, inferior/esquerda, inferior/direita).

### [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

#### Exercícios

1. Crie um contêiner flex com três caixas alinhadas em linha.
2. Use justify-content: space-between para separar os itens em um menu horizontal.
3. Use justify-content: center para centralizar itens no eixo principal.
4. Use align-items: center para alinhar verticalmente dentro do contêiner.
5. Crie uma barra de navegação com links distribuídos igualmente.
6. Faça um layout com duas colunas: uma com 70% e outra com 30% da largura.
7. Use flex-wrap para quebrar os itens em várias linhas.
8. Defina ordem diferente para três caixas usando order.
9. Faça uma galeria de imagens que se ajuste automaticamente em linha única ou múltiplas linhas.
10. Crie uma caixa centralizada na tela tanto horizontalmente quanto verticalmente usando Flexbox.

### [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

#### Exercícios

1. Crie um contêiner com display: grid e 2 colunas de tamanhos iguais.
2. Crie um grid com 3 colunas e 2 linhas.
3. Use grid-template-columns: 1fr 2fr para colunas proporcionais.
4. Crie um layout de cabeçalho, conteúdo e rodapé usando Grid.
5. Faça um grid de 4 colunas onde cada célula seja um quadrado de 100px.
6. Use grid-gap para adicionar espaçamento entre os itens.
7. Faça um item ocupar duas colunas com grid-column: span 2.
8. Faça um item ocupar duas linhas com grid-row: span 2.
9. Crie uma galeria de imagens responsiva usando repeat(auto-fill, minmax(150px, 1fr)).
10. Centralize um elemento dentro de um grid com place-items: center.