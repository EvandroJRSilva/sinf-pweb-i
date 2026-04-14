# Aula 06

## O que é um *script*?

Um `script` é uma lista de comandos executáveis como uma `macro` ou um conjunto de arquivos criados por uma linguagem de script. `Scripts` (como `PHP`, `Perl`) que são executados em um `servidor web` são chamados de scripts `server-side`, e scripts (como o `JavaScript`[^1]) que são executados no computador de um usuário, interpretados pelo navegador, são chamados de scripts `client-side`.

[^1]: [Uma breve história do JavaScript](https://www.youtube.com/watch?v=aX3ZABCdC38&t=21s).

## O que é JavaScript?

`JavaScript` é uma linguagem de script orientada a objeto e multiplataforma desenvolvida pela `Netscape`. O JavaScript foi criado pelo programador da Netscape **Brendan Eich**.

Foi lançado primeiramente sob o nome `LiveScript`, como parte do `Netscape Navigator 2.0` em Setembro de 1995, e depois renomeado como JavaScript em 4 de Dezembro de 1995. Foi desenvolvido para o uso em páginas web com forte integração com HTML.

O JavaScript pode criar aplicações que são executadas em navegadores como o Edge, Opera, FireFox, Google Chrome, etc. A Netscape submeteu o JavaScript ao ECMA International para padronização, o que resultou na versão padronizada chamada `ECMAScript`.

### Especificação oficial

A especificação mais recente do JavaScript é a seguinte: [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/).

Clicando no link você será levado à uma página onde poderá escolher visualizar as especificações em PDF ou HTML. Caso você tenha interesse em se aprofundar o máximo possível nessa linguagem, recomendo o máximo de leitura possível dessa documentação.

## Embutindo código JavaScript no HTML

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

## Sintaxe

Parte significativa da sintaxe da linguagem é semelhante ao que temos nas demais linguagens mais conhecidas, portanto, nosso foco se dará sobre o que o JavaScript tem de diferente.

Antes de continuar, a seguir será mostrado parte da estrutura da documentação do [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/), para que você possa ter uma primeira visão de onde procurar o tópico de sintaxe de seu interesse.

```
5 Notational Conventions
  5.1 Syntactic and Lexical Grammars
  5.2 Algorithm Conventions
6 ECMAScript Data Types and Values
  6.1 ECMAScript Language Types
  6.2 ECMAScript Specification Types
7 Abstract Operations
  7.1 Type Conversion
  7.2 Testing and Comparison Operations
  7.3 Operations on Objects
  7.4 Operations on Iterator Objects
...
12 ECMAScript Language: Lexical Grammar
  12.1 Unicode Format-Control Characters
  12.2 White Space
  12.3 Line Terminators
  12.4 Comments
  12.5 Hashbang Comments
  12.6 Tokens
  12.7 Names and Keywords
  12.8 Punctuators
  12.9 Literals
  12.10 Automatic Semicolon Insertion
13 ECMAScript Language: Expressions
  13.1 Identifiers
  13.2 Primary Expression
  13.3 Left-Hand-Side Expressions
  13.4 Update Expressions
  13.5 Unary Operators
  13.6 Exponentiation Operator
  13.7 Multiplicative Operators
  13.8 Additive Operators
  13.9 Bitwise Shift Operators
  13.10 Relational Operators
  13.11 Equality Operators
  13.12 Binary Bitwise Operators
  13.13 Binary Logical Operators
  13.14 Conditional Operator ( ? : )
  13.15 Assignment Operators
  13.16 Comma Operator ( , )
14 ECMAScript Language: Statements and Declarations
  14.1 Statement Semantics
  14.2 Block
  14.3 Declarations and the Variable Statement
  14.4 Empty Statement
  14.5 Expression Statement
  14.6 The if Statement
  14.7 Iteration Statements
  14.8 The continue Statement
  14.9 The break Statement
  14.10 The return Statement
  14.11 The with Statement
  14.12 The switch Statement
  14.13 Labelled Statements
  14.14 The throw Statement
  14.15 The try Statement
  14.16 The debugger Statement
15 ECMAScript Language: Functions and Classes
  15.1 Parameter Lists
  15.2 Function Definitions
  15.3 Arrow Function Definitions
  15.4 Method Definitions
  15.5 Generator Function Definitions
  15.6 Async Generator Function Definitions
  15.7 Class Definitions
  15.8 Async Function Definitions
  15.9 Async Arrow Function Definitions
  15.10 Tail Position Calls
...
```

### `var` vs. `let` vs. `const`

Essas são 3 formas de se declarar uma "variável". Veja a seguir um comparativo

| **Característica** | `var` | `let` | `const` |
|---|---|---|---|
| Escopo |  função ou global | bloco ({}) | bloco ({}) |
| Reatribuível | sim | sim | não |
| Redeclarável | sim | não | não |
| *Hoisting* | inicializado como `undefined` | Não incializado | Não incializado |

#### Exemplo de escopo

```javascript
var olares = "Olá mundo!";

if (true) {
    var olares = "Olá planeta!";
}

console.log(olares); // Saída: Olá planeta!
```

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

#### Exemplo de reatribuição

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

#### Exemplo de redeclaração

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

#### Exemplo de *hoisting*

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

### Tipos de dados

Existem 8 tipos de dados básicos no JavaScript. Uma variável pode ser associada a qualquer tipo de dado. Ao mesmo tempo, o JavaScript permite que o tipo de dado de uma variável possa mudar no decorrer da execução do programa (`tipagem dinâmica`):

```javascript
let message = "hello";
message = 123456;
```

Os tipos de dados são: `Number`, `BigInt`, `String`, `Boolean`, `Null`, `Undefined`, `Objetct` e `Symbol`.

#### [Number](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-number-type)

Representa os valores do tipo `inteiro` e `ponto flutuante` (*float*). Além dos valores normais existem alguns "valores especiais":`NaN` (*Not a Number*), `+Infinity` (infinito positivo) e `-Infinity` (infinito negativo).

```javascript
alert(1 / 0) // Infinity
// ou também
alert(Infinity);

// NaN
alert("não é um número" / 2);
```

#### [Null](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-null-type)

Um tipo de dado com somente um valor possível: `null`. Indica um valor nulo, inexistente.

#### [Undefined](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-undefined-type)

Da mesma forma que o `Null`, `Undefined` é um tipo de dado com apenas um "valor".

É um tipo de dado que se refere a uma variável que se sabe o tipo de dado a ser armazenado, mas não tem o valor em si, ou seja, significa que um "valor não foi atribuído".

```javascript
let idade;
alert(idade); // undefined
```

#### [Symbol](https://262.ecma-international.org/16.0/index.html?_gl=1*lozk0z*_ga*MTgxNDk2ODA4NS4xNzU5MjgwODE5*_ga_TDCK4DWEPP*czE3NTk4NjQzMzckbzMkZzAkdDE3NTk4NjQzMzckajYwJGwwJGgw#sec-ecmascript-language-types-symbol-type)

Este tipo de dados é o conjunto de todos os valores que não são String, mas que podem ser usados como chave para a propriedade de um objeto.

### Interação básica

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

### Conversões de tipo

Na maioria das vezes os operados e funções convertem os valores dados automaticamente para o tipo necessário. Por exemplo, a função `alert` converte automaticamente qualquer valor para String. Porém, existem situações em que é necessário que o desenvolvedor faça a conversão explicitamente.

#### Conversão para String

Neste caso queremos transformar algum valor em uma String. Isso pode ser feito com a função `String(valor)`. Exemplo:

```javascript
let valor = true;
alert(typeof valor); // mostra o tipo de dado - booleano

valor = String(valor); // agora valor é "true"
alert(typeof valor); // string
```

#### Conversão numérica

É a transformação de um valor no tipo numérico (`number`). Expressões e funções matemáticas fazem essa conversão automaticamente:

```javascript
alert("6" / "2"); // 3
```

A conversão "manual" é feita com a função `Number(valro)`:

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

#### Conversão booleana

É feito com a função `Boolean(valor)` e segue as seguintes regras:

- Valores que são intuitivamente "vazios", como `0`, uma `string` vaiza, `null`, `undefined` e `NaN`, são convertidos em `false`.
- Outros valores são convertidos em `true`.

### Operadores

#### Igualdade estrita

Devido às conversões de tipos, temos os operador `===` que verifica a igualdade entre valores, porém **SEM CONVERSÃO**. Exemplos:

```javascript
alert('2' > 1); // true; '2' é convertido para 2
alert('01' == 1); // true, '01' é convertido para 1
alert(true == 1); // true
alert(false == 0); // true

alert(0 === false); // false
```

A negação desse operador é: `!==`.

#### Operador de coalescência nulo `??`

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

No exemplo acima, como `usuario` tinha sido definido, o `alert` mostra o nome **Joãozinho**.

### Expressões de funções

Uma função declarada normalmente costuma ter a seguinte sintaxe:

```javascript
function nome(param1, ..., paramN){
    ...
}
```

O JavaScript permite também que uma função possa ser "declarada" como uma expressão ('função expressão' ou 'expressão de função'?). Isso é possível porque uma função em JavaScript é um valor e, portanto, pode ser armazenada em uma variável:

```javascript
let dizPonha = function(){
    alert('Ponha');
};
```

#### Funções *callback*

Esse é o caso de funções sendo passadas como parâmetros para outras funções. É possível, inclusive, passar uma expressão de função:

```javascript
function pergunta(questao, sim, nao){
    if(confirm(questao)) sim()
    else nao();
}

pergunta(
    "Você concorda?",
    function() {alert("Você concordou.");},
    function() {alert("Você cancelou a execução.");}
);
```

### Funções de seta

Outra sintaxe possível, simples e concisa para criar funções. Sua sintaxe é da seguinte forma:

```javascript
let func = (arg1, arg2, ..., argN) => expressao;
```

Exemplo:

```javascript
let soma = (a, b) => a + b;

/*
    O equivalente em expressão de função
    let soma = function(a, b){
        return a + b;
    };
*/

alert(soma(1, 2)); // 3
```

E se não tiver parâmetros?

```javascript
let dizPonha = () => alert("Ponha");

dizPonha();
```

Dá para fazer um combo com recursos do JavaScript:

```javascript
let idade = prompt("Insira a sua idade", 18);

let boasVindas = (idade < 18)?
    () => alert("Oie!") :
    () => alert("Saudações");

boasVindas();
```

## Exercícios 1

### Tópico 1: Hello, world! (Executando o primeiro programa com console.log)
1. Escreva um script que use `console.log` para imprimir "Olá, mundo!" no console do navegador. Abra o console (F12) e verifique se a mensagem aparece.

### Tópico 2: Code structure (Estrutura do código: declarações, ponto e vírgula, comentários)
1. Crie um código com duas declarações: `console.log("Primeira linha");` e `console.log("Segunda linha");`. Adicione um comentário `// Isso é um comentário` antes da segunda linha e execute para ver se ignora o comentário.
2. Escreva três `console.log` em uma linha só, separados por `;`, como `console.log(1); console.log(2); console.log(3);`. Execute e observe se todas imprimem.

### Tópico 3: The modern mode, “strict mode” ('use strict' para modo estrito)
1. Inicie um script com `'use strict';` e tente declarar uma variável sem `let`, `const` ou `var` (ex.: `x = 5;`). Observe o erro no console.
2.  Em modo estrito, crie uma função que use uma variável não declarada e chame-a. Compare com código sem `'use strict';` para ver a diferença no erro.
3.  Adicione `'use strict';` a um script simples que atribua valores a variáveis e imprima-os. Teste se o modo estrito afeta a execução normal.

### Tópico 4: Variables (Variáveis: var, let, const e escopo)
1.  Declare uma variável `nome` com `let` e valor "JavaScript", depois reatribua para "Programação" e imprima ambas as vezes com `console.log`.
2.  Use `const` para uma variável `pi = 3.14` e tente reatribuí-la. Observe o erro e imprima o valor original.
3.  Declare `var x = 1;` dentro de uma função, chame a função duas vezes e imprima `x` fora dela para ver o escopo global.
4.  Crie duas variáveis `let` no escopo global e local (dentro de um bloco `{}`), altere a local e imprima para comparar.

### Tópico 5: Data types (Tipos de dados: primitivos como number, string, boolean, etc.)
1.  Crie variáveis de tipos diferentes: `num = 42; str = "texto"; bool = true; nul = null;` e use `typeof` para imprimir o tipo de cada uma.
2.  Atribua `undefined` a uma variável não inicializada e use `typeof` para confirmá-lo. Imprima também `null` e compare os tipos.
3.  Crie um `BigInt` com valor 123n e uma string com aspas duplas "Olá". Imprima ambos e seus tipos.
4.  Use `Symbol("id")` para criar um símbolo, atribua a uma variável e imprima seu tipo e descrição com `console.log(symbol.description)`.
5.  Misture tipos: some um number (5) e uma string ("5") e imprima o resultado para ver a concatenação automática.

### Tópico 6: Interaction: alert, prompt, confirm (Interações: alert, prompt, confirm no navegador)
1.  Use `alert("Olá!");` em um script e execute no navegador para ver o diálogo de alerta.
2.  Peça o nome do usuário com `prompt("Digite seu nome:");`, armazene em uma variável e imprima no console com `console.log("Olá, " + nome);`.
3.  Use `confirm("Você gosta de JS?");`, armazene o booleano retornado e imprima "Sim" se true, "Não" se false, usando if.
4.  Combine prompt e confirm: pergunte idade com prompt, confirme com confirm se é maior de 18, e alerte o resultado.
5.  Crie um loop simples que use prompt para digitar números até "sair", somando-os, e confirme o total final.
6.  Use alert para mostrar um cálculo: prompt dois números, some e alerte o resultado.

### Tópico 7: Type Conversions (Conversões de tipo: automáticas e manuais)
1.  Some uma string "5" e um number 2, imprima para ver "52", depois use `Number("5") + 2` para obter 7.
2.  Converta um booleano true para number com `Number(true)` e imprima; faça o mesmo para false e uma string vazia "".
3.  Use `String(123)` para converter um número para string, concatene com " é um número" e imprima.
4.  Converta prompt (que retorna string) para number com `Number(prompt("Número:"))`, some dois e alerte.
5.  Teste conversão booleana: `Boolean(0)` e `Boolean(" ")`, imprima para ver falsy e truthy.
6.  Crie uma função que receba input de prompt, converta para number e verifique se é NaN com `isNaN()`.
7.  Some arrays ou objetos implicitamente (ex.: [] + []) e observe o resultado ""); compare com números.

