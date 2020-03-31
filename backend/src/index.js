//Importar funcionalidades do express
const express = require('express');

//Importar as rotas do arquivo de rotas
const routes = require('./routes');

//Import do cors
const cors = require('cors');

//Variavel que armazena a aplicação
const app = express();

//Usar o cors
app.use(cors());
//Tornar o json entendivel para a aplicação
app.use(express.json());
//Usar o arquivo de rotas
app.use(routes);

//Configurar rota/recurso e retornar resposta

/*
Metodos HTTP

GET: Buscar/listar informação
POST: Criar informaçao
PUT: Alterar informação
DELETE: deletar informação
*/

/*
Tipos de parametros

Query : Parametros enviados na rota apos "?" (Filtros,Paginação)
Route: Parametros utilizados para identificar recursos, apos ":"
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*
Banco de dados SQLite

Driver: SELECT * FROM users
Querry builder: table('users').select('*').where('...')

*/

//Porta configurada da aplicação
app.listen(3333);