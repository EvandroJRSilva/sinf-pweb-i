# Aula 11

Sumário

- [Aula 11](#aula-11)
  - [Cookies HTTP\[^1\]](#cookies-http1)
    - [Criando cookies](#criando-cookies)
      - [Os cabeçalhos `Set-Cookie` e `Cookie`](#os-cabeçalhos-set-cookie-e-cookie)
      - [Acesso via JavaScript](#acesso-via-javascript)
  - [Web Storage API](#web-storage-api)


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

Links para mais informações sobre:

- [Segurança](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies#segurança).
- [Rastreamento e Privacidade](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies#rastreamento_e_privacidade).

## Web Storage API

TODO: https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API

https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage