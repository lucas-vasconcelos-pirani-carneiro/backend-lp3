const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
        nomeUsuario: { type: String, required: true },
        emailUsuario: { type: String, required: true, unique: true, lowercase: true },
        telefoneUsuario: { type: String, required: true },
        cpfUsuario: { type: String, required: true, unique: true },
        senhaUsuario: { type: String, required: true },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);