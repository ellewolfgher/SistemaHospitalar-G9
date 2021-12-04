const mongoose = require('mongoose')

const login = mongoose.model('usuario', {
    email: String, senha: String
})

module.exports = login
