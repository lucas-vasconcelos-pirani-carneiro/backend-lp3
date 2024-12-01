const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema(
    {
        nomeProduto: String,
        precoProduto: Number,
        descricaoProduto: String,
        categoriaProduto: String,
        tipoProduto: String
    }
);

module.exports = mongoose.model('Produto', ProdutoSchema);