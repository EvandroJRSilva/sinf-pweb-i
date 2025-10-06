# Exercícios para a Segunda Chamada da AV1

## Código 1

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Saudação Simples</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é uma página HTML simples.</p>
</body>
</html>
```

### Questão 1 (Nível Fácil)
No contexto da estrutura fundamental de um documento HTML5, o atributo `lang="pt"` no elemento `<html>` serve para declarar o idioma principal do conteúdo, auxiliando navegadores, ferramentas de acessibilidade e mecanismos de busca a processarem e exibirem o texto de forma apropriada, como na correção de hifenização ou pronúncia em leitores de tela. Considerando o código fornecido, que utiliza esse atributo para indicar português, qual das seguintes alternativas descreve corretamente o impacto teórico dessa declaração?

a) Ele define o charset como UTF-8 automaticamente, dispensando o `<meta charset="UTF-8">` no `<head>`.  
b) Ele ativa suporte a scripts em português, permitindo apenas caracteres latinos sem necessidade de codificação especial.  
c) Ele informa o agente de usuário sobre o idioma, promovendo acessibilidade e internacionalização sem alterar o DOM diretamente.  
d) Ele é redundante em documentos simples como este, servindo apenas para validação W3C opcional.  
e) Ele limita a renderização a navegadores lusófonos, ignorando traduções automáticas em outros idiomas.

<details><summary><b>Resposta correta: </b></summary>
C
</details>

### Questão 2 (Nível Fácil)
Analisando o conceito teórico de metadados no `<head>` de um documento HTML, o elemento `<meta charset="UTF-8">` especifica a codificação de caracteres, garantindo que o navegador interprete corretamente símbolos como acentos em idiomas como o português, evitando problemas de exibição como "moi" em vez de "mói". Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no código que inclui essa meta tag:

I. O `<meta charset="UTF-8">` deve ser o primeiro elemento no `<head>` para máxima compatibilidade, embora no código esteja após o `<title>`, o que pode causar inconsistências em parsers antigos. (F)  
II. UTF-8 é uma codificação universal que suporta múltiplos idiomas, tornando-a ideal para documentos com conteúdo em português como "Olá, Mundo!". (V)  
III. Sem essa meta tag, o navegador assume ISO-8859-1 por padrão em alguns casos, potencialmente corrompendo acentos no parágrafo "Esta é uma página HTML simples.". (V)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - F; II - V; III - V  
e) I - V; II - V; III - F  

<details><summary><b>Resposta correta: </b></summary>
D
</details>

### Questão 3 (Nível Médio)
Na teoria de elementos de cabeçalho no HTML, o `<title>` no `<head>` define o texto exibido na aba do navegador e em resultados de busca, influenciando SEO ao resumir o propósito do documento de forma concisa e descritiva. No código fornecido, o título "Saudação Simples" é curto e reflete o conteúdo básico de saudação. Supondo que o título fosse alterado para um texto longo de 100 caracteres, qual das seguintes alternativas explica corretamente o comportamento teórico em termos de usabilidade e otimização?

a) Títulos longos são truncados nos resultados de busca, mas exibidos integralmente na aba, priorizando SEO sobre usabilidade visual.  
b) O navegador corta títulos excessivamente longos na aba para caber no espaço disponível, recomendando-se até 60 caracteres para melhor legibilidade e cliques em SERPs.  
c) Sem limite teórico, títulos longos herdam estilos do body, mas violam diretrizes WCAG ao sobrecarregar leitores de tela com descrições desnecessárias.  
d) A alteração ignora a cascata CSS, aplicando negrito automático ao título na aba independentemente do comprimento.  
e) Títulos acima de 50 caracteres ativam modo mobile-only, escondendo o texto em desktops para economia de largura.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 4 (Nível Médio)
Examine as seguintes afirmações sobre os conceitos teóricos de hierarquia semântica e blocos de texto no HTML5 presentes no código, onde `<h1>` é usado como cabeçalho principal seguido de um `<p>` para conteúdo descritivo. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. O elemento `<h1>` representa o nível mais alto de hierarquia de cabeçalhos, sinalizando para crawlers e assistive technologies o tópico principal do documento, como "Olá, Mundo!" neste caso.  
II. Parágrafos `<p>` são elementos de fluxo inline que podem conter outros blocos, mas aqui o `<p>` é puro texto, promovendo uma estrutura linear simples sem aninhamento desnecessário.  
III. A ausência de elementos como `<main>` ou `<section>` torna o body diretamente o contêiner semântico raiz, o que é aceitável para páginas mínimas, mas menos ideal para acessibilidade em documentos complexos.  
IV. Semanticamente, `<h1>` deve ser único por página para outline claro, e este código adere a isso, evitando confusão em navegação por teclado.  

a) Apenas I e III são verdadeiras.  
b) I, II e IV são verdadeiras.  
c) Apenas II é verdadeira.  
d) I, III e IV são verdadeiras.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 5 (Nível difícil)
Considerando a teoria de renderização do DOM no HTML5, onde o parser constrói a árvore de elementos sequencialmente e aplica herança padrão de estilos (como fonte serif se não especificada), o código usa `<body>` como raiz de conteúdo visível, com `<h1>` herdando negrito implícito e `<p>` fluindo naturalmente. Imagine que um CSS externo adicione `h1 { display: none; }` e o `lang="pt"` seja removido, impactando a semântica global. Qual das seguintes alternativas descreve com precisão o impacto teórico mais profundo nessa modificação dupla, em termos de acessibilidade, herança e comportamento do parser?

a) O CSS oculta o `<h1>` visualmente, mas permanece no DOM para screen readers; sem `lang`, acentos herdam ISO-8859-1, corrompendo "Olá" em alguns navegadores, quebrando acessibilidade idiomática.  
b) Parser ignora herança sem `lang`, aplicando display none semanticamente ao outline; acessibilidade melhora com foco no `<p>`, mas viola WCAG 1.3.1 ao esconder o heading principal.  
c) Modificação cumulativa aumenta especificidade do body, herdando none para `<p>`; sem lang, UTF-8 falha, revertendo charset e exigindo reparse para correção de acentos.  
d) Sem lang, o parser assume en-US, alterando hifenização; CSS aplica herança descendente, ocultando todo body, mas acessibilidade preserva anúncio do título via ARIA implícito.  
e) A dupla mudança prioriza ordem de carregamento, com CSS sobrescrito por lang ausente; herança de fonte serif aplica-se ao `<p>`, mas outline semântico colapsa, reduzindo SEO sem heading visível.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

## Código 2

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Lista de Frutas</title>
</head>
<body>
    <h2>Minhas Frutas Favoritas</h2>
    <ul>
        <li>Maçã</li>
        <li>Banana</li>
        <li>Laranja</li>
    </ul>
</body>
</html>
```