### Tópico 8: Basic operators, maths (Operadores básicos e matemática)
1.  Calcule 10 + 5 * 2 (precedência) e imprima; depois use parênteses (10 + 5) * 2.
2.  Use incremento: `let x = 5; x++; console.log(x);` e decremente `x--;`.
3.  Atribuição composta: `let a = 10; a += 3; a -= 2;` e imprima a cada passo.
4.  Calcule resto: 17 % 5 e imprima; verifique se 10 % 2 é 0 para par.
5.  Potência: use `Math.pow(2, 3)` ou ** para 2**3 e imprima 8.
6.  Arredonde: `Math.round(4.6)` e `Math.floor(4.7)`, imprima ambos.
7.  Gere um número aleatório entre 0 e 1 com `Math.random()`, multiplique por 10 e arredonde.
8.  Calcule hipotenusa: Math.sqrt(3**2 + 4**2) e imprima 5.

### Tópico 9: Code quality, formatting, naming (Qualidade de código, formatação, nomenclatura)
1.  Refatore um código bagunçado: transforme `let a=1;b=2;c=a+b;console.log(c);` em linhas formatadas com nomes descritivos como `let primeiro = 1;`.
2.  Nomeie variáveis: crie `let precoProduto = 10.5; let quantidade = 3;` e calcule total com nome `totalCompra`.
3.  Formate um if longo: quebre linhas para `if (condicao1 && condicao2) { ... }` com indentação.
4.  Use camelCase: `let meuNome = "João"; let idadeUsuario = 25;` e imprima uma frase formatada.
5.  Evite magia: em vez de `let desconto = 0.15;`, use uma constante `const TAXA_DESCONTO = 0.15;`.
6.  Formate uma função: declare `function calcularIdade(anoNascimento) { return 2025 - anoNascimento; }` com espaçamentos.
7.  Nomeie loops: `for (let i = 0; i < 5; i++) { let numeroAtual = i; console.log(numeroAtual); }`.
8.  Refatore para qualidade: troque variáveis curtas por descritivas em um cálculo de área (raio, pi, area).
9.  Use formatação consistente: escreva 3 console.log com quebras de linha e tabs para alinhar.

