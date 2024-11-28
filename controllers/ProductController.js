const mongoose = require('mongoose');
const Product = require('../models/Product');

module.exports = {
    
    /* CRUD - Produtos */
    async showProducts(req, res){
        let product = await Product.find();
        return res.json(product);
    },

    async storeProduct(req, res){
        let product = await Product.create(req.body);
        return res.json(product);
    },

    async destroyProduct(req,res){
        let product = await Product.findByIdAndDelete(req.params.id);
        return res.json(product);
    },

    async updateProduct(req,res){
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    /* Lista Filtros */
    async indexProducts(req, res){
        let product = await Product.find(
            {tipoProduct: req.query.tipoProduct});
        return res.json(product);
    },

    async indexProductsDouble(req, res){
        let product = await Product.find({
            tipoProduct: req.query.tipoProduct,
            categoriaProduct: req.query.categoriaProduct
        });
        return res.json(product);
    }
    
};