# Aula 06

Sumário

- [Aula 06](#aula-06)
  - [DOM](#dom)
    - [Interfaces e objetos do DOM](#interfaces-e-objetos-do-dom)
    - [Tipos de dados fundamentais](#tipos-de-dados-fundamentais)
    - [API DOM HTML](#api-dom-html)
    - [Exemplos](#exemplos)
      - [Inserindo texto](#inserindo-texto)
      - [Acrescento um elemento filho](#acrescento-um-elemento-filho)
      - [Lendo e modificando a árvore](#lendo-e-modificando-a-árvore)
  - [Exercícios](#exercícios)
    - [Questões Fáceis (1-20)](#questões-fáceis-1-20)
    - [Questões Médias (21-40)](#questões-médias-21-40)
    - [Questões Difíceis (41-50)](#questões-difíceis-41-50)

## DOM

O [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (*Document Object Model*) é uma **API** que representa e interage com qualquer documento com HTML ou XML. Em outras palavras é um **modelo de documento** carregado no navegador que **representa** o documento (HTML ou XML) **como uma árvore**, onde cada nó representa parte do documento, por exemplo, um elemento HTML, um texto, comentário, etc.

Por exemplo, o seguinte código HTML

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

Será representado por uma árvore como a seguinte

![DOM tree](dom_tree.jpg)

O DOM é uma das APIs mais utilizadas porque permite que códigos que estão executando no navegador tenham acesso e interajam com cada nó do documento, os quais podem ser criados (novos nós que não existiam na árvore), movidos e modificados. "Escutadores" (ou ouvintes) de eventos podem ser adicionados aos nós, servindo de gatilho para a ocorrência de eventos específicos.

### Interfaces e objetos do DOM

Vários objetos implementam várias diferentes interfaces. O objeto `table`, por exemplo, implementa a interface especializada `HTMLTableElement`, a qual inclui métodos como `createCaption` e `insertRow`. Contudo, como `table` é um elemento HTML, ele implementa também a interface `Element`. Ainda, um elemento HTML é também um nó da árvore, portanto `table` implementa também a interface `Node`, da qual deriva a interface `Element`.

Ao pegar a referência a um objeto `table`, como no exemplo a seguir, é possível utilizar todas as três interfaces sem sequer perceber.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element interface
for (const attr of tableAttrs) {
  // HTMLTableElement interface: border attribute
  if (attr.nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

Uma lista de interfaces do DOM pode ser vista [aqui](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces).

### Tipos de dados fundamentais

| Tipo de dado | Descrição |
|--------------|-----------|
| [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) | Quando um membro retorna um objeto do tipo `document` (por exemplo, a propriedade `ownerDocument` de um elemento retorna o documento ao qual ele pertence), esse objeto é a própria raiz do objeto `document`. |
| [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) | Cada objeto localizado dentro de um documento é algum tipo de nó. Em um documento HTML um objeto pode ser um **nó de elemento** e, ao mesmo tempo, um **nó de texto** ou **nó de atributo**. |
| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | O tipo `element` é baseado no tipo `node` e se refere a um elemento ou um nó do tipo elemento retornado por um membro da API DOM. Em vez de dizer, por exemplo, que o método `documento.createElement()` retorna um referência de objeto para um nó, apenas dizendos que esse método retorna o elemento que ele criou no DOM. Objetos `element` implementam a interface `Element` e também a interface mais básica `Node`. Em um documento HTML, os elementos ainda são "reforçados" com a interface [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), e também com outras interfaces que descrevem capacidades de tipos específicos de elementos, por exemplo, a interface `HTMLTableElement` citada anteriormente. |
| [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr) | Quando um atributo é retornado por um membro (por exemplo, a partir do método `createAttribute()`) ele é uma referência de objeto que expõe uma interface especial para atributos. Atributos são nós no DOM assim como os `element`, mas são usados mais raramente. |

### API DOM HTML

Um documento contendo HTML é descrito como usando a interface [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), a qual é estendida pelas especificações de HTML que incluem vários recursos específicos do HTML. Em partiruclar, a interface [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) é estendida para se tornar [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) e várias subclasses, cada uma representando um dos (ou uma família de) elementos.

A API DOM HTML fornece acesso a vários recursos do navegador como tabelas e janelas, estilos CSS e *folhas de estilo*, histórico do navegador, etc. Mais informações sobre essa API podem ser encontradas [aqui](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API).

### Exemplos

#### Inserindo texto

O [exemplo 1](exemplo1.html) usa um elemento `<div>` contendo um `<textarea>` e dois elementos `<button>`. Quando o usuário clica no primeiro botão, um texto é inserido em `<textarea>`. Quando o usuário clica no segundo botão, o texto é apagado. São usados:

- [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) para acessar o `<textarea>` e os botões.
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) para capturar os cliques nos botões.
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) para inserir e apagar o texto.
    
#### Acrescento um elemento filho

O [exemplo 2](exemplo2.html) usa um elemento `<div>` contendo um `<div>` e dois elementos `<button>`. Quando o usuário clica no primeiro botão um novo elemento é criado e adicionado como filho da `<div>`. Quando o usuário clica no segundo botão, o elemento filho é removido. São usados:

- [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) para acessar a `<div>` e os botões.
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) para capturar os cliques nos botões.
- [`Document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) para criar o elemento.
- [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) para adicionar o nó filho.
- [`Node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) para remover o nó filho.

#### Lendo e modificando a árvore

O [exemplo 3](exemplo3.html) mostra a modificação de um cabeçalho e o acréscimo de um parágrafo.

<!--O que é o DOM (Document Object Model).
	- Métodos de seleção (`getElementById`, `querySelector`).
	- Modificação de conteúdo (`innerHTML`, `textContent`).
	- Alteração de atributos e estilos (`setAttribute`, `style`).
	- Criação e remoção de elementos (`createElement`, `appendChild`, `remove`).

https://developer.mozilla.org/en-US/docs/Glossary/DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model


- Document [https://developer.mozilla.org/en-US/docs/Web/API/Document]
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- Element [https://developer.mozilla.org/en-US/docs/Web/API/Element]
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
- Node [https://developer.mozilla.org/en-US/docs/Web/API/Node]
    - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
-->

## Exercícios

Para cada exercício, crie um HTML básico como este (adapte conforme necessário):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head><title>Prática DOM</title></head>
<body>
  <!-- Adicione elementos aqui conforme a questão -->
  <script>
    // Seu código JS aqui
  </script>
</body>
</html>
```

### Questões Fáceis (1-20)

1. **Seleção por ID:** Crie um elemento `<div id="meuDiv">Olá</div>`. Use `document.getElementById('meuDiv')` para selecioná-lo e altere seu `textContent` para "Mundo!".

2. **Seleção por classe:** Adicione uma classe "destaque" a um `<p>`. Use `document.getElementsByClassName('destaque')` para selecionar e mude o `innerHTML` para "Texto em destaque!".

3. **QuerySelector simples:** Crie um `<button class="btn">Clique</button>`. Use `document.querySelector('.btn')` para selecioná-lo e adicione um estilo `backgroundColor = 'blue'`.

4. **Criação de elemento:** Use `document.createElement('h1')` para criar um título, defina seu `textContent` como "Título Novo" e adicione-o ao `<body>` com `appendChild`.

5. **Inserção de texto:** Selecione o `<body>` com `document.body` e use `innerHTML` para inserir "Bem-vindo!" no início.

6. **Evento de clique básico:** Adicione um `<button id="botao">Clique aqui</button>`. Use `addEventListener('click')` para alertar "Clicado!" quando pressionado.

7. **Alteração de estilo:** Crie um `<div id="quadrado">Quadrado</div>`. No clique, use `event.target.style.width = '200px'` para redimensioná-lo.

8. **Remoção de elemento:** Crie um `<li id="item">Item 1</li>` em uma `<ul>`. No clique, use `remove()` para removê-lo.

9. **QuerySelectorAll básico:** Adicione dois `<p class="paragrafo">`. Use `document.querySelectorAll('.paragrafo')` para selecioná-los e altere o texto do primeiro para "Primeiro".

10. **Evento mouseover:** Em um `<div>`, adicione `addEventListener('mouseover')` para mudar a cor de fundo para 'red'.

11. **Criação e append de texto:** Crie um `<span>` com `createTextNode('Texto criado')` e adicione-o a um `<p>` existente.

12. **Alteração de atributo:** Selecione um `<img id="foto" src="default.jpg">` e mude o `src` para "nova.jpg" com `setAttribute`.

13. **Evento de submit simples:** Crie um `<form>` com `<input type="submit">`. No `submit`, use `preventDefault()` e alerte o valor do input.

14. **Inserção antes de elemento:** Use `insertBefore` para adicionar um novo `<p>` antes de um `<div>` existente no `<body>`.

15. **Clone de elemento:** Clone um `<button>` com `cloneNode(true)` e adicione o clone ao final do `<body>`.

16. **Evento keydown:** Adicione um `<input>`. Use `addEventListener('keydown')` para alertar a tecla pressionada com `event.key`.

17. **Modificação de classes:** Selecione um elemento e use `classList.add('ativa')` para adicionar uma classe CSS.

18. **Remoção de classe:** No clique de um botão, use `classList.remove('ativa')` em um `<div>` para remover uma classe.

19. **Toggle de classe:** Use `classList.toggle('destaque')` em um `<p>` no clique para alternar a classe.

20. **Evento load da página:** Use `document.addEventListener('DOMContentLoaded')` para imprimir "Página carregada!" no console.

### Questões Médias (21-40)

21. **QuerySelectorAll com loop:** Selecione todos os `<li class="lista">` com `querySelectorAll` e use um `for...of` para adicionar " - Modificado" ao texto de cada um.

22. **Navegação por parentNode:** Clique em um `<span>` dentro de um `<div>`. Use `event.target.parentNode` para alterar o fundo do pai para 'yellow'.

23. **Evento de input em tempo real:** Em um `<input>`, adicione `addEventListener('input')` para atualizar um `<p>` com o valor digitado em tempo real.

24. **Criação dinâmica de lista:** Use um loop `for` para criar 5 `<li>` com `createElement` e adicioná-los a uma `<ul>` existente.

25. **Propagação de eventos (bubbling):** Crie um `<div>` com um `<button>` dentro. No clique do button, use `event.stopPropagation()` para impedir que o div detecte o clique.

26. **Evento de mouseout:** Em um `<div>`, adicione `mouseover` para 'green' e `mouseout` para 'white' no fundo.

27. **Validação de formulário:** Em um `<form>` com email, no `submit`, verifique se o valor é válido (contém @) e alerte "Válido" ou "Inválido".

28. **Inserção após elemento:** Use `insertAdjacentHTML('afterend')` para adicionar um `<p>` após um `<div>` existente.

29. **Evento de scroll:** Adicione `addEventListener('scroll')` ao `window` para alterar o título da página com `document.title` baseado na posição do scroll.

30. **Clonagem profunda:** Clone uma `<ul>` com itens aninhados usando `cloneNode(true)` e substitua a original com `replaceChild`.

31. **Evento de change em select:** Crie um `<select>` com opções. No `change`, use `event.target.value` para atualizar o texto de um `<span>`.

32. **Remoção condicional:** Selecione todos os `<div class="inativo">` e remova-os se tiverem uma classe específica, usando `classList.contains`.

33. **Captura de fase de captura:** Adicione um listener com `{capture: true}` em um `<body>` para capturar cliques antes dos filhos.

34. **Criação de tabela dinâmica:** Use loops para criar uma tabela 3x3 com `createElement('tr')` e `createElement('td')`, adicionando ao `<body>`.

35. **Evento de keyup com filtro:** Em um `<input>`, no `keyup`, filtre e exiba apenas itens de uma lista que contenham a tecla digitada.

36. **Modificação de atributos múltiplos:** Selecione um `<a>` e use `setAttribute` para href e title em sequência.

37. **Evento de focus e blur:** Em um `<input>`, mude a borda para 'blue' no `focus` e 'black' no `blur`.

38. **Anexar listener a múltiplos elementos:** Use `querySelectorAll` em botões e adicione o mesmo listener de clique a todos com um loop.

39. **Evento de resize da janela:** Adicione `addEventListener('resize')` ao `window` para atualizar um `<p>` com a largura atual (`window.innerWidth`).

40. **Inserção de HTML seguro:** Use `insertAdjacentHTML('beforeend')` para adicionar um link a uma `<div>`, mas evite XSS (use texto plano).

### Questões Difíceis (41-50)

41. **Delegação de eventos:** Crie uma lista dinâmica de botões. Use um listener no container `<ul>` para capturar cliques em itens filhos e remover o clicado.

42. **Eventos personalizados:** Crie um evento customizado "userLogin" com `new CustomEvent`. Dispare-o no `document` e ouça para alterar um elemento.

43. **Manipulação de formulário com validação avançada:** Em um form com múltiplos inputs, no `submit`, valide todos, previna default e destaque erros com classes.

44. **Traversal DOM com children:** Selecione um `<ul>`, use `children` para iterar filhos, e no clique de um `<li>`, altere o estilo de todos os irmãos.

45. **Propagação com captura e bubbling:** Configure listeners em `<body>` e `<div>` com fases diferentes; clique no div e observe a ordem no console.

46. **Criação de galeria dinâmica:** Use `fetch` simulado (ou array) para criar imagens com `createElement`, adicionando listeners de clique para modal.

47. **Evento de drag and drop básico:** Torne um elemento arrastável com `dragstart` e `dragover`; drop em outro para mover com `appendChild`.

48. **Custom event com detalhes:** Dispare um `CustomEvent` com `detail: {user: 'João'}`; no listener, acesse `event.detail` para atualizar o DOM.

49. **Otimização de listeners em lista grande:** Para 100 itens gerados dinamicamente, use delegação no container para evitar adicionar 100 listeners individuais.

50. **Simulação de SPA com eventos:** Crie "páginas" como divs ocultas; use um listener global para navegação (clique em links) que mude visibilidade e atualize histórico com `pushState`.