### Questão 1 (Nível Fácil)
No contexto da estrutura essencial de um documento HTML5, o elemento `<ul>` representa uma lista não ordenada, que semanticamente indica uma coleção de itens relacionados sem uma sequência numérica implícita, permitindo que navegadores e ferramentas de acessibilidade renderizem marcadores padrão como bullets. Considerando o código fornecido, que usa `<ul>` para listar frutas como "Maçã", "Banana" e "Laranja", qual das seguintes alternativas descreve corretamente o impacto teórico desse elemento na estrutura do documento?

a) Ele força a numeração automática dos itens, tornando-o equivalente a `<ol>` para listas sequenciais.  
b) Ele agrupa itens em uma estrutura de bloco, promovendo acessibilidade ao permitir navegação por lista em leitores de tela sem alterar o fluxo linear do DOM.  
c) Ele é puramente estilístico, ignorado pelo parser HTML e aplicado apenas via CSS para bullets personalizados.  
d) Ele limita o conteúdo a três itens no máximo, violando semântica se mais frutas forem adicionadas.  
e) Ele herda o `lang="pt"` para traduzir automaticamente os bullets em idiomas locais.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 2 (Nível Fácil)
Analisando o conceito teórico de elementos de cabeçalho no HTML, o `<h2>` é usado para subtítulos de seção, contribuindo para a hierarquia semântica do documento e ajudando crawlers de busca a entenderem a organização temática, como o título "Minhas Frutas Favoritas" que introduz a lista subsequente. Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no código que emprega `<h2>` antes da `<ul>`:

I. O `<h2>` estabelece um outline semântico de nível 2, assumindo um `<h1>` implícito no título da página para consistência hierárquica. (V)  
II. Cabeçalhos como `<h2>` devem sempre preceder listas para validade, caso contrário, o navegador reestrutura o DOM automaticamente. (F)  
III. Em termos de acessibilidade, `<h2>` permite que usuários de teclado pulem para seções, anunciando "Minhas Frutas Favoritas" como landmark. (V)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - F; II - F; III - V  
e) I - V; II - V; III - F  

<details><summary><b>Resposta correta: </b></summary>
C
</details>

### Questão 3 (Nível Médio)
Na teoria de metadados do HTML, o `<title>` no `<head>` fornece um resumo conciso do conteúdo para abas de navegador e resultados de SEO, onde comprimentos ideais evitam truncamento em dispositivos móveis. No código fornecido, "Lista de Frutas" é direto e reflete a lista de itens. Supondo que o título fosse expandido para incluir a lista completa ("Lista de Frutas: Maçã, Banana, Laranja"), qual das seguintes alternativas explica corretamente o comportamento teórico em termos de renderização e otimização?

