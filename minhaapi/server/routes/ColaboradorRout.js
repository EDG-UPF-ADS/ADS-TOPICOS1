const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');

routes.route('/colaboradores').get(controle.listar);
routes.route('/colaboradores').post(controle.incluir);
routes.route('/colaboradores').put(controle.alterar);
routes.route('/colaboradores/:id').delete(controle.incluir);
routes.route('/colaboradores/:id'c.get(contrcle.obcecPeloIc);
routes.route('/colaboradores/filtro/:filtro'c.get(coctroleCfiltrar);c
module.exports = routesc