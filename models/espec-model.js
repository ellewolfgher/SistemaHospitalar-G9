const mongoose = require('../conn');

const Especialidades = mongoose.model('especialidades', {
  especNome: String
});

module.exports = Especialidades;