a) Títulos longos são exibidos integralmente em abas desktop, mas cortados em mobile, priorizando SEO com palavras-chave como nomes de frutas.  
b) O navegador aplica elipse (...) a títulos excessivos na aba, recomendando-se até 60 caracteres para maximizar visibilidade em SERPs sem perda de relevância semântica.  
c) Sem limite, o título herda estilos do body, mas sobrecarrega o parser, exigindo reescrita para conformidade com padrões WHATWG.  
d) A expansão ativa indexação automática de itens da lista pelo título, melhorando ranqueamento para buscas por "Maçã".  
e) Títulos com listas violam semântica, revertendo o `<title>` para o primeiro `<h2>` como fallback.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 4 (Nível Médio)
Examine as seguintes afirmações sobre os conceitos teóricos de listas e itens de lista no HTML5 presentes no código, onde `<ul>` contém três `<li>` com frutas. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. Os elementos `<li>` dentro de `<ul>` representam itens atômicos de uma coleção não ordenada, permitindo aninhamento para sublistas, mas aqui promovem uma estrutura plana e acessível para screen readers que anunciam "lista com 3 itens".  
II. Listas não ordenadas como esta usam marcadores visuais padrão (bullets), mas semanticamente são equivalentes a `<ol>` se o CSS remover bullets, mantendo o outline DOM intacto.  
III. O atributo `lang="pt"` no `<html>` afeta a pronúncia dos itens `<li>`, como "Laranja", por ferramentas de síntese de voz, sem alterar a renderização visual.  
IV. Em acessibilidade WCAG, listas devem ter propósito claro, e este `<ul>` adere ao critério 1.3.1 ao estruturar conteúdo de forma programática sem depender de texto puro.  

a) Apenas I e III são verdadeiras.  
b) I, II e IV são verdadeiras.  
c) Apenas II é verdadeira.  
d) I, III e IV são verdadeiras.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
D
</details>

### Questão 5 (Nível difícil)
Considerando a teoria de construção do DOM no HTML5, onde o parser processa elementos sequencialmente e aplica herança de idioma e charset globalmente, o código declara `lang="pt"` e `charset="UTF-8"`, permitindo acentos como em "Maçã" sem artefatos. Imagine que o `lang` seja removido e um CSS externo adicione `ul { display: none; }`, ocultando a lista visualmente. Qual das seguintes alternativas descreve com precisão o impacto teórico mais profundo nessa modificação dupla, em termos de semântica, acessibilidade e processamento do parser?

a) Sem `lang`, o parser assume en-US, potencialmente alterando hifenização em "Banana"; CSS oculta `<ul>` visualmente, mas preserva no DOM para screen readers, violando WCAG 1.4.1 se a lista for essencial para o contexto.  
b) Modificação ignora herança de charset, corrompendo acentos em `<li>`; `display: none` remove semanticamente a lista do outline, exigindo ARIA para recuperação de acessibilidade.  
c) Parser reestrutura o DOM sem `lang`, herdando `h2` para itens `<li>`; CSS aplica herança a bullets, mas acessibilidade falha ao esconder landmark sem role="list".  
d) Dupla mudança prioriza cascata CSS sobre semântica, aplicando none ao body inteiro; sem lang, UTF-8 reverte para latin1, quebrando "Laranja" em navegadores legados.  
e) Sem lang, síntese de voz usa fallback neutro; `display: none` aumenta especificidade cumulativa, colapsando outline e reduzindo SEO da lista sem heading associado.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

## Código 3

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Link Exemplo</title>
    <style>
        p { font-family: Arial, sans-serif; font-size: 16px; color: #333; }
        a { color: blue; text-decoration: none; }
        a:hover { color: red; }
    </style>
</head>
<body>
    <p>Este é um parágrafo com um <a href="https://www.example.com">link externo</a>.</p>
</body>
</html>
```

### Questão 1 (Nível Fácil)
No contexto da semântica de hiperlinks no HTML5, o elemento `<a>` com atributo `href` cria um ancorador que referencia um recurso externo ou interno, permitindo navegação e indexação por crawlers de busca, onde URIs absolutas como "https://www.example.com" garantem resolução inequívoca sem dependência de base relativa. Considerando o código fornecido, que usa `<a href="https://www.example.com">link externo</a>` dentro de um parágrafo, qual das seguintes alternativas descreve corretamente o impacto teórico desse elemento na estrutura do documento?

a) Ele transforma o texto em um bloco de exibição, interrompendo o fluxo inline do `<p>` para renderização tabular.  
b) Ele integra-se ao fluxo de texto inline, promovendo acessibilidade ao permitir que leitores de tela anunciem "link externo" como ação navegável sem alterar a semântica do parágrafo.  
c) Ele é puramente estilístico, ignorado pelo parser e aplicado apenas via CSS para cor e sublinhado.  
d) Ele limita links a domínios .com, violando padrões se URIs relativas forem usadas posteriormente.  
e) Ele herda `lang="pt"` apenas para o texto do link, ignorando o href para resolução idiomática.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 2 (Nível Fácil)
Analisando o conceito teórico de herança de estilos no CSS, propriedades como `font-family` e `color` são herdadas de ancestrais para descendentes, onde o `<p>` aplica Arial diretamente, mas o `<a>` dentro dele herda a cor inicial de #333 antes da regra específica `a { color: blue; }`. Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no código que define estilos incorporados no `<head>`:

I. A herança de `color: #333;` do `<p>` é sobrescrita pela regra `a { color: blue; }` devido a maior especificidade do seletor de elemento, garantindo azul para o link sem cascata conflituosa. (V)  
II. Estilos como `font-size: 16px;` no `<p>` aplicam-se ao `<a>` por herança, mas `text-decoration: none;` remove sublinhado padrão de links, alterando apenas apresentação sem impacto semântico. (V)  
III. A regra `a:hover { color: red; }` é um pseudo-seletor que responde a eventos de mouse, mas não herda de `p`, aplicando-se independentemente da cor base do parágrafo. (V)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - F; II - F; III - V  
e) I - V; II - V; III - F  

