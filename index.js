const express = require("express");
const bodyParser = require("body-parser");
/*---------------------------- Conexão com o Banco de Dados ----------------------------*/
const mongoose = require("mongoose");
var cors = require("cors");
mongoose.connect("mongodb+srv://lucasvaspicarneiro:%40Lucas130205@cluster0.ge3mv.mongodb.net/teste?retryWrites=true&w=majority",)
     .then(() => {
          console.log("Conexão com o MongoDB foi realizada");
     })
     .catch((error) => {
          console.error("Erro ao conectar ao MongoDB:", error);
     });
/*---------------------------------------------------------------------*/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/*---------------------------------------------------------------------*/

const produtoController = require("./controllers/ProdutoController");
const servicoController = require("./controllers/ServicoController");
const usuarioController = require("./controllers/UsuarioController");

/*Rotas HTTP*/

/* ----------- Produtos -----------*/
/* Cadastro de Produtos */
app.post("/produto", produtoController.storeProduto);
app.get("/produto", produtoController.showProduto);
app.delete("/produto/:id", produtoController.destroyProduto);
app.put("/produto/:id", produtoController.updateProduto);

// Filtro Simples dos produtos
/* URL = /produto/buscarproduto/?tipoProduto=cachorro*/
/* URL = /produto/buscarproduto/?tipoProduto=gato*/
app.get("/produto/buscarproduto", produtoController.indexProduto);

// Filtro Duplo dos Produtos
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=medicamentos*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=medicamentos*/
app.get("/produto/buscarproduto-duplo", produtoController.indexProdutoDuplo);

/* ----------- Servicos -----------*/
/* Cadastro de Serviços */
app.post("/servico", servicoController.storeServico);
app.get("/servico", servicoController.showServico);
app.delete("/servico/:id", servicoController.destroyServico);
app.put("/servico/:id", servicoController.updateServico);

// Filtro dos Serviços
/* URL = /servico/buscarservico/?tipoServico=vacinacao*/
/* URL = /servico/buscarservico/?tipoServico=banho_tossa*/
/* URL = /servico/buscarservico/?tipoServico=adestramento*/
app.get("/servico/buscarservico/", servicoController.indexServico);


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

/* ----------- Usuário -----------*/

/* Cadastro Usuário */
/* URL = /usuario */
app.post("/usuario", usuarioController.storeUsuario);
app.get("/usuario", usuarioController.showUsuario);
app.delete("/usuario/:id", usuarioController.destroyUsuario);
app.put("/usuario/:id", usuarioController.updateUsuario);

// Filtrar pelo email
/* URL = /usuario/buscaemail/?emailUsuario=joao@gmail.com */
app.get("/usuario/buscaemail/*", usuarioController.indexEmail);

/* Login - Usuário */
app.get("/usuario/login", (req, res) => {});
app.post("/usuario/login", (req, res) => {});

/* URL = /usuario/endereco/?idUsuario= */
app.post("/usuario/endereco", (req, res) => {});




// Rotas - para ver se vai dar para fazer no trabalho

/* URL = /servico/agendamento/?tipoServico=vacinacao */
/* URL = /servico/agendamento/?tipoServico=banho_tossa */
/* URL = /servico/agendamento/?tipoServico=adestramento */
app.post("/servico/agendamento/", (req, res) => {});

/* Produtos Favoritos */
app.get("/user/favoritos", (req, res) => {
     res.send("Retorna os produtos favoritos");
});

// Remove o produto da lista de favoritos do usuário
app.delete("/user/favoritos/products/:id", (req, res) => {});

// Alterar se o produto ainda é o favorito
app.put("/user/favoritos/products/:id", (req, res) => {});

/* Sacola de Compras */
// Retorna a lista dos itens no carrinho de compras do usuário
app.get("/user/carcompras", (req, res) => {
     res.send("Lista de Itens no carrinho");
});

// deleta um produto do carrinho de compras
app.delete("/user/carcompras/:id", (req, res) => {});

// Modifica a quantidade dos itens do carrinho de compra
app.put("/user/carcompras/:id", (req, res) => {});

/* Validação da Compra */
// Retorna o total a pagar possibilitando a compra
app.get("/validarcomprar", (req, res) => {});

/* Usuário escolhe as formas de pagamento*/
app.post("/validarcomprar", (req, res) => {});

app.listen(3000, () => console.log("server starter"));
