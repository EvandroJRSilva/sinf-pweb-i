# Aula 04

Sumário

- [Aula 04](#aula-04)
  - [Formulários](#formulários)
    - [Elementos de controle](#elementos-de-controle)
    - [Elementos de organização](#elementos-de-organização)
    - [Layout e Elementos Estruturais](#layout-e-elementos-estruturais)
    - [Categorização "oficial"](#categorização-oficial)
    - [Exemplos](#exemplos)
  - [Exercícios](#exercícios)
    - [1 a 25 – Fáceis](#1-a-25--fáceis)
    - [26 a 40 – Moderados](#26-a-40--moderados)
    - [41 a 50 – Desafiadores](#41-a-50--desafiadores)

## Formulários

É um dos elementos mais comuns que encontramos na Web. Inclusive existe um termo técnico para um módulo de formulário de cadastro de usuário: **CRUD** (*Create, Retrieve, Update, Delete*).

Com HTML podemos criar formulários com o elemento [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) ([documentação oficial](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)). Esse elemento identifica um [*landmark*](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) (ou "marco") na página, contendo controles para a **submissão de informação**. Aninhado em um [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) podemos inserir diversos controles de formulário, interativos e também não interativos, validar as informações inseridas no *client-side*, e enviá-las a um servidor.

### Elementos de controle

São os elementos projetados especificamente para coletar a entrada dos usuários e lidar com sua submissão:

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button): elemento interativo que pode ser ativado pelo usuário com o mouse, teclado, dedo, comando de voz ou outra tecnologia assistiva. Quando ativado, executa alguma ação, por exemplo, a submissão do formulário, ou fazer aparecer um *dialog*.
- [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset): é usado para agrupar vários elementos de controle, e também *labels* ([`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)) dentro um de formulário.
- [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input): é usado para criar controles interativos os quais aceitam dados inseridos pelo usuário. Existem [22 tipos](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types) ao todo, porém sua disponibilidade depende do dispositivo ou do *agente de usuário*.
- [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object): representa um recurso externo, o qual pode ser tratado como uma imagem, um contexto de navegação aninhado, ou um recurso para ser manipulado por um plugin.
- [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output): é um elemento container pelo qual um site ou um aplicativo pode inserir os resultados de algum cálculo ou o resultado de uma ação de usuário.
- [`<select`>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select): representa um controle que fornece um menu de opções.
- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea): representa um controle de edição de texto de múltiplas linhas. É usado para permitir ao usuário inserir um texto maior.

### Elementos de organização

São elementos que fornecem acessibilidade, contexto e agrupamento estrutural para os controles de formulário:

- [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset).
- [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend): é o elemento de legenda para o [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset).
- [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label): representa uma legenda para um item na interface do usuário. Em outras palavras, é um texto estático.

### Layout e Elementos Estruturais

São os elementos "normais" do HTML que podem ser utilizados dentro de um [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) para layout e organização visual (lista não exaustiva):

- **Divisões estruturais:** `<div>`, `<span>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- **Formatação de texto:** `<p>`, `<h1>` - `<h6>`, `<strong>`, `<em>`, `<br>`.
- **Listas:** `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`.
- **Tabelas:** `<table>`, `<tr>`, `<td>`, `<th>`, `<tbody>`, `<thead>`, `<tfoot>`.
- **Mídia e *scripts*:** `<img>`, `<svg>`, `<audio>`, `<video>`, `<script>`.

### Categorização "oficial"

No documento oficial de especificações do HTML, podemos encontrar listas de elementos relacionados ao formulário [separados em diversas categorias](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element):

- Elementos listados;
- Elementos submetíveis;
- Elementos resetáveis;
- Elementos herdeiros de *autocapitalize* e *autocorrect*.
- Elementos legendáveis (nem todos dessa categoria são relacionados a formulário).

### Exemplos

[Neste arquivo](exemplos/form-completo.html) podemos ver um exemplo de formulário HTML completo.

## Exercícios

### 1 a 25 – Fáceis

1. Crie um formulário simples com um campo de texto para “Nome” e um botão de envio.
2. Crie um formulário de login contendo campos de usuário e senha, além de um botão “Entrar”.
3. Crie um formulário de contato com campos para nome, e-mail e um botão “Enviar”.
4. Crie um formulário com um campo de texto e um rótulo (`<label>`) corretamente associado a ele usando o atributo `for` e `id`.
5. Crie um formulário com um campo de senha e um rótulo associado.
6. Crie um formulário que contenha um campo de texto e um botão do tipo `reset`.
7. Crie um formulário com um campo de e-mail e um botão de envio.
8. Crie um formulário com um campo de número (idade) e um botão de envio.
9. Crie um formulário com um campo de texto que tenha o atributo `placeholder`.
10. Crie um formulário com um campo de texto que seja obrigatório (`required`).
11. Crie um formulário com dois campos de texto (nome e sobrenome) e um botão de envio.
12. Crie um formulário com um campo de texto e um campo de senha, ambos com rótulos.
13. Crie um formulário que use o atributo `method="get"`.
14. Crie um formulário que use o atributo `method="post"`.
15. Crie um formulário com um campo de texto e defina um valor inicial usando o atributo `value`.
16. Crie um formulário com um grupo de botões de rádio para escolher o gênero (Masculino / Feminino / Outro).
17. Crie um formulário com três caixas de seleção (checkbox) para escolher interesses (Esporte, Música, Leitura).
18. Crie um formulário com um campo de texto longo (`<textarea>`) para uma mensagem.
19. Crie um formulário com um menu suspenso (`<select>`) contendo três opções de cores.
20. Crie um formulário com um campo de arquivo (`type="file"`).
21. Crie um formulário com um campo de data (`type="date"`).
22. Crie um formulário usando `<fieldset>` e `<legend>` para agrupar nome e e-mail.
23. Crie um formulário com um botão do tipo `submit` e outro do tipo `reset`.
24. Crie um formulário com um campo de texto e defina o atributo `name` em todos os controles.
25. Crie um formulário de inscrição simples com nome, e-mail e um checkbox “Aceito os termos”.

---

### 26 a 40 – Moderados

26. Crie um formulário de cadastro completo contendo: nome, e-mail, senha, confirmação de senha e um botão de envio. Use rótulos em todos os campos.
27. Crie um formulário de pesquisa de satisfação com um grupo de botões de rádio (Nota de 1 a 5) e um campo de comentário (`textarea`).
28. Crie um formulário de pedido de pizza com checkboxes para ingredientes e um `<select>` para o tamanho (Pequena, Média, Grande).
29. Crie um formulário de inscrição em evento contendo nome, e-mail, telefone e um campo de data para a data de nascimento.
30. Crie um formulário com dois grupos de botões de rádio distintos (um para “Tipo de conta” e outro para “Plano”). Use o atributo `name` corretamente em cada grupo.
31. Crie um formulário de feedback com: nome, e-mail, um `<select>` de assuntos e um `textarea` para a mensagem. Use `<fieldset>` e `<legend>`.
32. Crie um formulário de cadastro de produto contendo: nome do produto, preço (`type="number"`), quantidade e uma descrição (`textarea`).
33. Crie um formulário com um campo de texto que use a lista de sugestões `<datalist>` (ex.: cidades).
34. Crie um formulário de login que também contenha um checkbox “Lembrar-me” e um link de “Esqueci minha senha” (apenas com tag `<a>` dentro do formulário).
35. Crie um formulário de pesquisa de emprego com: nome, e-mail, um `<select>` de cargos e um campo de arquivo para enviar o currículo.
36. Crie um formulário com um campo de intervalo (`type="range"`) para avaliar algo de 0 a 10 e um campo de texto para comentário.
37. Crie um formulário de inscrição em newsletter com e-mail, um grupo de checkboxes de temas de interesse e um botão de inscrição.
38. Crie um formulário de agendamento contendo: nome, telefone, data, horário (`type="time"`) e um `textarea` para observações.
39. Crie um formulário de cadastro de usuário que utilize `<optgroup>` dentro de um `<select>` para agrupar opções (ex.: estados por região).
40. Crie um formulário de contato profissional com: nome completo, e-mail, telefone, cargo atual, empresa e um `textarea` para mensagem. Organize com dois `<fieldset>`.

---

### 41 a 50 – Desafiadores

41. Crie um formulário completo de cadastro de cliente contendo: dados pessoais (nome, CPF, data de nascimento), dados de contato (e-mail, telefone, celular), endereço (rua, número, bairro, cidade, estado com `<select>` e CEP) e um botão de envio. Use vários `<fieldset>` e `<legend>`.
42. Crie um formulário de pesquisa de opinião sobre um curso, com:
   - Perguntas de múltipla escolha (rádio)
   - Perguntas de múltipla seleção (checkbox)
   - Uma pergunta aberta (`textarea`)
   - Um campo de avaliação numérica (`type="number"` ou `range`)
   - Todos os campos obrigatórios onde fizer sentido.
43. Crie um formulário de pedido de compra online contendo:
   - Dados do cliente
   - Lista de produtos (vários checkboxes com preços simulados no texto)
   - Forma de pagamento (rádio: cartão, boleto, pix)
   - Endereço de entrega
   - Observações
   Organize tudo com `<fieldset>`.
44. Crie um formulário de inscrição em concurso ou seleção que contenha:
   - Dados pessoais
   - Escolaridade (select com optgroup)
   - Experiência profissional (textarea)
   - Upload de documentos (vários campos `type="file"`)
   - Declaração de veracidade (checkbox obrigatório)
45. Crie um formulário de avaliação de atendimento ao cliente contendo pelo menos 8 perguntas diferentes, combinando rádio, checkbox, select, range e textarea, todas com rótulos claros e agrupadas logicamente.
46. Crie um formulário de cadastro de funcionário para uma empresa, contendo seções para:
   - Dados pessoais
   - Dados profissionais (cargo, departamento, data de admissão)
   - Dados bancários
   - Contato de emergência
   Use `<fieldset>`, `required` e nomes de campos bem definidos.
47. Crie um formulário de solicitação de suporte técnico contendo:
   - Identificação do usuário
   - Categoria do problema (select com optgroup)
   - Prioridade (rádio)
   - Descrição detalhada
   - Upload de prints/anexos
   - Preferência de contato
48. Crie um formulário de inscrição em evento acadêmico/científico contendo:
   - Dados do participante
   - Tipo de participação (ouvinte, apresentador, etc.)
   - Título e resumo do trabalho (caso seja apresentador)
   - Necessidades especiais (checkbox + textarea)
   - Termos de participação
49. Crie um formulário complexo de pesquisa demográfica e de opinião que misture:
   - Dados demográficos (idade, gênero, escolaridade, renda – usando os tipos de input adequados)
   - Várias perguntas de escala (rádio 1-5 ou range)
   - Perguntas de múltipla escolha
   - Campos abertos
   - Todos os campos com `name` e `id` corretos e labels associados.
50. Crie um formulário completo de “Pedido de Orçamento” para uma empresa de serviços, contendo:
   - Dados do solicitante
   - Tipo de serviço (select + optgroup)
   - Detalhes do serviço (textarea)
   - Prazo desejado (date)
   - Orçamento aproximado (number)
   - Forma de contato preferida
   - Upload de arquivos de referência
   - Aceite de termos
   Organize o formulário com no mínimo 4 `<fieldset>` bem legendados e use os atributos `required`, `placeholder`, `min`, `max` e `step` onde forem apropriados.

---

**Dicas gerais:**

- Sempre associe `<label>` aos controles usando `for` + `id`.
- Use o atributo `name` em todos os campos que devem ser enviados.
- Prefira `<button type="submit">` em vez de `<input type="submit">` quando possível.
- Utilize `<fieldset>` + `<legend>` para organizar formulários maiores.
- Teste o formulário no navegador verificando se os campos obrigatórios e os tipos de input se comportam corretamente.