<details><summary><b>Resposta correta: </b></summary>
A
</details>

### Questão 3 (Nível Médio)
Na teoria de especificidade CSS, seletores como `a:hover` (especificidade 0,0,0,2 por pseudo-classe) superam seletores simples como `a` (0,0,0,1), permitindo estados interativos sem !important, enquanto regras no `<style>` incorporado têm precedência sobre herança de navegador. No código fornecido, `a { color: blue; }` define cor base e `a:hover { color: red; }` altera em hover. Supondo um estilo externo adicione `a { color: green; }`, qual das seguintes alternativas explica corretamente o comportamento teórico da cascata nesse cenário?

a) O externo sobrescreve o incorporado por ordem de carregamento, tornando o link verde permanentemente, ignorando hover.  
b) Como especificidade igual para `a`, o último (externo) prevalece para estado normal, mas `a:hover` mantém red por maior especificidade, preservando interatividade.  
c) O incorporado tem precedência por ser no `<head>`, mantendo blue e red, com externo ignorado para consistência semântica.  
d) Cascata funde cores, resultando em teal (azul + verde) para normal e orange para hover como média perceptual.  
e) Semântica de link ignora externo, herdando apenas de `p` para cor #333 em ambos estados.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 4 (Nível Médio - Questão com Afirmações)
Examine as seguintes afirmações sobre os conceitos teóricos de pseudo-classes e acessibilidade em links no HTML5 presentes no código, onde `<a>` usa `text-decoration: none;` para remover sublinhado e `:hover` para mudança de cor, dentro de um `<p>` com estilos de fonte. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. O `text-decoration: none;` remove o sublinhado padrão de links, melhorando legibilidade em texto denso, mas em acessibilidade WCAG, recomenda-se indicador visual alternativo para hover para usuários de baixa visão.  
II. Pseudo-classes como `:hover` dependem de ponteiro de mouse, mas falham em touch devices, violando potencialmente WCAG 2.5.5 para targeting sem estado equivalente em foco de teclado.  
III. A cor #333 no `<p>` herda para `<a>` inicialmente, mas é sobrescrita por blue, promovendo contraste legível se o fundo for branco, aderindo a WCAG 1.4.3 sem cálculo explícito aqui.  
IV. Links semânticos como este contribuem para SEO ao passar PageRank via href, e o exemplo.com é um placeholder URI que não afeta validação, mas incentiva testes em produção.  

a) Apenas I e III são verdadeiras.  
b) I, II e IV são verdadeiras.  
c) Apenas II é verdadeira.  
d) I, III e IV são verdadeiras.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
D
</details>

### Questão 5 (Nível um pouco maior)
Considerando a teoria de cascata e herança CSS combinada com a semântica de elementos inline no HTML5, o código aplica `font-family: Arial, sans-serif;` ao `<p>`, herdado pelo `<a>` inline, enquanto `color` é sobrescrito especificamente, e o parser processa o DOM sequencialmente com charset UTF-8 para acentos como em "parágrafo". Imagine que um CSS externo adicione `p a { color: purple; }` e o `lang="pt"` seja removido, impactando pronúncia de "link externo". Qual das seguintes alternativas descreve com precisão o impacto teórico mais profundo nessa modificação dupla, em termos de especificidade, acessibilidade e processamento do parser?

a) O externo usa seletor descendente (especificidade 0,0,0,2), sobrescrita `a` simples, tornando link roxo e hover red por maior especificidade; sem `lang`, síntese de voz assume en-US, alterando entonação em "Este é", violando WCAG 3.1.1 para idioma sem fallback semântico.  
b) Cascata ignora descendente por ordem, mantendo blue; parser reverte herança sem lang, corrompendo acentos em UTF-8 e exigindo ARIA lang para recuperação de pronúncia no link.  
c) Modificação aumenta especificidade cumulativa, aplicando purple apenas em hover; sem lang, hifenização falha no `<p>`, mas acessibilidade preserva anúncio do link com role="link" implícito.  
d) Sem lang, o DOM assume fallback neutro para herança de fonte; CSS prioriza incorporado, mas acessibilidade declina ao conflitar cores sem contraste recalculado para purple.  
e) Dupla mudança funde especificidades, resultando em magenta para normal; sem lang, charset colapsa para latin1, quebrando "ã" em "parágrafo" e reduzindo SEO do link sem contexto idiomático.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

## Código 4

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Lista Ordenada</title>
</head>
<body>
    <h2>Passos para Cozinhar</h2>
    <ol>
        <li>Preparar ingredientes</li>
        <li>Aquecer a panela</li>
        <li>Adicionar temperos</li>
    </ol>
