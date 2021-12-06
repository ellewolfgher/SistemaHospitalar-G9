const express = require('express');
const app = express();
const routerLogin = require('./routes/login-router');
const routerCadastro = require('./routes/adm-router');
const port = 7000;
const path = require('path');

global.tipoFunc = 'USER';

app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/view', routerCadastro);
app.use('/', routerLogin);

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