### Tópico 10: Comments, debugging (Comentários e depuração básica)
1.  Adicione um comentário de bloco `/* Isso é um bloco */` em um script e um de linha `// Linha única` antes de um console.log.
2.  Use `console.log` para depurar: em um loop for de 1 a 5, imprima o valor de i a cada iteração.
3.  Comente partes de código: escreva um if com erro intencional, comente e depure com log da condição.
4.  Depure uma soma errada: `let a = "2"; let b = 3; console.log(a + b);` – adicione logs para ver tipos.
5.  Use comentários para explicar: `// Calcula média let soma = 10 + 20; let media = soma / 2;`.
6.  Depure com múltiplos logs: em uma função que multiplica dois números, logue parâmetros e retorno.
7.  Comente um bloco inteiro de um loop while e execute para ver o efeito.
8.  Depure conversão: prompt um número, logue o tipo antes e depois de Number(), e some.
9.  Adicione comentários JSDoc-like: `/** Função que soma dois números */ function soma(x, y) { ... }`.
10.  Simule depuração: crie código com variável undefined, use console.log em pontos chave para identificar o erro.

### Tópico 11: Loops – while and for (Loops while e for)
1.  Crie um loop `while` que inicialize uma variável `i` com 0 e imprima os valores de `i` enquanto `i < 3`. Incremente `i` em cada iteração. Verifique no console se imprime 0, 1, 2.

2.  Converta o loop `while` anterior em um loop `for`, com inicialização `let i = 0`, condição `i < 3` e incremento `i++`. Teste e compare a saída.

3.  Use um loop `while` para somar os números de 0 a 9 em uma variável `sum` (inicialize como 0). Imprima o resultado final (deve ser 45).

4.  Reescreva a soma de 0 a 9 usando um loop `for`. Inicialize `sum = 0` fora do loop e acumule dentro. Confirme o valor 45.

5.  Crie um loop `for` que imprima números de 5 a 1 (regressivo), usando `let i = 5; i > 0; i--`. Observe a sequência 5, 4, 3, 2, 1.

6.  Em um loop `for` de 0 a 9, use `break` quando `i === 3` para parar a iteração. Imprima apenas 0, 1, 2.

7.  Use um loop `while` com `true` como condição infinita, mas adicione `break` após imprimir 0, 1, 2 (com `i++`). Teste para evitar loop eterno.

8.  Peça um número ao usuário com `prompt` e use um loop `for` para imprimir de 0 até esse número. Teste com 4.

9.  Crie um loop `while` que some números pares de 0 a 10 (pule ímpares com uma condição). Imprima a soma (30).

10.  Compare `while` e `for`: escreva ambos para imprimir "Olá" 5 vezes. Note qual é mais limpo para iterações conhecidas.

11.  Use `prompt` para um limite, então um `for` para somar de 1 ao limite. Se o input for inválido (não número), use `break` após o primeiro.

### Tópico 12: Loops – for...in and for...of (Loops for...in e for...of)
1.  Crie um objeto `user = { name: "John", age: 30 };` e use `for...in` para imprimir as chaves ("name", "age").

2.  No mesmo objeto `user`, use `for...in` para imprimir os valores acessando `user[key]` (deve imprimir "John", 30).

3.  Crie um array `fruits = ["Apple", "Orange"];` e use `for...in` nele. Imprima as chaves (0, 1) e os valores `arr[key]`.

4.  No array `fruits`, use `for...of` para imprimir apenas os valores ("Apple", "Orange"). Note a diferença com `for...in`.

5.  Crie uma string "hello" e use `for...of` para imprimir cada letra (h, e, l, l, o).

6.  Em um objeto `sizes = { width: 100, height: 200 };`, use `for...in` para somar os valores numéricos (300).

7.  Crie um array de números `[1, 2, 3]` e use `for...of` para calcular a média somando e dividindo pelo comprimento.

8.  Use `for...in` em um array para listar índices, depois filtre apenas índices pares imprimindo o valor do array.

9.  Crie um objeto com propriedades não numéricas e use `for...in` para listar apenas propriedades "próprias" com `hasOwnProperty`.

10.  Compare `for...of` em uma string vs. array: imprima comprimento e elementos de ambos.

11.  Use `for...of` em um array de strings para concatenar todas em uma frase com espaços.

12.  Crie um objeto e um array; use o loop apropriado (`for...in` para obj, `for...of` para arr) para imprimir "Chave: valor" ou "Elemento: x".

### Tópico 13: Controlling Loop Flow – break and continue (Controle de Fluxo em Loops – break e continue)
1.  Em um `for` de 0 a 9, use `break` quando `i === 3` para imprimir apenas 0, 1, 2.

2.  No mesmo loop, substitua `break` por `continue` quando `i % 2 === 0` para pular evens e imprimir apenas ímpares (1,3,5,7,9).

3.  Crie um `while` de 0 a 5; use `continue` para pular múltiplos de 3 e imprimir o resto (0,1,2,4,5).

4.  Em um `for...of` em `[1,2,3,4,5]`, use `break` no primeiro par para parar após 2.

5.  Aninhe dois `for` (outer 0-2, inner 0-2); use `break` no inner quando `j === 1` para imprimir apenas primeiras linhas completas.

6.  No loop aninhado anterior, use `continue` no inner para pular `j === 1`, imprimindo todas exceto essa iteração.

7.  Crie um loop `for` de 1 a 10; use `continue` para somar apenas ímpares (soma = 25).

8.  Em um `while` infinito (`true`), use `break` após somar 1+2+3 (com contador).

9.  Aninhe loops e use rótulo `outer:` para `break outer` quando `i === 1 && j === 1`, imprimindo apenas 0-0 a 0-2 e 1-0.

10.  No rótulo anterior, use `continue outer` para pular o inner quando `j % 2 === 0`, mas continue o outer.

11.  Some números de um array até encontrar negativo com `break` em `for...of`.

