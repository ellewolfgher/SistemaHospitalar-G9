const express = require('express');
const router = express.Router();
const loginControl = require('../controllers/login-control');

router.get('/entrar', loginControl.loginView);
router.post('/verificarLogin', loginControl.validLogin);

module.exports = router;
