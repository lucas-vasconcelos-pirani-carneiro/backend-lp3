const express = require("express");
const bodyParser = require("body-parser");

/*---------------------------------------*/

const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://lucasvaspicarneiro:%40Lucas130205@cluster0.ge3mv.mongodb.net/teste?retryWrites=true&w=majority')
.then(() => {
    console.log("Conexão com o MongoDB foi bem-sucedida!");
})
.catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

/*---------------------------------------------------------------------*/

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

/*---------------------------------------------------------------------*/

const productController = require('./controllers/ProductController');
const serviceController = require('./controllers/ServiceController')

/*Rotas HTTP*/

/*------------------------------- Administrativo -------------------------------*/

/* Cadastro de Produtos */
app.post("/product", productController.storeProduct);
app.get("/product", productController.showProducts);
app.delete("/product/:id", productController.destroyProduct);
app.put("/product/:id", productController.updateProduct);

/* Cadastro de Serviços */
app.post("/service", serviceController.storeService);
app.get("/service", serviceController.showService);
app.delete("/service/:id", serviceController.destroyService);
app.put("/service/:id", serviceController.updateService);

/*----------------------------------------------------------------------------------*/

/* Apresentação */
app.get("/", (req, res) => {
     // Landing Page
    res.send("Apresentacao Loja");
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

/* Produtos */
// Filtro Simples dos produtos
/* URL =  /produtos/buscarproduto/?tipoProduct=cachorro */
/* URL =  /produtos/buscarproduto/?tipoProduct=gato */
app.get("/product/buscarproduto", productController.indexProducts);

// Filtro Duplo dos Produtos
/* URL = /produtos/buscarproduto?tipoProduct=cachorro&categoriaProduct=higiene*/
/* URL = /produtos/buscarproduto?tipoProduct=cachorro&categoriaProduct=racao*/
/* URL = /produtos/buscarproduto?tipoProduct=cachorro&categoriaProduct=acessórios*/
/* URL = /produtos/buscarproduto?tipoProduct=cachorro&categoriaProduct=medicamentos*/
/* URL = /produtos/buscarproduto?tipoProduct=gato&categoriaProduct=higiene*/
/* URL = /produtos/buscarproduto?tipoProduct=gato&categoriaProduct=racao*/
/* URL = /produtos/buscarproduto?tipoProduct=gato&categoriaProduct=acessórios*/
/* URL = /produtos/buscarproduto?tipoProduct=gato&categoriaProduct=medicamentos*/
app.get("/produtos/buscarproduto", productController.indexProductsDouble);

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

app.listen(3000, () => console.log("server starter"));