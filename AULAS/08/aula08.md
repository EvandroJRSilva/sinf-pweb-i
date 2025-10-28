# Aula 08

## Eventos do JavaScript[^1]

Sumário

- [Aula 08](#aula-08)
  - [Eventos do JavaScript\[^1\]](#eventos-do-javascript1)
    - [Além de `click`](#além-de-click)
    - [Removendo *listeners*](#removendo-listeners)
    - [Adicionando múltiplos *listeners* para um único evento](#adicionando-múltiplos-listeners-para-um-único-evento)
    - [Objetos de evento](#objetos-de-evento)
    - [Evitando o comportamento padrão](#evitando-o-comportamento-padrão)
  - [Exercícios](#exercícios)
    - [Questões Fáceis (1-20)](#questões-fáceis-1-20)
    - [Questões Médias (21-40)](#questões-médias-21-40)
    - [Questões Difíceis (41-50)](#questões-difíceis-41-50)


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

Vejamos o [exemplo 1](exemplo1.html).

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

São os objetos associados ao evento disparado, e são passados automaticamente para as funções *`event handlers`*, de forma que permite mais funcionalidades e informações. Vejamos o [exemplo 1 modificado](exemplo1_1.html).

Como são objetos, possuem atributos e métodos. Ou seja, dá para brincar bastante com as inúmeras possibilidades de cada tipo de evento.

### Evitando o comportamento padrão

Algumas vezes podemos nos deparar com uma situação onde não queremos que um evento faça o que faz por padrão. O exemplo mais comum para exemplificar uma situação desse tipo é a submissão de um formulário web.

Mais especificamente a situação ocorre quando o usuário insere informações erradas e, por causa disso, o melhor é evitar o envio desses dados para o servidor, uma vez que sabemos que os dados serão rejeitados. Vejamos o [exemplo 2](exemplo2.html).

## Exercícios

Para cada exercício, use este HTML básico como base (adapte elementos conforme necessário):

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head><title>Prática Eventos</title></head>
    <body>
        <!-- Adicione elementos aqui conforme a questão -->
        <script>
            // Seu código JS aqui
        </script>
    </body>
</html>
```

### Questões Fáceis (1-20)

1. **Clique simples:** Adicione um `<button id="btn">Clique</button>`. Use `addEventListener('click')` para alterar seu texto para "Clicado!" ao clicar.

2. **Duplo clique:** No mesmo botão, adicione `addEventListener('dblclick')` para alertar "Duplo clique detectado!".

3. **Mouse down:** Em um `<div id="quadrado">Pressione</div>`, use `mousedown` para mudar a cor de fundo para 'red'.

4. **Mouse up:** No mesmo div, adicione `mouseup` para mudar a cor de volta para 'white'.

5. **Mouse over:** Crie um `<p id="texto">Passe o mouse</p>`. Use `mouseover` para adicionar uma classe CSS 'destaque' (defina no estilo).

6. **Mouse out:** No mesmo parágrafo, use `mouseout` para remover a classe 'destaque'.

7. **Focus em input:** Adicione um `<input id="campo">`. Use `focus` para destacar a borda com `style.border = '2px solid blue'`.

8. **Blur em input:** No input, use `blur` para remover o destaque da borda (`border = ''`).

9. **Key down:** No input, adicione `keydown` para alertar a tecla pressionada com `event.key`.

10. **Key up:** No input, use `keyup` para converter o texto para maiúsculas (`value = value.toUpperCase()`).

11. **Input change:** Use `input` no input para atualizar um `<span id="eco"></span>` com o valor digitado em tempo real.

12. **Change em select:** Crie um `<select id="opcoes"><option value="1">Um</option></select>`. Use `change` para imprimir o valor selecionado no console.

13. **Submit de form:** Adicione um `<form id="form"><input type="submit"></form>`. Use `submit` com `preventDefault()` para alertar "Formulário enviado!".

14. **Load da página:** Use `window.addEventListener('load')` para imprimir "Página carregada!" no console.

15. **Resize da janela:** Adicione `window.addEventListener('resize')` para atualizar um `<p id="tamanho">Largura: </p>` com `window.innerWidth`.

16. **Scroll da página:** Use `window.addEventListener('scroll')` para mudar o título da página para "Rolando..." quando scroll > 100px.

17. **Pointer down:** Em um `<div>`, use `pointerdown` para logar "Pointer ativado" no console.

18. **Pointer up:** No mesmo div, adicione `pointerup` para logar "Pointer liberado".

19. **Touch start (simulado):** Adicione `touchstart` a um `<div>` para alertar "Toque iniciado" (teste em touch device ou emulador).

20. **Drag start:** Torne um `<div draggable="true" id="arrastavel">Arraste</div>` e use `dragstart` para logar "Drag iniciado".

### Questões Médias (21-40)

21. **Clique com target:** Em um `<div>` com `<button>` filho, use `click` no div para verificar `event.target` e alertar se é o botão.

22. **Mouse move:** Use `mousemove` em um `<div>` para atualizar coordenadas em um `<p>` com `event.clientX` e `event.clientY`.

23. **Keypress (deprecated, mas simples):** No input, use `keypress` para impedir teclas numéricas (se `event.key` for número, `preventDefault()`).

24. **Select em textarea:** Crie um `<textarea>`. Use `select` para destacar o texto selecionado com uma cor de fundo.

25. **Reset de form:** Em um form com inputs, use `reset` para limpar um `<span>` que ecoa o status do form.

26. **Invalid em input:** Adicione `required` a um input. Use `invalid` para mostrar uma mensagem de erro em um `<div>`.

27. **Error em imagem:** Crie `<img src="invalida.jpg">`. Use `error` para alterar o src para uma imagem válida.

28. **Pointer move:** Use `pointermove` em um elemento para rastrear movimento e atualizar posição em tempo real.

29. **Pointer over/out:** Use `pointerover` e `pointerout` para alternar visibilidade de um tooltip `<div>`.

30. **Pointer enter/leave (sem bubbling):** Em um `<ul>` com `<li>`, use `pointerenter` e `pointerleave` em cada li para destacar individualmente.

31. **Touch move:** Em um `<div>`, use `touchmove` para mover o div seguindo o toque (atualize `style.left` com `event.touches[0].clientX`).

32. **Touch end:** No mesmo div, use `touchend` para fixar a posição final e logar "Toque finalizado".

33. **Drag over:** Crie um drop target `<div id="drop">Solte aqui</div>`. Use `dragover` com `preventDefault()` para permitir drop.

34. **Drag leave:** No drop target, use `dragleave` para mudar cor de fundo para indicar saída.

35. **Unload da página:** Use `window.addEventListener('beforeunload')` para confirmar saída com `event.returnValue = "Tem certeza?"`.

36. **Scroll em elemento específico:** Em um `<div style="overflow:scroll;height:200px;">` com conteúdo longo, use `scroll` para logar posição do scroll.

37. **Change com validação:** Em um select, use `change` para validar se o valor é "válido" e adicionar/remover classe de erro.

38. **Input com debounce:** Use `input` em um input, mas adicione um timer para atualizar um `<p>` apenas após 500ms sem digitação.

39. **Múltiplos eventos em um elemento:** Combine `click` e `dblclick` no botão: se dblclick, cancele o click com `setTimeout`.

40. **Propagação com stopPropagation:** Clique em um `<button>` dentro de `<div>`; use `stopPropagation()` no button para impedir alerta no div.

### Questões Difíceis (41-50)

41. **Delegação de cliques:** Crie uma lista dinâmica de botões via JS. Use um listener `click` no `<ul>` pai para remover o botão clicado via `event.target`.

42. **Evento customizado:** Crie um `CustomEvent('userLogin', {detail: {user: 'João'}})`. Dispare no `document` e ouça para atualizar um `<p>` com o nome.

43. **Drag and drop completo:** Torne um item arrastável (`dragstart` setData), permita drop em target (`drop` appendChild), com feedback em `dragenter/dragleave`.

44. **Pointer events para touch/mouse unificado:** Use `pointerdown/up/move` em um canvas simulado (`<div>`) para desenhar uma linha seguindo o pointer.

45. **Touch gesture básico:** Use `touchstart` e `touchmove` para detectar pinch (distância entre toques) e zoomar um `<img>`.

46. **Keydown com atalhos globais:** Use `keydown` no `document` para atalhos como Ctrl+S (salvar form) ou Esc (fechar modal), verificando `event.ctrlKey` e `event.key`.

47. **Captura de fase (capture: true):** Adicione listeners com `{capture: true}` no `<body>` e `<div>` para capturar cliques na ordem de captura vs. bubbling.

48. **Otimização de mousemove:** Para um jogo simples, throttle `mousemove` com `requestAnimationFrame` para atualizar posição sem lag excessivo.

49. **Custom event com bolhas:** Crie e dispare um evento customizado que borbulhe (`bubbles: true`) de um `<span>` para `<div>` pai, manipulando em ambos.

50. **SPA-like navegação com eventos:** Use `popstate` e `click` em links para navegação sem reload, atualizando conteúdo dinâmico e histórico do browser.