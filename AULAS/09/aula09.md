# Aula 09

**Sumário**

- [Aula 09](#aula-09)
  - [React](#react)
    - [O que é React\[^1\]](#o-que-é-react1)


## React

### O que é React[^1]

[^1]: A conceituação foi baseada na [Wikipedia](https://en.wikipedia.org/wiki/React_(software)).

Também conhecido como **React.js** ou **ReactJS** é uma biblioteca JavaScript de front-end gratuita e de código aberto que visa tornar a criação de interfaces de usuários baseadas em **componentes** de forma melhorada. É mantido pela **Meta** e uma comunidade de desenvolvedores e outras empresas. De acordo com uma [pesquisa do Stack Overflow](https://survey.stackoverflow.co/2025/technology#1-web-frameworks-and-technologies) de 2025, é a segunda tecnologia/framework mais utilizada, perdendo apenas para Node.js.

O **React** pode ser usado para desenvolver aplicações de página única, para dispositivos móveis ou renderizadas no servidor com frameworks como `Next.js` e `React Router`. Como o **React** se preocupa apenas com a interface do usuário e a renderização de componentes no DOM, as aplicações **React** geralmente dependem de bibliotecas para roteamento e outras funcionalidades do lado do cliente. Uma das principais vantagens do **React** é que ele renderiza novamente apenas as partes da página que foram alteradas, evitando a renderização desnecessária de elementos DOM inalterados.

<!--### Criando aplicativos React

A criação de um aplicativo React (***React App***) normalmente ocorre a partir do uso de algum framework. Alguns dos mais comuns: **Next.js**, **React Router** e **Expo** (*mobile*). Entretanto, queremos ver o **React** de forma mais "crua" por enquanto.

Para isso vamos precisar utilizar uma ferramenta de *build*. Algumas das mais comuns são: [**Vite**](https://vite.dev/), **Parcel** e **Rsbuild**. Vamos começar com o [**Vite**](https://vite.dev/).

Para instalá-lo é preciso executar no terminal o seguinte comando:

```
npm create vite@latest my-app -- --template react-ts
```

Onde `my-app` é o nome do aplicativo, e `react-ts` é um modelo (*template*) de projeto para **React** que permite também o uso de TypeScrip.



### Criando e aninhando componentes[^2]

[^2]: Baseado no [material oficial](https://react.dev/learn#)

Os aplicativos **React** são compostos por **componentes**:

> Um **componente** é uma parte da interface de usuário (UI) que possui sua própria lógica e aparência. Pode ser tão pequeno quanto um botão, ou tão grande quanto uma página inteira.

**Componentes React** são funções JavaScript que retornam "marcação":

```js
function MeuBotao(){
    return(
        <button>Eu sou um botão</button>
    );
}
```

Uma vez que `MeuBotao` foi declarado, é possível aninhá-lo em outro componente:

```js
export default function MeuApp(){
    return(
        <div>
            <h1>Bem vindo ao Meu Aplicativo</h1>
            <MeuBotao />
        </div>
    );
}
```

Perceba que `<MeuBotao />` está escrito com a primeira letra em maiúsculo. Isto é o que faz ele ser um **componente React**:

> Nomes de **componentes React** precisam ser sempre iniciados com uma letra maiúscula.

Se juntarmos os dois componentes que criamos, teremos um código assim:

```js
function MeuBotao(){
    return(
        <button>Eu sou um botão</button>
    );
}

export default function MeuApp(){
    return(
        <div>
            <h1>Bem vindo ao Meu Aplicativo</h1>
            <MeuBotao />
        </div>
    );
}
```

O `export default` especifica o **componente principal** de um arquivo.

### JSX

A sintaxe de marcação utilizada no código acima é chamada de **JSX**. Ela é mais restritiva que o HTML (por exemplo, tags como `<br>` precisam ser fechadas: `<br />`).

#### Adicionando estilos

A especificação de uma classe CSS é feita com o atributo `className`, enquanto no HTML é utilizado o atributo `class`. Exemplo:

```jsx
<img className="avatar" />
```

No CSS:

```css
.avatar {
    border-radius: 50%;
}
```

#### Exibindo dados

```jsx
return (
    <h1>
        {user.name}
    </h1>
);
```
-->

---

<p style="font-size:20px;font-weight:700;"><u>Continuar do site oficial:</u> <a href="https://react.dev/learn">Quick Start</a></p>