12.  Filtre evens de 1-10 com `continue` em um `for`, coletando ímpares em um array.

13.  Em `for...in` de objeto, use `continue` se chave não for "name" ou "age".

### Tópico 14: The switch Statement (Instrução switch)
1.  Crie um `switch` para `a = 4`; cases 3:"Pequeno", 4:"Exato", 5:"Grande", default:"Desconhecido". Imprima "Exato".

2.  No `switch` anterior, remova `break` do case 3 para fall-through e teste com `a=3` (deve imprimir "Pequeno" e "Exato").

3.  Use `switch` para um dia (1:"Segunda", 2:"Terça", default:"Fim de semana?"). Teste com 1.

4.  Crie fall-through para cases 1,2,3:"Pequeno" sem `break` entre eles, default:"Grande". Teste com 2.

5.  Converta um if-else para nota (90+: "A", 80-89:"B", else:"C") em `switch` com fall-through para ranges (note limitação).

6.  Use `switch` em string "verde": cases "verde":"Go", "amarelo":"Wait", default:"Stop".

7.  Adicione `default` a um `switch` de números e teste com valor fora dos cases.

8.  Crie `switch` para prompt de número; cases 1-3 fall-through para "Baixo", else "Alto".

9.  Compare `switch` vs if-else: reescreva um if para dia da semana em switch e note legibilidade.

10.  Use `switch` com expressão `2 + 2` para case 4:"Correto".

11.  Em `switch`, use fall-through intencional para agrupar "Seg" e "Sex" como "Dia útil".

12.  Teste strict equality: `switch("2")` com case 2 (não match) vs case "2".

13.  Crie um `switch` para classificação de idade: <18:"Menor", 18-65:"Adulto", >65:"Idoso", com default.

14.  Modifique um `switch` para não usar `break` em um case para executar dois blocos.

### Tópico 15: Functions (Funções)
1.  Declare uma função `showMessage` sem parâmetros que imprima "Olá!" com `alert`. Chame-a.

2.  Crie uma função `showMessage(from, text)` que alerte `from + ": " + text`. Chame com "Ann", "Hi!".

3.  Na função anterior, chame com apenas um argumento e observe o undefined para o segundo.

4.  Crie uma função `sum(a, b)` que retorne `a + b`. Atribua o retorno a uma variável e imprima (sum(1,2) = 3).

5.  Use o objeto `arguments` em uma função `showName` para alertar `arguments[0] + " " + arguments[1]`. Chame com dois nomes.

6.  Crie uma função que some três números usando `arguments.length` para validar e retornar soma ou erro.

7.  Declare uma função aninhada dentro de outra: a outer chama a inner para imprimir "Interna".

8.  Crie uma função `ask(question, yes, no)` que use `confirm` para chamar yes() ou no().

9.  Passe funções nomeadas como callbacks para `ask`: yes alerta "Sim", no "Não". Chame ask.

10.  Reescreva os callbacks de ask como funções anônimas inline.

11.  Modifique ask para passar um parâmetro (nome) aos callbacks e usá-lo no alerta.

12.  Crie uma função que retorne outra função: outer recebe n, retorna função que multiplica por n.

13.  Use prompt para dois números, chame sum e alerte o resultado.

14.  Crie uma função que verifique se argumentos são números antes de somar, senão retorne NaN.

15.  Compare declaração vs expressão: chame uma função antes de declará-la (funciona), mas não com let = function.

### Tópico 16: Function expressions (Expressões de Função)
1.  Crie uma expressão de função anônima atribuída a `sayHi` que alerte "Hello". Chame `sayHi()`.

2.  Defina uma expressão de função nomeada `greet(name)` que alerte "Olá, [name]". Chame com "John".

3.  Crie uma expressão de função `multiply(a, b)` que retorne a * b. Atribua a `calc` e chame `calc(2,3)`.

4.  Atribua uma expressão de função a uma variável `func` e imprima `func` (sem parênteses) para ver o código fonte.

5.  Copie uma expressão de função `logMsg` para `copyFunc` e chame ambas para confirmar que funcionam independentemente.

6.  Escreva uma expressão de função sem ponto e vírgula no final da atribuição e observe o erro de sintaxe.

7.  Tente chamar uma expressão de função `sayBye` antes de sua atribuição `let sayBye = function() {...}`. Corrija movendo a chamada.

8.  Converta a expressão anterior em declaração de função e chame antes da definição para ver hoisting funcionar.

9.  Declare uma função dentro de um bloco `if (false)` e tente chamá-la fora; observe o erro de escopo.

10.  Corrija o escopo anterior atribuindo expressões de função a uma variável `welcome` fora do if, com base na condição.

11.  Use operador ternário para atribuir uma expressão de função a `msgFunc` baseada em idade >18 (alerta "Adulto" ou "Criança").

12.  Crie uma função `ask` que receba question, yes e no como callbacks. Passe expressões de função nomeadas.

13.  Reescreva os callbacks de `ask` como expressões anônimas inline para encurtar o código.

14.  Modifique os callbacks para receberem um parâmetro (ex.: nome) e usá-lo; passe o parâmetro na chamada de yes/no.

15.  Crie uma expressão de função que retorne outra expressão de função (ex.: multiplicador que retorna dobrador).

16.  Combine conceitos: use ternário para atribuir callback condicional em `ask`, testando com confirm.

### Tópico 17: Arrow functions, the basics (Funções Arrow, os básicos)
1.  Crie uma arrow function `sum = (a, b) => a + b`. Chame com 1,2 e imprima 3.

2.  Converta uma função regular `function add(x, y) { return x + y; }` em arrow de uma linha.

3.  Crie uma arrow com parâmetro único `double = n => n * 2` (sem parênteses). Teste com 5 (10).

