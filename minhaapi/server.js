console.log('Arquivo Server.JS executou com Sucesso!');

// usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json
// definir porta para a API de serviço
const port = process.env.PORT || 3002;
app.listen(port, () => {
 return console.log('API executando na porta ' + port);
})

// usar o mongo incremento 1 
require("./server/banco/mongo");
// Usar as rotas
const routes = require('./server/routes/index');
app.use(routes);