</body>
</html>
```

### Questão 1 (Nível Fácil)
No contexto da semântica de listas ordenadas no HTML5, o elemento `<ol>` representa uma coleção de itens sequenciais, onde a numeração implícita (1., 2., etc.) indica ordem lógica ou cronológica, facilitando acessibilidade para ferramentas que anunciam "item 1 de 3: Preparar ingredientes" em navegação por lista. Considerando o código fornecido, que usa `<ol>` para passos de cozinhar como "Preparar ingredientes", "Aquecer a panela" e "Adicionar temperos", qual das seguintes alternativas descreve corretamente o impacto teórico desse elemento na estrutura do documento?

a) Ele aplica numeração romana automaticamente, tornando-o inadequado para listas decimais como esta.  
b) Ele estabelece uma estrutura sequencial semântica, permitindo que screen readers preservem a ordem no DOM sem depender de CSS para contadores personalizados.  
c) Ele é equivalente a `<ul>`, com numeração adicionada apenas via estilos para distinção visual.  
d) Ele limita listas a três itens, violando padrões se mais passos forem incluídos.  
e) Ele herda `lang="pt"` apenas para o primeiro `<li>`, ignorando subsequentes para pronúncia.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 2 (Nível Fácil)
Analisando o conceito teórico de elementos de cabeçalho introdutórios no HTML, o `<h2>Passos para Cozinhar</h2>` precede a `<ol>`, estabelecendo contexto temático e contribuindo para o outline semântico do documento, onde headings como este guiam a compreensão de seções subsequentes por crawlers e usuários de teclado. Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no código que posiciona `<h2>` antes da lista:

I. O `<h2>` cria uma seção implícita no outline, associando semanticamente a `<ol>` como conteúdo subordinado, sem necessidade de `<section>` para páginas mínimas. (V)  
II. Headings devem sempre numerar listas automaticamente, mas aqui o `<h2>` é independente, evitando herança de numeração para itens `<li>`. (V)  
III. Sem `<h1>` precedente, o `<h2>` assume nível 1 no outline, potencialmente confundindo acessibilidade ao pular hierarquia padrão. (F)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - V; II - V; III - F  
e) I - V; II - F; III - F  

<details><summary><b>Resposta correta: </b></summary>
D
</details>

### Questão 3 (Nível Médio)
Na teoria de metadados de documentos HTML, o `<title>Lista Ordenada</title>` resume o propósito da página para exibição em abas e resultados de busca, alinhando-se ao conteúdo de `<ol>` para otimizar SEO com palavras-chave como "lista". No código fornecido, o título é conciso e reflete a estrutura sequencial. Supondo que o título fosse alterado para uma frase longa ("Passos Detalhados para Cozinhar com Lista Ordenada de Três Itens"), qual das seguintes alternativas explica corretamente o comportamento teórico em termos de usabilidade e indexação?

a) Títulos longos truncam em SERPs após 60 caracteres, mas exibem completos em abas, priorizando SEO com termos como "cozinhar".  
b) O navegador elide (...) títulos excessivos na aba para legibilidade, recomendando brevidade para cliques em buscas sem perda de relevância semântica para a `<ol>`.  
c) Sem limite, o título herda do `<h2>`, mas viola WCAG ao sobrecarregar leitores de tela com descrições redundantes à lista.  
d) A expansão ativa indexação automática dos itens `<li>`, elevando ranqueamento para "temperos".  
e) Títulos descritivos acima de 50 caracteres revertem ao primeiro `<li>` como fallback semântico.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 4 (Nível Médio - Questão com Afirmações)
Examine as seguintes afirmações sobre os conceitos teóricos de itens de lista ordenada e acessibilidade no HTML5 presentes no código, onde `<ol>` contém três `<li>` com passos sequenciais. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. Elementos `<li>` em `<ol>` herdam numeração implícita do navegador (1, 2, 3), mas semanticamente preservam ordem no DOM, permitindo que assistive technologies anunciem "lista ordenada com 3 itens" para navegação linear.  
II. Listas ordenadas como esta suportam aninhamento para subpassos, mas aqui a estrutura plana adere a simplicidade, evitando complexidade desnecessária no outline semântico.  
III. O `charset="UTF-8"` suporta acentos em "ingredientes" e "temperos", mas sem ele, o parser pode defaultar para ISO-8859-1, corrompendo caracteres latinos em submissão ou leitura.  
IV. Em WCAG 1.3.1, listas sequenciais promovem estrutura programática, e este `<ol>` cumpre ao diferenciar passos de texto puro, facilitando compreensão para usuários cognitivos.  

a) Apenas I e III são verdadeiras.  
b) I, II e IV são verdadeiras.  
c) Apenas II é verdadeira.  
d) I, III e IV são verdadeiras.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
E
</details>

### Questão 5 (Nível um pouco maior)
Considerando a teoria de construção do DOM sequencial no HTML5, onde `<ol>` gera nós numerados implicitamente e herda `lang="pt"` para pronúncia de itens como "Aquecer a panela", com UTF-8 garantindo acentos, o parser processa headings antes de listas para contexto. Imagine que um CSS externo adicione `ol { list-style-type: none; }` e o `lang="pt"` seja removido, impactando entonação em "Adicionar temperos". Qual das seguintes alternativas descreve com precisão o impacto teórico mais profundo nessa modificação dupla, em termos de semântica, acessibilidade e renderização do parser?

a) CSS remove numeração visual, mas preserva ordem semântica no DOM para screen readers; sem `lang`, voz sintética assume en-US, alterando pronúncia de "panela", violando WCAG 3.1.1 e 1.3.1 ao ocultar sequência essencial sem indicador alternativo.  
b) Modificação colapsa `<ol>` semanticamente ao tipo none, exigindo ARIA para numeração; parser reverte herança sem lang, corrompendo acentos e demandando reparse para UTF-8.  
c) Parser herda none para `<li>`, fundindo itens; sem lang, hifenização falha em "temperos", mas acessibilidade mantém outline com role="listitem" implícito.  
d) Dupla mudança prioriza cascata CSS, aplicando none ao `<h2>` adjacente; sem lang, charset falha para latin1, quebrando "ç" em "cozinhar" e reduzindo SEO sequencial.  
e) Sem lang, `<ol>` assume fallback inglês para contadores; CSS aumenta especificidade, removendo herança e violando WCAG 2.4.3 sem foco em itens sem numeração visível.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

## Código 5

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Interface Elaborada</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background-color: #f4f4f4; 
            margin: 0; 
            padding: 20px; 
            color: #333; 
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 0 10px rgba(0,0,0,0.1); 
        }
        h2 { 
            text-align: center; 
            color: #2c3e50; 
            margin-bottom: 20px; 
        }
        .form-group { 
            margin-bottom: 15px; 
        }
        label { 
            display: block; 
            margin-bottom: 5px; 
            font-weight: bold; 
        }
        input[type="text"], 
        input[type="email"], 
        textarea { 
            width: 100%; 
            padding: 10px; 
            border: 1px solid #ddd; 
            border-radius: 5px; 
            box-sizing: border-box; 
        }
        textarea { 
            height: 100px; 
            resize: vertical; 
        }
        .button-group { 
            display: flex; 
            gap: 10px; 
            justify-content: center; 
            margin-top: 20px; 
        }
        button { 
            padding: 12px 24px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            font-size: 16px; 
            transition: all 0.3s ease; 
            flex: 1; 
        }
        .btn-primary { 
            background-color: #3498db; 
            color: white; 
        }
        .btn-primary:hover { 
            background-color: #2980b9; 
            transform: translateY(-2px); 
        }
        .btn-secondary { 
            background-color: #95a5a6; 
            color: white; 
        }
        .btn-secondary:hover { 
            background-color: #7f8c8d; 
            transform: translateY(-2px); 
        }
        .btn-danger { 
            background-color: #e74c3c; 
            color: white; 
        }
        .btn-danger:hover { 
            background-color: #c0392b; 
            transform: translateY(-2px); 
        }
        .success-message { 
            display: none; 
            background-color: #d4edda; 
            color: #155724; 
            padding: 10px; 
            border-radius: 5px; 
            margin-top: 15px; 
            text-align: center; 
        }
        .error-message { 
            display: none; 
            background-color: #f8d7da; 
            color: #721c24; 
            padding: 10px; 
            border-radius: 5px; 
            margin-top: 15px; 
            text-align: center; 
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Formulário Interativo com Botões</h2>
        
        <form id="meuForm">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
            </div>
            
            <div class="button-group">
                <button type="submit" class="btn-primary">Enviar</button>
                <button type="button" class="btn-secondary" onclick="limparForm()">Limpar</button>
                <button type="button" class="btn-danger" onclick="exibirAlerta()">Cancelar</button>
            </div>
        </form>
        
        <div id="successMsg" class="success-message">Formulário enviado com sucesso!</div>
        <div id="errorMsg" class="error-message">Por favor, preencha todos os campos obrigatórios.</div>
    </div>

    <script>
        document.getElementById('meuForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            if (nome && email) {
                document.getElementById('successMsg').style.display = 'block';
                document.getElementById('errorMsg').style.display = 'none';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
                document.getElementById('successMsg').style.display = 'none';
            }
        });

        function limparForm() {
            document.getElementById('meuForm').reset();
            document.getElementById('successMsg').style.display = 'none';
            document.getElementById('errorMsg').style.display = 'none';
        }

        function exibirAlerta() {
            alert('Operação cancelada!');
            limparForm();
        }
    </script>
</body>
</html>
```

