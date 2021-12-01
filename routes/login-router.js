const express = require('express');
const router = express.Router();
const loginControl = require('../controllers/login-control');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/logado', loginControl.validLogin);

module.exports = router;
