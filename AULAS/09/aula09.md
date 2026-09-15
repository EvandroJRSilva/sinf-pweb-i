<link rel="stylesheet" href="aula09.css">

# Aula 09

**Sumário**

- [Aula 09](#aula-09)
  - [1 INTRODUÇÃO](#1-introdução)
    - [1.1 O que é um *script*?](#11-o-que-é-um-script)
    - [1.2 O que é JavaScript?](#12-o-que-é-javascript)
      - [1.2.1 Especificação oficial](#121-especificação-oficial)
    - [1.3 Embutindo código JavaScript no HTML](#13-embutindo-código-javascript-no-html)
  - [2 SINTAXE](#2-sintaxe)
    - [2.1 `var` vs. `let` vs. `const`](#21-var-vs-let-vs-const)
      - [2.1.1 Exemplo de escopo](#211-exemplo-de-escopo)
      - [2.1.2 Exemplo de reatribuição](#212-exemplo-de-reatribuição)
      - [2.1.3 Exemplo de redeclaração](#213-exemplo-de-redeclaração)
      - [2.1.4 Exemplo de *hoisting*](#214-exemplo-de-hoisting)
    - [2.2 Tipos de dados](#22-tipos-de-dados)
      - [2.2.1 Number](#221-number)
      - [2.2.2 Null](#222-null)
      - [2.2.3 Undefined](#223-undefined)
      - [2.2.4 Symbol](#224-symbol)
    - [2.3 Interação básica](#23-interação-básica)
    - [2.4 Conversões de tipo](#24-conversões-de-tipo)
      - [2.4.1 Conversão para String](#241-conversão-para-string)
      - [2.4.2 Conversão numérica](#242-conversão-numérica)
      - [2.4.3 Conversão booleana](#243-conversão-booleana)
    - [2.5 Operadores](#25-operadores)
      - [2.5.1 Igualdade estrita](#251-igualdade-estrita)
      - [2.5.2 Operador de coalescência nulo `??`](#252-operador-de-coalescência-nulo-)
  - [3 EXERCÍCIOS](#3-exercícios)
    - [3.1 Fácil](#31-fácil)
      - [1](#1)
      - [2](#2)
      - [3](#3)
      - [4](#4)
      - [5](#5)
      - [6](#6)
      - [7](#7)
      - [8](#8)
      - [9](#9)
      - [10](#10)
      - [11](#11)
      - [12](#12)
      - [13](#13)
      - [14](#14)
      - [15](#15)
    - [3.2 Médio](#32-médio)
      - [16](#16)
      - [17](#17)
      - [18](#18)
      - [19](#19)
      - [20](#20)
      - [21](#21)
      - [22](#22)
      - [23](#23)
      - [24](#24)
      - [25](#25)
    - [3.3 Difícil](#33-difícil)
      - [26](#26)
      - [27](#27)
      - [28](#28)
      - [29](#29)
      - [30](#30)


## 1 INTRODUÇÃO

### 1.1 O que é um *script*?

Um `script` é uma lista de comandos executáveis como uma `macro` ou um conjunto de arquivos criados por uma linguagem de script. `Scripts` (como `PHP`, `Perl`) que são executados em um `servidor web` são chamados de scripts `server-side`, e scripts (como o `JavaScript`[^1]) que são executados no computador de um usuário, interpretados pelo navegador, são chamados de scripts `client-side`.

[^1]: [Uma breve história do JavaScript](https://www.youtube.com/watch?v=aX3ZABCdC38&t=21s).

### 1.2 O que é JavaScript?

`JavaScript` é uma linguagem de script orientada a objeto e multiplataforma desenvolvida pela `Netscape`. O JavaScript foi criado pelo programador da Netscape **Brendan Eich**.

Foi lançado primeiramente sob o nome `LiveScript`, como parte do `Netscape Navigator 2.0` em Setembro de 1995, e depois renomeado como JavaScript em 4 de Dezembro de 1995. Foi desenvolvido para o uso em páginas web com forte integração com HTML.

O JavaScript pode criar aplicações que são executadas em navegadores como o Edge, Opera, FireFox, Google Chrome, etc. A Netscape submeteu o JavaScript ao ECMA International para padronização, o que resultou na versão padronizada chamada `ECMAScript`.

#### 1.2.1 Especificação oficial

A especificação mais recente do JavaScript é a seguinte: [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/).

Clicando no link você será levado à uma página onde poderá escolher visualizar as especificações em PDF ou HTML. Caso você tenha interesse em se aprofundar o máximo possível nessa linguagem, recomendo o máximo de leitura possível dessa documentação.

### 1.3 Embutindo código JavaScript no HTML

O `HTML` possui um elemento [`script`](https://html.spec.whatwg.org/#the-script-element) o qual é utilizado para englobar códigos script.

```html
<script>
    Código JavaScript ...    
</script>
```

Os dois principais atributos são:

- `src`: localização do arquivo `.js` a ser carregado e executado.
- `type`: o tipo de script.

O código `JavaScript` é embutido geralmente dentro da tag `head` e/ou da tag `body`. Quando o script está na tag `head`, sua execução se dará assim que a página for carregada. Por causa disso, alguns desenvolvedores colocam as tags `<script>` ao fim da tag `<body>`, pouco antes de seu fechamento (`</body>`).

Exemplos:

Script em `head`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>Script em head</title>
        <script type="text/javascript">
            Código ...
        </script>
    </head>
    <body>
    </body>
</html>
```

Script em `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
    </head>
    <body>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

Script em `head` e `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
        <script type="text/javascript">
            Código ...
        </script>
    </head>
    <body>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

Dois scripts em `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
    </head>
    <body>
        <script type="text/javascript" src="jsexemplo.js"></script>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

## 2 SINTAXE

Parte significativa da sintaxe da linguagem é semelhante ao que temos nas demais linguagens mais conhecidas, portanto, nosso foco se dará sobre o que o JavaScript tem de diferente.

### 2.1 `var` vs. `let` vs. `const`

Essas são 3 formas de se declarar uma "variável". Veja a seguir um comparativo

| **Característica** | `var` | `let` | `const` |
|---|---|---|---|
| Escopo |  função ou global | bloco ({}) | bloco ({}) |
| Reatribuível | sim | sim | não |
| Redeclarável | sim | não | não |
| *Hoisting* | inicializado como `undefined` | Não incializado | Não incializado |

#### 2.1.1 Exemplo de escopo

```javascript
var olares = "Olá mundo!";

if (true) {
    var olares = "Olá planeta!";
}

console.log(olares); // Saída: Olá planeta!
```

<div class="warning-card">
  <span class="warning-icon">⚠</span>
  <div class="warning-text">
    <strong>ATENÇÃO</strong>
    <p><code>console.log</code> não faz parte do ECMAScript, mas sim parte da <a href="https://developer.mozilla.org/en-US/docs/Web/API/console">Web API Console</a>.</p>
  </div>
</div>

```javascript
let olares = "Olá mundo!";

if (true) {
    let olares = "Olá planeta!";
    console.log(olares); // Saída: Olá planeta!
}

console.log(olares); // Saída: Olá mundo!
```

```javascript
const olares = "Olá mundo!";

if (true) {
    const olares = "Olá planeta!";
    console.log(olares); // Saída: Olá planeta!
}

console.log(olares); // Saída: Olá mundo!
```

#### 2.1.2 Exemplo de reatribuição

| **Característica** | `var` | `let` | `const` |
|---|---|---|---|
| Reatribuível | sim | sim | não |

```javascript
var olares = "Olá mundo!";
olares = "Olá planeta!";

console.log(olares); // Saída: Olá planeta!
```

```javascript
let olares = "Olá mundo!";
olares = "Olá planeta!";

console.log(olares); // Saída: Olá planeta!
```

```javascript
const olares = "Olá mundo!";
olares = "Olá planeta!"; // ERRO --> não pode ser reatribuído

console.log(olares);
```

> **ATENÇÃO**: se a variável `const` receber um objeto, ainda assim é possível modificar os atributos do objeto.

```javascript
const bejeto = {
    mensagem: "Olá mundo!",
    repita: 4
}

bejeto.mensagem = "Olá planeta!";
console.log(bejeto.mensagem); // Saída: Olá planeta!
```

#### 2.1.3 Exemplo de redeclaração

| **Característica** | `var` | `let` | `const` |
|---|---|---|---|
| Redeclarável | sim | não | não |

```javascript
var olares = "Olá mundo!";
var olares = "Olá planeta!";

console.log(olares); // Saída: Olá planeta!
```

```javascript
let olares = "Olá mundo!";
let olares = "Olá planeta!"; // ERRO --> não pode ser declarado novamente!

console.log(olares);
```

```javascript
const olares = "Olá mundo!";
const olares = "Olá planeta!"; // ERRO --> não pode ser declarado novamente!

console.log(olares);
```

#### 2.1.4 Exemplo de *hoisting*

| **Característica** | `var` | `let` | `const` |
|---|---|---|---|
| *Hoisting* | inicializado como `undefined` | Não incializado | Não incializado |

```javascript
console.log(olares); // Saída: undefined

var olares = "Olá mundo!";
```

```javascript
console.log(olares); // ERRO --> olares não foi declarado

let olares = "Olá mundo!";
```

```javascript
console.log(olares); // ERRO --> olares não foi declarado

const olares = "Olá mundo!";
```

### 2.2 Tipos de dados

Existem 8 tipos de dados básicos no JavaScript. Uma variável pode ser associada a qualquer tipo de dado. Ao mesmo tempo, o JavaScript permite que o tipo de dado de uma variável possa mudar no decorrer da execução do programa (`tipagem dinâmica`):

```javascript
let message = "hello";
message = 123456;
```

Os tipos de dados são: `Number`, `BigInt`, `String`, `Boolean`, `Null`, `Undefined`, `Objetct` e `Symbol`.

#### 2.2.1 [Number](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-number-type)

Representa os valores do tipo `inteiro` e `ponto flutuante` (*float*). Além dos valores normais existem alguns "valores especiais":`NaN` (*Not a Number*), `+Infinity` (infinito positivo) e `-Infinity` (infinito negativo).

```javascript
alert(1 / 0) // Infinity
// ou também
alert(Infinity);

// NaN
alert("não é um número" / 2);
```

#### 2.2.2 [Null](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-null-type)

Um tipo de dado com somente um valor possível: `null`. Indica um valor nulo, inexistente.

#### 2.2.3 [Undefined](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-undefined-type)

Da mesma forma que o `Null`, `Undefined` é um tipo de dado com apenas um "valor".

É um tipo de dado que se refere a uma variável que se sabe o tipo de dado a ser armazenado, mas não tem o valor em si, ou seja, significa que um "valor não foi atribuído".

```javascript
let idade;
alert(idade); // undefined
```

#### 2.2.4 [Symbol](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-symbol-type)

Este tipo de dados é o conjunto de todos os valores que não são String, mas que podem ser usados como chave para a propriedade de um objeto.

### 2.3 Interação básica

<div class="warning-card">
  <span class="warning-icon">⚠</span>
  <div class="warning-text">
    <strong>ATENÇÃO</strong>
    <p>As funções a seguir fazem parte da interface <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a> da API <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API">HTML DOM</a>. Estão sendo mostradas aqui por conveniência.</p>
  </div>
</div>

As três funções básicas para interação com o usuário são:

- `alert`: exibe uma mensagem e espera o usuário clicar em "OK". Exemplo:
  
  ```javascript
  alert("Olá");
  ```

- `prompt`: exibe uma janela com uma mensagem, um campo para escrita e os botões 'OK' e 'Cancel'. Sintaxe:

  ```javascript
  resultado = prompt(titulo, [default]);
  ```

  onde `title` é o texto que será exibido e `default` [^2] (opcional) é o valor padrão para o campo de entrada de dado.

  [^2]: Convenção: um parâmetro entre colchetes indica que ele é opcional.
    
  Exemplo:

  ```javascript
  let idade = prompt("Qual é a sua idade?", 100);
  alert(`Você tem ${idade} anos!`); // Você tem 100 anos!
  ```

- `confirm`: exibe uma janela com uma pergunta e dois botões: "OK" e "Cancel". Exemplo:
  
  ```javascript
  let ehAluno = confirm("Você é aluno(a)?");
  alert(ehAluno); // true se o botão OK foi clicado
  ```

Ainda temos a função `console.log()` que pode ser usada para "interação", entretanto ela funciona apenas como um `print` para o console do navegador.

### 2.4 Conversões de tipo

Na maioria das vezes os operados e funções convertem os valores dados automaticamente para o tipo necessário. Por exemplo, a função `alert` converte automaticamente qualquer valor para String. Porém, existem situações em que é necessário que o desenvolvedor faça a conversão explicitamente.

#### 2.4.1 Conversão para String

Neste caso queremos transformar algum valor em uma String. Isso pode ser feito com a função `String(valor)`. Exemplo:

```javascript
let valor = true;
alert(typeof valor); // mostra o tipo de dado - booleano

valor = String(valor); // agora valor é "true"
alert(typeof valor); // string
```

#### 2.4.2 Conversão numérica

É a transformação de um valor no tipo numérico (`number`). Expressões e funções matemáticas fazem essa conversão automaticamente:

```javascript
alert("6" / "2"); // 3
```

A conversão "manual" é feita com a função `Number(valor)`:

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str);
alert(typeof num); // number
```

A conversão segue as seguintes regras:

| Valor | Saída |
|-------|-------|
| `undefined` | `NaN` |
| `null` | 0 |
| `true` e `false` | `1` e `0` |
| `string` | espaços em branco (incluindo tabulações `\t` e quebra de linha `\n`) no início e no fim são removidas. Se a string remanescente for vazia, o resultado é `0`. Senão, o número é "lido" da string. Um erro retorna `NaN`. |

#### 2.4.3 Conversão booleana

É feito com a função `Boolean(valor)` e segue as seguintes regras:

- Valores que são intuitivamente "vazios", como `0`, uma `string` vaiza, `null`, `undefined` e `NaN`, são convertidos em `false`.
- Outros valores são convertidos em `true`.

### 2.5 Operadores

#### 2.5.1 Igualdade estrita

Devido às conversões de tipos, temos os operador `===` que verifica a igualdade entre valores, porém **SEM CONVERSÃO**. Exemplos:

```javascript
alert('2' > 1); // true; '2' é convertido para 2
alert('01' == 1); // true, '01' é convertido para 1
alert(true == 1); // true
alert(false == 0); // true

alert(0 === false); // false
```

A negação desse operador é: `!==`.

#### 2.5.2 Operador de coalescência nulo `??`

Este operador é uma adição recente à linguagem, e retorna o primeiro argumento que **não é** `null` ou `undefined`. Exemplo:

```javascript
result = a ?? b;
```

tem o mesmo efeito de: 
```javascript
result = (a !== null && a !== undefined) ? a : b;
```

Exemplo de sua utilidade:

```javascript
let usuario = "Joãozinho";

alert(usuario ?? "Anônimo");
```

## 3 EXERCÍCIOS

### 3.1 Fácil

#### 1

Declare três identificadores no mesmo escopo de script:

```javascript
// Complete:
___ nome = "Ana";
___ idade = 20;
___ PI = 3.14159;
```

**Tarefa**

1. Escolha var, let ou const para cada linha, justificando a escolha.
2. Em seguida, tente reatribuir nome, idade e PI. Anote o que acontece em cada caso (reatribuição ok, TypeError, etc.).
3. Tente redeclarar cada um no mesmo escopo e descreva o resultado.

#### 2

Em JavaScript, vários valores pertencem ao tipo number. Execute e observe:

```javascript
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -0);
console.log(42 / 0);
console.log(0 / 0);
```

**Tarefa**

1. Anote o resultado de cada linha.
2. Explique, em uma frase, por que NaN tem typeof "number".
3. Escreva uma expressão que produza Infinity e outra que produza NaN sem usar os literais Infinity e NaN.

#### 3

undefined significa “ainda não há valor”. null significa “há um valor vazio, de propósito”.

```javascript
let a;
let b = null;
let c = undefined;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
```

**Tarefa**

1. Preveja a saída das três linhas de console.log.
2. Por que typeof null devolve "object"? (responda com o fato histórico; não invente uma regra semântica).
3. Cite uma situação em que você usaria null e outra em que deixaria a variável undefined.

#### 4

Converta as strings abaixo para número de três formas: Number(x), +x e parseInt(x, 10).

```javascript
const valores = ["123", "123.45", "  8  ", "", "10px", "abc"];
// Para cada item, imprima as três conversões.
```

**Tarefa**

1. Monte uma tabela mental (ou no caderno) com valor original e os três resultados.
2. Identifique em quais casos Number e o unário + coincidem.
3. Explique por que parseInt("10px", 10) “funciona” e Number("10px") não.

#### 5

Converta cada valor com Boolean(valor) e também com a dupla negação !!valor.

```javascript
const valores = [0, 1, -1, "", "0", "false", null, undefined, NaN, [], {}];
```

**Tarefa**

1. Liste quais valores são falsy.
2. Confirme que Boolean(x) e !!x produzem o mesmo resultado para todos os itens.
3. Por que Boolean("false") é true, se o texto parece negativo?

#### 6

Compare os pares com == e com ===.

```javascript
5 == "5"
5 === "5"
0 == false
0 === false
"" == false
"" === false
```

**Tarefa**

1. Anote true/false para cada comparação.
2. Em uma frase: o que === exige a mais do que ==?
3. Reescreva a verificação “se idade numérica for 18” usando apenas ===.

#### 7

O operador ?? devolve o operando da direita somente quando o da esquerda é null ou undefined.

```javascript
const nome1 = null;
const nome2 = undefined;
const nome3 = "Carla";

console.log(nome1 ?? "visitante");
console.log(nome2 ?? "visitante");
console.log(nome3 ?? "visitante");
```

**Tarefa**

1. Preveja as três saídas.
2. Substitua nome3 por "" (string vazia) e preveja de novo.
3. Complete: mensagem = texto ?? "sem mensagem"; usando um texto que você escolher.

#### 8

0 e "" são valores válidos em muitos programas (quantidade, texto vazio). Compare os dois operadores.

```javascript
const qtd = 0;
const rotulo = "";

console.log(qtd || 10);
console.log(qtd ?? 10);
console.log(rotulo || "padrão");
console.log(rotulo ?? "padrão");
```

**Tarefa**

1. Preveja as quatro saídas.
2. Explique em que situação || “rouba” um valor que você queria preservar.
3. Escolha ?? ou || para: (a) número de tentativas, em que 0 é válido; (b) nome de exibição, em que string vazia deve virar “Anônimo”.

#### 9

Converta explicitamente com String(valor) e também concatenando com "".

```javascript
String(123)
String(true)
String(null)
String(undefined)
String(NaN)
null + ""
undefined + ""
```

**Tarefa**

1. Anote cada resultado (incluindo as aspas, para ver que é string).
2. Confirme com typeof que o resultado é "string".
3. Qual a diferença prática entre String(null) e uma variável que ainda nem foi declarada?

#### 10

const impede reatribuir a variável. Não congela o objeto apontado.

```javascript
const aluno = { nome: "Rui", nota: 8 };
aluno.nota = 9;     // ?
aluno = { nome: "Eva" }; // ?
```

**Tarefa**

1. Diga o que acontece em cada atribuição (funciona ou TypeError).
2. Reescreva o objeto usando let e mostre uma reatribuição válida.
3. Em uma frase: o que const garante neste exemplo?

#### 11

Algumas conversões para number são pouco intuitivas e caem em prova / entrevista.

```javascript
Number(null)
Number(undefined)
Number(true)
Number(false)
Number("")
Number("  ")
```

**Tarefa**

1. Preveja cada resultado.
2. Memorize especialmente Number(null) e Number(undefined): eles NÃO são iguais.
3. Escreva um if que só aceita um número finito de verdade (dica: Number.isFinite).

#### 12

Este é o caso clássico em que == e === discordam para os dois “vazios” da linguagem.

```javascript
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null === 0);
console.log(undefined == 0);
```

**Tarefa**

1. Preveja as cinco saídas.
2. Escreva uma função isAusente(v) que retorne true somente para null ou undefined, usando ===.
3. Por que isAusente(0) e isAusente("") devem ser false?

#### 13

Observe o que “vaza” para fora do if.

```javascript
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(b);
console.log(c);
```

**Tarefa**

1. Qual linha imprime um número e quais lançam ReferenceError?
2. Reescreva o exemplo usando apenas let, de modo que a, b e c existam depois do if.
3. Em uma frase, defina escopo de bloco.

#### 14

Imagine que um <input> sempre entrega string. Você precisa somar duas idades.

```javascript
const campoA = "19";
const campoB = "21";

console.log(campoA + campoB);      // concatenação
console.log(Number(campoA) + Number(campoB));
```

**Tarefa**

1. Preveja as duas saídas.
2. Crie uma função somaCampos(a, b) que converta com Number e devolva a soma.
3. O que sua função deve fazer se um dos campos for ""? Decida e documente em um comentário.

#### 15

Uma API devolve título opcional. Se vier null ou undefined, use um padrão.

```javascript
function tituloDaPagina(resposta) {
  const titulo = resposta.titulo ?? "Sem título";
  return String(titulo);
}
```

**Tarefa**

1. Chame a função com { titulo: "Aula 3" }, { titulo: null }, { titulo: 0 } e {}.
2. Anote cada retorno.
3. Por que {} produz "Sem título" mesmo sem a propriedade titulo?

### 3.2 Médio

#### 16

var é içada e inicializada com undefined. let e const são içadas, mas ficam inacessíveis até a linha da declaração (TDZ).

```javascript
console.log(x);
var x = 10;

console.log(y);
let y = 20;
```

**Tarefa**

1. Qual é a saída da primeira impressão? E o que acontece na terceira linha?
2. Repita o experimento com const z = 30 no lugar de let y.
3. Explique com suas palavras o que é a Temporal Dead Zone.

#### 17

Um erro clássico: usar var no contador do for e depois ler o contador fora do laço.

```javascript
for (var i = 0; i < 3; i++) {
  // corpo vazio de propósito
}
console.log(i);

for (let j = 0; j < 3; j++) {
  // corpo vazio
}
console.log(j);
```

**Tarefa**

1. Preveja console.log(i) e console.log(j).
2. Reescreva o primeiro laço com let. O vazamento desaparece?
3. Por que, em código novo, o padrão é for (let …) e não for (var …)?

#### 18

Escreva rotulo(valor, padrao) que:

```javascript
function rotulo(valor, padrao) {
  // 1. se valor for null ou undefined, use padrao
  // 2. converta o escolhido para string
  // 3. devolva o resultado
}
```

**Tarefa**

1. Implemente usando ?? e String.
2. Teste com: rotulo(null, "n/d"), rotulo(0, "n/d"), rotulo(false, "n/d"), rotulo(undefined, 7).
3. Os testes com 0 e false devem preservar esses valores (como texto "0" e "false"), não trocá-los pelo padrão.

#### 19

NaN é o único valor em JavaScript para o qual x === x é false.

```javascript
const x = Number("abc");
console.log(x);
console.log(x === x);
console.log(x === NaN);
console.log(Number.isNaN(x));
console.log(isNaN("abc"));      // cuidado
console.log(Number.isNaN("abc"));
```

**Tarefa**

1. Preveja cada linha.
2. Explique a diferença entre isNaN (global) e Number.isNaN.
3. Escreva ehNumeroInvalido(n) que retorne true só quando n for realmente NaN.

#### 20

Implemente criarServidor(opcoes) devolvendo um objeto de configuração. Regras:
host padrão "localhost", porta padrão 3000, timeout padrão 5000, debug padrão false.
0, false e "" devem ser aceitos se o chamador os enviar. Só null/undefined disparam o padrão.

```javascript
function criarServidor(opcoes) {
  const o = opcoes ?? {};
  return {
    host: /* ... */,
    porta: /* ... */,
    timeout: /* ... */,
    debug: /* ... */,
  };
}
```

**Tarefa**

1. Complete com ??.
2. Teste criarServidor(undefined), criarServidor({ porta: 0, debug: false }) e criarServidor({ host: "" }).
3. Mostre o que daria errado se você tivesse usado || na porta e no debug.

#### 21

O código abaixo “compila”, mas não faz o que o autor pensou.

```javascript
let idade = 16;
if (idade = 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}
console.log(idade);
```

**Tarefa**

1. O que é impresso e qual o valor final de idade? Por quê?
2. Corrija usando ===.
3. Reescreva também a versão que aceita string "18" vinda de um input, convertendo antes com Number.

#### 22

Preveja sem rodar, depois confirme no console.

```javascript
Boolean(Number("0"))
Boolean(Number(""))
String(null) === "null"
String(undefined) === "undefined"
Number(false) === 0
Number(null) === 0
Number(undefined) === 0
```

**Tarefa**

1. Marque cada expressão como true ou false (ou NaN, se for o valor intermediário relevante).
2. Desenhe a cadeia da primeira: "0" → Number → Boolean.
3. Qual dessas linhas mais engana iniciantes? Justifique.

#### 23

Duas funções diferentes, dois contratos diferentes.

```javascript
function isNil(v) {
  // true apenas para null ou undefined
}

function isEmpty(v) {
  // true para null, undefined, "", 0 e false
}
```

**Tarefa**

1. Implemente isNil só com === (sem ==).
2. Implemente isEmpty combinando isNil com conversão booleana, sem perder a distinção do enunciado.
3. Monte uma tabela com v ∈ {null, undefined, 0, "", false, "0", NaN} e o resultado das duas funções.

#### 24

Decida, para cada bloco, se o programa roda ou lança SyntaxError / TypeError.

```javascript
// A
var n = 1;
var n = 2;

// B
let m = 1;
let m = 2;

// C
const k = 1;
k = 2;

// D
var t = 1;
let t = 2;
```

**Tarefa**

1. Classifique A, B, C e D.
2. Explique por que misturar var e let no mesmo identificador e escopo é inválido.
3. Em código de aula, qual declaração você adotaria como padrão e por quê?

#### 25

Entradas reais vêm com espaços, vírgula decimal (pt-BR) ou lixo no fim.

```javascript
const entradas = ["  3.14  ", "3,14", "10kg", "+7", "0x10", ""];
```

**Tarefa**

1. Para cada entrada, calcule Number(e), parseInt(e, 10) e parseFloat(e).
2. Qual método respeita o prefixo 0x? Isso é desejável aqui?
3. Escreva normalizarDecimalBR(texto) que troque vírgula por ponto e converta com Number. Trate "" como null (não como 0).

### 3.3 Difícil

#### 26

Antes do ES2020 não existia ??. Sua missão é emular o operador com uma função, sem usar || (que trataria 0 e "" como ausentes).

```javascript
function coalescer(a, b) {
  // devolva a se a NÃO for null nem undefined; senão devolva b
}

// Deve valer:
// coalescer(0, 10) === 0
// coalescer("", "x") === ""
// coalescer(false, true) === false
// coalescer(null, 10) === 10
// coalescer(undefined, 10) === 10
```

**Tarefa**

1. Implemente coalescer.
2. Escreva também coalescerEncadeado(a, b, c) com o mesmo critério (o primeiro definido vence).
3. Mostre um teste em que coalescer e (a || b) discordam. Explique o impacto num formulário de quantidade.

#### 27

O laço abaixo agenda três timeouts. O valor impresso depende de como o contador foi declarado.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var", i), 0);
}

for (let k = 0; k < 3; k++) {
  setTimeout(() => console.log("let", k), 0);
}
```

**Tarefa**

1. Preveja as seis linhas impressas (ordem relativa entre os dois grupos pode variar, mas os valores de cada grupo são o ponto).
2. Explique com o vocabulário de escopo e closure por que var imprime três vezes o mesmo número.
3. Reescreva o laço com var produzindo 0, 1 e 2. Use uma IIFE ou bind — sem trocar var por let.

#### 28

Implemente relatorioIgualdade(a, b) que devolve um objeto com:
estrita (a === b), frouxa (a == b), tipoA, tipoB, aComoNumero, bComoNumero, aComoBool, bComoBool.

```javascript
function relatorioIgualdade(a, b) {
  return { /* ... */ };
}

// Investigue pelo menos estes pares:
// (null, undefined), (null, 0), ("", 0), ("0", 0),
// (false, 0), (NaN, NaN), ("", false)
```

**Tarefa**

1. Implemente a função usando ===, ==, typeof, Number e Boolean.
2. Imprima o relatório dos pares listados.
3. Escreva um parágrafo de 4–6 linhas para um colega iniciante: quando usar === como regra da casa e quando (se é que alguma vez) == ainda se justifica.

#### 29

Escreva lerNumero(entrada, fallback) para dados que vêm de input, JSON ou banco.
Contrato:
— Se entrada for null ou undefined, devolva fallback (via ??).
— Se entrada já for number finito (incluindo 0 e negativos), devolva-o.
— Se entrada for string, faça trim; string vazia vira fallback.
— Converta com Number; se o resultado não for finito, devolva fallback.
— Nunca use == com null. Nunca trate 0 como ausente.

```javascript
function lerNumero(entrada, fallback) {
  // implemente
}
```

**Tarefa**

1. Implemente respeitando o contrato.
2. Teste com: undefined, null, 0, -3.5, "", "  ", "42", "  8.5 ", "abc", NaN, Infinity, "0", false.
3. Para false e para Infinity, documente o comportamento observado e diga se o contrato deveria recusá-los (e por quê).

#### 30

Este exercício junta três armadilhas no mesmo programa. Analise antes de executar.

```javascript
function painel(cfg) {
  const titulo = cfg.titulo ?? "Painel";
  const tentativas = cfg.tentativas ?? 3;
  const visivel = cfg.visivel ?? true;

  const estado = { titulo, tentativas, visivel, log: [] };

  function registrar(msg) {
    estado.log.push(String(msg ?? ""));
  }

  if (tentativas === 0 || visivel === false) {
    registrar(cfg.aviso ?? "inativo");
  }

  return estado;
}

const a = painel({ tentativas: 0, visivel: false, aviso: null });
const b = painel({ titulo: "", tentativas: null });

console.log(a.titulo, a.tentativas, a.visivel, a.log);
console.log(b.titulo, b.tentativas, b.visivel, b.log);

// Puzzle extra:
// console.log(nulo || padrao ?? "x");  // isto é SyntaxError.
// Por quê? Como escrever a intenção com parênteses?
```

**Tarefa**

1. Preveja a.titulo, a.tentativas, a.visivel e a.log, depois o equivalente de b.
2. Explique por que titulo: "" não dispara o padrão, mas tentativas: null dispara.
3. Responda o puzzle da precedência entre || e ??: o motor recusa misturar sem parênteses. Escreva as duas intenções possíveis com parênteses.
4. Mostre uma mutação válida de estado (estado.log.push) e uma reatribuição inválida (estado = {}). Relacione com o Exercício 10.