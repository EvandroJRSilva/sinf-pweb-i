# Aula 11

Sumário

- [Aula 11](#aula-11)
  - [Cookies HTTP\[^1\]](#cookies-http1)
    - [Criando cookies](#criando-cookies)
      - [Os cabeçalhos `Set-Cookie` e `Cookie`](#os-cabeçalhos-set-cookie-e-cookie)
      - [Acesso via JavaScript](#acesso-via-javascript)
  - [Web Storage API\[^2\]](#web-storage-api2)
    - [Interfaces de armazenamento na Web](#interfaces-de-armazenamento-na-web)
  - [Comparação entre os métodos de armazenamento](#comparação-entre-os-métodos-de-armazenamento)
  - [`StorageEvent`](#storageevent)
    - [Aliases para manipuladores de evento](#aliases-para-manipuladores-de-evento)
    - [Exemplos](#exemplos)
  - [Exercícios](#exercícios)
    - [🍪 Cookies](#-cookies)
    - [sessionStorage](#sessionstorage)
    - [localStorage](#localstorage)


## Cookies HTTP[^1]

[^1]: O conteúdo desta seção é adaptado da página [MDN - Cookies HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies).

Um cookie HTTP, definido no [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265), é um pequeno fragmento de dados que um servidor envia para o navegador do usuário. O navegador pode armazenar estes dados e enviá-los de volta na próxima requisição para o mesmo servidor. 

Os cookies são usados principalmente para três propósitos:

1. **Gerenciamento de sessão**: Logins, carrinhos de compra, placar de jogos ou qualquer outra atividade que deva ser guardada por um servidor.
2. **Personalização**: Preferências de usuário, temas e outras configurações.
3. **Rastreamento**: Registro e análise do comportamento de um usuário.

Os cookies eram usados para armazenamento geral no lado do cliente. Embora isso fosse aceitável quando eram a única forma de armazenar dados no cliente, **atualmente é recomendável utilizar APIs de armazenamento mais modernas**. Os cookies são enviados em todas as requisições, por isso podem prejudicar a performance (especialmente em conexões móveis). APIs modernas de armazenamento no cliente são [Web storage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API) (`localStorage` e `sessionStorage`) e [IndexedDB](https://developer.mozilla.org/pt-BR/docs/Web/API/IndexedDB_API).


### Criando cookies

Ao receber uma requisição HTTP, um servidor pode enviar um cabeçalho [`Set-Cookie`](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Set-Cookie) com a resposta. Nesse caso, o cookie será armazenado pelo navegador e, então, enviado no cabeçalho HTTP [Cookie](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Cookie) quando houver novas requisições feitas ao mesmo servidor.

#### Os cabeçalhos `Set-Cookie` e `Cookie`

Um cookie simples é configurado da seguinte forma:

```
Set-Cookie: <nome-do-cookie>=<valor-do-cookie>
```

Exemplo:

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: que_gostoso=chocolate
Set-Cookie: que_delicia=morango

[conteúdo da página]
```

A partir de então, toda vez que o navegador fizer uma requisição a esse servidor, ele enviará os cookies armazenados, no campo de cabeçalho `Cookie`:

```
Cookie: <lista-de-cookies>
```

```
GET /amostra.html HTTP/1.1
Host: www.site.com
Cookie: que_gostoso=chocolate; que_delicia=morango
```

Esses cookies definidos nos exemplos anteriores são **cookies de sessão**, porque serão apagados quando o cliente encerrar a sessão. Isso vai acontecer porque as **diretivas** `Expires` ou `Max-Age` não foram definidas.

Uma **diretiva** é uma configuração do cookie. O par `<nome-do-cookie>=<valor-do-cookie>`, por exemplo, é uma diretiva obrigatória. As outras diretivas, opcionais, são:

- `Expires=<data>`: O tempo de vida máximo do cookie como uma marcação de tempo (*timestamp*) HTTP.
- `Max-Age=<dígito-diferente-de-0>`: número, em segundos, até o cookie expirar. Para cada navegador, se `Expires` e `Max-Age` forem atribuídos, `Max-Age` terá precedência.
- `Domain=<nome-do-domínio>`: especifica os hosts aos quais o cookie será enviado.
  - Se não for especificado, será usado o host do URL do documento atual, não incluindo subdomínios.
  - Se um domínio for especificado, subdomínios estarão sempre incluídos.
- `Path=<caminho-para-recurso>`: indica um caminho (*path*) de URL que necessita existir no recurso solicitado antes de enviar o cabeçalho de Cookie.
- `Secure`: um cookie seguro apenas será enviado para o servidor quando uma requisição utilizando os protocol SSL e HTTPS for realizada.
- `HttpOnly`: cookies HttpOnly não são acessíveis via JavaScript através da propriedade `Document.cookie`.
- `SameSite=<valor>`: cookies `SameSite` permitem que servidores exijam que um cookie não deve ser enviado com requisições entre sites, o que pode proteger contra ataques de requisição forjada entre sites ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)).
  - Cookies `SameSite` são relativamente novos, mas tem suporte nos principais browsers do mercado.
  - Pode receber um ou dois valores (*case-insensitive*):
    - `None`: o navegador irá enviar os cookies tanto para as requisições *cross-site* quanto *same-site*.
    - `Strict`: o navegador enviará cookies apenas se a requisição for enviada do website que configurou este cookie. Se a requisição tem origem em outra URL, nenhum cookie com o atributo `Strict` será incluído.
    - `Lax`: os cookies *same-site* ficarão retidos nas sub-requisições entre sites, como chamadas para carregar imagens ou frames, e também quando o usuário navegar para o URL de um site externo através de métodos "seguros" (ex.: GET ou HEAD) como cliques em links, mas não serão enviados em requisições "não seguras" como POST.
  - Se a flag não estiver setada, o atributo recebe o valor `Lax` por padrão.

Exemplos:

```
Set-Cookie: sessionid=38afes7a8; HttpOnly; Path=/
Set-Cookie: id=a3fWa; Expires=Wed, 21 Nov 2025 10:30:00 GMT; Secure; HttpOnly
```

#### Acesso via JavaScript

Novos cookies podem ser também criados via JavaScript usando a propriedade `Document.cookie` e, se a diretiva `HttpOnly` não está configurada, os cookies existentes podem ser acessados pelo JavaScript também. Exemplo:

```js
document.cookie = "que_gostoso=chocolate";
document.cookie = "que_delicia=morango";
console.log(document.cookie);
// log: "que_gostoso=chocolate"; que_delicia=morango"
```

Exemplos da página [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie):

- [Exemplo 1: uso simples](document-cookie/exemplo1.html).
- [Exemplo 2: pegar um cookie nomeado como teste2](document-cookie/exemplo2.html).
- [Exemplos 3 e 4: fazer uma ação somente uma vez, e reset](document-cookie/exemplo3-4.html).
- [Exemplo 5: checar se um cookie existe](document-cookie/exemplo5.html).
- [Exemplo 6: checar se um cookie tem um determinado valor](document-cookie/exemplo6.html).
- [Exemplo extra](exemplos/cookies.html).


Links para mais informações sobre:

- [Segurança](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies#segurança).
- [Rastreamento e Privacidade](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies#rastreamento_e_privacidade).

## [Web Storage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API)[^2]

[^2]: O conteúdo desta seção é adaptado da página [MDN - API de Armazenamento na Web](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API).

A Web Storage API fornece mecanismos para que os navegadores possam armazenar dados no formato chave/valor de uma forma mais eficiente que os cookies.

Isso pode ser feito de duas maneiras:

1. `sessionStorage`: mantém as informações armazenadas **por origem** e permanece **disponível enquanto há uma sessão aberta** no navegador (mesmo a página sendo recarregada). Caso o navegador ou a página seja fechada, a sessão será limpa e as informações serão perdidas.
2. `localStorage`: mesmo que o navegador seja fechado, os dados permanecem armazenados.

### Interfaces de armazenamento na Web

- [`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage): permite a inserção, recuperação e remoção dos dados de um domínio no *storage* (session ou local).
- [`Window`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window): A API de Web Storage estende o objeto [`Window`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window) com duas novas propriedades — [`Window.sessionStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage) e [`Window.localStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) — fornecendo acesso à sessão do domínio atual e local para o objeto [`Storage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) respectivamente.
- [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent): Um evento de storage é chamado em um objeto window do documento quando ocorre uma mudança no storage.

Tanto `sessionStorage` quanto `localStorage` são meios para acessar seus respectivos objetos `Storage`. Portanto, através deles, temos acesso à propriedade e métodos de `Storage`:

- **Propriedade**
  - [`Storage.length`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/length): somente leitura, e retorna um inteiro que representa **o número de itens** armazenados no objeto.
    - Exemplo:
      ```js
      function populateStorage() {
        localStorage.setItem("bgcolor", "yellow");
        localStorage.setItem("font", "Helvetica");
        localStorage.setItem("image", "osGato.png");

        localStorage.length; // deve retornar 3
      }
      ```
- **Métodos**
  - [`Storage.key(index)`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/key): quando passado um número $n$, retorna o nome da n-ésima chave no objeto.
    - Exemplo:
      ```js
      for (var i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.getItem(sessionStorage.key(i)));
      }
      ```
  - [`Storage.getItem(keyName)`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/getItem): retorna o valor associado à chave.
    - Exemplo:
      ```js
      function setStyles() {
        var currentColor = localStorage.getItem("bgcolor");
        var currentFont = localStorage.getItem("font");
        var currentImage = localStorage.getItem("image");

        document.getElementById("bgcolor").value = currentColor;
        document.getElementById("font").value = currentFont;
        document.getElementById("image").value = currentImage;

        htmlElem.style.backgroundColor = "#" + currentColor;
        pElem.style.fontFamily = currentFont;
        imgElem.setAttribute("src", currentImage);
      }
      ```
  - [`Storage.setItem(keyName, keyValue)`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem): adiciona/atualiza o valor de uma chave.
    - Exemplo:
      ```js
      function populateStorage() {
        sessionStorage.setItem("bgcolor", "red");
        sessionStorage.setItem("font", "Helvetica");
        sessionStorage.setItem("image", "osCachorro.png");
      }
      ```
  - [`Storage.removeItem(keyName)`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/removeItem): remove a chave do armazenamento.
    - Exemplo:
      ```js
      function populateStorage() {
        localStorage.setItem("bgcolor", "red");
        localStorage.setItem("font", "Helvetica");
        localStorage.setItem("image", "osPapagai.png");

        localStorage.removeItem("image");
      }
      ```
  - [`Storage.clear()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/clear): quando chamado apaga todas as chaves do armazenamento.
    - Exemplo:
      ```js
      function populateStorage() {
        localStorage.setItem("bgcolor", "red");
        localStorage.setItem("font", "Helvetica");
        localStorage.setItem("image", "osPassarin.png");

        localStorage.clear();
      }
      ```

Mais dois exemplos de uso do [sessioStorage](exemplos/sessionStorage.html) e [localStorage](exemplos/localStorage.html).

## Comparação entre os métodos de armazenamento

| Mecanismo          | Duração        | Acessível pelo servidor | Capacidade | Uso típico                   |
| ------------------ | -------------- | ----------------------- | ---------- | ---------------------------- |
| **Cookies**        | Até expirar    | ✅ Sim                   | \~4 KB     | Autenticação, sessões, login |
| **sessionStorage** | Até fechar aba | ❌ Não                   | \~5 MB     | Dados temporários de sessão  |
| **localStorage**   | Persistente    | ❌ Não                   | \~5 MB     | Preferências, dados offline  |

## [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

O evento é ativado quando outro documento que compartilha a mesma área de armazenamento (`localStorage` ou `sessionStorage`) da janela atual atualiza a área de armazenamento. O evento **não** é ativado na janela onde houve a mudança.

De forma mais detalhada:

- Para o `localStorage` o evento é ativado em todos os contextos de navegação de mesma origem do documento inicial. Isso inclui outras abas com a mesma origem.
- Para o `sessionStorage` o evento é ativado em todos os contextos de navegação de mesma origem e contexto de navegação de maior nível do documento inicial. Isso só inclui `iframes` embutidos na mesma aba.

**Propriedades** (somente leitura):

- `key`: retorna uma string com a chave para o item de armazenamento que foi modificado.
- `newValue`: retorna uma string com o novo valor do item de armazenamento que foi modificado.
- `oldValue`: retorna uma string com o valor original do item de armazenamento que foi modificado.
- `storageArea`: retorna um objeto `Storage` que representa o objeto de armazenamento que foi modificado.
- `url`: retorna uma string com a URL do documento que sofreu modificação.

### Aliases para manipuladores de evento

Além da interface `Window`, a propriedade de manipulador de evento `onstorage` está também disponível em:

- [`HTMLBodyElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement).
- [`SVGSVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement).

### Exemplos

Registrando o item `sampleList` no console quando o evento `storage` é ativado:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

A mesma ação, mas com o `onstorage`:

```js
window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};
```

## Exercícios

### 🍪 Cookies

1. Salve em um `cookie` o idioma preferido do usuário (ex: pt-BR ou en-US) e retornar uma mensagem no idioma escolhido.
2. **Salvar nome do usuário em cookie**: Crie um formulário para capturar o nome e salvá-lo em um cookie com validade de 7 dias.
3. **Contador de visitas com cookies**: Registre quantas vezes o usuário visitou a página utilizando cookies.
4. **Lembrar idioma escolhido**: Crie uma página multilíngue e salve a escolha do idioma em cookie.
5. **Data da última visita**: Salve em cookie a data/hora da última visita do usuário e exiba na próxima vez que ele acessar a página.
6. **Checkbox “Lembrar-me”**: Implemente um formulário de login com a opção "Lembrar-me". Se marcada, salve o usuário em cookie.
7. **Expiração de cookies**: Crie um cookie que expira após 1 minuto e mostre uma mensagem se ele já tiver expirado.
8. **Preferência de layout com cookies**: Permita ao usuário escolher entre layout em lista ou em grade e salve essa preferência em cookie.
9. **Carrinho de compras com cookies**: Simule um carrinho que salve os itens adicionados em cookies, acessíveis ao servidor Flask.
10. **Saudação personalizada**: Leia um cookie usuario e retorne uma mensagem personalizada (“Bem-vindo de volta, João!”).

### sessionStorage

1. Implemente uma aplicação que use `sessionStorage` para guardar o nome do usuário digitado em um formulário e exibir esse nome em diferentes páginas abertas na mesma aba.
2. **Armazenando o nome do usuário**: Crie um formulário simples que peça o nome do usuário e armazene-o em `sessionStorage`. Exiba o nome em uma mensagem de boas-vindas.
3. **Itens temporários de carrinho**: Simule um carrinho de compras temporário, que desaparece quando o usuário fecha a aba.
4. **Timer de sessão**: Crie um cronômetro que conta o tempo desde que a aba foi aberta e armazene o valor em `sessionStorage`.
5. **Formulário multi-páginas**: Implemente um formulário dividido em duas páginas. Os dados preenchidos na primeira devem ser armazenados em `sessionStorage` e recuperados na segunda.
6. **Status de login temporário**: Crie um sistema de login simples que armazena o usuário logado em `sessionStorage` (só vale enquanto a aba estiver aberta).
7. **Histórico de navegação na sessão**: Registre as páginas visitadas dentro da mesma sessão e exiba o histórico.
8. **Pontuação de jogo**: Simule um jogo onde a pontuação atual do usuário é armazenada em `sessionStorage`.
9. **Preferências de aba**: Permita que o usuário selecione uma cor de fundo para a aba atual e salve em `sessionStorage`. Ao abrir uma nova aba, a cor não deve persistir.
10. **Verificação de sessão ativa**: Implemente uma verificação que mostre se ainda existe uma sessão válida em `sessionStorage` (ex: "Sessão ativa" ou "Sessão encerrada").

### localStorage

1. Crie uma página que salve a cor preferida do usuário no `localStorage` e a aplique no background da página.
2. **Salvando preferências de tema**: Crie uma página que permita ao usuário alternar entre tema claro e tema escuro, salvando a escolha em `localStorage`.
3. **Formulário persistente**: Ao preencher um formulário (nome, email), salve os valores em `localStorage` e carregue-os automaticamente quando a página for aberta novamente.
4. **Lista de tarefas**: Desenvolva um to-do list simples que armazene as tarefas em `localStorage`, de modo que elas não desapareçam após recarregar a página.
5. **Histórico de acessos**: Registre a data e hora de cada acesso à página em `localStorage` e exiba o histórico.
6. **Contador de visitas persistente**: Crie um contador que incremente a cada visita do usuário e salve o valor em `localStorage`.
7. **Preferências de idioma**: Permita que o usuário escolha um idioma (ex: português, inglês) e salve em `localStorage`. Ao recarregar, o site deve mostrar o idioma selecionado.
8. **Carrinho de compras persistente**: Simule um carrinho de compras que armazene os itens adicionados em `localStorage`, para que não sejam perdidos ao fechar o navegador.
9. **Configurações de layout**: Crie botões para aumentar/diminuir o tamanho da fonte da página e salve a configuração em `localStorage`.
10. **Aplicativo de notas**: Desenvolva um bloco de notas no navegador que salve automaticamente o texto digitado em `localStorage`.