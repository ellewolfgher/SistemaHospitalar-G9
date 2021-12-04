const mongoose = require('../conn');

const Usuarios = mongoose.model('usuarios', {
  email: String,
  senha: String
});

module.exports = Usuarios;
