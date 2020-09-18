const express = require('express');
const routes = express.Router();

const sessionC = require('./controllers/session');
const usuariosC = require('./controllers/usuarios');
const orçamentosC = require('./controllers/orçamentos');
const profileC = require('./controllers/profile');

routes.post('/session', sessionC.create);
routes.get('/profile', profileC.index);

routes.get('/usuarios', usuariosC.index);
routes.post('/usuarios', usuariosC.create);

routes.get('/orcamento', orçamentosC.index);
routes.post('/orcamento', orçamentosC.create);
routes.delete('/orcamento/:id', orçamentosC.delete);

module.exports = routes;