4.  Defina uma arrow sem parâmetros `sayHi = () => alert("Hello!")`. Chame e observe o alerta.

5.  Use ternário para atribuir arrow condicional baseada em idade: <18 alerta "Hello!", senão "Greetings!".

6.  Crie uma arrow multilinha `sum = (a, b) => { let res = a + b; return res; }`. Teste retorno.

7.  Em um objeto `{ method: () => this.name }`, defina `this.name = "Arrow"` e chame; note que `this` é undefined (herda do escopo).

8.  Tente acessar `arguments` em uma arrow function com múltiplos args; observe undefined e use rest parameters como alternativa.

9.  Corrija uma arrow sem parênteses vazios: mude `greet = () => alert("Hi")` de `greet = alert("Hi")` (erro de sintaxe).

10.  Em uma arrow multilinha sem `return`, adicione-o para retornar soma; teste antes/depois (undefined vs valor).

11.  Reescreva um método de objeto como arrow; observe falha em `this` e volte para função regular.

12.  Use prompt para idade e atribua arrow dinâmica via ternário, chamando para alerta personalizado.

13.  Converta o exemplo de `ask` com callbacks em arrows anônimas de uma linha.

14.  Crie uma arrow multilinha para calcular fatorial (loop de 1 a n, retornando produto).

15.  Forneça array `[1,2,3]`; use arrow como callback em `forEach` para dobrar e imprimir cada (2,4,6).

16.  Tente usar arrow como construtor com `new ArrowFunc()`; observe erro e explique por quê.

17.  Refatore uma arrow multilinha complexa (ex.: soma com validação) para função regular; note quando a legibilidade melhora.

## Exercícios 2

### Teóricos

1. **Múltipla escolha:** Qual é a forma mais comum de inserir JavaScript em uma página HTML?  
   a) Dentro de uma tag `<script>`.  
   b) Em um arquivo CSS.  
   c) Diretamente no atributo `src` de uma imagem.
   d) Em uma tag `<link>`.

2. **Verdadeiro/Falso:** É possível inserir JavaScript inline diretamente em um elemento HTML usando o atributo `onclick`. Verdadeiro ou Falso?

3. **Completamento de código:** Complete o código para linkar um arquivo externo de JavaScript chamado `script.js` no final do `<body>`:  
   `<script ______________="script.js"></script>`

4. **Análise de código:** No código `<script src="external.js"></script>`, onde deve ser colocado para evitar atrasos na renderização da página?  
   a) No `<head>`.  
   b) No final do `<body>`.  
   c) Antes do `</html>`.  
   d) Dentro de um `<div>`.

5. **Múltipla escolha:** Qual tag deve ser usada para inserir JavaScript inline no HTML?  
   a) `<js>`.  
   b) `<script>`.  
   c) `<code>`.  
   d) `<style>`.

6. **Verdadeiro/Falso:** O atributo `defer` em uma tag `<script>` faz com que o JavaScript seja executado imediatamente após o download. Verdadeiro ou Falso?

7. **Completamento de código:** Escreva a tag HTML para inserir JavaScript no `<head>` com o atributo `async`:  
   `<script ______________ src="meu-script.js"></script>`

8. **Análise de código:** Qual é o problema de colocar `<script>` no `<head>` sem `defer` ou `async`?  
   (Resposta curta: Ele pode bloquear o carregamento da página.)

9. **Múltipla escolha:** Qual é a sintaxe correta para declarar uma variável em JavaScript?  
   a) `var nome = "João";`  
   b) `variable nome = "João";`  
   c) `let nome = "João";` (todas as anteriores)  
   d) Apenas a e c.

10. **Verdadeiro/Falso:** O operador `===` compara valores e tipos em JavaScript. Verdadeiro ou Falso?

11. **Completamento de código:** Complete a declaração de uma constante com o valor 42:  
    `const numero = _____;`

12. **Análise de código:** No código `let x = 5; x += 3; console.log(x);`, qual é o resultado?  
    a) 5  
    b) 8  
    c) 15  
    d) Erro.

13. **Múltipla escolha:** Qual operador é usado para concatenar strings em JavaScript?  
    a) +  
    b) -  
    c) *  
    d) / 

14. **Verdadeiro/Falso:** Variáveis declaradas com `var` têm escopo global por padrão. Verdadeiro ou Falso?

15. **Completamento de código:** Escreva a operação para verificar se 10 é maior ou igual a 5:  
    `10 _____ 5` (use o operador apropriado).

16. **Análise de código:** O que acontece com `let y; console.log(y);`?  
    (Resposta curta: Retorna `undefined`.)

17. **Múltipla escolha:** Qual é o resultado de `true && false`?  
    a) true  
    b) false  
    c) 1  
    d) 0

18. **Verdadeiro/Falso:** O operador `%` retorna o resto da divisão. Verdadeiro ou Falso?

19. **Múltipla escolha:** Qual é um tipo de dado primitivo em JavaScript?  
    a) Array  
    b) Object  
    c) String  
    d) Function

20. **Verdadeiro/Falso:** O tipo `null` é considerado um tipo primitivo e representa "valor ausente". Verdadeiro ou Falso?

21. **Completamento de código:** Identifique o tipo de `typeof 3.14`:  
    `_____` (string)

22. **Análise de código:** Qual é o tipo de `'hello'`?  
    a) Number  
    b) String  
    c) Boolean  
    d) Undefined

23. **Múltipla escolha:** Quantos tipos de dados primitivos existem em JavaScript?  
    a) 5  
    b) 6  
    c) 7  
    d) 8

24. **Múltipla escolha:** Qual é a sintaxe básica de um `if`?  
    a) `if (condição) { código }`  
    b) `if condicao { código }`  
    c) `if: condição { código }`  
    d) Nenhuma das anteriores.

