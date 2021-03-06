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

//teste
exports.listaCheck = (req, res) => {
  db_espec.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('views/pages/cadastro', { resultado });
  });
};

exports.cadastrar = (req, res) => {
  const resultado = [];
  res.render('views/pages/cadastro', { resultado });
};

exports.cadastrarEspec = (req, res) => {
  if (req.body.idEspec == '') {
    const save_espec = new db_espec();
    save_espec.especNome = req.body.especNome;

    save_espec.save(err => {
      if (err) throw err;
      return res.redirect('/view/cadastro');
    });
  } else {
    const id = req.body.idEspec;
    db_espec.findById(id, (erro, resultado) => {
      if (erro) throw erro;
      resultado.espec = req.body.especNome;

      resultado.save(erro => {
        if (erro) throw erro;
        //modificado para nova pagina de editar -Alex
        return res.redirect('/view/viewEspecialista');
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

//Editar para rota do especialidade -Alex
exports.editarEspec = (req, res) => {
  db_espec.findById(req.params.id, (err, resultado) => {
    if (err) throw err;
    return res.render('views/partials/especEspec', { resultado });
  });
};

exports.deletar = (req, res) => {
  db_espec.deleteOne({ _id: req.params.id }, err => {
    if (err) throw err;
    return res.redirect('/view/viewEspecialidade');
  });
};
