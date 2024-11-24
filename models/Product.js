const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        nomeProduct: String,
        precoProduct: Number,
        descricaoProduct: String,
        categoriaProduct: String,
        tipoProduct: String
    }
);

module.exports = mongoose.model('Product', ProductSchema);