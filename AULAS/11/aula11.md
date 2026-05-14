# Aula 11

Sumário

- [Aula 11](#aula-11)
  - [Linters e Formatters](#linters-e-formatters)
  - [ESLint](#eslint)
    - [Instalação](#instalação)
    - [Documentação](#documentação)
  - [Prettier](#prettier)


## Linters e Formatters

São ferramentas automatizadas para melhorar a qualidade do código, e são usados para:

- ***Linters***: analizam o código em busca de problemas de lógica, bugs em potencial (*code smell*), variáveis não usadas, código inalcançável, vulnerabilidades de segurança, etc.
- ***Formatters***: focam na consistência de estilo, podendo reescrever o código para seguir alguma convenção ou padrão de layout, como indentação, comprimento das linhas, espaçamento, etc.

| | ***Linters*** | ***Formatters*** |
|---|---|---|
| **Objetivo principal** | Encontrar bugs e más práticas | Uniformizar o estilo visual do código |
| **Ação** | *Flags* identificando o problema, ou *quick fix* | Reformatação automática do arquivo |
| **Exemplos de problemas** | Variáveis não utilizadas, erros de lógica e sintaxe | Tab vs. espaço, quebra de linha, uso de `;` |

## [ESLint](https://eslint.org/)

O `ESLint` é uma ferramenta de análise estática de código para identificar padrões problemáticos em código JavaScript. É o *linter* para JS mais utilizado, basicamente um padrão da indústria (apesar disso, existem outros *linters*).

Ele possui centenas de regras nativas que podem ser usadas e personalizadas. É possível também a criação de novas regras e utilização de regras criadas por terceiros através de plugins, por exemplo, regras para bibliotecas como o **React**, frameworks como o **Angular**, e também para o **TypeScript**.

Após sua instalação, um arquivo de configuração é criado, onde poderão ser inclusas as regras e como deverão ser aplicadas, plugins com regras personalizadas, configurações compartilháveis, sobre quais arquivos as regras devem ser aplicadas, etc.

### Instalação

A instalação pode ser 

- Local (recomendado):
  ```
  npm init @eslint/config@latest
  ```
- Ou global (não recomendado):
  ```
  npm install eslint --global
  ```

É importante lembrar que o `ESLint` precisa da existência de um arquivo `package.json`, o qual pode ser gerado automaticamente com a execução do comando `npm init`.

Após a instalação, o ESLint pode ser executado:

```
npx eslint [options] [file|dir|glob]* 
```

Exemplo: 
```
npx eslint arquivo1.js
```

### Documentação

- [Conceitos básicos](https://eslint.org/docs/latest/use/core-concepts/)
- [Configuração do ESLint](https://eslint.org/docs/latest/use/configure/)
- [Regras](https://eslint.org/docs/latest/rules/)

## [Prettier](https://prettier.io/)

É um formatador de código com "opiniões próprias", com suporte para: JS, JSX, Angular, Vue, TS, CSS, HTML, JSON, Markdown, YAML, entre outras.

Ele funciona removendo todo o estilo original e reescrevendo o código garantindo um estilo consistente. Como consequência, é possível que parte do código não fique da forma que o desenvolvedor goste (visualmente).

O `Prettier` é comumente usado junto a *linters* como o `ESLint`, funcionando como uma espécie de complemento. Entretanto, o `ESLint` já possui um plugin para formatação.

Vamos agora aplicar o `Prettier` ao nosso exemplo. Para isso vamos seguir a [documentação](https://prettier.io/docs/install).