25. **Verdadeiro/Falso:** O `else if` pode ser usado múltiplas vezes em uma cadeia condicional. Verdadeiro ou Falso?

26. **Completamento de código:** Complete o `if` para verificar se uma idade é maior que 18:  
    `if (idade > 18) { console.log("Adulto"); } _____ { console.log("Menor"); }`

27. **Análise de código:** No código:  
    ```js:disable-run
    let dia = 3;
    switch (dia) {
        case 1: console.log("Segunda"); break;
        case 3: console.log("Quarta"); break;
    }
    ```  
    Qual é a saída?  
    a) Segunda  
    b) Quarta  
    c) Nada  
    d) Erro.

28. **Múltipla escolha:** O que acontece se não usar `break` em um `switch`?  
    a) Erro de sintaxe.  
    b) Fall-through para o próximo case.  
    c) Ignora o case.  
    d) Para a execução.

29. **Verdadeiro/Falso:** `if (0) { ... }` sempre executa o bloco, pois 0 é verdadeiro. Verdadeiro ou Falso?

30. **Completamento de código:** Escreva um `switch` para o valor 2 que imprima "Dois":  
    `switch (valor) { case 2: console.log("Dois"); _____ default: console.log("Outro"); }`

31. **Análise de código:** Qual é o resultado de `if ("") { console.log("Verdadeiro"); } else { console.log("Falso"); }`?  
    (Resposta curta: Falso)

32. **Múltipla escolha:** Em um `switch`, qual palavra-chave é usada para o caso padrão?  
    a) else  
    b) default  
    c) catch  
    d) finally

33. **Verdadeiro/Falso:** O operador ternário `condição ? valor1 : valor2` é equivalente a um `if-else` simples. Verdadeiro ou Falso?

34. **Múltipla escolha:** Qual é a sintaxe de um loop `for`?  
    a) `for (init; condição; incremento) { código }`  
    b) `for init to condição { código }`  
    c) `for (condição) { código }`  
    d) Nenhuma das anteriores.

35. **Verdadeiro/Falso:** Um `while` executa o código enquanto a condição for verdadeira. Verdadeiro ou Falso?

36. **Completamento de código:** Complete o `for` para imprimir de 0 a 4:  
    `for (let i = 0; i < 5; _____ ) { console.log(i); }`

37. **Análise de código:** No código:  
    ```js
    let i = 0;
    while (i < 3) {
        console.log(i);
        i++;
    }
    ```  
    Qual é a saída?  
    a) 0 1 2  
    b) 1 2 3  
    c) 0 1  
    d) Loop infinito.

38. **Múltipla escolha:** Qual loop é mais adequado para iterar um número conhecido de vezes?  
    a) while  
    b) for  
    c) do-while  
    d) for...of

39. **Verdadeiro/Falso:** `do { código } while (condição);` executa pelo menos uma vez, mesmo se a condição for falsa. Verdadeiro ou Falso?

40. **Completamento de código:** Escreva um `while` que some números de 1 a 5:  
    `let soma = 0; let j = 1; while (j <= 5) { soma += j; _____ }`

41. **Análise de código:** O que acontece em `for (let i = 0; i < -1; i++) { console.log(i); }`?  
    (Resposta curta: Nada é executado.)

42. **Múltipla escolha:** Qual é o incremento em `for (let i = 5; i > 0; i--) { ... }`?  
    a) i++  
    b) i--  
    c) i += 1  
    d) i = i + 1

43. **Verdadeiro/Falso:** Loops `for` e `while` podem ser aninhados em JavaScript. Verdadeiro ou Falso?

44. **Múltipla escolha:** Qual é a sintaxe para declarar uma função?  
    a) `function nome() { ... }`  
    b) `def nome() { ... }`  
    c) `fun nome { ... }`  
    d) `function: nome { ... }`

45. **Verdadeiro/Falsso:** Funções em JavaScript podem ser chamadas antes de serem declaradas (hoisting). Verdadeiro ou Falso? (Apenas para declarações `function`.)

46. **Completamento de código:** Complete a função que retorna o dobro de um número:  
    `function dobro(n) { return n * 2; } _____ (5);` (chamada)

47. **Análise de código:** No código:  
    ```js
    function soma(a, b) {
        return a + b;
    }
    console.log(soma(2, 3));
    ```  
    Qual é a saída?  
    a) 5  
    b) "23"  
    c) Erro  
    d) undefined

48. **Múltipla escolha:** O que é um parâmetro padrão em funções?  
    a) `function teste(a = 10) { ... }`  
    b) Parâmetro obrigatório.  
    c) Sempre `null`.  
    d) Não existe em JS.

49. **Verdadeiro/Falso:** Uma função sem `return` retorna `undefined`. Verdadeiro ou Falso?

50. **Completamento de código:** Escreva uma função anônima atribuída a uma variável que imprima "Olá":  
    `const ola = function() { console.log("Olá"); }; _____();`

