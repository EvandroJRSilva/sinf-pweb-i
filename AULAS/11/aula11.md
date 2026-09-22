# Aula 11

Sumário

- [Aula 11](#aula-11)
  - [JavaScript - Funções](#javascript---funções)
    - [Parâmetros](#parâmetros)
      - [Parâmetros predefinidos (*default*)](#parâmetros-predefinidos-default)
      - [Parâmetros Rest](#parâmetros-rest)
        - [Objeto `arguments`](#objeto-arguments)
    - [Expressão de função (*function expression*)](#expressão-de-função-function-expression)
      - [Funções *callback*](#funções-callback)
    - [Função de seta (*arrow function*)](#função-de-seta-arrow-function)
  - [Exercícios](#exercícios)
    - [Fáceis](#fáceis)
    - [Médio](#médio)
    - [Difícil](#difícil)


## JavaScript - Funções

Sintaxe:

```js
function nome([param[, param[, ... param]]]){
  instruções
}
```

- `nome`: o nome da função;
- `param`: o nome de um argumento a ser passado;
- `instruções`: as instruções que formam o corpo da função.

O **retorno padrão** das funções é `undefined`. Caso queira retornar outro valor, é necessário utilizar a palavra reservada `return`.

### Parâmetros

Além dos parâmetros "normais", o JS permite outros dois tipos de parâmetro:

- Predefinidos (*default*);
- Rest.

Por padrão, os parâmetros "normais" recebem o valor `undefined`, porém o desenvolvedor pode deixar valores predefinidos.

#### Parâmetros predefinidos (*default*)

Sintaxe: 

```js
function [nome]([param1[ = valorPredefinido1 ][, ..., paramN[ = valorPredefinidoN ]]]) {
   instruções
}
```

Exemplo:

```js
function mult(a, b=1){
  return a*b;
}

mult(5, 2); // 10
mult(5, 1); // 5
mult(5); // 5
```

Parâmetros que já foram avaliados ficam disponíveis para uso para os parâmetros seguintes:

```js
function singularAutoPlural(singular, plural = singular+"s",
                            rallyingCry = plural + " ATTACK!!!") {
  return [singular, plural, rallyingCry ];
}

//["Gecko","Geckos", "Geckos ATTACK!!!"]
singularAutoPlural("Gecko");

//["Fox","Foxes", "Foxes ATTACK!!!"]
singularAutoPlural("Fox","Foxes");

//["Deer", "Deer", "Deer ... change."]
singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully 
  petition the government for positive change.")
```

#### Parâmetros Rest

Permite representar um número indefinido de argumentos como um array. Sintaxe:

```js
function(a, b, ...theArgs) {
  // ...
}
```

Exemplo:

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

##### Objeto `arguments`

É uma variável local disponível dentro de todas as funções. Pode ser utilizado para referenciar os argumentos de uma função dentro da função. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. Exemplo:

```js
arguments[0];
arguments[1];
arguments[2];
```

Diferenças entre **parâmetros *rest*** e `arguments`:

- *Parâmetros rest* são os únicos que não foram atribuidos a um nome separado, enquanto o `arguments` contém todos os argumentos passados para a função;
- O objeto `arguments` não é um array, enquanto *parâmetros rest*  são instâncias `Array`, isso significa que métodos como `sort`, `map`, `forEach` ou `pop` podem ser aplicados diretamente.

Mas é possível transformar `arguments` em um `Array`. Exemplo:

```js
function concatena(separador){
  var args = Array.prototype.slice.call(argumens, 1);
  return args.join(separador);
}

concatena(", ", 1, 2, 3); // 1, 2, 3
concatena("; ", 1, 2, 3); // 1; 2; 3
```

Se a função não tiver parâmetros predefinidos, rest ou [desestruturados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring), os valores no objeto `arguments` **modificam** os valores dos argumentos (e vice-versa). Exemplo:

```js
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99
```

e

```js
function func(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

Mas, se a função tiver parâmetros predefinidos, rest ou [desestruturados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring), os valores no objeto `arguments` **não modificam** os valores dos argumentos (e vice-versa). Exemplo:

```js
function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10
```

e

```js
function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10
```

### Expressão de função (*function expression*)

A palavra reservada `function` pode ser usada para definir uma função dentro de uma expressão. Sintaxe:

```js
function [nome]([param1[, param2[, ..., paramN]]]) {
   instruções
}
```

Perceba que `nome` agora é opcional. Exemplos:

```js
let dizPonha = function(){
  console.log("Ponha");
}

const getAreaRet = function(largura, altura){
  return largura * altura;
}

var math = {
  fatorial: function fatorial(n){
    if (n <= 1) return 1;
    return n * fatorial(n-1);
  }
}

dizPonha();
console.log(getAreaRet(3,4)); // 12
console.log(math.fatorial(10)); //3628800
```

#### Funções *callback*

Esse é o caso de funções sendo passadas como parâmetros para outras funções. É possível, inclusive, passar uma expressão de função. Exemplo:

```js
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

### Função de seta (*arrow function*)

Sintaxe:

```js
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression

// Se houver só um nome de parâmetro, os parênteses são opcionais
singleParam => { statements }
// Mas se não tiver parâmetros:
() => { statements }
```

Exemplos:

```js
let soma = (a,b) => a+b;
let dizPonha = () => console.log("Ponha");

console.log(soma(1, 2)); // 3
dizPonha();
```

```js
let idade = prompt("Insira a sua idade", 18);

let boasVindas = idade < 18
  ? () => alert(`Não pode entrar: menor de idade -> ${idade}`)
  : () => alert("Pode entrar: maior de idade");

boasVindas();
```

## Exercícios

### Fáceis

1. Crie uma *function expression* chamada `dobro` que receba um número e retorne o seu dobro. Depois, utilize a função para calcular o dobro de 15 e exiba o resultado no console.
2. Crie uma *function expression* chamada `saudacao` que receba um nome e exiba:
    ```
    Olá, NOME!
    ```
    O parâmetro deverá ter "Visitante" como valor padrão.
3. Transforme a seguinte *function expression* em uma *arrow function*:
    ```js
    const quadrado = function (numero) {
      return numero * numero;
    };
    ```
4. Crie uma *arrow function* chamada cubo que receba um número e retorne o seu cubo. A função deve utilizar retorno implícito, isto é, não deve utilizar `return`.
5. Crie uma *function expression* chamada `executarOperacao` que receba:
    - dois números;
    - uma função como terceiro parâmetro.

    A função deverá chamar o terceiro parâmetro passando os dois números. Depois, crie duas funções *callback*: `somar` e `multiplicar`. Use `executarOperacao` para realizar as duas operações.
6. Utilize uma *arrow function* como *callback* para a seguinte função:
    ```js
    function executar(numero, callback) {
      console.log(callback(numero));
    }
    ```

    Faça uma chamada que exiba o dobro de 25.
7. Crie uma *arrow function* `potencia` que receba:
    - `base`;
    - `expoente`, com valor padrão 2.

    A função deverá retornar a potência calculada.
8. Crie uma *function expression* chamada `processarNome` que receba um nome e uma *callback*. A função deverá passar o nome para a *callback*. Crie uma *arrow function* que transforme o nome recebido em letras maiúsculas.
9. Crie uma *arrow function* chamada `somar` que receba qualquer quantidade de números utilizando *rest parameter*. A função deverá retornar a soma de todos os valores recebidos.
10. Crie uma function expression chamada `calcular` que receba:
    - um *callback*;
    - qualquer quantidade de números.

    A *callback* deverá receber os números e realizar uma operação definida por você. Crie pelo menos duas *callbacks* diferentes para utilizar com `calcular`.
11. Crie uma *function expression* chamada `mostrarArgumentos` que receba qualquer quantidade de argumentos. Utilize o objeto `arguments` para percorrer e exibir todos os valores recebidos.
12. Crie uma function expression:
    ```js
      const analisar = function (a, b) {
      // ...
    };
    ```

    Faça com que ela exiba:

    1. o valor de `a`;
    2. o valor de `b`;
    3. a quantidade total de argumentos recebidos.
13. Crie uma função `calcularDesconto` que receba:
    
    - preço;
    - percentual de desconto, com valor padrão de 10;
    - *callback*.

    A *callback* deverá receber o preço final e exibi-lo. Teste a função omitindo o percentual de desconto e também informando um percentual explicitamente.
14. Considere:
    ```js
    const numeros = [2, 4, 6, 8, 10];
    ```

    Utilize `forEach()` e uma *arrow function* como *callback* para exibir o quadrado de cada número.
15. Considere:
    ```js
    const nomes = ["Ana", "Bruno", "Carlos", "Daniel"];
    ```

    Utilize `forEach()` com uma *function expression* como *callback*. A *callback* deverá receber cada nome e exibir uma mensagem no formato:
    ```
    Usuário: Ana
    Usuário: Bruno
    ...
    ```

### Médio

16. Crie uma função `filtrarValores` que receba:
    - um array de números;
    - uma *callback* responsável por determinar se um número deve ser mantido.
    
    A função deverá retornar um novo array contendo apenas os valores para os quais a *callback* retornar `true`. Utilize uma *arrow function* como callback para obter somente os números pares.
17. Crie uma *arrow function* chamada `maioresQue` que receba:
    - um valor limite;
    - qualquer quantidade de números.
    
    A função deverá retornar um array contendo apenas os números maiores que o limite. Exemplo:
    ```js
    maioresQue(10, 5, 12, 8, 20, 3, 15); // 10, 20, 15
    ```
18. Crie uma *function expression* chamada `ordenarDados` que receba:
    - um array;
    - uma *callback* de comparação.
    
    Utilize a função para ordenar um array de números de duas maneiras: crescente, decrescente. As duas regras de ordenação devem ser implementadas por *callbacks* diferentes.
19. Crie uma *function expression* chamada `media` que utilize exclusivamente o objeto `arguments` para calcular a média aritmética de todos os valores recebidos. A função deve funcionar com qualquer quantidade de argumentos.
20. Crie duas funções que façam exatamente a mesma tarefa: calcular a soma de todos os argumentos recebidos. A primeira deverá utilizar `arguments`, e a segunda *rest parameters*. Depois, teste ambas com diferentes quantidades de argumentos e explique, no código por meio de comentários, uma diferença entre as duas abordagens.
21. Crie uma função `processarAluno` que receba:
    - nomes;
    - três notas;
    - *callback*.
    
    A *callback* deverá receber o nome e as três notas e produzir uma mensagem indicando a média do aluno. Crie duas *callbacks*:
    - uma que informe a média;
    - outra que informe se o aluno foi aprovado considerando média >= 7.
22. Crie uma *function expression* chamada `aplicarOperacoes` que receba:
    - um valor;
    - qualquer quantidade de funções *callback*.
    
    A função deverá aplicar as *callbacks* uma após a outra, utilizando o resultado de uma como entrada da próxima. Por exemplo, considerando as funções `dobrar`, `somarDez` e `quadruplicar`, e uma chamada como: 
    ```js
    aplicarOperacoes(5, dobrar, somarDez, quadruplicar);
    ```

    deverá executar as operações sequencialmente.
23. Crie uma função `criarUsuario` que receba:
    - nome;
    - idade, com valor padrão 18;
    - *callback*.

    A *callback* deverá receber um objeto contendo `nome` e `idade`. Crie duas *callbacks* diferentes:
    - uma para exibir os dados;
    - outra para verificar se o usuário é maior de idade.
24. Crie uma função `processarNumeros` que receba uma quantidade indefinida de números por meio de *rest parameter* e uma *callback*. A função deverá passar cada número individualmente para a *callback*. Teste utilizando *callbacks* que:
    1. elevem cada número ao quadrado;
    2. dobrem cada número;
    3. exibam somente os números pares.
25. Analise o seguinte código:
    ```js
    function teste() {
      const f = () => {
        console.log(arguments);
      };

      f(10, 20, 30);
    }

    teste(1, 2, 3);
    ```

    Sem executar o programa inicialmente, determine o que será exibido por `console.log(arguments)`. Depois:
    1. explique por que esse resultado ocorre;
    2. modifique o código para que a *arrow function* trabalhe com os argumentos 10, 20, 30;
    3. faça a alteração utilizando *rest parameter*.

### Difícil

26. Crie uma função `pipeline` que receba:
    - um valor inicial;
    - qualquer quantidade de *callbacks* utilizando *rest parameter*.
    
    A função deverá executar todas as *callbacks* sequencialmente. Por exemplo:
    ```js
    const resultado = pipeline(
      5,
      x => x * 2,
      x => x + 10,
      x => x / 5
    );
    ```

    O resultado deverá ser obtido pela sequência: `5 → 10 → 20 → 4`. Implemente a função de forma que qualquer quantidade de etapas possa ser utilizada.
27. Considere um array de pedidos:
    ```js
    const pedidos = [
        { cliente: "Ana", valor: 120 },
        { cliente: "Bruno", valor: 80 },
        { cliente: "Carlos", valor: 250 },
        { cliente: "Daniel", valor: 150 }
    ];
    ```

    Crie uma função `processarPedidos` que receba:
    - o array de pedidos;
    - uma quantidade indefinida de *callbacks*.
    
    Cada *callback* deverá transformar ou analisar os pedidos. Implemente pelo menos três etapas:
    1. selecionar pedidos acima de determinado valor;
    2. aplicar um desconto;
    3. gerar uma mensagem para cada pedido.
    
    Utilize *function expressions* e *arrow functions* em diferentes partes da solução.
28. Crie uma função chamada `meuMap` que receba:
    - um array;
    - uma *callback*.
    
    Ela deverá produzir um novo array, aplicando a *callback* a cada elemento do array original. Por exemplo:
    ```js
    const numeros = [1, 2, 3, 4, 5];

    const resultado = meuMap(
        numeros,
        numero => numero * numero
    );
    ```

    Deve produzir: `[1, 4, 9, 16, 25]`. **Restrição**: não utilize o método `map()` na implementação de `meuMap`.
29. Crie uma *function expression* chamada `analisarDados` capaz de receber:
    - um parâmetro obrigatório `operacao`;
    - qualquer quantidade de valores numéricos.

    A função deverá utilizar `arguments` para identificar e processar os argumentos recebidos. Implemente pelo menos as operações: soma, media, maior, menor. Por exemplo:
    ```js
    analisarDados("soma", 10, 20, 30);
    analisarDados("media", 8, 9, 7);
    analisarDados("maior", 12, 5, 30, 8);
    ```

    Depois, crie uma segunda versão utilizando *rest parameter*, sem utilizar `arguments`. Compare as duas implementações.
30. Implemente um pequeno sistema de processamento de dados numéricos. A solução deverá possuir uma função principal `processar(...)` que aceite:
    - um valor inicial;
    - qualquer quantidade de *callbacks*;
    - um parâmetro opcional que determine se o resultado final deve ser exibido.

    O sistema deverá permitir chamadas como:
    ```js
    processar(
      10,
      x => x * 2,
      x => x + 5,
      x => x / 3
    );
    ```

    e executar as operações em sequência. Além disso, crie pelo menos **três *callbacks* reutilizáveis** como *function expressions* e pelo menos **duas *callbacks* implementadas diretamente como *arrow functions***. A implementação deve utilizar obrigatoriamente:
    - function expression;
    - arrow function;
    - callback function;
    - parâmetro default;
    - rest parameter.
    
    Como parte da atividade, explique por meio de comentários no código **qual é o papel de cada um desses recursos na solução**.