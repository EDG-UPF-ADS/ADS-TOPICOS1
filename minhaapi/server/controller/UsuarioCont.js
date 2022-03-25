const Usuario = require('../model/UsuarioSchema');
module.exports = {
    incluir: async (req, res) => {
        let obj = new Usuario(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    listar: async (req, res) => {
        Usuario.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },
};