Gerenciador de Heróis
O Gerenciador de Heróis é uma aplicação construída com o framework NestJS, que permite aos usuários buscar e favoritar seus heróis favoritos. A aplicação utiliza uma base de dados em memória fornecida pelo pacote @nestjs-addons/in-memory-db para armazenar e consultar os heróis.

Recursos
A aplicação oferece os seguintes recursos:

Busca de Heróis
Os usuários podem realizar buscas de heróis pelo nome. A busca é case-insensitive, ou seja, não diferencia letras maiúsculas de minúsculas. O resultado da busca retorna uma lista de heróis que correspondem ao critério de busca.

Favoritar Herói
Os usuários podem marcar um herói como favorito, fornecendo o ID do herói na rota POST /heroes/:id/favorite. O herói é localizado na base de dados e sua propriedade favorite é definida como true. Se o herói não for encontrado, a resposta indica que a operação não foi bem-sucedida.

Desfavoritar Herói
Os usuários podem remover o status de favorito de um herói, fornecendo o ID do herói na rota PATCH /heroes/:id/unfavorite. O herói é localizado na base de dados e sua propriedade favorite é definida como false. Se o herói não for encontrado, a resposta indica que a operação não foi bem-sucedida.

Listar Heróis Favoritos
Os usuários podem obter a lista de heróis favoritos usando a rota GET /heroes/favorites. A resposta retorna uma lista de heróis que possuem a propriedade favorite definida como true.

Especificações da API
A aplicação inclui a geração de especificações usando o pacote @nestjs/swagger. As especificações permitem visualizar e interagir com a API através de uma interface Swagger, fornecendo informações sobre os endpoints disponíveis, os parâmetros esperados e as respostas retornadas pela API.

Tecnologias Utilizadas
A aplicação utiliza as seguintes tecnologias:

Node.js
NestJS
TypeScript
Swagger
Axios
InMemoryDB
Como Executar a Aplicação
Para executar a aplicação, siga os passos abaixo:

Clone o repositório para o seu ambiente local.
Instale as dependências executando o comando npm install ou yarn install.
Inicie a aplicação executando o comando npm start ou yarn start.
A aplicação estará disponível no endereço http://localhost:3000.
Conclusão
O Gerenciador de Heróis é uma aplicação simples, porém funcional, que permite aos usuários buscar e favoritar seus heróis favoritos. Com sua estrutura modular e recursos de especificação da API, a aplicação oferece uma experiência intuitiva e facilita o gerenciamento dos heróis.




