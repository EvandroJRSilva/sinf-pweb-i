# Aula 09

## Validação *client-side*

A validação no lado do cliente (*client-side*) é uma verificação inicial e um recurso importante para uma boa experiência do usuário; ao detectar dados inválidos no lado do cliente, o usuário pode corrigi-los imediatamente. Se o dado chegar ao servidor e for rejeitado, um atraso perceptível é causado por uma viagem de ida e volta ao servidor e, em seguida, ao lado do cliente para informar ao usuário que ele precisa corrigir seus dados.

No entanto, a validação no lado do cliente não deve ser considerada uma medida de segurança exaustiva! Seus aplicativos devem sempre realizar a validação, incluindo verificações de segurança, em todos os dados enviados por formulário, tanto no lado do servidor quanto no lado do cliente, pois a validação do lado do cliente é muito fácil de ser ignorada, permitindo que usuários mal-intencionados enviem dados maliciosos para o seu servidor.

Existem dois tipos de validação no lado do cliente:

- Validação de formulário HTML (validação nativa).
- Validação de formulário JavaScript.

A validação no lado do cliente pode ser realizada com pouco ou nenhum JavaScript. A validação HTML é mais rápida que a JavaScript, mas é menos personalizável. Geralmente, é recomendável começar seus formulários usando recursos HTML robustos e, em seguida, aprimorar a experiência do usuário com JavaScript, conforme necessário.

### Validação HTML (nativa)

Ocorre com o uso de atributos dos elementos de formulário:

- `required`: para especificar se um campo tem preenchimento obrigarótio.
- `minlength` e `maxlength`: para especificar o comprimento mínimo e máximo de algum dado textual.
- `min`, `max` e `step`: para especificar valores mínimos e máximos de dados numéricos, e também progressão aritmética entre esses valores.
- `type`: para especificar o tipo de dado de uma determinada entrada.
- `pattern`: especifica a expressão regular que define o padrão que deve ser seguido pela entrada.

Quando um elemento é válido, ele corresponde à pseudo-classe CSS `:valid`, de forma que isso permite ao desenvolvedor aplicar um estilo específico para esse caso. Existem outras pseudo-classes nesse sentido, como `:user-valid` e `:in-range`.

Da mesma forma, quando um elemento é inválido, ele corresponde à pseudo-classe CSS `:invalid`, e pode ser estilizado de acordo.

O [exemplo 1](exemplo1.html) apresenta o uso do atributo `required`.

O [exemplo 2](exemplo2.html) apresenta o uso do atributo `pattern` com expressão regular.

O [exemplo 3](exemplo3.html) apresenta o uso de atributos para restringir o tamanho da entrada.

O [exemplo 4](exemplo4.html) é o mais completo e mostra o uso de vários dos atributos.

### Validação JavaScript

A validação com JavaScript acontece com a utlização da ***Constraint Validation API***, a qual consiste em um conjunto de métodos e propriedades disponíveis nas seguintes interfaces:

- [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) (representa um elemento `<button>`).
- [HTMLFieldSetElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement) (representa um elemento `<fieldset>`).
- [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) (representa um elemento `<input>`).
- [HTMLOutputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement) (representa um elemento `<output>`).
- [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) (representa um elemento `<select>`).
- [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) (representa um elemento `<textarea>`).

As propriedades disponibilizadas pela API nos elementos acima são:

- `validationMessage`: retorna uma mensagem local descrevendo as restrições de validação que o controle não satisfez.
- `validity`: retorna um objeto [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState), o qual contém várias propriedades como `patternMismatch`, `tooLong`, `tooShort`, etc.
- `willValidate`: retorna `true` se o elemento será validado quando o formulário for submetido.

Os métodos disponibilizados são:

- `checkValidity()`: retorna `true` se o valor do elemento não tiver tido problemas de validação.
- `reportValidity()`: reporta os campos inválidos usando eventos. É um método útil em combinação com `preventDefault()` associado a um *event handler* para `onSubmit`.
- `setCustomValidity(message)`: adiciona uma mensagem de erro personalizada ao elemento.

Os exemplos [5](exemplo5.html) e [6](exemplo6.html) apresentam como utilizar a validação com JavaScript.

## Exercícios

Para responder as questões, você poderá utilizar o seguinte HTML base:

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head><title>Validação de Formulários</title></head>
    <body>
        <form id="meuForm">
            <!-- Adicione elementos aqui -->
        </form>
        <script>
            // Seu código JS aqui
        </script>
    </body>
