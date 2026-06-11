# Aula 14

**Sumário**

- [Aula 14](#aula-14)
  - [Web Storage API](#web-storage-api)
    - [`sessionStorage` e `localStorage`](#sessionstorage-e-localstorage)
      - [Interfaces](#interfaces)
    - [Cookies (HTTP)](#cookies-http)
      - [Funcionamento básico](#funcionamento-básico)
      - [Diretivas](#diretivas)
    - [Comparação entre os métodos](#comparação-entre-os-métodos)

## [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

Muitas vezes uma aplicação web precisa **guardar informações do usuário**:  

- Preferências (tema claro/escuro, idioma).  
- Dados de login e autenticação.  
- Itens de um carrinho de compras.  

Existem três mecanismos principais para isso:  
1. **sessionStorage** – dados temporários, válidos apenas enquanto a aba/janela está aberta.  
2. **localStorage** – dados persistentes, mantidos mesmo após fechar o navegador.
3. **Cookies** – armazenamento leve, também acessível pelo servidor.

### `sessionStorage` e `localStorage`

- `sessionStorage` é particionado por aba e por [origem](https://developer.mozilla.org/pt-BR/docs/Glossary/Origin). O documento principal, e todos os [contextos de navegação](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context) embutidos (*iframes*), são agrupados pela origem e cada origem tem acesso à sua própria área de armazenamento, em separado. O fechamento de uma aba destrói todos os dados de `sessionStorage` associados a ela.
- `localStorage` é particionado apenas por [origem](https://developer.mozilla.org/pt-BR/docs/Glossary/Origin). Todos os documentos com a mesma origem têm a mesma área de `localStorage`, e ela persiste mesmo quando o navegador é fechado e reaberto.

Esses mecanismos estão disponíveis a partir das seguintes propriedades [`Window.sessionStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage)  e [`Window.localStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) (para um maior suporte, o objeto Window implementa os objetos Window.LocalStorage e Window.SessionStorage) — ao invocar uma dessas propriedades, é criada uma instância do objeto [`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage), que fornece métodos para inserir, recuperar e remover os dados. Sempre será utilizado um **objeto diferente para cada origem** de `sessionStorage` e `localStorage`, dessa forma o controle de ambos é realizado de forma separada.

#### Interfaces

- [`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage): Permite que você insira, recupere e remova dados de um domínio no storage(session ou local).
- [`Window`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window): A API de Web Storage estende o objeto [`Window`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window) com duas novas propriedades — [`Window.sessionStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage) e [`Window.localStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) — fornecendo acesso à sessão do domínio atual e local para o objeto [`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) respectivamente.
- [`StorageEvent`]([`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage)): Um evento `storage` é disparado em um objeto `Window` do documento quando ocorre uma mudança no storage.

**EXEMPLOS**: [sessionStorage](./exemplos/sessionStorage.html) e [localStorage](./exemplos/localStorage.html).

### Cookies (HTTP)

Um [cookie HTTP](https://datatracker.ietf.org/doc/html/rfc6265) (um cookie web ou cookie de navegador) é um **pequeno fragmento de dados** que um servidor envia para o navegador do usuário. O navegador pode armazenar estes dados e enviá-los de volta na próxima requisição para o mesmo servidor. Normalmente é utilizado para identificar se duas requisições vieram do mesmo navegador — ao manter um usuário logado, por exemplo. Ele guarda informações dinâmicas para o protocolo HTTP sem estado.

Cookies são usados principalmente para três propósitos:

1. **Gerenciamento de sessão**: Logins, carrinhos de compra, placar de jogos ou qualquer outra atividade que deva ser guardada por um servidor.
2. **Personalização**: Preferências de usuário, temas e outras configurações.
3. **Rastreamento**: Registro e análise do comportamento de um usuário.

#### Funcionamento básico

1. Ao receber uma requisição HTTP, um servidor pode enviar um cabeçalho [Set-Cookie](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Set-Cookie) com a resposta.
2. O navegador armazena o cookie e o envia (dentro do [cabeçalho HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Cookie)) em todas as novas requisições feitas para o mesmo servidor.

Exemplo do cabeçalho de uma Resposta HTTP:

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: hummmmm_cookie=chocolate
Set-Cookie: gostoso_cookie=morango

[conteúdo da página]
```

Exemplo do cabeçalho de uma Requisição HTTP:

```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: hummmmm_cookie=chocolate; gostoso_cookie=morango
```

Por que se contentar com o exemplo acima, se podemos ver de verdade?

#### [Diretivas](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Set-Cookie#diretivas)

As diretivas são as "configurações" ou "parâmetros" utilizados no `Set-Cookie`. A seguir, **algumas** diretivas:

- `Expires=<data>` (opcional)
  - Um timestamp que determina o tempo de vida máximo de um cookie. Se não for especificado, o cookie só vai existir durante a sessão.
- `Max-Age=<digito-diferente-0>` (opcional)
  - Número de segundos até o cookie expirar. Tem precedência sobre o Expires.
- `Secure` (opcional)
  - Um cookie seguro apenas será enviado para o servidor quando uma requisição utilizando os protocol SSL e HTTPS for realizada.
- `HttpOnly` (opcional)
  - Torna o cookie inacessível via JavaScript através da propriedade `Document.cookie`.

**[EXEMPLO](./exemplos/cookies.html)**

### Comparação entre os métodos

| Mecanismo          | Duração        | Acessível pelo servidor | Capacidade | Uso típico                   |
| ------------------ | -------------- | ----------------------- | ---------- | ---------------------------- |
| **Cookies**        | Até expirar    | ✅ Sim                   | \~4 KB     | Autenticação, sessões, login |
| **sessionStorage** | Até fechar aba | ❌ Não                   | \~5 MB     | Dados temporários de sessão  |
| **localStorage**   | Persistente    | ❌ Não                   | \~5 MB     | Preferências, dados offline  |