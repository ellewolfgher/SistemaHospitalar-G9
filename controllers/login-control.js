exports.loginView = (req, res) => {
  res.render('login');
};

exports.validLogin = (req, res) => {
  const emailOK = req.body.email;
  const senhaOK = req.body.senha;
  //valida campo vazio
  if (!emailOK) {
    return res.status(401).send('Informe um email!');
  }
  if (!senhaOK) {
    return res.status(401).send('Informe uma senha!');
  }
  //valida campo preenchido e buscando no BD
  db.collection('usuario').findOne({ email: emailOK }, (err, emailValid) => {
    if (err) {
      return res.status(404).send('Algum erro ' + err);
    }
    if (emailValid == null) {
      return res.status(400).send('Email ou senha errado/não confere');
    }
    if (emailValid.email == 'a@Admin.com' && emailValid.senha == 1234) {
      return res.status(200).send('Logado como ADM');
    }
    if (emailValid.email == 'u@Admin.com' && emailValid.senha == 789) {
      res.redirect('/views/partials/listaMedicoUsu');
    }
  });
};
