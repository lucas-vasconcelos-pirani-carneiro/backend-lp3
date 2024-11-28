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

/* Deixar data e hora juntos  com os outros atributos ?? */

module.exports = mongoose.model('Service', ServiceSchema);