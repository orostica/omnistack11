//Arquivo onde configuramos as rotas
//importar bibliotecas
const express = require('express');

const connection = require('./database/connections');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota de Login
routes.post('/sessions',SessionController.create)

//Rota para trazer dados
routes.get('/ongs' , OngController.index);
routes.get('/incidents', IncidentController.index)

//Trazer dados especificos da on
routes.get('/profile',ProfileController.index);

//rota para guardar dados no banco
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);

//Deletar
routes.delete('/incidents/:id', IncidentController.delete)

//Exportas as rotas
module.exports = routes;