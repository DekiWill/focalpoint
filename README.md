## Sobre

Projeto realizado com o Next.js em sua versão 14, como teste de um processo seletivo a uma vaga de júnior com foco na UI

## Instalação

1 - Realizar a instação do projeto com os seguintes comandos

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2 - Rodar o servidor de desenvolvimento com os seguintes comandos:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3 - Abrir o link disponibilizado no terminal, usualmente é disponibilizado no link a seguir: https://localhost:3000

## Apresentação do Projeto

### Arquitetura

- focalpoint/
  - prisma/
  - public/
  - src/
  - app
  - lib

Na pasta prisma é possivel encontrar nosso banco de dados e o schema dele.

Em public, foram inseridos os assets (icone e imagem)

Na pasta src é onde está o core da aplicação: os componentes, os estilos e as actions.

### Estilos

Dentro da pasta scss é estão os arquivos de resets, mixins, variáveis e tipografia utilizados no projeto.

Trouxe os mixins para facilitar e agilizar o processo de estilização dos componentes e dentro do arquivo variables.scss foi criado um tema onde as informações do design system podem ser inseridas e refletidas diretamente em todo o projeto.

Para além de ter se utilizado o scss como pre-processador de css, foi utilizado dentro do projeto a metodologia BEM.

### Componentes

Dentro da aplicação escolhi trabalhar com um db e com o ORM prisma, pois, dentro do Next.js é possível definir server-actions para realização de busca de informações. Dessa forma, aumentamos a performance da aplicação uma vez que a busca está sendo realizada no server-side. Ao invés de trabalharmos com o localStorage, onde todos os componentes estariam no lado do cliente.

Para atualizar a lista, ao invés de ser utilizado o useEffect e passar uma variável para estar sendo observada, preferi utilizar o revalidadePath, uma função do Next.js para garantir que os dados da rota sejam atualizados dinamicamente.

### Actions

Um ponto que vale ser ressaltado é que há um arquivo chamado <b>actions.ts<b/> onde nele são definidas as funções de GET, CREATE, DELETE e UPDATE. Esse arquivo roda no server-side através das server actions que o framerwork utiliza. Optei por trabalhar dessa forma, pois API handlers deveriam ser só utilizados caso fosse necessário utilizar WebHooks.
Todas as funcões possuem o revalidadePath, por motivos já explicados anteriormente.
