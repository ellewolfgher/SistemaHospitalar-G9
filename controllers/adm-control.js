const db_medico = require('../models/medico-model');
//chamada do modelo do usuario quando estiver pronto

exports.lista_medico_ADM = (req, res) => {
  db_medico.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('views/pages/AdmPage', { resultado });
  });
};

exports.lista_medico_USER = (req, res) => {
  db_medico.find({}, (err, resultado) => {
    if (err) {
      return res.status(400).send('Erro de pesquisa no banco ' + err);
    }
    res.render('views/pages/listaMedicoUsu', { resultado });
  });
};

//Cadastra médico

exports.cadastrar = (req, res) => {
  const resultado = []
  res.render('views/pages/cadastro', {resultado});
};

exports.cadastrarMedico = (req, res) => {
  if(req.body.idMed == '') {
      const save_medico = new db_medico();

      save_medico.pronome = req.body.pronome;
      save_medico.profile = req.body.profile;
      save_medico.nome = req.body.nome;
      save_medico.sobrenome = req.body.sobrenome;
      save_medico.crm = req.body.crm;
      save_medico.email = req.body.email;
      save_medico.cel = req.body.cel;
      save_medico.tel = req.body.tel;
      save_medico.ramal = req.body.ramal;
      save_medico.espec = req.body.espec;
  
      save_medico.save((err) => {
          if(err) throw err;
  
          return res.redirect('/view/cadastro')
      })
  } else { 
      const id = req.body.idMed;
      db_medico.findById(id, (erro, resultado)=>{
          if(erro)throw erro
          resultado.pronome = req.body.pronome;
          resultado.profile = req.body.profile;
          resultado.nome = req.body.nome;
          resultado.sobrenome = req.body.sobrenome;
          resultado.crm = req.body.crm;
          resultado.email = req.body.email;
          resultado.cel = req.body.cel;
          resultado.tel = req.body.tel;
          resultado.ramal = req.body.ramal;
          resultado.espec = req.body.espec;
  
          resultado.save((erro) => {
              if(erro)throw erro
              return res.redirect('/view/viewAdm')
          })
      })
  }
}


// exports.cadastrarMedico = (req, res) => {


//   const save_medico = new db_medico();
//   save_medico.pronome = req.body.pronome;
//   save_medico.profile = req.body.profile;
//   save_medico.nome = req.body.nome;
//   save_medico.sobrenome = req.body.sobrenome;
//   save_medico.crm = req.body.crm;
//   save_medico.email = req.body.email;
//   save_medico.cel = req.body.cel;
//   save_medico.tel = req.body.tel;
//   save_medico.ramal = req.body.ramal;
//   save_medico.espec = req.body.espec;

//   save_medico.save(err => {
//     if (err) {
//       return res.status(400).send('Erro ao salvar no banco ' + err);
//     }
//     return res.redirect('/view/cadastro');
//   });
// };




// Editar médico
exports.editar = (req, res) => {
  db_medico.findById(req.params.id, (err, resultado) => {
      if(err) throw err;
      return res.render('views/pages/cadastro', {resultado});
  })
}

// Deletar médico

exports.deletar = (req, res) => {
  db_medico.deleteOne({_id: req.params.id}, (err) => {
      if(err) throw err;
      return res.redirect('/view/viewAdm')
  })
}

// exports.cad_medico_del = (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   db_medico.deleteOne({ _id: id }, (err, resultado) => {
//     if (err) {
//       return res.status(400).send('Erro ao deletar no banco ' + err);
//     }
//     return res.render('views/pages/AdmPage');
//   });
// };
