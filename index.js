const express = require("express");
const bodyParser = require("body-parser");
/************************************************/
/*const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});*/
/******************************************/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/***************************************************/

// Rota Básica
/*app.get("/ifpets/", (req, res) => {
     
});*/

/*Rotas HTTP*/

/* Cadastro de Produtos */
// Adicionar um novo produto
app.post("/ifpets/product", (req, res) => {
     
});

// Retorna todos os produtos
app.get("/ifpets/product", (req, res) => {

});

// exclui produto
app.delete("/ifpets/product/:id", (req, res) => {

});

// alterar produto
app.put("/ifpets/product/:id", (req,res) => {
     
});

/* Cadastro de Serviços */
// Adicionar um novo Servico
app.post("/ifpets/service", (req, res) => {

});

// Retorna todos os serviços
app.get("/ifpets/service", (req, res) => {

});

// exclui serviço
app.delete("/ifpets/service/:id", (req, res) => {

});

// alterar serviço
app.put("/ifpets/service/:id", (req,res) => {

});

/*****************************************************/

/* Apresentação */
app.get("/ifpets/apresentacao", (req, res) => {
    res.send("Apresentacao Loja");
     // Landing Page
});

/* Principal */
app.get("/ifpets/principal", (req, res) => {
     // retorna todos os tipos de produtos e servicos     
});

// Busca ???

/* Cadastro Usuário */
app.post("/ifpets/user", (req, res) => {
     
});

app.post("/ifpets/user/address", (req, res) => {

});

/* Login - Usuário */
app.post("/ifpets/user/login", (req, res) => {

});

/* Produtos Favoritos */
app.get("/ifpets/user/favoritos", (req, res) => {
     res.send("Retorna os produtos favoritos");
});

// Remove o produto da lista de favoritos do usuário 
app.delete("/ifpets/user/favoritos/products/:id", (req, res) => {
     
});

// Alterar se o produto ainda é o favorito
app.put("/ifpets/user/favoritos/products/:id", (req, res) => {
     
});

/* Sacola de Compras */
// Retorna a lista dos itens no carrinho de compras do usuário
app.get("/ifpets/user/carcompras", (req, res) => {
     
});

// deleta um produto do carrinho de compras
app.delete("/ifpets/user/carcompras/:id", (req, res) => {

});

// Modifica a quantidade dos itens do carrinho de compra
app.put("/ifpets/user/carcompras/:id", (req, res) => {

});

/* Produtos Cães */
// Landing Page dos Tipos de Produtos para cachorro
app.get("/ifpets/produtos/buscarproduto/dogs", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a higiene
app.get("/ifpets/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=higiene", (req, res) => {
     
});

// Lista os Produtos filtrando só os de cachorros e destinado a racao
app.get("/ifpets/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=racao", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a acessorios
app.get("/ifpets/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=acessorio", (req, res) => {

});

// Lista os Produtos filtrando só os de cachorros e destinado a medicamentos
app.get("/ifpets/produtos/buscarproduto/dogs/?tipoProduct=cachorro/?categoriaProduct=medicamento", (req, res) => {

});

/* Produtos Gatos */
// Landing Page dos Tipos de Produtos para gatos
app.get("/ifpets/produtos/buscarproduto/cats", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a higiene
app.get("/ifpets/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=higiene", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a racao
app.get("/ifpets/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=racao", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a acessorios
app.get("/ifpets/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=acessorio", (req, res) => {

});

// Lista os Produtos filtrando só os de gatos e destinado a medicamentos
app.get("/ifpets/produtos/buscarproduto/cats/?tipoProduct=gato/?categoriaProduct=medicamento", (req, res) => {

});

/* Serviços */
app.get("/ifpets/servicos/buscarservico/?tipoService=vacinacao", (req, res) => {
     // Landing Page
});

app.get("/ifpets/servicos/buscarservico/?tipoService=banho_tossa", (req, res) => {
     // Landing Page
});

app.get("/ifpets/servicos/buscarservico/?tipoService=adestramento", (req, res) => {
     // Landing Page
});

app.post("/ifpets/servicos/buscarservico/?tipoService=vacinacao/agendamento", (req, res) => {
     
});

app.post("/ifpets/servicos/buscarservico/?tipoService=banho_tossa/agendamento", (req, res) => {
     
});

app.post("/ifpets/servicos/buscarservico/?tipoService=adestramento/agendamento", (req, res) => {
     
});

/* Validação da Compra */
// Retorna o total a pagar possibilitando a compra
app.get("/ifpets/validarcomprar", (req, res) => {

});

/* Usuário escolhe as formas de pagamento*/
app.post("/ifpets/validarcomprar", (req, res) => {

});

/********************************************************/
app.listen(3000, () => console.log("server starter"));
