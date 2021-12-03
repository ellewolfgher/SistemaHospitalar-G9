const db_medico = require('../models/medico-model');
//chamada do modelo do usuario quando estiver pronto

exports.lista_medico_ADM = (req, res) => {
  db_medico.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('AdmPage');
  });
};
exports.lista_medico_USER = (req, res) => {
  db_medico.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('listaMedicoUsu', { resultado });
  });
};

exports.cadastrar = (req, res) => {
  res.render('cadastro');
};
exports.cadastrarMedico = (req, res) => {
  const save_medico = new db_medico();
  save_medico.pronome = req.body.pronome;
  // save_medico.profile = req.body.profile;
  save_medico.nome = req.body.nome;
  save_medico.sobrenome = req.body.sobrenome;
  // save_medico.cpf = req.body.cpf;
  // save_medico.crm = req.body.crm;
  // save_medico.email = req.body.email;
  // save_medico.cel = req.body.cel;
  // save_medico.tel = req.body.tel;
  // save_medico.ramal = req.body.ramal;
  // save_medico.espec = req.body.espec;

  save_medico.save(err => {
    if (err) {
      return res.status(400).send('Erro ao salvar no banco ' + err);
    }
    return res.redirect('/cadastro');
  });
};

// exports.cad_medico_del = (req, res) => {
//   const id = req.params.id;
//   db_medico.deleteOne({ _id: id }, (err, resultado) => {
//     if (err) {
//       return res.status(400).send('Erro ao deletar no banco ' + err);
//     }
//     return res.render('/listaDoMedicoAdm');
//   });
// };
