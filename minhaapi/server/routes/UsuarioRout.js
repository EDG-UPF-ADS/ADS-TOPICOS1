const express = require('express');
const routes = express.Router();
const controle = require('../controller/UsuarioCont');
routes.route('/usuarios').get(controle.listar);
module.exports = routes;
routes.route('/usuarios').get(controle.listar);
routes.route('/usuarios').post(controle.incluir);