<details>
    <summary>Gabarito</summary>
    <ol>
        <li>a) Dentro de uma tag &lt;script&gt;.</li>
        <li>Verdadeiro.</li>
        <li>&lt;script src="script.js"&gt;&lt;/script&gt;.</li>
        <li>b) No final do &lt;body&gt;.</li>
        <li>b) &lt;script&gt;.</li>
        <li>Falso (o defer adia a execução até o HTML ser parseado).</li>
        <li>&lt;script async src="meu-script.js"&gt;&lt;/script&gt;.</li>
        <li>Bloqueia o carregamento e renderização da página.</li>
        <li>d) Apenas a e c (var e let; note que const também é válida, mas a opção foca em var e let).</li>
        <li>Verdadeiro.</li>
        <li>const numero = 42;.</li>
        <li>b) 8.</li>
        <li>a) +.</li>
        <li>Verdadeiro.</li>
        <li>10 >= 5.</li>
        <li>Retorna undefined.</li>
        <li>b) false.</li>
        <li>Verdadeiro.</li>
        <li>c) String.</li>
        <li>Verdadeiro.</li>
        <li>"number".</li>
        <li>b) String.</li>
        <li>c) 7 (undefined, null, boolean, number, bigint, string, symbol).</li>
        <li>a) if (condição) { código }.</li>
        <li>Verdadeiro.</li>
        <li>else.</li>
        <li>b) Quarta.</li>
        <li>b) Fall-through para o próximo case.</li>
        <li>Falso (0 é falsy, não executa).</li>
        <li>break;.</li>
        <li>Falso (string vazia é falsy).</li>
        <li>b) default.</li>
        <li>Verdadeiro.</li>
        <li>a) for (init; condição; incremento) { código }.</li>
        <li>Verdadeiro.</li>
        <li>i++.</li>
        <li>a) 0 1 2.</li>
        <li>b) for.</li>
        <li>Verdadeiro.</li>
        <li>j++;.</li>
        <li>Nada é executado (condição falsa desde o início).</li>
        <li>b) i--.</li>
        <li>Verdadeiro.</li>
        <li>a) function nome() { ... }.</li>
        <li>Verdadeiro (para declarações de função, não arrow functions).</li>
        <li>console.log(dobro(5));.</li>
        <li>a) 5.</li>
        <li>a) function teste(a = 10) { ... }.</li>
        <li>Verdadeiro.</li>
        <li>ola();.</li>
    </ol>
</details>

### Práticos

#### Básico

1. Crie um arquivo HTML simples com uma tag `<script>` inline que imprima "Olá, Mundo!" no console. Insira o script no final do `<body>`. Abra no navegador e verifique o console.
2. Linke um arquivo externo `meu-script.js` em um HTML, colocando-o no `<head>` com `defer`. No JS, defina uma variável global e acesse-a no console do navegador.
3. Declare três variáveis com `let`: uma string "JavaScript", um número 10 e um booleano true. Use o operador `+` para concatenar a string com o número e imprima no console.
4. Atribua um valor a uma variável com `const`, tente reatribuir e observe o erro no console. Depois, use `let` para demonstrar reatribuição.
5. Use `typeof` em uma string, um número e `null`. Imprima cada um no console para confirmar os tipos primitivos.
6. Crie uma variável `valor` com `undefined`. Use `typeof` e compare com `null` usando `!==`. Explique por que são diferentes tipos primitivos.
7. Escreva um `if-else` que verifique se uma nota (80) é maior ou igual a 70: imprima "Aprovado" ou "Reprovado".
8. Crie um `if-else if-else` para classificar uma idade: <13 "Criança", 13-19 "Adolescente", >=20 "Adulto". Teste com idade 15.
9. Verifique se uma string é vazia ou não usando `if (!str)`. Imprima "Vazia" ou "Não vazia".
10. Combine `if` com operadores: se (x > 5 && y < 10), incremente uma variável; else, decremente. Teste valores.
11. Use um `for` para imprimir números de 1 a 5 no console.
12. Aninhe um `for` dentro de outro: imprima uma tabuada de 1 a 3 (ex: 1x1=1, 1x2=2... 3x3=9).
13. Use `while` para contar regressivamente de 10 a 1, parando se encontrar 5 (use `break`).
14. Declare uma função `saudacao` que receba um nome e imprima "Olá, [nome]!". Chame com "João".
15. Escreva uma função anônima atribuída a `calcular` que some dois parâmetros e retorne o resultado. Chame e imprima.
16. Crie um HTML com um botão que, ao clicar, execute uma função JavaScript inline via `onclick` para alterar o texto do botão para "Clicado!". Use apenas JavaScript inline, sem arquivo externo.
17. Crie uma variável `idade` com valor 25. Use operadores lógicos (`&&` e `||`) para verificar se é maior que 18 E par (idade % 2 === 0). Imprima o resultado.
18. Converta o número 42 para string usando `String(42)`, concatene com " é um número" e imprima. Verifique o tipo final com `typeof`.
19. Use `switch` para um dia da semana (3 = Quarta). Imprima o nome do dia; inclua um `default` para "Dia inválido".
20. Com `while`, some números de 1 a 10 e imprima a soma final.
21. Crie uma função `multiplica` com parâmetro padrão (2) que multiplique um número por ele. Teste sem e com argumento.
22. Crie um HTML que carregue dois scripts: um com `async` e outro sem. Observe a ordem de execução no console (use `console.log` em cada).
23. Calcule a área de um círculo (raio = 5) usando `Math.PI` e operadores aritméticos. Use `===` para comparar o resultado com 78.54 e imprima se é igual.
24. Use o operador ternário para verificar se um número é positivo, negativo ou zero. Imprima.
25. Use `do-while` para pedir input (simule com prompt) até o usuário digitar "sair". Imprima cada entrada.
26. Insira JS em um HTML para adicionar um evento `onload` à janela que alerte o tempo de carregamento da página (use `performance.now()`).
27. Crie uma expressão que some dois números, multiplique por 2 e verifique se é maior que 10 usando `>`. Use *template literals* para imprimir: `O resultado é ${resultado}`.
28. Em um `switch`, sem `break` intencionalmente, faça *fall-through* para que case 1 e 2 imprimam "Baixo", e case 3 "Alto". Teste com 2.
29. Com `for`, encontre e imprima apenas números ímpares de 1 a 20 usando `%`.
30. Crie uma função que use `if` dentro para retornar "Par" ou "Ímpar" baseado em um número. Use hoisting chamando antes da declaração.