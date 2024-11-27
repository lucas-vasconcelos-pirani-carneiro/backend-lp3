const express = require("express");
const bodyParser = require("body-parser");
/************************************************/
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://lucasvaspicarneiro:%40Lucas130205@cluster0.ge3mv.mongodb.net/teste?retryWrites=true&w=majority')
.then(() => {
    console.log("Conexão com o MongoDB foi bem-sucedida!");
})
.catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});
/******************************************************/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
/******************************************************/

/*Rotas HTTP*/

/* Cadastro de Produtos */
// Adicionar um novo produto
app.post("/product", (req, res) => {
     
});

// Retorna todos os produtos
app.get("/product", (req, res) => {

});

// exclui produto
app.delete("/product/:id", (req, res) => {

});

// alterar produto
app.put("/product/:id", (req,res) => {
     
});

/* Cadastro de Serviços */
// Adicionar um novo Servico
app.post("/service", (req, res) => {

});

// Retorna todos os serviços
app.get("/service", (req, res) => {

});

// exclui serviço
app.delete("/service/:id", (req, res) => {

});

// alterar serviço
app.put("/service/:id", (req,res) => {

});

/*****************************************************/

/* Apresentação */
app.get("/", (req, res) => {
    res.send("Apresentacao Loja");
     // Landing Page
});

/* Principal */
app.get("/principal", (req, res) => {
     // retorna todos os tipos de produtos e servicos
     res.send("Pagina principal da Loja");
});

/* Cadastro Usuário */
app.post("/user", (req, res) => {
     
});

app.post("/user/address", (req, res) => {

});

/* Login - Usuário */
app.post("/user/login", (req, res) => {

});

/* Produtos Favoritos */
app.get("/user/favoritos", (req, res) => {
     res.send("Retorna os produtos favoritos");
});

// Remove o produto da lista de favoritos do usuário 
app.delete("/user/favoritos/products/:id", (req, res) => {
     
});

// Alterar se o produto ainda é o favorito
app.put("/user/favoritos/products/:id", (req, res) => {
     
});

/* Sacola de Compras */
// Retorna a lista dos itens no carrinho de compras do usuário
app.get("/user/carcompras", (req, res) => {
     res.send("Lista de Itens no carrinho");
});

// deleta um produto do carrinho de compras
app.delete("/user/carcompras/:id", (req, res) => {

});

// Modifica a quantidade dos itens do carrinho de compra
app.put("/user/carcompras/:id", (req, res) => {

});

/* Produtos Cães */
// Landing Page dos Tipos de Produtos para cachorro
app.get("/produtos/buscarproduto/dogs", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a higiene
app.get("/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=higiene", (req, res) => {
     
});

// Lista os Produtos filtrando só os de cachorros e destinado a racao
app.get("/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=racao", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a acessorios
app.get("/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=acessorio", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a medicamentos
app.get("/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=medicamento", (req, res) => {

});

/* Produtos Gatos */
// Landing Page dos Tipos de Produtos para gatos
app.get("/produtos/buscarproduto/cats", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a higiene
app.get("/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=higiene", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a racao
app.get("/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=racao", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a acessorios
app.get("/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=acessorio", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a medicamentos
app.get("/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=medicamento", (req, res) => {

});

/* Serviços */
app.get("/servicos/buscarservico/?tipoService=vacinacao", (req, res) => {
     // Landing Page
});

app.get("/servicos/buscarservico/?tipoService=banho_tossa", (req, res) => {
     // Landing Page
});

app.get("/servicos/buscarservico/?tipoService=adestramento", (req, res) => {
     // Landing Page
});

app.post("/servicos/buscarservico/?tipoService=vacinacao/agendamento", (req, res) => {
     
});

app.post("/servicos/buscarservico/?tipoService=banho_tossa/agendamento", (req, res) => {
     
});

app.post("/servicos/buscarservico/?tipoService=adestramento/agendamento", (req, res) => {
     
});

/* Validação da Compra */
// Retorna o total a pagar possibilitando a compra
app.get("/validarcomprar", (req, res) => {

});

/* Usuário escolhe as formas de pagamento*/
app.post("/validarcomprar", (req, res) => {

});

/********************************************************/
app.listen(3000, () => console.log("server starter"));