### Questão 1 (Nível Fácil)
No contexto da estrutura básica de um documento HTML5, o elemento `<div class="container">` atua como contêiner genérico para agrupar o formulário e mensagens, permitindo estilização via classe CSS que define `max-width: 600px; margin: 0 auto;` para centralização responsiva, sem adicionar semântica específica ao outline do documento. Considerando o código fornecido, que usa essa div para envolver `<h2>`, `<form>` e divs de mensagem, qual das seguintes alternativas descreve corretamente o impacto teórico desse elemento na estrutura geral?

a) Ele impõe semântica de seção principal, equivalendo a `<main>`, e força herança de `required` para inputs filhos.  
b) Ele serve como bloco neutro, facilitando layout centralizado via CSS sem alterar o fluxo DOM, promovendo acessibilidade ao conter interativos como botões sem landmarks explícitos.  
c) Ele é obsoleto em HTML5, substituído por `<section>`, e o CSS aqui ignora `box-shadow` para compatibilidade.  
d) Ele limita o conteúdo a 600px fixos, violando responsividade em telas menores sem media queries.  
e) Ele herda `lang="pt"` apenas para o `<h2>`, ignorando o `<form>` para pronúncia idiomática.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 2 (Nível Fácil)
Na teoria de metadados no `<head>` do HTML, o `<title>Interface Elaborada</title>` resume o propósito da página para abas de navegador e SEO, refletindo elementos interativos como o formulário com botões e validação JS, otimizando cliques em buscas ao alinhar com conteúdo dinâmico. Considerando o código fornecido, qual das seguintes alternativas descreve corretamente o papel teórico desse título na usabilidade global?

