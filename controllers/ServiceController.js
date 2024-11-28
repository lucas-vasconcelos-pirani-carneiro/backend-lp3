const mongoose = require('mongoose');
const Service = require('../models/Service');

module.exports = {

    /* CRUD - Serviços */
    async showService(req, res){
        let service = await Service.find();
        return res.json(service);
    },

    async storeService(req, res){
        let service = await Service.create(req.body);
        return res.json(service);
    },

    async destroyService(req,res){
        let service = await Service.findByIdAndDelete(req.params.id);
        return res.json(service);
    },

    async updateService(req,res){
        let service = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(service);
    }
    
};