# Aula 07

## DHTML

O **DHTML** (*Dynamic HTML*), introduzido em 1997 pela Microsoft no Internet Explorer 4, é uma combinação de tecnologias (HTML, CSS e JavaScript) que permite a criação de páginas web interativas e com conteúdo que se altera em tempo real, sem precisar recarregar a página. 

O termo não se refere a uma tecnologia única, mas sim a um conjunto de técnicas que utiliza o Modelo de Objeto do Documento (DOM) para manipular elementos da página através de interações com o usuário, como cliques ou movimentos do mouse.

Seu funcionamento básico consiste em carregar todo o conteúdo de uma página e mostrá-la ao usuário dinamicamente, à medida em que é requisitado. Por exemplo, se um site tiver múltiplas abas, com o DHTML os conteúdos de todas as abas são carregados, porém só é mostrado dinamicamente o conteúdo da aba selecionada.

Em contrapartida existe o **Ajax** e, mais recentemente, o **Fetch API**, tecnologias que permitem a atualização dinâmica da página, contudo com carregamento de informações a partir do servidor.

Exemplos simples:

- [Exemplo 1](exemplo1.html).
- [Exemplo 2](exemplo2.html).

## Eventos do JavaScript[^1]

[^1]: [Material original](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

Eventos são coisas que acontecem no sistema onde você está programando, sobre os quais o sistema te informa e você pode escrever códigos para reagir a eles. Por exemplo, se o usuário clica em um botão, você pode querer reagir a essa ação, exibindo alguma informação.

Eventos são coisas que acontecem no sistema onde você está programando — o sistema produz um sinal de algum tipo quando um evento ocorre, e fornece um mecanismo pelo qual uma ação (ou seja, a execução de um código) pode ocorrer quando o evento acontece. Eventos são disparados dentro da janela do navegador e tendem a estar ligados a um item específico dentro da janela (um elemento, ou conjunto de elementos, o documento HTML carregado, ou a janela inteira). Por exemplo:

- O usuário seleciona, clica, ou passa o cursor por algum elemento.
- O usuário pressiona alguma tecla do teclado.
- O usuário redimensiona ou fecha a janela do navegador.
- Uma página web termina de ser carregada.
- Um formulário é submetido.
- Um vídeo é reproduzido, pausado ou finalizado.
- Um erro acontece.

Para ver todos os eventos possívels em um DOM: [índice de eventos](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events#event_index).

Para reagir a um evento, é preciso anexar um *`event listener`*, o qual fica "ouvindo" (ou observando) a execução do programa à espera do evento em questão. Quando o evento acontece, uma função *`event handler`* (manipulador de evento) é chamada para "reagir".

Vejamos o [exemplo 3](exemplo3.html).

### Além de `click`

Vamos observar outros eventos possíveis disparados por um botão. No [exemplo 3](exemplo3.html) vamos trocar `click` pelo seguinte:

- `focus` e `blur` — o que vai fazer a cor mudar quando o botão é selecionado e deselecionado (testar com tab para selecionar sem clicar).
- `dblclick` — a cor deve mudar com um clique duplo no botão.
- `mouseover` e `mouseout` — a cor deve mudar quando o mouse estiver em cima do botão e também sair de cima dele.

### Removendo *listeners*

Um *listener* adicionado com `addEventLister()` pode ser removido. A forma mais comum de se fazer isso é usado o método `removeEventListener()`. Exemplo:

```js
botao.removeEventListener("click", changeBackground);
```

Para programas grandes e complexos, essa remoção por melhorar a eficiência do código. Também existe a possibilidade de um mesmo botão resultar em ações diferentes, dependendo das circunstâncias.

### Adicionando múltiplos *listeners* para um único evento

Nesse caso, o método `addEventLister()` pode ser declarado várias vezes para ter múltiplos manipuladores (*event handlers*). Ex.:


```js
elemento.addEventListener("click", functionA);
elemento.addEventListener("click", functionB);
```

No exemplo acima as duas funções são executadas.

### Objetos de evento

São os objetos associados ao evento disparado, e são passados automaticamente para as funções *`event handlers`*, de forma que permite mais funcionalidades e informações. Vejamos o [exemplo 3 modificado](exemplo3_1.html).

Como são objetos, possuem atributos e métodos. Ou seja, dá para brincar bastante com as inúmeras possibilidades de cada tipo de evento.

### Evitando o comportamento padrão

Algumas vezes podemos nos deparar com uma situação onde não queremos que um evento faça o que faz por padrão. O exemplo mais comum para exemplificar uma situação desse tipo é a submissão de um formulário web.

Mais especificamente a situação ocorre quando o usuário insere informações erradas e, por causa disso, o melhor é evitar o envio desses dados para o servidor, uma vez que sabemos que os dados serão rejeitados. Vejamos o [exemplo 4](exemplo4.html).