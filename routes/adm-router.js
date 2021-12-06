const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');
const especController = require('../controllers/espec-control');

router.get('/cadastro', admController.cadastrar);
router.post('/cadastrar', admController.cadastrarMedico);
router.post('/cadastrarEspec', especController.cadastrarEspec);

router.get('/viewAdm', admController.lista_medico_ADM);
router.get('/viewUser', admController.lista_medico_USER);
router.get('/viewEspecialidade', especController.lista_espec);

//teste espec cadastro
router.get('/checkEspec', especController.listaCheck);
//_____________________

router.get('/editar/:id', admController.editar);
router.post('/edita', admController.cadastrarMedico);


router.get('/deletar/:id', admController.deletar);

router.get('/editarEspec/:id', especController.editar);

router.get('/deletarEspec/:id', especController.deletar);
module.exports = router;
