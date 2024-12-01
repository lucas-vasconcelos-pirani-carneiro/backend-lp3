const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema(
    {
        precoServico: Number,
        tipoServico: String,
        descricaoServico: String,
        dataServico: String,
        horaServico: String
    }
);

module.exports = mongoose.model('Servico', ServicoSchema);