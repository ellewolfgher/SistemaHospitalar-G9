const express = require('express');
const app = express();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

// const client = require('./conn');
// const dbo = client.db('hospital');

const port = 7000;

// meu banco **************************************************************************
const mongodb = require('mongodb').MongoClient;

const url =
  'mongodb+srv://lex:1234@cluster0.i8hxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new mongodb(url);

try {
  client.connect();
  console.log('BD atlas on');
} catch (error) {
  console.log('BD atlas off ' + error);
}

const db = client.db('teste');
//***************************************************************************************/

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

app.get('/viewsMedicos', (req, res) => {
  res.render('listaMedicoUsu');
});
app.get('/login', (req, res) => {
  res.render('login');
});

//meu teste **r**********************************************************************************************
app.post('/cad', (req, res) => {
  let cardU = {
    email: req.body.email,
    senha: req.body.senha
  };
  db.collection('usuario').insertOne(cardU, (err, result) => {
    if (err) {
      return res.status(400).send('erro ao cadastrar');
    }
    res.redirect('/login');
  });
});
//fim do teste ************************************************************************************************

app.post('/login', (req, res) => {
  const emailOK = req.body.email;
  const senhaOK = req.body.senha;
  const aqui = localStorage;
  // validando campo vazio
  if (!emailOK) {
    return res.status(401).send('Informe um email');
  }
  if (!senhaOK) {
    return res.status(401).send('Informe a senha');
  }
  // validando campo preenchido
  //pesuisa no BD
  db.collection('usuario').findOne({ email: emailOK }, (err, resEmail) => {
    if (err) {
      console.log('Algum erro ' + err);
    }
    if (resEmail == null) {
      return res.status(400).send('Email ou senha invalida');
    }
    if (resEmail.email == 'a@adm.com' && resEmail.senha == 1234) {
      console.log(perfil);
      return res.status(200).send('vc e adm');
      //redireciona para os cards full
    }
    if (resEmail.email == 'u@adm.com' && resEmail.senha == 789) {
      localStorage.setItem('perfilLogado', emailOK);
      console.log(localStorage);
      res.redirect('/viewsMedicos');
      // redireciona para card simples
    }
  });
});
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

*/
//********************* Eduardo *************************/

app.listen(port, () => {
  console.log('servidor rodando');
});
