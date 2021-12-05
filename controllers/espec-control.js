const db_espec = require('../models/espec-model');
//chamada do modelo do usuario quando estiver pronto

exports.lista_espec = (req, res) => {
  db_espec.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('views/pages/listaEspecialidade', { resultado });
  });
};

exports.cadastrar = (req, res) => {
  const resultado = [];
  res.render('views/pages/cadastro', { resultado });
};

exports.cadastrarEspec = (req, res) => {
  if (req.body.idEspec == '') {
    const save_espec = new db_espec();
    save_espec.espec = req.body.espec;

    save_espec.save(err => {
      if (err) throw err;
      return res.redirect('/view/cadastro');
    });
  } else {
    const id = req.body.idEspec;
    db_espec.findById(id, (erro, resultado) => {
      if (erro) throw erro;
      resultado.espec = req.body.espec;

      resultado.save(erro => {
        if (erro) throw erro;
        return res.redirect('/view/viewAdm');
      });
    });
  }
};

exports.editar = (req, res) => {
  db_espec.findById(req.params.id, (err, resultado) => {
    if (err) throw err;
    return res.render('views/pages/cadastro', { resultado });
  });
};

exports.deletar = (req, res) => {
  db_espec.deleteOne({ _id: req.params.id }, err => {
    if (err) throw err;
    return res.redirect('/view/viewEspecialidade');
  });
};
