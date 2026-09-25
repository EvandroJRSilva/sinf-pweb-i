# Aula 12

Sumário

- [Aula 12](#aula-12)
  - [Arrays](#arrays)
  - [Objetos](#objetos)
    - [**Pontos principais**](#pontos-principais)
    - [Tarefa de casa](#tarefa-de-casa)
  - [Exercícios](#exercícios)
    - [Fáceis (1–20)](#fáceis-120)
    - [Médias (21–40)](#médias-2140)
    - [Difíceis (41–50)](#difíceis-4150)


## Arrays

[Documentação/Referência de Array (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

Sintaxe:

```js
[element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
```

A partir disso, temos formas de se criar/declarar um [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) inicializado:

```js
var arr = new Array(elemento0, elemento1, ..., elementoN);
var arr = new Array(comprimento);

var arr = Array(elemento0, elemento1, ..., elementoN);
var arr = Array(comprimento);

var arr = [elemento0, elemento1, ..., elementoN];
```

Um array pode ser criado vazio também:

```js
var arr = [];
var arr = Array();
var arr = new Array();
```

Lista de "detalhes":

- [Construtor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [Propriedades estáticas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [Métodos estáticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods)
- [Propriedades da instância](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_properties)
  - É daqui que temos o [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Métodos de instância](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods). Alguns deles:
  - [`at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
  - [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  - [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  - [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  - [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  - [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
  - [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  - [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
  - [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
  - [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)


## Objetos

[Um bom material sobre objetos de JS do MDN, em Português](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects).

### **Pontos principais**

- [Inicializador de objeto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). Sintaxe:
  ```js
  o = {
    a: "foo",
    b: 42,
    c: {},
    1: "number literal property",
    "foo:bar": "string literal property",

    shorthandProperty,

    method(parameters) {
      // …
    },

    get property() {},
    set property(value) {},

    [expression]: "computed property",

    __proto__: prototype,

    ...spreadProperty,
  };
  ```
  - **shorthand property:** se já houver uma variável com o mesmo nome de uma propriedade de um objeto, ao declarar o objeto, a propriedade pode ser omitida. Exemplo:
    ```js
    const nome = 'Fulano';
    const idade = 20;
    const pais = 'Brasil';

    const usuario = {
      nome,
      idade,
      pais
    }
    ```
  - **método**
    ```js
    const o = {
      propriedade: function(parametros) {},
      propriedade(parametros) {} //shorthand para nomes de métodos
    }
    ```
  - **propriedade computada**
    ```js
    let i = 0;
    const a = {
      [`foo${++i}`]: i,
      [`foo${++i}`]: i,
      [`foo${++i}`]: i,
    }

    console.log(a.foo1); // 1
    console.log(a.foo2); // 2
    console.log(a.foo3); // 3

    const items = ["A", "B", "C"];
    const obj = {
      [items]: "Hello",
    };

    console.log(obj); // A,B,C: "Hello"
    console.log(obj["A,B,C"]); // "Hello"
    ```
  - **criador de protótipo (*prototye setter*):** uma definição de propriedade na forma `__proto__: valor` ou `"__proto__": valor` não cria uma propriedade com o nome `__proto__`. Em vez disso, se o valor fornecido for um objeto ou `null`, ele aponta para o `[[Prototype]]` do objeto criado para aquele valor. Se o valor fornecido não for um objeto ou `null`, o objeto não é modificado. Exemplo:
    ```js
    const obj1 = {};
    console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

    const obj2 = { __proto__: null };
    console.log(Object.getPrototypeOf(obj2)); // null

    const protoObj = {};
    const obj3 = { "__proto__": protoObj };
    console.log(Object.getPrototypeOf(obj3) === protoObj); // true

    const obj4 = { __proto__: "not an object or null" };
    console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
    console.log(Object.hasOwn(obj4, "__proto__")); // false
    ```
  - **spread property**: dá suporte à [sintaxe *spread*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Copia suas próprias propriedades enumeráveis de um objeto fornecido para um novo objeto. Exemplo:
    ```js
    const obj1 = {foo: "bar", x: 42};
    const obj2 = {foo: "baz", y: 13};

    const clonedObj = {...obj1}; // {foo: "bar", x: 42}

    const mergedObj = {...obj1, ...obj2}; // {foo: "baz", x: 42, y: 13}
    // No exemplo acima ficou "foo: baz" porque quando temos 2 propriedades com o mesmo nome
    //  o segundo valor sobrescreve o primeiro.
    ```
- Quase tudo no JS é um objeto.
- Usando uma **função construtora** em vez de um inicializador de objeto:
  ```js
  function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  var meuCarro = new Carro("Honda", "City", "2024");
  ```
- Usando o método `Object.create()`, no lugar de função construtora ou inicializador de objeto:
  ```js
  // Encapsulamento das propriedades e métodos de Animal
  var Animal = {
    tipo: "Invertebrados", // Propriedades de valores padrão
    qualTipo: function () {
      // Método que ira mostrar o tipo de Animal
      console.log(this.tipo);
    },
  };

  // Cria um novo tipo de animal chamado animal1
  var animal1 = Object.create(Animal);
  animal1.qualTipo(); // Saída:Invertebrados

  // Cria um novo tipo de animal chamado Peixes
  var peixe = Object.create(Animal);
  peixe.tipo = "Peixes";
  peixe.qualTipo(); // Saída: Peixes
  ```
- Todos os objetos em JS herdam de pelo menos um outro objeto. O objeto "pai" é conhecido como protótipo (*prototype*), e as propriedades herdadas podem ser encontradas no objeto `prototype` do constutor.
  - É possível adicionar uma propriedade a **todos os objetos criados através de um dado construtor** com a propriedade `prototype`. A partir dela pode ser definida uma propriedade que será compartilhada por todos os objetos de um tipo específico, em vez de somente uma instância do objeto. Exemplo:
    ```js
    Carro.prototype.cor = "vermelho";
    console.log(carro1.cor); // "vermelho"
    ```
- Remoção de propriedades com o operador `delete`. Exemplo:
  ```js
  var obj = new Object();
  obj.a = 5;
  obj.b = 12;

  delete obj.a;
  ```

### Tarefa de casa

Estude sobre [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes).

## Exercícios

### Fáceis (1–20)

**1.** Uma aluna declarou três variáveis e depois tentou alterar os valores. Observe o código e diga o que será impresso no `console`. Se alguma linha geraria erro caso fosse descomentada, indique qual e por quê.

```js
var a = 1;
let b = 2;
const c = 3;

a = 10;
b = 20;
// c = 30;

console.log(a, b, c);
```

**2.** O programa abaixo tenta atualizar o nome de uma cidade guardado em `const`. O que acontece ao executar esse código? Reescreva-o para que a cidade possa ser alterada sem erro, mantendo o mesmo valor inicial.

```js
const cidade = "Picos";
cidade = "Teresina";
console.log(cidade);
```

**3.** Um loop foi escrito com `var`. Depois do `for`, o programa imprime `i`. Qual valor aparece no `console`? Explique de onde vem esse valor.

```js
for (var i = 0; i < 3; i++) {
  // intencionalmente vazio
}
console.log(i);
```

**4.** O mesmo loop da questão anterior foi reescrito com `let`. Ao executar `console.log(i)` depois do `for`, o que acontece? Compare com o comportamento da questão 3.

```js
for (let i = 0; i < 3; i++) {
  // intencionalmente vazio
}
console.log(i);
```

**5.** Escreva um trecho de código que leia a constante `n` abaixo e, usando `if`/`else` (sem ternário), imprima `"par"` se `n` for divisível por 2 e `"ímpar"` caso contrário.

```js
const n = 7;
```

**6.** Reescreva a solução da questão 5 usando o operador ternário no lugar do `if`/`else`. A saída no `console` deve ser a mesma.

**7.** Uma professora classificou uma nota com `switch (true)`. Qual texto será impresso? O `break` é necessário neste caso? Justifique.

```js
const nota = 8;

switch (true) {
  case nota >= 7:
    console.log("aprovado");
    break;
  default:
    console.log("reprovado");
}
```

**8.** Escreva uma **function declaration** chamada `soma`. Ela deve receber `a` e `b`, sendo que `b` tem valor padrão `0`. A função retorna `a + b`. Em seguida, mostre duas chamadas: `soma(5, 3)` e `soma(5)`.

**9.** Converta a função `soma` da questão 8 para **arrow function** atribuída a uma constante. Mantenha o parâmetro default e as mesmas duas chamadas.

**10.** A função abaixo usa o objeto `arguments`. Qual número será guardado em `total`? Explique o que `arguments.length` representa neste exemplo.

```js
function somaTudo() {
  return arguments.length;
}

const total = somaTudo(1, 2, 3, 4);
console.log(total);
```

**11.** Reescreva `somaTudo` da questão 10 como arrow function que usa **parâmetro rest** (`...nums`) e devolve a quantidade de números recebidos. Depois responda: essa arrow function tem objeto `arguments` próprio? Por quê?

**12.** Partindo do array `frutas`, o programa adiciona um item e consulta posição e tamanho. O que será impresso?

```js
const frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas.length, frutas[2]);
```

**13.** Alguém afirmou que “`const` impede qualquer alteração no array”. Execute mentalmente o código e diga se essa afirmação é verdadeira. O que será impresso? O que `const` realmente impede neste caso?

```js
const nums = [1, 2];
nums[0] = 99;
nums.push(3);
console.log(nums);
```

**14.** Dado o objeto `aluno`, escreva duas instruções `console.log` que mostrem o valor de `nome`: uma com notação de ponto e outra com colchetes.

```js
const aluno = { nome: "Ana", idade: 20 };
```

**15.** `dobro` foi criada como **function expression**. Qual valor será impresso? Essa função poderia ser chamada *antes* da linha em que ela é atribuída? Justifique em uma frase.

```js
const dobro = function (n) {
  return n * 2;
};

console.log(dobro(5));
```

**16.** Usando `for...of` (não use `for` clássico com índice), percorra o array `["js", "html", "css"]` e imprima cada linguagem em uma linha.

**17.** Implemente a função `processa(valor, callback)` de modo que ela devolva o resultado de chamar `callback` passando `valor`. Com o código abaixo, a constante `resultado` deve valer `11`.

```js
const resultado = processa(10, function (x) {
  return x + 1;
});
```

**18.** Há duas variáveis chamadas `msg`. Qual texto será impresso no final? Explique o papel do bloco `{ }` e de `let`.

```js
let msg = "oi";

if (true) {
  let msg = "olá";
}

console.log(msg);
```

**19.** Crie um objeto `retangulo` com as propriedades `largura: 4` e `altura: 3`. Em seguida, crie uma **function expression** chamada `calcularArea` que receba esse objeto e retorne `largura * altura`. Mostre a chamada que imprime `12`.

**20.** O código declara `x` duas vezes com `var`, uma delas dentro de um bloco. O que será impresso? O bloco `{ }` cria um escopo novo para `var` neste exemplo?

```js
var x = 5;
{
  var x = 10;
}
console.log(x);
```

---

### Médias (21–40)

**21.** Os dois trechos abaixo tentam imprimir uma variável antes de inicializá-la. Para cada trecho, diga se ocorre erro ou qual valor aparece, e explique a diferença usando os conceitos de hoisting e Zona Morta Temporal (TDZ).

```js
console.log(a);
var a = 1;
```

```js
console.log(b);
let b = 1;
```

**22.** O objeto `user` foi declarado com `const`, mas o programa altera `nome` e inclui `idade`. Esse código executa ou quebra? O que será impresso? Em uma frase, diga o que `const` garante e o que ele *não* garante em objetos.

```js
const user = { nome: "João" };
user.nome = "Maria";
user.idade = 30;
console.log(user);
```

**23.** Escreva a função `media` com as regras abaixo:

- deve aceitar qualquer quantidade de números, usando parâmetro rest;
- se nenhum número for passado, retorna `0` (use valor default ou um `if`);
- caso contrário, retorna a média aritmética.

Mostre o resultado de `media()`, `media(10)` e `media(4, 6, 10)`.

**24.** Observe a function declaration que usa `arguments`:

```js
function mostra() {
  console.log(arguments[0], arguments.length);
}

mostra("a", "b", "c");
```

a) Qual será a saída?  
b) Se alguém reescrever assim: `const mostra = () => console.log(arguments[0], arguments.length);`, a chamada `mostra("a", "b", "c")` funciona da mesma forma? Explique.

**25.** Dado `const numeros = [1, 2, 3, 4, 5, 6];`, escreva um `for` clássico que some **somente os pares**. Use `continue` para pular os ímpares. Imprima o total, que deve ser `12`.

**26.** O objeto `ops` guarda duas funções (uma arrow e uma function expression). Qual valor fica em `resultado`? Mostre a conta passo a passo.

```js
const ops = {
  somar: (a, b) => a + b,
  subtrair: function (a, b) {
    return a - b;
  },
};

const resultado = ops.somar(10, ops.subtrair(8, 3));
console.log(resultado);
```

**27.** A partir de `const origem = [1, 2, 3];`, use `map` com **arrow function** para gerar um novo array em que cada elemento é o dobro do original. Guarde o resultado em `const dobrados` e imprima. `origem` não deve ser modificado.

**28.** Dado `const nomes = ["Ana", "Bruno", "Lia", "Carlos"];`, use `filter` passando uma **function expression** (não arrow) como callback. O array final deve conter apenas nomes com **mais de 4 letras**. Imprima o resultado.

**29.** O programa declara `x` no escopo externo e outra `x` dentro do `if`. Quais dois números serão impressos, e em qual ordem? Relacione a resposta ao escopo de bloco do `let`.

```js
let x = 1;

if (true) {
  let x = 2;
  console.log(x);
}

console.log(x);
```

**30.** Implemente `executar(fn, ...args)` de forma que:

- `fn` seja um callback;
- os demais valores sejam coletados com rest e passados para `fn`;
- a função devolva o que `fn` retornar.

A chamada abaixo deve imprimir `9`:

```js
const triplo = function (n) {
  return n * 3;
};

console.log(executar(triplo, 3));
```

**31.** O `switch` abaixo não tem `break` em todos os `case`. Com `dia = 2`, quais textos serão impressos e por quê (fall-through)?

```js
const dia = 2;

switch (dia) {
  case 1:
    console.log("seg");
  case 2:
    console.log("ter");
  case 3:
    console.log("qua");
    break;
  default:
    console.log("outro");
}
```

**32.** O objeto `pessoa` pode ou não ter `endereco.cidade`. Escreva um trecho que imprima a cidade se ela existir e `"cidade não informada"` caso contrário. Faça de um destes jeitos (escolha um e implemente): encadeamento opcional (`?.`) **ou** `if` aninhado clássico.

```js
const pessoa = { endereco: { cidade: "Picos" } };
```

**33.** Complete a função para que ela use **destructuring** no parâmetro, com default `nome = "visitante"` e default do próprio parâmetro igual a `{}` (para permitir `saudacao()` sem argumentos). Ela deve retornar uma string no formato `"Nome: ... | Idade: ..."`. Se `idade` não vier, mostre `"não informada"`.

```js
function saudacao(/* desestruture aqui */) {
  // retorne a string
}

console.log(saudacao({ nome: "Ana", idade: 20 }));
console.log(saudacao({}));
console.log(saudacao());
```

**34.** Considere o objeto:

```js
const obj = {
  n: 10,
  f1: function () {
    return this.n;
  },
  f2: () => this.n,
};
```

a) O que retornam `obj.f1()` e `obj.f2()` no navegador ou no Node (em módulo/script simples)?  
b) Por que os resultados são diferentes?

**35.** Trate o array `const pilha = [3, 2, 1];` como uma pilha. Usando `while` e `pop()`, remova e imprima um elemento por vez até o array ficar vazio. No final, `pilha.length` deve ser `0`.

**36.** Escreva uma IIFE (function expression imediatamente invocada) que:

- receba o array `[2, 4, 6]`;
- calcule a soma com `reduce` usando arrow function;
- imprima o total (`12`).

**37.** Analise o código:

```js
const arr = [1, 2, 3];
const copia = arr;
copia.push(4);
console.log(arr);
```

a) O que será impresso em `arr`? Por quê?  
b) Reescreva a criação de `copia` para que seja uma **cópia rasa** (outro array). Depois do `push` em `copia`, `arr` deve continuar `[1, 2, 3]`.

**38.** Implemente `aplicaDesconto(precos, callback)`:

- `precos` é um array de números;
- `callback` recebe um preço e devolve o preço com desconto;
- internamente use `map`;
- devolva o novo array, sem alterar o original.

Mostre o uso com `const precos = [100, 200, 50]` e um callback arrow que aplica 10% de desconto.

**39.** Dado `const dados = { a: 1, b: 2, c: 3 };`, percorra as chaves com `for...in`. Some os valores **exceto** o da chave `"b"` (use `if` + `continue` ou `if` simples). Imprima a soma, que deve ser `4`.

**40.** O trecho abaixo cria um array de funções dentro de um `for` que usa `var`. Cada função deveria “lembrar” o valor de `i` daquela volta, mas isso pode não ocorrer.

```js
var fns = [];

for (var i = 0; i < 3; i++) {
  fns.push(function () {
    return i;
  });
}

console.log(fns[0](), fns[1](), fns[2]());
```

a) Quais três números serão impressos?  
b) Explique, em termos de escopo de `var` e de function expression, por que as três funções devolvem o mesmo valor.

---

### Difíceis (41–50)

**41.** Partindo do código da questão 40 (o `for` com `var` e o array `fns`):

a) Reescreva o loop usando `let` para que `fns[0]()`, `fns[1]()` e `fns[2]()` retornem `0`, `1` e `2`, respectivamente.  
b) Sem usar `let` no `for` (continue com `var`), corrija o problema com uma closure extra: uma function expression imediatamente invocada (ou uma função auxiliar) que capture o `i` da iteração.  
c) Em uma frase, diga por que `let` resolve e por que a IIFE também resolve.

**42.** Os dois loops abaixo agendam impressões com `setTimeout`. Considere que os callbacks rodam depois que os dois `for` já terminaram.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let", i), 0);
}

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log("var", j), 0);
}
```

a) Liste, na ordem, todas as linhas que aparecerão no `console`.  
b) Explique a diferença usando escopo de bloco (`let`) versus escopo de função (`var`) e o fato de a arrow function capturar a variável, não uma cópia do valor naquele instante.

**43.** Implemente `criarContador(inicial = 0)` que usa closure e devolve um objeto com dois métodos:

- `incrementa(passo = 1)`: soma `passo` ao valor interno e devolve o novo valor;
- `valor()`: devolve o valor atual sem alterar nada.

Regras: o estado interno não pode ser acessado de fora (nada de `contador.x`); use `let` para o estado que muda e `const` para a função/objeto retornado.

Comportamento esperado:

```js
const c = criarContador(10);
console.log(c.valor());        // 10
console.log(c.incrementa());   // 11
console.log(c.incrementa(4));  // 15
```

**44.** Cada aluno é um objeto no formato `{ nome: string, notas: number[] }`. Implemente `aprovados(alunos, criterio)` em que:

- `alunos` é um array desses objetos;
- `criterio` é um **callback** que recebe o array `notas` e devolve `true` ou `false`;
- a função devolve um array **só com os nomes** dos alunos para os quais `criterio` retornou `true`.

Use `filter` e `map` (arrows ou expressions, à sua escolha). Exemplo que deve funcionar:

```js
const turma = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bia", notas: [5, 6, 5] },
  { nome: "Caio", notas: [7, 7, 7] },
];

const mediaMinima = function (notas) {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length >= 7;
};

console.log(aprovados(turma, mediaMinima)); // ["Ana", "Caio"]
```

**45.** Analise a função que mistura parâmetro comum, rest e `arguments`:

```js
function misturar(a, ...resto) {
  console.log(a);
  console.log(resto);
  console.log(arguments.length);
  console.log(Array.isArray(arguments));
  console.log(Array.isArray(resto));
}

misturar(1, 2, 3);
```

a) Escreva, linha a linha, o que será impresso.  
b) Por que `resto` é um array de verdade e `arguments` não é?  
c) `arguments` inclui o valor de `a`? E `resto` inclui `a`?

**46.** Considere o objeto:

```js
const original = {
  x: 1,
  nested: { y: 2 },
  lista: [10, 20],
};
```

a) Crie `const copia = { ...original }` e depois execute:

```js
copia.x = 99;
copia.nested.y = 50;
copia.lista[0] = 0;
```

Diga o valor final de `original.x`, `original.nested.y` e `original.lista[0]`. Explique o que foi copiado por valor e o que continuou compartilhado (cópia rasa).

b) Reescreva a criação de `copia` (sem usar `structuredClone`) de modo que alterar `copia.nested.y` e `copia.lista[0]` **não** altere `original`.

**47.** Implemente `pipeline(valorInicial, ...fns)`:

- o primeiro parâmetro é um valor qualquer;
- os demais são callbacks coletados com rest;
- cada callback recebe o resultado produzido pelo anterior;
- se nenhum callback for passado, devolva `valorInicial`.

Exemplos que devem funcionar:

```js
const maisUm = (x) => x + 1;
const vezesDois = function (x) {
  return x * 2;
};

console.log(pipeline(3, maisUm, vezesDois)); // 8
console.log(pipeline(3));                    // 3
```

**48.** Sem usar `filter` nem `map`, percorra `pedidos` com `for` clássico ou `for...of`. Monte um novo array contendo **apenas os `id`s** dos pedidos que estejam `pago: true` **e** tenham mais de um item. Use `if` e `continue` para pular os que não servem. Imprima o array final, que deve ser `[1, 3]`.

```js
const pedidos = [
  { id: 1, itens: ["a", "b"], pago: true },
  { id: 2, itens: ["c"], pago: false },
  { id: 3, itens: ["d", "e", "f"], pago: true },
];
```

**49.** Dado o objeto:

```js
const carrinho = {
  itens: [10, 20, 30],
  total: function () {
    // some this.itens e retorne
  },
};
```

a) Implemente `total` como método tradicional (function expression / método) para que `carrinho.total()` retorne `60`.  
b) Extraia o método: `const f = carrinho.total; console.log(f());`. O que acontece com `this`? Corrija a extração usando `bind` **ou** chamando com `call`/`apply`.  
c) Se `total` fosse reescrito como arrow function dentro do objeto literal, `carrinho.total()` continuaria funcionando? Justifique.

**50.** Implemente `estatisticas(...conjuntos)` com todas as regras abaixo:

- usa parâmetro rest para receber qualquer quantidade de argumentos;
- cada argumento *válido* é um array de números; argumentos que não forem arrays devem ser ignorados (`if` + `continue` ou equivalente);
- para cada array válido, produza um objeto `{ min, max, media }`;
- crie funções auxiliares para `min`, `max` e `media` (pelo menos uma arrow e uma function expression);
- se nenhum conjunto válido for passado, retorne `[]`;
- use `const` para o que não for reatribuído e `let` somente onde houver reatribuição.

Exemplo obrigatório:

```js
console.log(estatisticas([1, 2, 3], "x", [10, 20]));
// [
//   { min: 1, max: 3, media: 2 },
//   { min: 10, max: 20, media: 15 }
// ]
```