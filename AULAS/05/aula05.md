# Aula 05

Fontes:

- Principal: [The Modern JavaScript Tutorial](https://javascript.info/)
- Secundárias
  - [Roadmap](https://roadmap.sh/javascript).
  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).
  - [Eloquent JavaScript](https://eloquentjavascript.net/).

## O que é JavaScript?

`JavaScript` foi inicialmente criado para "dar vida às páginas web".

Os programas feitos nesta linguagem são chamados `scripts`. Eles podem ser escritos diretamente no HTML da página e executados automaticamente com o carregamento da página.

Os `scripts` são fornecidos e executados como "texto puro". Eles não precisam de preparação especial ou compilação para executar. Neste aspecto o JavaScript é bem diferente da linguagem `Java`.

<!--
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<i class="fas fa-info-circle" style="color:blue"></i> Testano]
-->

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<div style="border:2px cornflowerblue solid;">
<h3><i class="material-icons" style="color:cornflowerblue;font-size:18px">info</i> Por que o JavaScript tem esse nome?</h3>

<p>Quando o JavaScript foi criado ele tinha outro nome: "LiveScript". Nesse mesmo período o Java estava muito popular, então decidiram incorporar Java no nome da linguagem para ajudar em sua popularização.</p>
<p>À medida em que evoluiu, o JavaScript se tornou uma linguagem completamente independente, com sua própria especificação chamada de <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> e, agora, já não tem qualquer relação com o Java.</p>
</div>

Hoje em dia o JavaScript pode ser executado não apenas no navegador, mas também no servidor ou em qualquer dispositivo que tenha um programa chamado `JavaScript engine`. Por exemplo o [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) é a engine utilizada `Chrome` e seus derivados.

## O que o JavaScript pode fazer no navegador

O JavaScript moderno é uma linguagem de programação "segura". Ela não fornece acesso de baixo nível à memória ou a CPU porque foi inicialmente criada para navegadores, os quais não requerem tal acesso.

O que o JavaScript é capaz de fazer depende muito do ambiente sobre o qual esteja rodando. Por exemplo, o Node.js tem suporte para funções que permitem a leitura/escrita de arquivos arbitrários, para executar solicitações de rede, etc.

No navegador o JavaScript pode fazer tudo que esteja relacionado à manipulação de uma página web, interação com o usuário e com o servidor. Por exemplo:

- Adicionar HTML à página, mudar o conteúdo atual, modificar estilos.
- Reagir às ações do usuário, como cliques do mouse, ou a movimentação de sua seta, botões pressionados.
- Enviar requisições pela rede para servidores remotos, baixar e subir arquivos (as tecnologias AJAX e COMET).
- Consultar e configurar cookies, fazer perguntas a quem estiver acessando uma página, exibir mensagens.
- Lembrar dos dados do lado do cliente (*client-side*), a partir do armazenamento local (*local storage*).

## O que o JavaScript não pode fazer no navegador

As possibilidades de ação do JavaScript no navegador são limitadas para proteção dos usuários. O objeto é prevenir que uma página web maldosa acesse informações privadas ou danifique os dados do uusário.

Exemplos de restrições:

- O JavaScript em uma página web não pode ler/escrever arquivos arbitrários no HD, copiá-los ou rodar programas. Ele não tem acesso direto às funções do S.O.
- Navegadores modernos permitem ao JavaScript trabalar com arquivos, mas o acesso é limitado e concedido apenas se o usuário fizer certas ações, como arrastar um arquivo para uma janela do navegador, ou selecionando a partir de uma tag `<input>`.
- Existem formas de interagir com a câmera, microfone e outros dispositivos, mas eles requerem permissão explícita do usuário. Portanto, uma página com JavaScript não pode habilitar uma câmera sorrateiramente, observar o ambiente e enviar informações para algum espião.
- Diferentes abas e janelas geralmente não sabem da existência umas das outras. Algumas vezes isso é possível, por exemplo, quando uma janela usa JavaScript para abrir outra janela. Mas, mesmo nesse caso, o JavaScript de uma página não pode acessar a outra página se elas são de diferentes sites (ou seja, domínio, protocolo ou porta diferentes).
- Isto é chamado de "Política da Mesma Origem" (*Same Origin Policy*). Para contornar isso, ambas as páginas precisam consentir em trocar dados e precisam conter código JavaScript especial para lidar com isso. Essa limitação é, reiterando, para a segurança do usuário.
- O JavaScript pode facilmente se comunicar pela rede com o servidor de onde a página web veio. Mas sua habilidade de receber dados de outros sites/domínios é prejudicada. Apesar de ser possível, é necessário o aceite explícito (comunicado pelos cabeçalhos HTTP) do lado remoto. Mais uma vez, isto é uma limitação por segurança.

<!--
TODO: 
    - Restante do livro: https://javascript.info/
    - Conteúdo introdutório: https://javascript.info/intro
-->


## Exercícios

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

1. **Básico:** Crie um arquivo HTML simples com uma tag `<script>` inline que imprima "Olá, Mundo!" no console. Insira o script no final do `<body>`. Abra no navegador e verifique o console.

2. **Intermediário:** Crie um HTML com um botão que, ao clicar, execute uma função JavaScript inline via `onclick` para alterar o texto do botão para "Clicado!". Use apenas JavaScript inline, sem arquivo externo.

3. **Prática:** Linke um arquivo externo `meu-script.js` em um HTML, colocando-o no `<head>` com `defer`. No JS, defina uma variável global e acesse-a no console do navegador.

4. **Avançado:** Crie um HTML que carregue dois scripts: um com `async` e outro sem. Observe a ordem de execução no console (use `console.log` em cada).

5. **Desafio:** Insira JS em um HTML para adicionar um evento `onload` à janela que alerte o tempo de carregamento da página (use `performance.now()`).

6. **Básico:** Declare três variáveis com `let`: uma string "JavaScript", um número 10 e um booleano true. Use o operador `+` para concatenar a string com o número e imprima no console.

7. **Intermediário:** Crie uma variável `idade` com valor 25. Use operadores lógicos (`&&` e `||`) para verificar se é maior que 18 E par (idade % 2 === 0). Imprima o resultado.

8. **Prática:** Atribua um valor a uma variável com `const`, tente reatribuir e observe o erro no console. Depois, use `let` para demonstrar reatribuição.

9. **Avançado:** Calcule a área de um círculo (raio = 5) usando `Math.PI` e operadores aritméticos. Use `===` para comparar o resultado com 78.54 e imprima se é igual.

10. **Desafio:** Crie uma expressão que some dois números, multiplique por 2 e verifique se é maior que 10 usando `>`. Use template literals para imprimir: `O resultado é ${resultado}`.

11. **Básico:** Use `typeof` em uma string, um número e `null`. Imprima cada um no console para confirmar os tipos primitivos.

12. **Intermediário:** Converta o número 42 para string usando `String(42)`, concatene com " é um número" e imprima. Verifique o tipo final com `typeof`.

13. **Prática:** Crie uma variável `valor` com `undefined`. Use `typeof` e compare com `null` usando `!==`. Explique por que são diferentes tipos primitivos.

14. **Básico:** Escreva um `if-else` que verifique se uma nota (80) é maior ou igual a 70: imprima "Aprovado" ou "Reprovado".

15. **Intermediário:** Use `switch` para um dia da semana (3 = Quarta). Imprima o nome do dia; inclua um `default` para "Dia inválido".

16. **Prática:** Crie um `if-else if-else` para classificar uma idade: <13 "Criança", 13-19 "Adolescente", >=20 "Adulto". Teste com idade 15.

17. **Avançado:** Use o operador ternário para verificar se um número é positivo, negativo ou zero: `numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero"`. Imprima.

18. **Desafio:** Em um `switch`, sem `break` intencionalmente, faça fall-through para que case 1 e 2 imprimam "Baixo", e case 3 "Alto". Teste com 2.

19. **Bônus:** Verifique se uma string é vazia ou não usando `if (!str)`. Imprima "Vazia" ou "Não vazia".

20. **Prática mista:** Combine `if` com operadores: se (x > 5 && y < 10), incremente uma variável; else, decremente. Teste valores.

21. **Básico:** Use um `for` para imprimir números de 1 a 5 no console.

22. **Intermediário:** Com `while`, some números de 1 a 10 e imprima a soma final (55).

23. **Prática:** Aninhe um `for` dentro de outro: imprima uma tabuada de 1 a 3 (ex: 1x1=1, 1x2=2... 3x3=9).

24. **Avançado:** Use `do-while` para pedir input (simule com prompt) até o usuário digitar "sair". Imprima cada entrada.

25. **Desafio:** Com `for`, encontre e imprima apenas números ímpares de 1 a 20 usando `%`.

26. **Prática mista:** Use `while` para contar regressivamente de 10 a 1, parando se encontrar 5 (use `break`).

27. **Básico:** Declare uma função `saudacao` que receba um nome e imprima "Olá, [nome]!". Chame com "João".

28. **Intermediário:** Crie uma função `multiplica` com parâmetro padrão (2) que multiplique um número por ele. Teste sem e com argumento.

29. **Prática:** Escreva uma função anônima atribuída a `calcular` que some dois parâmetros e retorne o resultado. Chame e imprima.

30. **Desafio:** Crie uma função que use `if` dentro para retornar "Par" ou "Ímpar" baseado em um número. Use hoisting chamando antes da declaração.