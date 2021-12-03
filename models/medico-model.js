const mongoose = require('../conn');

const Medicos = mongoose.model('medicos', {
  pronome: String,
  // profile: String,
  nome: String,
  sobrenome: String
  // crm: Number,
  // email: String,
  // cel: Number,
  // tel: Number,
  // ramal: Number,
  // espec: String
});

module.exports = Medicos;
