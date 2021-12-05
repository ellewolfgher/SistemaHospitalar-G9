const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');

router.get('/cadastro', admController.cadastrar);
router.post('/cadastrar', admController.cadastrarMedico);

router.get('/viewAdm', admController.lista_medico_ADM);
router.get('/viewUser', admController.lista_medico_USER);

router.get('/editar/:id', admController.editar);

router.get('/deletar/:id', admController.deletar);
module.exports = router;
