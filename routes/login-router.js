const express = require('express');
const router = express.Router();
const loginControl = require('../controllers/login-control');

router.get('/login', loginControl.loginView);

module.exports = router;
