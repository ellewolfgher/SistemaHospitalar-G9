const eadmin = require('../helpers/eadmin');
const { eAdmin } = require('../helpers/eadmin');
const db_usuarios = require('../models/login-model');
exports.loginView = (req, res) => {
  let acao = [];
  res.render('views/pages/login', { acao });
};

//validação de login
exports.validLogin = (req, res) => {
  const emailOK = req.body.email;
  const senhaOK = req.body.senha;

  acao = 'Email ou senha invalido';
  if (!emailOK) {
    return res.status(401).render('views/pages/login', { acao });
  }
  if (!senhaOK) {
    return res.status(401).render('views/pages/login', { acao });
  }
  //valida campo preenchido e buscando no BD
  db_usuarios.findOne({ email: emailOK }, (err, emailValid) => {
    if (err) {
      return res.status(404).send('Algum erro ' + err);
    }
    if (emailValid == null) {
      return res.status(400).render('/');
    }
    if (emailValid.email == 'adm@glowup.com' && emailValid.senha == senhaOK) {
      global.tipoFunc = 'ADM';
      return res.status(200).redirect('/view/viewAdm');
    }
    if (emailValid.email == 'user@glowup.com' && emailValid.senha == senhaOK) {
      global.tipoFunc = 'USER';
      return res.status(200).redirect('/view/viewUser');
    } else {
      return res.send('Negado');
    }
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
