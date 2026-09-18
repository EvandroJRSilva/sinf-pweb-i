# Aula 10

Sumário

- [Aula 10](#aula-10)
  - [Controle de fluxo](#controle-de-fluxo)
    - [O que temos de menos comum](#o-que-temos-de-menos-comum)
      - [*Falsy values*](#falsy-values)
      - [`label`](#label)
      - [`continue`](#continue)
      - [`for...in`](#forin)
      - [`for...of`](#forof)
  - [Exercícios](#exercícios)
    - [Fáceis](#fáceis)
      - [1. Parada ao encontrar um valor](#1-parada-ao-encontrar-um-valor)
      - [2. Ignorando números pares](#2-ignorando-números-pares)
      - [3. Procurando uma palavra](#3-procurando-uma-palavra)
      - [4. Percorrendo propriedades de um objeto](#4-percorrendo-propriedades-de-um-objeto)
      - [5. Ignorando uma propriedade](#5-ignorando-uma-propriedade)
      - [6. Parando em determinado índice](#6-parando-em-determinado-índice)
      - [7. Ignorando valores negativos](#7-ignorando-valores-negativos)
      - [8. Encontrando o primeiro número maior que 100](#8-encontrando-o-primeiro-número-maior-que-100)
      - [9. Contando valores válidos](#9-contando-valores-válidos)
      - [10. Listando propriedades de um objeto](#10-listando-propriedades-de-um-objeto)
      - [11. Somando valores](#11-somando-valores)
      - [12. Ignorando strings vazias](#12-ignorando-strings-vazias)
      - [13. Procurando uma propriedade](#13-procurando-uma-propriedade)
      - [14. Percorrendo caracteres](#14-percorrendo-caracteres)
      - [15. Encontrando o primeiro elemento inválido](#15-encontrando-o-primeiro-elemento-inválido)
    - [Médios](#médios)
      - [16. `for...in` e `continue`](#16-forin-e-continue)
      - [17. `for...of` com objetos](#17-forof-com-objetos)
      - [18. `break` em busca de dados](#18-break-em-busca-de-dados)
      - [19. `break` em loop aninhado](#19-break-em-loop-aninhado)
      - [20. Primeiro exercício com `label`](#20-primeiro-exercício-com-label)
      - [21. `continue` em loop aninhado](#21-continue-em-loop-aninhado)
      - [22. `continue` com `label`](#22-continue-com-label)
      - [23. Processamento de pedidos](#23-processamento-de-pedidos)
      - [24. `for...in` em array e `for...of`](#24-forin-em-array-e-forof)
      - [25. Filtrando propriedades](#25-filtrando-propriedades)
    - [Difíceis](#difíceis)
      - [26. Busca em matriz com `label`](#26-busca-em-matriz-com-label)
      - [27. Processamento de registros](#27-processamento-de-registros)
      - [28. Analisando propriedades e valores](#28-analisando-propriedades-e-valores)
      - [29. Matriz de notas](#29-matriz-de-notas)
      - [30. Desafio final — inventário hierárquico](#30-desafio-final--inventário-hierárquico)


## Controle de fluxo

O controle de fluxo no JavaScript é bastante similar com o das linguagens baseadas em `C`. Ou seja, esse controle é feito com:

- Condicionais:
  - Blocos:
    - `if...else`;
    - `switch`;
  - Operador condicional/ternário;
- Tratamento de exceções
  - `throw`;
  - `try...catch` + `finally`.
- *Loops* e iterações
  - Blocos
    - `for`
      - `for...in`;
      - `for...of`;
    - `do...while`;
    - `while`;
  - `label`;
  - `break`;
  - `continue`.

### O que temos de menos comum

#### *Falsy values*

São os valores **falseáveis**, que podem ser incomuns devido aos diferentes tipos de dados do `JS`:

- `false`;
- `undefined`;
- `null`;
- `0`;
- `NaN`;
- String vazia `""`.

#### `label`

Fornece uma declaração com um identificador que permite ao desenvolvedor se referir ao mesmo em outras partes do programa. Por exemplo, se quisermos usar um *label* (tradução: rótulo) para identificar um *loop*, e então usar `break` ou `continue` para indicar se o programa deve interroper ou continuar sua execução.

Sintaxe:

```js
label:
  statement
```

Onde `label` é o identificador. Exemplo:

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

#### `continue`

Utilizado para reiniciar um *loop* ou um `label`.

> **Importante:** se usado sem um `label`, ele finaliza a iteração atual do *loop* mais próximo e inicia a próxima iteração. Se aplicado a um `label`, ele interrompe a iteração atual daquele `label` e inicia a próxima.

Exemplo:

```js
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
```

Exemplo 2:

```js
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      // Quais são as diferenças dos efeitos entre "continue" e "continue checkIandJ"?
      continue;
      //continue checkIandJ;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

#### `for...in`

Vai iterar uma variável sobre todas as propriedades enumeráveis de um objeto.

```js
for (variable in object)
  statement
```


#### `for...of`

Cria um *loop* que itera sobre **objetos iteráveis**. Sintaxe:

```js
for (variable of iterable)
  statement
```

Enquanto o `for...in` itera sobre os nomes das propriedades (ou as chaves/*keys*), o `for...of` itera sobre os valores das propriedades, mas **somente das propriedades iteráveis**. Exemplo:

```js
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}

for (const i of arr) {
  console.log(i);
}
```

Exemplo 2:

```js
const arr2 = {
  arr: [2,3,4];
  foo: "hello"
}

for (const i in arr2){
  console.log(i);
}

// Erro -> arr2 não é iterável
for (const i of arr2){
  console.log(i);
}

// A propriedade "arr" é iterável
for (const i of arr2.arr){
  console.log(i);
}

// Percorrendo o objeto a partir de um iterável
for (const [key, val] of Object.entries(arr2)){
  console.log(key, val);
}
```

## Exercícios

A seguir estão **30 exercícios práticos de JavaScript**, organizados progressivamente em **15 fáceis, 10 médios e 5 difíceis**. O foco está em fazer o aluno **usar e combinar `break`, `continue`, `label`, `for...in` e `for...of`**, evitando exercícios puramente conceituais.

### Fáceis

#### 1. Parada ao encontrar um valor

Crie um array:

```javascript
const numeros = [4, 8, 15, 16, 23, 42, 10, 7];
```

Percorra o array com `for...of` e mostre cada número no console. Entretanto, quando encontrar o número `23`, a repetição deve ser interrompida imediatamente com `break`.

**Saída esperada:**

```text
4
8
15
16
23
```

---

#### 2. Ignorando números pares

Dado:

```javascript
const numeros = [3, 8, 11, 14, 17, 20, 25, 30];
```

Utilize `for...of` para mostrar somente os números **ímpares**. Os números pares devem ser ignorados utilizando `continue`.

---

#### 3. Procurando uma palavra

Dado:

```javascript
const palavras = ["casa", "carro", "computador", "mesa", "janela"];
```

Utilize `for...of` para procurar a palavra `"computador"`.

Quando ela for encontrada:

1. mostre `"Palavra encontrada!"`;
2. interrompa a repetição com `break`.

---

#### 4. Percorrendo propriedades de um objeto

Considere:

```javascript
const aluno = {
    nome: "Marina",
    idade: 21,
    curso: "Computação",
    semestre: 4
};
```

Utilize `for...in` para mostrar, separadamente, o **nome de cada propriedade** e seu **valor**.

Exemplo:

```text
nome: Marina
idade: 21
curso: Computação
semestre: 4
```

---

#### 5. Ignorando uma propriedade

Considere:

```javascript
const produto = {
    nome: "Notebook",
    marca: "Dell",
    preco: 3500,
    estoque: 12
};
```

Percorra o objeto utilizando `for...in`, mas utilize `continue` para **não mostrar a propriedade `preco`**.

---

#### 6. Parando em determinado índice

Considere:

```javascript
const cidades = ["Teresina", "Picos", "Floriano", "Parnaíba", "Oeiras"];
```

Utilize `for...in` para percorrer os índices do array.

Quando o índice corresponder à posição `2`, interrompa a repetição com `break`.

Mostre os índices visitados.

---

#### 7. Ignorando valores negativos

Considere:

```javascript
const temperaturas = [25, -3, 28, 31, -1, 22, 27];
```

Utilize `for...of` para mostrar somente as temperaturas maiores ou iguais a zero.

Use `continue` para ignorar os valores negativos.

---

#### 8. Encontrando o primeiro número maior que 100

Considere:

```javascript
const valores = [12, 45, 67, 89, 103, 150, 78, 200];
```

Percorra o array com `for...of`.

O programa deve mostrar o **primeiro valor maior que 100** e interromper a repetição usando `break`.

---

#### 9. Contando valores válidos

Considere:

```javascript
const notas = [8.5, -1, 7.0, 10, -5, 6.5, 9];
```

Utilize `for...of` para contar quantas notas são válidas, considerando válidos apenas valores entre `0` e `10`.

Valores inválidos devem ser ignorados com `continue`.

---

#### 10. Listando propriedades de um objeto

Crie um objeto representando um livro:

```javascript
const livro = {
    titulo: "JavaScript",
    autor: "Autor X",
    paginas: 350,
    ano: 2025
};
```

Utilize `for...in` para mostrar somente os **nomes das propriedades**.

---

#### 11. Somando valores

Considere:

```javascript
const valores = [10, 20, 5, 15, 30];
```

Utilize `for...of` para calcular a soma dos valores.

A repetição deve ser interrompida com `break` quando a soma acumulada atingir ou ultrapassar `40`.

---

#### 12. Ignorando strings vazias

Considere:

```javascript
const nomes = ["Ana", "", "Carlos", "", "Marina", "João"];
```

Utilize `for...of` para mostrar somente os nomes que não estão vazios.

Use `continue` para ignorar as strings vazias.

---

#### 13. Procurando uma propriedade

Considere:

```javascript
const usuario = {
    nome: "Carlos",
    email: "carlos@email.com",
    idade: 25,
    cidade: "Picos"
};
```

Utilize `for...in` para verificar se existe uma propriedade chamada `"email"`.

Ao encontrá-la, mostre seu valor e interrompa o `for` utilizando `break`.

---

#### 14. Percorrendo caracteres

Considere:

```javascript
const palavra = "PROGRAMACAO";
```

Utilize `for...of` para percorrer os caracteres da string.

Não mostre as vogais. Utilize `continue` para ignorá-las.

---

#### 15. Encontrando o primeiro elemento inválido

Considere:

```javascript
const idades = [18, 21, 25, 32, -4, 27, 30];
```

Percorra o array com `for...of`.

Quando encontrar uma idade negativa:

1. mostre uma mensagem informando que foi encontrado um valor inválido;
2. mostre o valor;
3. interrompa a repetição com `break`.

---

### Médios

#### 16. `for...in` e `continue`

Considere um objeto contendo informações de um usuário:

```javascript
const usuario = {
    nome: "Ana",
    idade: 23,
    email: "ana@email.com",
    senha: "123456",
    cidade: "Teresina"
};
```

Percorra o objeto com `for...in` e mostre todas as propriedades **exceto `senha`**.

A propriedade `senha` deve ser ignorada utilizando `continue`.

---

#### 17. `for...of` com objetos

Considere:

```javascript
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Diana", nota: 4 },
    { nome: "Eva", nota: 7 }
];
```

Utilize `for...of` para percorrer os alunos.

* Mostre o nome dos alunos aprovados, considerando nota `>= 6`.
* Utilize `continue` para ignorar os alunos reprovados.

---

#### 18. `break` em busca de dados

Considere:

```javascript
const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Webcam", preco: 250 },
    { nome: "Notebook", preco: 3500 }
];
```

Utilize `for...of` para procurar o primeiro produto cujo preço seja superior a `1000`.

Ao encontrá-lo:

* mostre seu nome;
* mostre seu preço;
* encerre o loop com `break`.

---

#### 19. `break` em loop aninhado

Considere uma matriz:

```javascript
const matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
];
```

Utilize dois `for` para percorrer a matriz.

Quando encontrar o valor `10`, interrompa **somente o loop interno** utilizando `break`.

Observe quais valores continuam sendo percorridos pelo loop externo.

---

#### 20. Primeiro exercício com `label`

Modifique o exercício anterior de modo que, ao encontrar o valor `10`, **os dois loops sejam interrompidos**.

Utilize um `label` associado ao loop externo e um:

```javascript
break nomeDoLabel;
```

Não utilize uma variável auxiliar para controlar a interrupção.

---

#### 21. `continue` em loop aninhado

Considere:

```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Percorra a matriz com dois loops.

Utilize `continue` para que os números pares não sejam exibidos.

O resultado deve conter somente:

```text
1
3
5
7
9
```

---

#### 22. `continue` com `label`

Considere:

```javascript
const matriz = [
    [10, 15, 20],
    [25, 30, 35],
    [40, 45, 50]
];
```

Percorra a matriz utilizando dois loops.

Quando uma linha contiver algum número maior que `30`, utilize `continue` com `label` para **pular imediatamente para a próxima linha**, sem terminar de processar a linha atual.

O exercício deve utilizar explicitamente um `label`.

---

#### 23. Processamento de pedidos

Considere:

```javascript
const pedidos = [
    { id: 101, status: "pago", valor: 150 },
    { id: 102, status: "cancelado", valor: 200 },
    { id: 103, status: "pago", valor: 350 },
    { id: 104, status: "pendente", valor: 120 },
    { id: 105, status: "pago", valor: 500 }
];
```

Percorra os pedidos com `for...of`.

* Ignore pedidos cancelados utilizando `continue`.
* Some os valores dos demais pedidos.
* Quando a soma atingir pelo menos `700`, interrompa o loop com `break`.

Ao final, mostre a soma acumulada.

---

#### 24. `for...in` em array e `for...of`

Considere:

```javascript
const dados = [10, 20, 30];
dados.nome = "valores";
dados.unidade = "metros";
```

Escreva dois loops:

1. um `for...in`;
2. um `for...of`.

Analise e explique, por meio da saída produzida, por que os dois loops apresentam resultados diferentes.

Depois, modifique o programa para que o `for...of` mostre apenas os valores numéricos.

---

#### 25. Filtrando propriedades

Considere:

```javascript
const configuracao = {
    largura: 1920,
    altura: 1080,
    idioma: "pt-BR",
    tema: "escuro",
    debug: true,
    versao: 3
};
```

Utilize `for...in` para percorrer o objeto.

O programa deve:

* ignorar a propriedade `debug` utilizando `continue`;
* interromper a execução caso encontre uma propriedade chamada `versao`, utilizando `break`;
* mostrar as propriedades visitadas antes da interrupção.

---

### Difíceis

#### 26. Busca em matriz com `label`

Considere uma matriz que representa um mapa:

```javascript
const mapa = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
];
```

O valor `1` representa um ponto de interesse.

Utilize dois loops para localizar **todos os pontos**, mas, ao encontrar o primeiro `1`, interrompa completamente a busca utilizando `break` com `label`.

O programa deve informar a linha e a coluna do primeiro ponto encontrado.

**Restrição:** não utilize `return`, `throw` ou uma variável booleana para controlar a interrupção dos loops.

---

#### 27. Processamento de registros

Considere:

```javascript
const registros = [
    {
        id: 1,
        dados: ["OK", "OK", "OK"]
    },
    {
        id: 2,
        dados: ["OK", "ERRO", "OK"]
    },
    {
        id: 3,
        dados: ["OK", "OK", "OK"]
    },
    {
        id: 4,
        dados: ["ERRO", "ERRO", "OK"]
    }
];
```

Para cada registro:

* percorra `dados` utilizando `for...of`;
* utilize `continue` para ignorar valores `"OK"`;
* quando encontrar `"ERRO"`, interrompa a análise do registro atual com `break`;
* se o registro possuir erro, ele deve ser informado.

**Desafio adicional:** utilize `continue` com `label` para passar diretamente para o próximo registro assim que um erro for encontrado.

---

#### 28. Analisando propriedades e valores

Considere:

```javascript
const sistema = {
    nome: "Servidor A",
    cpu: 85,
    memoria: 72,
    disco: 91,
    rede: 65,
    temperatura: 78
};
```

Percorra o objeto utilizando `for...in`.

Para cada propriedade numérica:

* se o valor for menor que `70`, ignore-o com `continue`;
* se estiver entre `70` e `90`, informe que o recurso está em nível de atenção;
* se for maior que `90`, informe que o recurso está em nível crítico e interrompa a análise com `break`.

O resultado deve identificar **qual propriedade provocou a interrupção**.

---

#### 29. Matriz de notas

Considere uma matriz na qual cada linha representa um aluno e cada coluna representa uma avaliação:

```javascript
const notas = [
    [8, 7, 9],
    [6, 5, 4],
    [10, 9, 8],
    [5, 7, 6],
    [9, 10, 10]
];
```

Para cada aluno:

1. percorra suas notas com `for...of`;
2. ignore notas abaixo de `6` utilizando `continue`;
3. calcule a soma das notas consideradas;
4. se uma nota for `10`, interrompa a análise das demais notas daquele aluno com `break`;
5. utilize um `label` para interromper **completamente o processamento da turma** caso a média de algum aluno seja superior a `9`.

O programa deve informar:

* o aluno que provocou a interrupção, quando houver;
* as notas analisadas;
* a média calculada.

---

#### 30. Desafio final — inventário hierárquico

Considere um sistema de inventário:

```javascript
const estoque = {
    computadores: [
        { nome: "Notebook A", quantidade: 5 },
        { nome: "Notebook B", quantidade: 0 },
        { nome: "Desktop A", quantidade: 8 }
    ],

    perifericos: [
        { nome: "Mouse", quantidade: 20 },
        { nome: "Teclado", quantidade: 0 },
        { nome: "Monitor", quantidade: 4 }
    ],

    componentes: [
        { nome: "Memória RAM", quantidade: 12 },
        { nome: "SSD", quantidade: 0 },
        { nome: "Placa de vídeo", quantidade: 2 }
    ]
};
```

Desenvolva um programa que percorra toda a estrutura utilizando **`for...in` e `for...of`**.

Regras:

1. `for...in` deve ser utilizado para percorrer as categorias do estoque.
2. `for...of` deve ser utilizado para percorrer os produtos de cada categoria.
3. Produtos com quantidade `0` devem ser ignorados com `continue`.
4. Ao encontrar um produto cuja quantidade seja menor que `3`, informe que ele está com estoque baixo.
5. Ao encontrar um produto chamado `"SSD"`, interrompa **toda a análise do estoque** utilizando `break` com `label`.
6. O programa deve mostrar quantos produtos foram efetivamente analisados antes da interrupção.

**Restrição:** não utilize `return`, `throw`, `some()`, `every()`, `find()` ou outras funções de iteração para substituir os loops.
