const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
    {
        precoService: Number,
        tipoService: String,
        descricaoService: String,
        dataService: String,
        horaService: String
    }
);

module.exports = mongoose.model('Service', ServiceSchema);