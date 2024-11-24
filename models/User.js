const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        nomeUser: String,
        emailUser: String,
        telefoneUser: String,
        cpfUser: String,
        passwordUser: String,
        /* Endereço ... */
    }
);

module.exports = mongoose.model('User', UserSchema);