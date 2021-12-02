const express = require('express');
const app = express();
const routerLogin = require('./routes/login-router');
const client = require('./conn');
const dbo = client.db('hospital');
const port = 7000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  partialsDir: 'views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//********************* Elle *************************/
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});
app.post('cadastro', (req, res) => {});

//********************* Alex *************************/
app.get('/', (req, res) => {
  res.render('home');
});

app.use('/login', routerLogin);

app.get('/viewsMedicos', (req, res) => {
  res.render('listaMedicoUsu');
});

//meu teste **r**********************************************************************************************
app.post('/cad', (req, res) => {
  let cardU = {
    email: req.body.email,
    senha: req.body.senha
  };
  dbo.collection('usuario').insertOne(cardU, (err, result) => {
    if (err) {
      return res.status(400).send('erro ao cadastrar');
    }
    res.redirect('/login');
  });
});
//fim do teste ************************************************************************************************

// app.post('/login', (req, res) => {
//   const emailOK = req.body.email;
//   const senhaOK = req.body.senha;
//   // validando campo vazio
//   if (!emailOK) {
//     return res.status(401).send('Informe um email');
//   }
//   if (!senhaOK) {
//     return res.status(401).send('Informe a senha');
//   }
//   // validando campo preenchido
//   //pesuisa no BD
//   db.collection('usuario').findOne({ email: emailOK }, (err, resEmail) => {
//     if (err) {
//       console.log('Algum erro ' + err);
//     }
//     if (resEmail == null) {
//       return res.status(400).send('Email ou senha invalida');
//     }
//     if (resEmail.email == 'a@adm.com' && resEmail.senha == 1234) {
//       let user = 'Administrador';
//       return res.status(200).send('vc e adm');
//       //user sem local definido ainda....
//       //redireciona para os cards full
//     }
//     if (resEmail.email == 'u@adm.com' && resEmail.senha == 789) {
//       // let user = 'Interno';
//       res.redirect('/viewsMedicos');
//       //user sem local definido ainda.....
//       // redireciona para card simples
//     }
//   });
// });
// Do Alex(eu), ainda vou apagar ***********************************************************************************

//********************* Oscar *************************/

/*

// rota para eliminar o cadastro do médico

app.get('rota para eliminar (chamar ID)', (req, res)=>{
  const idFunc =req.params.id
  const obj_id = new ObjectId(idFunc)
  dbo.collection('chamar collection de medicos').deleteOne({_id: obj_id}, (err, result)=>
  {
      if(err) throw err
      res.redirect('redirecionar para lista')
  })
})

// rota get para editar o cadastro do médico

app.get('rota para editar (chamar ID)', (req, res)=>{
  const idFunc =req.params.id
  const obj_id = new ObjectId(idFunc)
  dbo.collection('chamar collection de medicos').findOne({_id: obj_id}, (err, result)=>{
      if (err) throw err
      res.render('mandar para pagina de cadastro', {resultado, acao 'acao para botao dinamico quando editar'})
  })
})

// rota post para editar cadastro do médico

if(req.body.'id do botão de cadastro' == ""){
  dbo.collection('collection de medicos').insertOne(objFunc,(err, result)=>{
    if(err) throw err
    res.redirect('mandar para cards adm ')
  })
}else{
  const idFunc = req.body.idFunc
  const obj_Func = new ObjectId(idFunc)
  dbo.collection('collection de medicos').updateOne({_id:obj_Func},
  {$set: objFunc},
  {upsert: true}, (err, result)=>{
    if(err) throw err
  })
  res.redirect('mandar pros cards adm')
}

// rota cadastro medico

app.get('rota cadastro',(req,res)=>{
  res.render('pagina de cadastro')
})

app.post('/add',(req,res)=>{
  const obj ={nome:req.body.nome,
              sobrenome:req.body.sobrenome,
              cpf:req.body.cpf,
              crm:req.body.crm,
              email:req.body.email,
              cel:req.body.cel,
              tel:req.body.tel,
              ramal:req.body.ramal,
              especialidade:req.body.espec,
              }
  dbo.collection('collection de medicos').insertOne(obj,(err,result)=>{
      if(err)throw err
      res.redirect("cadastro medico")
  })
})


*/

//********************* Eduardo *************************/

app.listen(port, () => {
  console.log('servidor rodando');
});
