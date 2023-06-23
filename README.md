# Gerenciador de Heróis

A aplicação é um sistema de gerenciamento de heróis, onde os usuários podem buscar e favoritar seus heróis favoritos. A aplicação é construída usando o framework NestJS, que é baseado em Node.js.

## Estrutura da Aplicação

A estrutura da aplicação é composta por controladores, serviços e uma camada de acesso a dados. Os controladores são responsáveis por lidar com as requisições HTTP e direcioná-las aos serviços apropriados. Os serviços contêm a lógica de negócio da aplicação e interagem com a camada de acesso a dados para realizar operações de leitura e escrita.

## Base de Dados

A aplicação utiliza uma base de dados em memória fornecida pelo pacote `@nestjs-addons/in-memory-db`, que permite armazenar e consultar heróis de forma simplificada. Cada herói possui um ID único, nome e uma propriedade booleana indicando se é favorito ou não.

## Principais Recursos

Os principais recursos da aplicação são:

- **Busca de heróis:** Os usuários podem realizar buscas de heróis pelo nome. A busca é case-insensitive, ou seja, não diferencia letras maiúsculas de minúsculas. O resultado da busca retorna uma lista de heróis que correspondem ao critério de busca.

- **Favoritar herói:** Os usuários podem marcar um herói como favorito, fornecendo o ID do herói na rota `POST /heroes/:id/favorite`. O herói é localizado na base de dados e sua propriedade `favorite` é definida como `true`. Se o herói não for encontrado, a resposta indica que a operação não foi bem-sucedida.

- **Desfavoritar herói:** Os usuários podem remover o status de favorito de um herói, fornecendo o ID do herói na rota `PATCH /heroes/:id/unfavorite`. O herói é localizado na base de dados e sua propriedade `favorite` é definida como `false`. Se o herói não for encontrado, a resposta indica que a operação não foi bem-sucedida.

- **Listar heróis favoritos:** Os usuários podem obter a lista de heróis favoritos usando a rota `GET /heroes/favorites`. A resposta retorna uma lista de heróis que possuem a propriedade `favorite` definida como `true`.

## Especificações da API

A aplicação também inclui a geração de especificações usando o pacote `@nestjs/swagger`, que permite visualizar e interagir com a API através de uma interface Swagger. As especificações fornecem informações sobre os endpoints disponíveis, os parâmetros esperados e as respostas retornadas pela API.

## Tecnologias Utilizadas

A aplicação utiliza as seguintes tecnologias:

- Node.js
- NestJS
- TypeScript
- @nestjs-addons/in-memory-db
- @nestjs/swagger

## Como Executar a Aplicação

Para executar a aplicação, siga os passos abaixo:

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências usando o comando `npm install` ou `yarn install`.
3. Inicie a aplicação com o comando `npm start` ou `yarn start`.
4. A aplicação estará disponível no endereço `http://localhost:3000`.

## Conclusão

No geral, a aplicação oferece recursos básicos de busca e favoritismo de heróis, proporcionando uma experiência simples de gerenciamento de heróis para os usuários.
