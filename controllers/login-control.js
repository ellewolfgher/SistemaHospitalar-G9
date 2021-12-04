const db_usuarios = require('../models/login-model');
exports.loginView = (req, res) => {
  res.render('views/pages/login');
};

//validação de login
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
  db_usuarios.findOne({ email: emailOK }, (err, emailValid) => {
    console.log(emailValid);
    if (err) {
      return res.status(404).send('Algum erro ' + err);
    }
    if (emailValid == null) {
      console.log(emailValid);
      return res.status(400).send('Email ou senha errado/não confere');
    } else if (
      emailValid.email == 'adm@glowup.com' &&
      emailValid.senha == 1234
    ) {
      return res.status(200).redirect('/view/viewAdm');
    } else if (
      emailValid.email == 'user@glowup.com' &&
      emailValid.senha == 7896
    ) {
      return res.status(200).redirect('/view/viewUser');
    } else {
      return res.send('Negado');
    }
  });
};
