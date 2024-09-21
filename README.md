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

- focalpoint/
  - src/
    - sscs

Dentro da pasta scss é estão os arquivos de resets, mixins, variáveis e tipografia utilizados no projeto.

Para além de ter se utilizado o scss como pre-processador de css, foi utilizado dentro do projeto a metodologia BEM.

### Componentes

Dentro da aplicação foi escolhido trabalhar com um db e com o ORM prisma, pois, dentro do Next.js é possível definir server-actions para realização de busca de informações. Dessa forma, aumenta a performance da aplicação uma vez que a busca está sendo realizada no server-side. Ao invés de trabalarmos com o localStorage, onde todos os componentes estariam no lado do cliente.

Para atualizar a lista, ao invés de ser utilizado o useEffect e passar uma variável para estar sendo observada, foi preferível utilizar o revalidadePath, uma função do Next.js para garantir que os dados da rota sejam atualizados dinamicamente.

### Actions

Um ponto que vale ser ressaltado é que há um arquivo chamado <b>actions.ts<b/> onde nele são definidas as funções de GET, CREATE, DELETE e UPDATE. Todas as funcões possuem o revalidadePath, por motivos já explicados anteriormente.
