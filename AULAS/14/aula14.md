# Aula 14 - `DOM Events`: eventos, propagação, delegação e interação com o DOM

**Sumário**

- [Aula 14 - `DOM Events`: eventos, propagação, delegação e interação com o DOM](#aula-14---dom-events-eventos-propagação-delegação-e-interação-com-o-dom)
  - [1. Objetivos da aula](#1-objetivos-da-aula)
  - [2. O que são eventos?](#2-o-que-são-eventos)
  - [3. Event handler e event listener](#3-event-handler-e-event-listener)
    - [Event handler](#event-handler)
    - [Event listener](#event-listener)
  - [4. `addEventListener()`](#4-addeventlistener)
    - [4.1 Não chame a função ao registrá-la](#41-não-chame-a-função-ao-registrá-la)
  - [5. Tipos comuns de eventos](#5-tipos-comuns-de-eventos)
    - [5.1 Eventos de mouse](#51-eventos-de-mouse)
    - [5.2 Eventos de teclado](#52-eventos-de-teclado)
    - [5.3 Eventos de foco](#53-eventos-de-foco)
    - [5.4 Eventos de formulário](#54-eventos-de-formulário)
    - [5.5 Eventos relacionados ao documento e à janela](#55-eventos-relacionados-ao-documento-e-à-janela)
  - [6. `event handler properties`](#6-event-handler-properties)
    - [6.1 `addEventListener()` versus `onclick`](#61-addeventlistener-versus-onclick)
    - [6.2 E os atributos HTML `onclick`?](#62-e-os-atributos-html-onclick)
  - [7. O objeto de evento (`event`)](#7-o-objeto-de-evento-event)
    - [7.1 `event.target`](#71-eventtarget)
    - [7.2 `event.key`](#72-eventkey)
    - [7.3 `event.type`](#73-eventtype)
    - [7.4 Outras informações do evento](#74-outras-informações-do-evento)
  - [8. Propagação de eventos (*event bubbling*)](#8-propagação-de-eventos-event-bubbling)
    - [8.1 As fases da propagação](#81-as-fases-da-propagação)
      - [8.1.1 Fase de captura](#811-fase-de-captura)
      - [8.1.2 Fase do alvo](#812-fase-do-alvo)
      - [8.1.3 Fase de bubbling](#813-fase-de-bubbling)
      - [8.1.4 Visão completa](#814-visão-completa)
      - [8.1.5 Quais listeners são executados em cada fase?](#815-quais-listeners-são-executados-em-cada-fase)
      - [8.1.6 Nem todo evento faz bubbling](#816-nem-todo-evento-faz-bubbling)
    - [8.2 Propagação e delegação](#82-propagação-e-delegação)
    - [8.3 `event.target` e `event.currentTarget`](#83-eventtarget-e-eventcurrenttarget)
    - [8.4 Interrompendo a propagação](#84-interrompendo-a-propagação)
    - [8.5 Delegação de eventos](#85-delegação-de-eventos)
      - [8.5.1 Como funciona a delegação?](#851-como-funciona-a-delegação)
      - [8.5.2 Delegação com `matches()`](#852-delegação-com-matches)
      - [8.5.3 Delegação com elementos internos](#853-delegação-com-elementos-internos)
      - [8.5.4 Delegação e elementos criados dinamicamente](#854-delegação-e-elementos-criados-dinamicamente)
      - [8.5.5 Quando utilizar delegação?](#855-quando-utilizar-delegação)
  - [9. `preventDefault()`: prevenção do comportamento padrão](#9-preventdefault-prevenção-do-comportamento-padrão)
    - [9.1 Impedindo o envio de um formulário](#91-impedindo-o-envio-de-um-formulário)
    - [9.2 Impedindo a navegação de um link](#92-impedindo-a-navegação-de-um-link)
    - [9.3 Três conceitos que não devem ser confundidos](#93-três-conceitos-que-não-devem-ser-confundidos)
  - [10. Eventos + manipulação básica do DOM](#10-eventos--manipulação-básica-do-dom)
    - [10.1 Alterando texto após um clique](#101-alterando-texto-após-um-clique)
    - [10.2 Alterando estilos](#102-alterando-estilos)
    - [10.3 Alterando classes](#103-alterando-classes)
    - [10.4 Criando elementos em resposta a eventos](#104-criando-elementos-em-resposta-a-eventos)
    - [10.5 Removendo elementos](#105-removendo-elementos)
    - [10.6 Exemplo integrado: contador](#106-exemplo-integrado-contador)
    - [10.7 Exemplo integrado: campo de texto e evento de teclado](#107-exemplo-integrado-campo-de-texto-e-evento-de-teclado)
    - [10.8 Exemplo integrado: formulário com validação](#108-exemplo-integrado-formulário-com-validação)
    - [10.9 Exemplo integrado: lista de tarefas com delegação](#109-exemplo-integrado-lista-de-tarefas-com-delegação)
    - [10.10 Exemplo integrado: delegação com botões](#1010-exemplo-integrado-delegação-com-botões)
  - [11. Um pequeno projeto para consolidar](#11-um-pequeno-projeto-para-consolidar)
    - [Eventos que podem ser utilizados](#eventos-que-podem-ser-utilizados)
    - [Operações do DOM que podem ser utilizadas](#operações-do-dom-que-podem-ser-utilizadas)
  - [12. Resumo](#12-resumo)
    - [Eventos](#eventos)
    - [`addEventListener()`](#addeventlistener)
    - [*Event handler properties*](#event-handler-properties)
    - [Objeto de evento](#objeto-de-evento)
    - [Propagação de eventos](#propagação-de-eventos)
    - [`event.target` × `event.currentTarget`](#eventtarget--eventcurrenttarget)
    - [`stopPropagation()`](#stoppropagation)
    - [Delegação de eventos](#delegação-de-eventos)
    - [`preventDefault()`](#preventdefault)
    - [Eventos + DOM](#eventos--dom)
  - [Referências](#referências)


## 1. Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- explicar o que são eventos no navegador;
- reconhecer alguns dos principais tipos de eventos do DOM;
- registrar manipuladores de eventos com `addEventListener()`;
- utilizar `event handler properties`, como `onclick`;
- compreender o papel do objeto de evento (`event`);
- acessar informações fornecidas pelo evento, como `target` e `key`;
- compreender a propagação de eventos na árvore DOM;
- diferenciar `event.target` de `event.currentTarget`;
- interromper a propagação de um evento quando necessário;
- utilizar delegação de eventos para tratar eventos de elementos descendentes;
- impedir o comportamento padrão de determinados elementos com `preventDefault()`;
- combinar eventos com operações básicas de manipulação do DOM.

---

## 2. O que são eventos?

Uma página web não é apenas um documento que o navegador exibe. Ela também pode **reagir a acontecimentos**.

Por exemplo:

- o usuário clica em um botão;
- o ponteiro do mouse passa sobre um elemento;
- o usuário pressiona uma tecla;
- um campo recebe ou perde o foco;
- um formulário é enviado;
- a página termina de carregar;
- uma imagem termina de carregar;
- ocorre um erro;
- uma janela é redimensionada.

Esses acontecimentos são chamados de **eventos** (*events*).

Um evento pode ser entendido como um sinal produzido pelo navegador informando que alguma coisa aconteceu e permitindo que o programa execute uma ação em resposta.

Por exemplo:

```html
<button id="botao">Clique aqui</button>
```

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    alert("O botão foi clicado!");
});
```

Nesse exemplo:

1. o navegador detecta um clique;
2. o elemento `button` produz um evento `click`;
3. o código está "escutando" esse evento;
4. a função é executada quando o evento ocorre.

> **Ideia central:** o evento é o acontecimento; o *event handler* é o código executado em resposta a esse acontecimento.

---

## 3. Event handler e event listener

É útil distinguir alguns termos.

### Event handler

É a função responsável por tratar um evento.

```javascript
function mostrarMensagem() {
    alert("Olá!");
}
```

### Event listener

É o mecanismo que fica associado a um determinado tipo de evento e determina qual função deverá ser executada.

```javascript
botao.addEventListener("click", mostrarMensagem);
```

Podemos visualizar a relação da seguinte maneira:

```text
Usuário
   |
   | clica
   v
Evento "click"
   |
   v
Event listener
   |
   v
Event handler
   |
   v
mostrarMensagem()
```

Na prática, é comum que os termos *event handler* e *event listener* sejam utilizados de maneira menos rigorosa. Entretanto, essa distinção ajuda a compreender o funcionamento do código.

---

## 4. `addEventListener()`

A maneira mais comum e flexível de registrar eventos em JavaScript é utilizar `addEventListener()`.

Sua estrutura básica é:

```javascript
elemento.addEventListener("tipo-do-evento", funcao);
```

Por exemplo:

```javascript
const botao = document.querySelector("#botao");

function dizerOla() {
    alert("Olá!");
}

botao.addEventListener("click", dizerOla);
```

Também podemos utilizar uma função anônima:

```javascript
botao.addEventListener("click", function () {
    alert("Olá!");
});
```

Ou uma arrow function:

```javascript
botao.addEventListener("click", () => {
    alert("Olá!");
});
```

### 4.1 Não chame a função ao registrá-la

Observe a diferença:

```javascript
// Correto
botao.addEventListener("click", dizerOla);
```

versus:

```javascript
// Incorreto para esse propósito
botao.addEventListener("click", dizerOla());
```

No primeiro caso, passamos a função para que o navegador a execute quando o evento ocorrer.

No segundo, `dizerOla()` é executada imediatamente, e o seu retorno é passado para `addEventListener()`.

A mesma ideia vale para funções anônimas:

```javascript
botao.addEventListener("click", () => {
    alert("Executado somente quando houver clique.");
});
```

---

## 5. Tipos comuns de eventos

Existem muitos tipos de eventos. Eles podem ser agrupados de acordo com o tipo de interação ou acontecimento.

### 5.1 Eventos de mouse

Alguns eventos comuns são:

| Evento | Quando ocorre |
|---|---|
| `click` | ocorre quando o elemento é clicado |
| `dblclick` | ocorre quando o elemento recebe um clique duplo |
| `mousedown` | botão do mouse é pressionado |
| `mouseup` | botão do mouse é liberado |
| `mousemove` | ponteiro é movimentado |
| `mouseover` | ponteiro entra em um elemento |
| `mouseout` | ponteiro sai de um elemento |

Exemplo:

```javascript
const caixa = document.querySelector("#caixa");

caixa.addEventListener("mouseover", () => {
    caixa.textContent = "O mouse está sobre mim!";
});

caixa.addEventListener("mouseout", () => {
    caixa.textContent = "O mouse saiu!";
});
```

> Para aplicações que precisam lidar de maneira unificada com mouse, toque e caneta, também existem os **Pointer Events**, como `pointerdown`, `pointerup` e `pointermove`.

---

### 5.2 Eventos de teclado

Os principais eventos de teclado são:

| Evento | Quando ocorre |
|---|---|
| `keydown` | uma tecla é pressionada |
| `keyup` | uma tecla é liberada |

Exemplo:

```javascript
const campo = document.querySelector("#campo");

campo.addEventListener("keydown", () => {
    console.log("Uma tecla foi pressionada.");
});
```

Podemos descobrir qual tecla foi pressionada utilizando o objeto de evento:

```javascript
campo.addEventListener("keydown", (event) => {
    console.log(event.key);
});
```

Se o usuário pressionar `A`, por exemplo:

```text
a
```

Se pressionar Enter:

```text
Enter
```

---

### 5.3 Eventos de foco

São especialmente importantes em formulários.

| Evento | Quando ocorre |
|---|---|
| `focus` | elemento recebe foco |
| `blur` | elemento perde foco |

Exemplo:

```javascript
const campo = document.querySelector("#campo");

campo.addEventListener("focus", () => {
    console.log("Campo recebeu foco.");
});

campo.addEventListener("blur", () => {
    console.log("Campo perdeu foco.");
});
```

Esses eventos podem ser utilizados, por exemplo, para apresentar instruções ao usuário enquanto ele preenche um formulário.

---

### 5.4 Eventos de formulário

Alguns eventos importantes:

| Evento | Quando ocorre |
|---|---|
| `submit` | formulário é enviado |
| `input` | valor de um campo é alterado |
| `change` | valor de um controle é alterado e a alteração é confirmada |
| `reset` | formulário é redefinido |

Exemplo:

```javascript
const campo = document.querySelector("#nome");

campo.addEventListener("input", () => {
    console.log("Valor atual:", campo.value);
});
```

O evento `input` é particularmente útil quando precisamos reagir enquanto o usuário está digitando.

---

### 5.5 Eventos relacionados ao documento e à janela

Também existem eventos associados ao carregamento e à janela do navegador.

Exemplos:

| Evento | Quando ocorre |
|---|---|
| `DOMContentLoaded` | o HTML foi carregado e analisado |
| `load` | os recursos da página foram carregados |
| `resize` | o tamanho da janela mudou |
| `scroll` | o documento foi rolado |

Exemplo:

```javascript
window.addEventListener("resize", () => {
    console.log("A janela foi redimensionada.");
});
```

Para executar código quando o HTML já tiver sido analisado:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM pronto!");
});
```

---

## 6. `event handler properties`

Existe outra maneira de registrar eventos: utilizar propriedades especiais dos elementos.

Essas propriedades normalmente possuem o formato:

```text
on + nome do evento
```

Por exemplo:

```javascript
onclick
onmouseover
onkeydown
onfocus
onsubmit
```

Exemplo:

```javascript
const botao = document.querySelector("#botao");

botao.onclick = () => {
    alert("Botão clicado!");
};
```

Também podemos utilizar uma função previamente definida:

```javascript
function mostrarMensagem() {
    alert("Botão clicado!");
}

botao.onclick = mostrarMensagem;
```

---

### 6.1 `addEventListener()` versus `onclick`

Considere:

```javascript
botao.onclick = funcaoA;
botao.onclick = funcaoB;
```

Nesse caso, `funcaoB` substitui `funcaoA`.

Já com:

```javascript
botao.addEventListener("click", funcaoA);
botao.addEventListener("click", funcaoB);
```

as duas funções serão executadas quando ocorrer o clique.

Portanto, `addEventListener()` é normalmente preferível, especialmente em aplicações maiores.

---

### 6.2 E os atributos HTML `onclick`?

Também é possível encontrar códigos como:

```html
<button onclick="mostrarMensagem()">
    Clique
</button>
```

Esse mecanismo é chamado de **inline event handler**.

Embora seja importante reconhecer essa forma em códigos existentes, ela geralmente não é recomendada para aplicações modernas.

É preferível separar HTML e JavaScript:

```html
<button id="botao">
    Clique
</button>
```

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", mostrarMensagem);
```

Isso facilita:

- manutenção;
- organização;
- reutilização;
- leitura do código;
- separação entre estrutura e comportamento.

---

## 7. O objeto de evento (`event`)

Quando um evento ocorre, o navegador fornece informações sobre ele.

Essas informações são disponibilizadas por meio do **objeto de evento**.

Por exemplo:

```javascript
botao.addEventListener("click", (event) => {
    console.log(event);
});
```

O parâmetro pode receber qualquer nome:

```javascript
(event) => {}
```

```javascript
(e) => {}
```

```javascript
(evt) => {}
```

`event` e `e` são nomes muito comuns.

---

### 7.1 `event.target`

Uma propriedade particularmente importante é:

```javascript
event.target
```

Ela representa o elemento que originou o evento.

Exemplo:

```html
<button id="botao">Clique</button>
```

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", (event) => {
    console.log(event.target);
});
```

Nesse caso, `event.target` referencia o próprio botão.

Isso permite modificar diretamente o elemento que recebeu o evento:

```javascript
botao.addEventListener("click", (event) => {
    event.target.textContent = "Clicado!";
});
```

---

### 7.2 `event.key`

Eventos de teclado fornecem informações específicas sobre a tecla pressionada.

```javascript
const campo = document.querySelector("#campo");

campo.addEventListener("keydown", (event) => {
    console.log("Tecla:", event.key);
});
```

Podemos usar essa informação para implementar comportamentos específicos:

```javascript
campo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Usuário pressionou Enter.");
    }
});
```

---

### 7.3 `event.type`

Outra propriedade útil é `type`:

```javascript
botao.addEventListener("click", (event) => {
    console.log(event.type);
});
```

O resultado será:

```text
click
```

Assim, podemos descobrir qual tipo de evento está sendo tratado.

---

### 7.4 Outras informações do evento

Dependendo do tipo de evento, o objeto pode fornecer outras propriedades.

Por exemplo:

```javascript
botao.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.type);
});
```

Eventos de mouse podem fornecer informações relacionadas à posição do ponteiro, enquanto eventos de teclado possuem propriedades específicas de teclado.

> **Importante:** nem todo evento possui exatamente as mesmas propriedades. Alguns eventos possuem informações especializadas de acordo com sua finalidade.

---

## 8. Propagação de eventos (*event bubbling*)

Até agora, consideramos principalmente eventos acontecendo diretamente sobre um elemento. Porém, os elementos HTML estão organizados em uma **árvore DOM**.

Por exemplo:

```html
<div id="caixa">
    <button id="botao">Clique</button>
</div>
```

Podemos representar essa estrutura como:

```text
document
   |
   +-- div#caixa
          |
          +-- button#botao
```

Quando o botão é clicado, o evento não fica necessariamente restrito ao botão.

Os eventos podem **propagar-se pela árvore DOM**.

Esse processo é chamado de **event propagation**.

---

### 8.1 As fases da propagação

Quando um evento ocorre em um elemento, o navegador determina o caminho entre o `document` e o elemento que originou o evento, passando pelos seus elementos ancestrais.

A propagação pode ser dividida conceitualmente em **três fases**:

1. **capturing phase (fase de captura)**;
2. **target phase (fase do alvo)**;
3. **bubbling phase (fase de borbulhamento)**.

Considere a seguinte estrutura:

```html
<div id="externo">
    <div id="interno">
        <button id="botao">Clique</button>
    </div>
</div>
```

Podemos representá-la como:

```text
document
   |
   v
div#externo
   |
   v
div#interno
   |
   v
button#botao  ← elemento que originou o evento
```

Suponha que o usuário clique no botão.

#### 8.1.1 Fase de captura

Primeiro, o evento percorre a árvore **de cima para baixo**, partindo dos ancestrais mais externos até chegar ao elemento que originou o evento.

```text
document
   |
   | captura
   v
div#externo
   |
   | captura
   v
div#interno
   |
   | captura
   v
button#botao
```

Essa é a **capturing phase**.

Por padrão, os listeners registrados com `addEventListener()` não são executados nessa fase. Para registrar um listener especificamente para a captura, podemos utilizar a opção `capture`:

```javascript
externo.addEventListener("click", () => {
    console.log("externo");
}, { capture: true });
```

Também é possível utilizar:

```javascript
externo.addEventListener("click", handler, true);
```

embora a forma com `{ capture: true }` seja mais explícita.

---

#### 8.1.2 Fase do alvo

Quando o evento chega ao elemento que efetivamente originou o evento, temos a **target phase**.

No nosso exemplo:

```text
document
   |
   v
div#externo
   |
   v
div#interno
   |
   v
button#botao  ← target
```

Nesse momento, os listeners associados ao próprio elemento-alvo podem ser executados.

Por exemplo:

```javascript
botao.addEventListener("click", () => {
    console.log("Botão clicado.");
});
```

---

#### 8.1.3 Fase de bubbling

Depois de atingir o elemento-alvo, para eventos que permitem *bubbling*, o evento percorre novamente a hierarquia, agora **de baixo para cima**, passando pelos ancestrais.

```text
button#botao
   |
   | bubbling
   v
div#interno
   |
   | bubbling
   v
div#externo
   |
   | bubbling
   v
document
```

Essa é a **bubbling phase**.

É justamente esse comportamento que permite, por exemplo, que um listener registrado no `div` responda a um clique que ocorreu em um `button` dentro dele.

---

#### 8.1.4 Visão completa

Podemos representar todo o percurso da seguinte maneira:

```text
                 CAPTURA
                    ↓
document ───────────┐
                    ↓
div#externo ────────┐
                    ↓
div#interno ────────┐
                    ↓
button#botao ←──── TARGET
                    ↓
div#interno ────────┘
                    ↓
div#externo ────────┘
                    ↓
document ───────────┘
                 BUBBLING
```

É importante perceber que **captura e bubbling são partes de uma única propagação do evento**.

---

#### 8.1.5 Quais listeners são executados em cada fase?

Por padrão:

```javascript
elemento.addEventListener("click", handler);
```

registra o listener para a fase de **bubbling**.

Para registrar um listener na fase de captura:

```javascript
elemento.addEventListener("click", handler, {
    capture: true
});
```

Considere:

```javascript
externo.addEventListener("click", () => {
    console.log("externo - captura");
}, { capture: true });

interno.addEventListener("click", () => {
    console.log("interno - captura");
}, { capture: true });

botao.addEventListener("click", () => {
    console.log("botão");
});

interno.addEventListener("click", () => {
    console.log("interno - bubbling");
});

externo.addEventListener("click", () => {
    console.log("externo - bubbling");
});
```

Ao clicar no botão, uma forma simplificada de visualizar a ordem é:

```text
externo - captura
interno - captura
botão
interno - bubbling
externo - bubbling
```

Portanto:

```text
CAPTURA
   ↓
externo
   ↓
interno
   ↓
TARGET
   ↓
botão
   ↓
BUBBLING
   ↓
interno
   ↓
externo
```

> **Observação:** a ordem exata de execução de listeners no elemento-alvo possui algumas particularidades da especificação, portanto o exemplo acima deve ser entendido como uma representação didática do percurso.

---

#### 8.1.6 Nem todo evento faz bubbling

Um ponto importante é que **nem todos os eventos participam da fase de bubbling**.

Portanto, não devemos assumir que:

```text
evento em filho
    ↓
sempre chega ao pai
```

Isso depende do tipo de evento.

Quando a delegação de eventos é utilizada, devemos escolher eventos cujo comportamento de propagação seja compatível com a estratégia adotada.

---

### 8.2 Propagação e delegação

A fase de bubbling é particularmente importante porque permite a **delegação de eventos**.

Por exemplo:

```html
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Em vez de registrar um listener em cada `<li>`, podemos registrar apenas um no `<ul>`:

```javascript
const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log("Item clicado:", event.target.textContent);
    }
});
```

Quando o usuário clica em um `<li>`:

```text
click
  ↓
<li>
  ↓
bubbling
  ↓
<ul>
  ↓
listener do <ul>
```

A delegação, portanto, **aproveita a propagação do evento**, especialmente o bubbling, para permitir que um elemento ancestral trate eventos originados em seus descendentes.

---

### 8.3 `event.target` e `event.currentTarget`

A propagação torna especialmente importante distinguir duas propriedades.

- `event.target`: É o elemento que **originou o evento**.
- `event.currentTarget`: É o elemento cujo **listener está sendo executado naquele momento**.

Considere:

```html
<div id="caixa">
    <button id="botao">Clique</button>
</div>
```

```javascript
const caixa = document.querySelector("#caixa");

caixa.addEventListener("click", (event) => {
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});
```

Se clicarmos no botão:

```text
target:        <button>
currentTarget: <div>
```

Isso acontece porque:

- o `button` originou o evento;
- o listener que está sendo executado pertence ao `div`.

Essa diferença é fundamental para a delegação de eventos.

---

### 8.4 Interrompendo a propagação

Em determinadas situações, podemos querer impedir que o evento continue sendo propagado.

Para isso, podemos utilizar:

```javascript
event.stopPropagation();
```

Exemplo:

```javascript
const caixa = document.querySelector("#caixa");
const botao = document.querySelector("#botao");

caixa.addEventListener("click", () => {
    console.log("DIV");
});

botao.addEventListener("click", (event) => {
    console.log("BUTTON");

    event.stopPropagation();
});
```

Ao clicar no botão:

```text
BUTTON
```

O listener do `div` não será executado porque a propagação foi interrompida.

> `stopPropagation()` e `preventDefault()` têm finalidades diferentes.

| Método | Finalidade |
|---|---|
| `preventDefault()` | impede o comportamento padrão do navegador |
| `stopPropagation()` | impede a propagação do evento |

Por exemplo:

```javascript
event.preventDefault();
```

pode impedir um formulário de ser enviado.

Já:

```javascript
event.stopPropagation();
```

pode impedir que o evento continue subindo para elementos ancestrais.

---

### 8.5 Delegação de eventos

Imagine uma lista com muitos elementos:

```html
<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

Uma possibilidade seria registrar um listener individual em cada `<li>`:

```javascript
const itens = document.querySelectorAll("#lista li");

itens.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("Item clicado:", item.textContent);
    });
});
```

Isso funciona.

Porém, considere uma lista que possa possuir centenas de elementos ou receber novos elementos dinamicamente.

Nesse caso, podemos utilizar **delegação de eventos**.

---

#### 8.5.1 Como funciona a delegação?

A delegação aproveita a propagação de eventos.

Em vez de registrar um listener em cada item:

```text
li  ← listener
li  ← listener
li  ← listener
li  ← listener
li  ← listener
```

registramos um único listener no elemento pai:

```text
ul  ← listener
 |
 +-- li
 +-- li
 +-- li
 +-- li
 +-- li
```

Como o evento faz *bubbling*, um clique em um `<li>` chegará ao `<ul>`.

Exemplo:

```javascript
const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {
    console.log("Elemento clicado:", event.target);
});
```

Se clicarmos em um `<li>`, `event.target` será o `<li>`.

---

#### 8.5.2 Delegação com `matches()`

Podemos verificar se o elemento que originou o evento corresponde a determinado seletor.

```javascript
const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log("Item clicado:", event.target.textContent);
    }
});
```

O método:

```javascript
elemento.matches(seletor)
```

retorna `true` quando o elemento corresponde ao seletor CSS informado.

Assim:

```javascript
event.target.matches("li")
```

verifica se o elemento que originou o evento é um `<li>`.

---

#### 8.5.3 Delegação com elementos internos

Existe uma situação que exige um pouco mais de cuidado.

Considere:

```html
<ul id="lista">
    <li>
        <button class="remover">Remover</button>
    </li>
</ul>
```

Se o usuário clicar diretamente no botão:

```javascript
event.target
```

será o `<button>`, e não o `<li>`.

Podemos usar `closest()`:

```javascript
const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {
    const botao = event.target.closest(".remover");

    if (botao) {
        console.log("Botão de remoção clicado.");
    }
});
```

`closest()` procura o elemento mais próximo que corresponde ao seletor informado, começando pelo próprio elemento.

---

#### 8.5.4 Delegação e elementos criados dinamicamente

Uma das grandes vantagens da delegação é que ela funciona também para elementos adicionados posteriormente.

Considere:

```html
<ul id="lista"></ul>

<button id="adicionar">
    Adicionar item
</button>
```

Podemos registrar apenas um listener:

```javascript
const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        event.target.classList.toggle("selecionado");
    }
});
```

Depois podemos adicionar elementos:

```javascript
const botao = document.querySelector("#adicionar");

botao.addEventListener("click", () => {
    const item = document.createElement("li");

    item.textContent = "Novo item";

    lista.appendChild(item);
});
```

Os novos `<li>` já poderão ser clicados.

Não precisamos registrar um novo listener para cada elemento criado.

Isso acontece porque o listener está associado ao `<ul>`, que já existia:

```text
UL
 |
 +-- LI
 +-- LI
 +-- LI
 +-- LI criado posteriormente
        |
        +-- clique
             |
             v
          UL listener
```

---

#### 8.5.5 Quando utilizar delegação?

A delegação é particularmente interessante quando:

- existem muitos elementos semelhantes;
- elementos são criados dinamicamente;
- elementos são removidos dinamicamente;
- queremos reduzir a quantidade de listeners;
- os elementos compartilham um comportamento.

Por exemplo, uma lista de tarefas pode utilizar delegação:

```javascript
lista.addEventListener("click", (event) => {
    if (event.target.matches(".tarefa")) {
        event.target.classList.toggle("concluida");
    }
});
```

Em vez de:

```javascript
document.querySelectorAll(".tarefa").forEach((tarefa) => {
    tarefa.addEventListener("click", ...);
});
```

---

## 9. `preventDefault()`: prevenção do comportamento padrão

Alguns elementos possuem um comportamento padrão definido pelo navegador.

Por exemplo, quando o usuário envia um formulário:

```html
<form>
    ...
    <button type="submit">Enviar</button>
</form>
```

o navegador normalmente tenta realizar o envio do formulário.

Da mesma forma, um link:

```html
<a href="https://example.com">Acessar</a>
```

normalmente navega para o endereço indicado em `href`.

Em algumas situações, queremos interceptar esse comportamento.

Para isso, podemos utilizar:

```javascript
event.preventDefault();
```

---

### 9.1 Impedindo o envio de um formulário

Considere:

```html
<form id="formulario">
    <input id="nome" type="text">
    <button type="submit">Enviar</button>
</form>

<p id="mensagem"></p>
```

Podemos verificar os dados antes de permitir o envio:

```javascript
const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", (event) => {
    if (nome.value.trim() === "") {
        event.preventDefault();
        mensagem.textContent = "Informe seu nome.";
    }
});
```

O fluxo é:

```text
Usuário envia o formulário
          |
          v
     evento submit
          |
          v
   executa o handler
          |
          v
   nome está vazio?
       /       \
     sim       não
      |          |
      v          v
preventDefault  envio normal
```

`preventDefault()` **não remove o evento** e também não impede que o handler continue executando. Ele impede o **comportamento padrão associado ao evento**.

---

### 9.2 Impedindo a navegação de um link

Considere:

```html
<a id="link" href="https://example.com">
    Acessar site
</a>
```

Podemos interceptar o clique:

```javascript
const link = document.querySelector("#link");

link.addEventListener("click", (event) => {
    event.preventDefault();

    alert("A navegação foi impedida.");
});
```

O link continua recebendo o evento `click`, mas a ação padrão de navegar para `href` não acontece.

---

### 9.3 Três conceitos que não devem ser confundidos

É importante distinguir:

```javascript
event.preventDefault();
```

```javascript
event.stopPropagation();
```

e:

```javascript
event.stopImmediatePropagation();
```

Eles possuem finalidades diferentes.

| Método | Efeito |
|---|---|
| `preventDefault()` | impede o comportamento padrão |
| `stopPropagation()` | impede a propagação para outros elementos |
| `stopImmediatePropagation()` | impede a propagação e também impede a execução de outros listeners restantes para o mesmo evento naquele elemento |

Exemplo conceitual:

```text
preventDefault()
     |
     +--> "Não execute a ação padrão."

stopPropagation()
     |
     +--> "Não continue propagando o evento."

stopImmediatePropagation()
     |
     +--> "Pare a propagação e não execute
          os próximos listeners deste evento
          neste elemento."
```

Na maioria das situações, `preventDefault()` e `stopPropagation()` são suficientes.

---

## 10. Eventos + manipulação básica do DOM

Eventos tornam a manipulação do DOM **interativa**.

Sem eventos, podemos alterar o DOM quando o script é executado:

```javascript
const titulo = document.querySelector("h1");

titulo.textContent = "Novo título";
```

Com eventos, podemos alterar o DOM em resposta às ações do usuário.

---

### 10.1 Alterando texto após um clique

HTML:

```html
<h1 id="titulo">Título original</h1>
<button id="botao">Alterar título</button>
```

JavaScript:

```javascript
const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    titulo.textContent = "Título alterado!";
});
```

Aqui combinamos três conceitos:

1. seleção de elementos;
2. evento;
3. alteração do conteúdo do DOM.

---

### 10.2 Alterando estilos

Podemos também alterar estilos por meio da propriedade `style`.

HTML:

```html
<p id="mensagem">Mensagem importante</p>
<button id="botao">Destacar</button>
```

JavaScript:

```javascript
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    mensagem.style.fontWeight = "bold";
    mensagem.style.fontSize = "24px";
});
```

O evento dispara a alteração visual.

---

### 10.3 Alterando classes

Em aplicações reais, muitas vezes é melhor controlar a aparência por meio de classes CSS.

HTML:

```html
<p id="mensagem">Mensagem</p>
<button id="botao">Destacar</button>
```

CSS:

```css
.destacado {
    color: red;
    font-weight: bold;
}
```

JavaScript:

```javascript
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    mensagem.classList.add("destacado");
});
```

Também podemos alternar a classe:

```javascript
botao.addEventListener("click", () => {
    mensagem.classList.toggle("destacado");
});
```

Nesse caso:

- se a classe não existir, ela será adicionada;
- se já existir, será removida.

---

### 10.4 Criando elementos em resposta a eventos

A manipulação do DOM também permite criar novos elementos.

HTML:

```html
<button id="adicionar">Adicionar item</button>
<ul id="lista"></ul>
```

JavaScript:

```javascript
const botao = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

botao.addEventListener("click", () => {
    const item = document.createElement("li");

    item.textContent = "Novo item";

    lista.appendChild(item);
});
```

Cada clique cria um novo `<li>` e o adiciona à lista.

---

### 10.5 Removendo elementos

Também podemos remover elementos do DOM.

HTML:

```html
<p id="mensagem">
    Clique no botão para remover esta mensagem.
</p>

<button id="remover">Remover</button>
```

JavaScript:

```javascript
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#remover");

botao.addEventListener("click", () => {
    mensagem.remove();
});
```

Após o clique, o elemento é retirado do documento.

---

### 10.6 Exemplo integrado: contador

Vamos combinar eventos e manipulação do DOM em um exemplo simples.

HTML:

```html
<h1 id="contador">0</h1>

<button id="diminuir">-</button>
<button id="aumentar">+</button>
<button id="zerar">Zerar</button>
```

JavaScript:

```javascript
const contador = document.querySelector("#contador");
const diminuir = document.querySelector("#diminuir");
const aumentar = document.querySelector("#aumentar");
const zerar = document.querySelector("#zerar");

let valor = 0;

aumentar.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

diminuir.addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
});

zerar.addEventListener("click", () => {
    valor = 0;
    contador.textContent = valor;
});
```

Observe a divisão de responsabilidades:

| Evento | Ação |
|---|---|
| `click` em `+` | aumenta o contador |
| `click` em `-` | diminui o contador |
| `click` em `Zerar` | atribui `0` ao contador |

O DOM funciona como a interface que apresenta o estado atual.

---

### 10.7 Exemplo integrado: campo de texto e evento de teclado

Podemos utilizar eventos para atualizar o DOM enquanto o usuário digita.

HTML:

```html
<label for="nome">Nome:</label>
<input id="nome" type="text">

<p id="saida"></p>
```

JavaScript:

```javascript
const nome = document.querySelector("#nome");
const saida = document.querySelector("#saida");

nome.addEventListener("input", (event) => {
    saida.textContent = `Olá, ${event.target.value}!`;
});
```

Se o usuário digitar:

```text
Maria
```

o parágrafo será atualizado para:

```text
Olá, Maria!
```

Observe novamente o papel do objeto de evento:

```javascript
event.target.value
```

- `event` → objeto que representa o evento;
- `target` → elemento que originou o evento;
- `value` → conteúdo atual do campo.

---

### 10.8 Exemplo integrado: formulário com validação

Agora podemos combinar seleção do DOM, eventos, objeto de evento, alteração do DOM e `preventDefault()`.

HTML:

```html
<form id="formulario">
    <label for="email">E-mail:</label>
    <input id="email" type="email">

    <button type="submit">Cadastrar</button>
</form>

<p id="mensagem"></p>
```

JavaScript:

```javascript
const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", (event) => {
    if (email.value.trim() === "") {
        event.preventDefault();

        mensagem.textContent = "Informe um endereço de e-mail.";
        mensagem.classList.add("erro");
    } else {
        mensagem.textContent = "Dados prontos para envio.";
    }
});
```

Esse padrão aparece frequentemente em aplicações web:

```text
Evento
  |
  v
Validação
  |
  +---- inválido ----> preventDefault()
  |                         |
  |                         v
  |                  mensagem no DOM
  |
  +---- válido ------> comportamento normal
```

---

### 10.9 Exemplo integrado: lista de tarefas com delegação

Agora podemos combinar vários conceitos da aula.

HTML:

```html
<form id="formulario">
    <input
        id="tarefa"
        type="text"
        placeholder="Digite uma tarefa"
    >

    <button type="submit">
        Adicionar
    </button>
</form>

<p id="mensagem"></p>

<ul id="lista"></ul>
```

CSS:

```css
.concluida {
    text-decoration: line-through;
}
```

JavaScript:

```javascript
const formulario = document.querySelector("#formulario");
const tarefa = document.querySelector("#tarefa");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = tarefa.value.trim();

    if (texto === "") {
        mensagem.textContent = "Digite uma tarefa.";
        return;
    }

    const item = document.createElement("li");

    item.textContent = texto;

    lista.appendChild(item);

    tarefa.value = "";
    mensagem.textContent = "";
});

lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        event.target.classList.toggle("concluida");
    }
});
```

Observe que não adicionamos um listener individual a cada `<li>`.

Temos apenas:

```javascript
lista.addEventListener("click", ...);
```

Quando um `<li>` é clicado:

```text
click no <li>
      |
      v
event.target = <li>
      |
      | bubbling
      v
listener do <ul>
      |
      v
matches("li")
      |
      v
classList.toggle()
```

Isso é **delegação de eventos**.

Além disso, novos elementos adicionados posteriormente também funcionam automaticamente.

---

### 10.10 Exemplo integrado: delegação com botões

Considere uma lista de produtos:

```html
<ul id="produtos">
    <li>
        Produto A
        <button class="remover">Remover</button>
    </li>

    <li>
        Produto B
        <button class="remover">Remover</button>
    </li>
</ul>
```

Podemos utilizar um único listener:

```javascript
const produtos = document.querySelector("#produtos");

produtos.addEventListener("click", (event) => {
    const botao = event.target.closest(".remover");

    if (!botao) {
        return;
    }

    const produto = botao.closest("li");

    produto.remove();
});
```

O fluxo é:

```text
Clique no botão "Remover"
          |
          v
event.target
          |
          v
closest(".remover")
          |
          v
botão encontrado
          |
          v
closest("li")
          |
          v
produto encontrado
          |
          v
produto.remove()
```

Essa abordagem é muito útil em interfaces em que elementos são adicionados e removidos dinamicamente.

---

## 11. Um pequeno projeto para consolidar

Crie uma página contendo uma interface semelhante a:

```text
+----------------------------------+
|        Lista de tarefas          |
|                                  |
| [________________] [Adicionar]   |
|                                  |
| □ Estudar JavaScript             |
| □ Praticar DOM                   |
|                                  |
| Total: 2                         |
+----------------------------------+
```

O programa deverá:

1. possuir um campo de texto;
2. possuir um botão `Adicionar`;
3. adicionar uma nova tarefa à lista quando o botão for pressionado;
4. limpar o campo após a inclusão;
5. permitir marcar uma tarefa como concluída;
6. atualizar a aparência da tarefa concluída;
7. atualizar a quantidade de tarefas;
8. impedir a inclusão de uma tarefa vazia;
9. apresentar uma mensagem de erro quando necessário;
10. permitir remover tarefas;
11. utilizar **delegação de eventos** para tratar as interações com as tarefas.

### Eventos que podem ser utilizados

Uma possível solução pode envolver:

```javascript
click
```

para as interações com a lista,

```javascript
submit
```

para o formulário,

```javascript
input
```

para acompanhar o conteúdo do campo,

e outros eventos conforme a solução adotada.

### Operações do DOM que podem ser utilizadas

```javascript
querySelector()
querySelectorAll()
createElement()
textContent
classList.add()
classList.remove()
classList.toggle()
appendChild()
remove()
matches()
closest()
```

O objetivo não é apenas fazer a interface funcionar, mas identificar claramente:

> **Qual evento ocorreu? Qual elemento o originou? Qual listener está tratando o evento? O evento está sendo propagado? Qual parte do DOM precisa ser modificada?**

---

## 12. Resumo

Os principais conceitos desta aula são:

### Eventos

São acontecimentos detectados pelo navegador aos quais o programa pode reagir.

### `addEventListener()`

É uma forma flexível de registrar listeners:

```javascript
elemento.addEventListener("click", funcao);
```

### *Event handler properties*

São propriedades como:

```javascript
elemento.onclick = funcao;
```

São úteis e aparecem em códigos existentes, mas possuem limitações em comparação com `addEventListener()`.

### Objeto de evento

É fornecido ao handler:

```javascript
elemento.addEventListener("click", (event) => {
    console.log(event);
});
```

Entre suas propriedades, destacam-se:

```javascript
event.target
event.currentTarget
event.type
event.key
```

dependendo do tipo de evento.

### Propagação de eventos

Um evento pode percorrer a árvore DOM durante as fases de captura, alvo e *bubbling*.

```text
captura
   ↓
target
   ↓
bubbling
```

### `event.target` × `event.currentTarget`

```text
event.target
    ↓
elemento que originou o evento

event.currentTarget
    ↓
elemento cujo listener está sendo executado
```

### `stopPropagation()`

Interrompe a propagação do evento:

```javascript
event.stopPropagation();
```

### Delegação de eventos

Consiste em registrar um listener em um elemento ancestral e utilizar a propagação para tratar eventos originados por seus descendentes.

```javascript
lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        // ...
    }
});
```

É especialmente útil para elementos criados dinamicamente.

### `preventDefault()`

Impede o comportamento padrão associado a determinados eventos:

```javascript
event.preventDefault();
```

É especialmente útil para interceptar o envio de formulários e a navegação de links.

### Eventos + DOM

A combinação desses conceitos permite construir interfaces interativas:

```text
Ação do usuário
      ↓
    Evento
      ↓
Propagação
      ↓
Event listener
      ↓
Event handler
      ↓
Manipulação do DOM
      ↓
Interface atualizada
```

---

## Referências

- [MDN Web Docs — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [MDN Web Docs — Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN Web Docs — DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)
- [MDN Web Docs — EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs — Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Web Docs — Event bubbling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [MDN Web Docs — `stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [MDN Web Docs — `preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)