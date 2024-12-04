const mongoose = require("mongoose");

const ServicoSchema = new mongoose.Schema({
    precoServico: { type: Number, required: true, min: 0 },
    tipoServico: { type: String, required: true },
    descricaoServico: { type: String, required: true },
    dataServico: { type: Date, required: true },
    horaServico: { type: String, required: true },
    _idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    },
});

module.exports = mongoose.model("Servico", ServicoSchema);
