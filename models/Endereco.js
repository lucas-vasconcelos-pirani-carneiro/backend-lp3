const mongoose = require("mongoose");

const EnderecoSchema = new mongoose.Schema({
    endereco: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    complemento: { type: String },
    _idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    },
});

module.exports = mongoose.model("Endereco", EnderecoSchema);
