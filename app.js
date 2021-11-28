const express = require('express');
const app = express();

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
app.post('cadastro', (req, res) => {})



//********************* Alex *************************/
app.get('/viewsMedicos', (req, res) => {
  res.render('lista');
});
app.post('/addMedico', (req, res) => {});

//********************* Oscar *************************/

//********************* Eduardo *************************/

app.listen(port, () => {
  console.log('servidor rodando');
});
