const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: { type: String, required: true },
    precoProduto: { type: Number, required: true, min: 0 },
    descricaoProduto: { type: String, required: true },
    categoriaProduto: { type: String, required: true },
    tipoProduto: { type: String, required: true },
    _idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    },
});

module.exports = mongoose.model("Produto", ProdutoSchema);
