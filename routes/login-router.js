const express = require('express');
const router = express.Router();
const loginControl = require('../controllers/login-control');

router.get('/', loginControl.loginView);
router.post('/verificarLogin', loginControl.validLogin);

router.get('/logout', loginControl.logout);

module.exports = router;
