const mongoose = require("mongoose");
const Usuario = require("../models/Usuario");

module.exports = {

    /* CRUD - Usuários */
    async showUsuario(req, res) {
        let usuario = await Usuario.find();
        return res.json(usuario);
    },
    
    async storeUsuario(req, res) {
        const usuario = await Usuario.create(req.body);
        return res.send(usuario);
    },
    
    async updateUsuario(req, res) {
        let usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        return res.send(usuario);
    },

    async destroyUsuario(req, res) {
        let usuario = await Usuario.findByIdAndDelete(req.params.id);
        return res.send(usuario);
    },

    /* Filtro - Email */

    async indexEmail(req, res){
        let usuario = await Usuario.find({emailUsuario: req.query.emailUsuario});
        return res.json(usuario);
    }

};