a) Ele é renderizado no body como fallback para `<h2>`, alterando o texto centralizado.  
b) Ele fornece contexto conciso para navegação, anunciado por screen readers como título da janela, sem herança CSS de cor para o `<h2>`.  
c) Ele força codificação UTF-8, dispensando o `<meta charset>`.  
d) Ele limita títulos a 20 caracteres, truncando "Elaborada" em mobile.  
e) Ele ignora `lang="pt"`, exibindo em inglês para SEO internacional.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 3 (Nível Fácil)
Analisando o conceito teórico de codificação de caracteres no HTML, o `<meta charset="UTF-8">` garante suporte a acentos em português como em "Formulário Interativo com Botões" no `<h2>`, evitando moji-baques em labels como "Nome:" ou placeholders como "Digite sua mensagem aqui...". Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no código que inclui essa meta tag:

I. UTF-8 suporta Unicode completo, ideal para conteúdo em "pt" como "mensagem", sem necessidade de entidades escapadas em JS. (V)  
II. A meta tag deve vir antes do `<title>` para prioridade, mas aqui está após, potencialmente causando inconsistências em parsers antigos. (F)  
III. Sem charset, o navegador defaulta para ISO-8859-1, corrompendo "ç" em "sucesso" na mensagem de sucesso. (V)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - F; II - F; III - V  
e) I - V; II - V; III - F  

<details><summary><b>Resposta correta: </b></summary>
C
</details>

### Questão 4 (Nível Fácil)
No âmbito da semântica de formulários HTML5, o atributo `required` em `<input type="text" id="nome" name="nome" required>` ativa validação nativa do navegador, impedindo submissão se vazio e sinalizando para usuários com asterisco ou tooltip, promovendo usabilidade sem JS adicional para campos obrigatórios como nome e email. Considerando o código fornecido, qual das seguintes alternativas explica corretamente o impacto teórico desse atributo na interação do form?

a) Ele força submissão POST, ignorando GET para segurança em emails.  
b) Ele integra validação semântica, permitindo que screen readers anunciem "campo obrigatório" para acessibilidade WCAG 3.3.2 sem atributos extras.  
c) Ele é visual apenas, ignorado pelo JS `addEventListener('submit')` para prevenção de default.  
d) Ele limita required a text, violando padrões em textarea.  
e) Ele herda de `lang="pt"`, validando apenas entradas em português.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 5 (Nível Médio)
Na teoria de herança e especificidade CSS, propriedades como `color: #333;` no `body` herdam para descendentes como labels e inputs, mas são sobrescritas por regras específicas como `.btn-primary { color: white; }`, enquanto `box-sizing: border-box;` em inputs inclui padding na largura total de 100%. No código fornecido, isso afeta o layout do `.form-group`. Supondo um estilo externo adicione `body { color: black; }`, qual das seguintes alternativas explica corretamente o comportamento teórico da cascata?

a) O externo prevalece por ordem, alterando #333 para black globalmente, incluindo botões brancos.  
b) Especificidade igual mantém #333 incorporado, sem conflito em herança para `.container`.  
c) O externo funde cores, resultando em cinza médio para labels.  
d) Sem !important, herança ignora externo, aplicando black apenas ao `<h2>`.  
e) Cascata prioriza externo, mas preserva white nos botões por classe descendente.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

### Questão 6 (Nível Médio)
Examine as seguintes afirmações sobre os conceitos teóricos de flexbox e botões em CSS presentes no código, onde `.button-group { display: flex; gap: 10px; justify-content: center; }` alinha três botões com classes `.btn-primary`, `.btn-secondary` e `.btn-danger`. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. O `display: flex;` cria um contêiner unidimensional para botões, com `flex: 1;` distribuindo espaço igual, promovendo responsividade sem larguras fixas.  
II. Pseudo-classes `:hover` como `.btn-primary:hover { transform: translateY(-2px); }` respondem a eventos de mouse, mas falham em touch, recomendando `:focus` equivalente para WCAG 2.4.7.  
III. `transition: all 0.3s ease;` suaviza mudanças em hover, aplicando-se a background e transform, mas herda para texto, alterando cor dinamicamente.  
IV. Cores como #3498db para primary seguem paleta semântica (azul para ação), mas sem cálculo de contraste, podem violar WCAG 1.4.3 em fundos claros.  

a) Apenas I e III são verdadeiras.  
b) I, II e IV são verdadeiras.  
c) Apenas II é verdadeira.  
d) I, III e IV são verdadeiras.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
B
</details>

### Questão 7 (Nível Médio)
Analisando o conceito teórico de manipulação do DOM via JavaScript, o `addEventListener('submit', function(e) { e.preventDefault(); ... })` intercepta o evento de submissão do `<form id="meuForm">`, prevenindo reload padrão e validando `nome` e `email` para toggle de mensagens `.success-message` e `.error-message`. Avalie as afirmações a seguir como verdadeira (V) ou falsa (F) e selecione a alternativa que representa corretamente a avaliação, com base no script inline:

