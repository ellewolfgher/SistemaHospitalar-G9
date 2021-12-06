const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');
const especController = require('../controllers/espec-control');
const { eAdmin } = require('../helpers/eAdmin');

router.get('/cadastro', eAdmin, admController.cadastrar);
router.post('/cadastrar', eAdmin, admController.cadastrarMedico);
router.post('/cadastrarEspec', eAdmin, especController.cadastrarEspec);

router.get('/viewAdm', eAdmin, admController.lista_medico_ADM);
router.get('/viewUser', eAdmin, admController.lista_medico_USER);
router.get('/viewEspecialidade', eAdmin, especController.lista_espec);

router.get('/editar/:id', eAdmin, admController.editar);
router.get('/deletar/:id', eAdmin, admController.deletar);
router.get('/editarEspec/:id', eAdmin, especController.editar);
router.get('/deletarEspec/:id', eAdmin, especController.deletar);
module.exports = router;
