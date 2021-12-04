const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');

router.get('/', admController.cadastrar);
router.post('/cadastrar', admController.cadastrarMedico);

router.get('/viewAdm', admController.lista_medico_ADM);
router.get('/viewUser', admController.lista_medico_USER);

// router.get('/editar/:id', admController...);
// router.get('/deletar/:id', admController.cad_medico_del);
module.exports = router;