I. O `preventDefault()` bloqueia submissão nativa, permitindo validação client-side, mas preserva `required` para fallback se JS falhar. (V)  
II. A condição `if (nome && email)` ignora `required` em textarea, focando apenas em nome/email, violando completude semântica. (F)  
III. `document.getElementById('successMsg').style.display = 'block';` altera visibilidade inline, herdando CSS de `.success-message` sem recarregamento. (V)  

a) I - V; II - V; III - V  
b) I - F; II - V; III - F  
c) I - V; II - F; III - V  
d) I - F; II - F; III - V  
e) I - V; II - V; III - F  

<details><summary><b>Resposta correta: </b></summary>
C
</details>

### Questão 8 (Nível Médio)
Na teoria de associação de labels em formulários HTML5, `label for="email">` vincula-se a `<input id="email" type="email" required>`, permitindo foco via clique na label e anúncio como "Email, campo de edição obrigatório" em screen readers, enquanto `type="email"` ativa validação de formato nativa como "@" obrigatório. No código fornecido, isso aplica-se a múltiplos `.form-group`. Supondo que o `for` fosse removido do label de mensagem, qual das seguintes alternativas explica corretamente o comportamento teórico em termos de usabilidade?

a) Associação falha completamente, exigindo wrapper `<label>` ao redor da `<textarea>` para implícita, reduzindo acessibilidade WCAG 1.3.1.  
b) O navegador infere por proximidade, mantendo foco, mas semântica perde granularidade para ARIA.  
c) Remoção ativa modo legacy, revertendo labels a texto estático sem impacto em `required`.  
d) Labels sem `for` herdam `id` do form, focando todos inputs simultaneamente.  
e) Validação `type="email"` compensa, anunciando obrigatoriedade sem label associada.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

### Questão 9 (Nível difícil)
Considerando a teoria de box model e responsividade CSS, `input[type="text"], input[type="email"], textarea { width: 100%; box-sizing: border-box; }` inclui `padding: 10px;` na largura total, enquanto `textarea { resize: vertical; height: 100px; }` permite redimensionamento usuário, e o parser aplica herança de `body padding: 20px;`. No código fornecido, isso afeta o `.container` com `max-width: 600px;`. Imagine um CSS externo adicione `textarea { width: 50%; }` e o `lang="pt"` seja removido, impactando pronúncia de "Digite sua mensagem aqui...". Qual das seguintes alternativas descreve com precisão o impacto teórico mais profundo nessa modificação dupla, em termos de cascata, acessibilidade e parser?

a) Externo sobrescreve seletor mais específico (0,0,1,0 para type vs 0,0,0,1 para textarea), estreitando textarea a 50% e quebrando layout; sem `lang`, síntese assume en-US, alterando entonação em "mensagem", violando WCAG 3.1.1 sem fallback.  
b) Cascata preserva 100%, mantendo box-sizing; sem lang, hifenização falha, mas acessibilidade preserva resize com role="textbox".  
c) Modificação funde larguras para 75%; sem lang, UTF-8 colapsa, corrompendo placeholder e exigindo ARIA.  
d) Sem lang, DOM herda neutro para padding; externo aplica 50% apenas em hover, reduzindo usabilidade sem recalculo.  
e) Dupla prioriza ordem, aplicando 50% global; sem lang, required ignora pronúncia idiomática em labels.

<details><summary><b>Resposta correta: </b></summary>
A
</details>

### Questão 10 (Nível difícil)
Examine as seguintes afirmações sobre os conceitos teóricos de funções JS e mensagens de feedback no código, onde `limparForm()` reseta o form e esconde mensagens, `exibirAlerta()` chama alert e limpa, e submit toggles `.success-message` ou `.error-message` com `display: none/block`. Indique a alternativa que corretamente identifica quais afirmações são verdadeiras:

I. `form.reset()` limpa valores de inputs e textarea, preservando `placeholder`, mas ignora validação `required` para estado limpo semântico.  
II. O `alert('Operação cancelada!')` é modal síncrono, bloqueando UI até OK, mas em acessibilidade WCAG 2.5.1, recomenda-se aria-live para notificações não modais em forms complexos.  
III. Condição `if (nome && email)` valida presença básica, mas omite `mensagem`, aderindo a minimalismo sem full form check, com toggle inline CSS herdando de classes mensagem.  
IV. `onclick="limparForm()"` atribui handler inline, equivalente a addEventListener, mas polui HTML; semântica preserva no DOM para eventos de teclado via Enter.  
V. Mensagens com `background-color: #d4edda;` para sucesso usam paleta semântica verde, mas sem `role="status"`, screen readers podem não anunciar mudanças dinâmicas automaticamente.  

a) Apenas I, III e V são verdadeiras.  
b) II, III e IV são verdadeiras.  
c) I, II, IV e V são verdadeiras.  
d) Apenas IV é verdadeira.  
e) Todas as afirmações são verdadeiras.

<details><summary><b>Resposta correta: </b></summary>
C
</details>