</html>
```

### Questões Fáceis (1-20)

1. **HTML - Required simples:** Adicione um `<input type="text" required>` a um form. Teste enviando vazio e observe o erro nativo do navegador.

2. **HTML - Email básico:** Use `<input type="email" required>` e envie um valor inválido como "abc" para ver a validação automática.

3. **HTML - Número mínimo:** Crie `<input type="number" min="18" required>` para idade; teste com 10 e confirme o erro.

4. **HTML - Comprimento mínimo:** Adicione `minlength="5"` a um `<input type="text">` e teste com "abc" (inválido).

5. **HTML - Padrão de telefone:** Use `pattern="[0-9]{10}"` em um input para telefone; teste com 11 dígitos.

6. **HTML - Senha confirmada (simples):** Adicione dois `<input type="password" required>` e use CSS para destacar se vazios.

7. **HTML - Data futura:** Crie `<input type="date" min="2025-01-01">` e teste com data passada.

8. **HTML - Checkbox obrigatório:** Use `<input type="checkbox" required>` para termos; envie sem marcar.

9. **HTML - Radio group:** Crie dois `<input type="radio" name="grupo" required>`; teste envio sem seleção.

10. **HTML - URL válido:** Adicione `<input type="url" required>` e teste com "http://exemplo.com".

11. **HTML - Novalidate no form:** Adicione `novalidate` ao `<form>` e observe que validações HTML são desabilitadas.

12. **HTML - Mensagem customizada:** Use `title="Senha fraca"` em um input password para tooltip de erro.

13. **HTML - Select obrigatório:** Crie `<select required><option value="">Selecione</option></select>` e teste vazio.

14. **HTML - Máximo de caracteres:** Adicione `maxlength="20"` a um textarea e teste digitando 21 chars.

15. **JS - Validação de vazio no submit:** Use `addEventListener('submit')` no form para verificar se um input está vazio e alertar "Preencha!".

16. **JS - Verificação de email básico:** No `submit`, use `input.value.includes('@')` para validar email e `preventDefault()` se inválido.

17. **JS - Idade mínima:** No `submit`, verifique se `parseInt(idade.value) >= 18` e bloqueie envio se não.

18. **JS - Senha não vazia:** Use `input.value.length > 0` em um password no `submit` para alertar erro.

19. **JS - Checkbox marcado:** No `submit`, cheque `checkbox.checked` e impeça envio se false.

20. **JS - Radio selecionado:** Verifique se um radio group tem valor com `querySelector('input[name="grupo"]:checked')` no submit.

### Questões Médias (21-40)

1.  **HTML - Pattern para CPF:** Use `pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"` em input para CPF formatado; teste inválido.

2.  **HTML - Range numérico:** Crie `<input type="range" min="0" max="100" required>` e valide via envio.

3.  **HTML - Múltiplos selects obrigatórios:** Adicione dois `<select required>` e teste um vazio.

4.  **HTML - Validação de arquivo:** Use `<input type="file" accept="image/*" required>` e teste com arquivo não-imagem.

5.  **HTML - Data entre min/max:** `<input type="date" min="2024-01-01" max="2025-12-31">`; teste fora do range.

6.  **HTML - Step para número:** `<input type="number" step="0.5" min="0">` para valores decimais; teste 0.3.

7.  **HTML - Mensagens de erro com CSS:** Use `:invalid { border: red; }` em CSS para destacar inputs inválidos.

8.  **HTML - Form com múltiplos grupos:** Crie form com email e senha, ambos required, e teste parcial.

9.  **HTML - Pattern para email custom:** `pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"` e valide.

10. **HTML - Textarea com minlength:** `<textarea minlength="10" required>`; teste texto curto.

11. **HTML - Hidden input validado:** `<input type="hidden" value="teste" required>` e observe validação.

12. **HTML - Multiple checkboxes:** Use `required` em múltiplos checkboxes com mesmo name; teste sem marcar.

13. **HTML - Validação de cor:** `<input type="color" required>` e envie vazio.

14. **JS - Validação de email com regex:** No `input` event, use `/^\S+@\S+\.\S+$/.test(value)` para realçar borda verde/vermelha.

15. **JS - Confirmação de senha:** No `input` do segundo password, compare com o primeiro e adicione classe 'erro' se diferente.

16. **JS - Validação de CPF simples:** No `submit`, implemente soma de dígitos para validar CPF e bloqueie se inválido.

17. **JS - Campo numérico positivo:** Use `input` event para forçar `value = Math.max(0, parseFloat(value))` em number input.

18. **JS - Validação assíncrona de username:** No `blur`, simule fetch para checar se username existe e alerte.

19. **JS - Contador de caracteres:** No `input` de textarea, atualize um `<span>` com chars restantes (max 100).

20. **JS - Validação de data futura:** No `change` de date input, compare com `new Date()` e adicione erro se passada.

### Questões Difíceis (41-50)

41.  **HTML - Pattern complexo para CEP:** `pattern="^\d{5}-?\d{3}$"` com `title="Formato: 12345-678"`; integre em form completo.

42.  **HTML - Validação de múltiplos ranges:** Crie inputs com `min/max/step` interdependentes (ex.: idade e salário min baseado em idade).

43.  **HTML - Formulário com validação condicional via CSS:** Use `:valid + .erro { display: none; }` para esconder mensagens após validação.

44.  **HTML - Integração com datalist:** `<input list="opcoes" required>` com `<datalist>`; valide se não na lista.

45.  **HTML - Validação de múltiplos arquivos:** `<input type="file" multiple accept=".pdf" required>`; teste com arquivos inválidos.

46.  **HTML - Custom pseudo-classes:** Use `:user-invalid` (se suportado) para estilos em inputs inválidos durante digitação.

47.  **HTML - Form com grupos de campos condicionais:** Use `required` dinâmico via JS, mas base em HTML para radio que ativa campos.

48.  **JS - Validação completa de form com reportValidity():** No `submit`, use `form.checkValidity()` e `reportValidity()` para erros nativos + custom.

49.  **JS - Validação em tempo real com debounce:** Implemente `input` com setTimeout para validar email/CPF após 300ms, atualizando mensagens de erro.

50. **JS - Validação de formulário multi-página:** Divida form em steps; no `submit` de cada, valide campos atuais com regex custom e avance só se válido, usando localStorage para persistir.