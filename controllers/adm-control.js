//chamada do modelo do usuario quando estiver prnto

exports.list_medico = (req, res) => {
  oBancoVaiAqui.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('listaMedicoUsu');
  });
};

exports.lista_medico_cad = (req, res) => {
  res.render('cadastro');
};
exports.cad_medico_lista = (req, res) => {
  const save_medico = new oBancoVaiAqui();
  save_medico.nome = req.body.nome;
  // lista do caard

  save_medico.save(err => {
    if (err) {
      return res.status(400).send('Erro ao salvar no banco ' + err);
    }
    return res.redirect('/cadastro');
  });
};

exports.cad_medico_del = (req, res) => {
  const id = req.params.id;
  oBancoVaiAqui.deleteOne({ _id: id }, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro ao deletar no banco ' + err);
    }
    return res.render('/listaDoMedicoAdm');
  });
};
