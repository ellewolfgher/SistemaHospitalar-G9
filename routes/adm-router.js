const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');
const especController = require('../controllers/espec-control');
const { eAdmin } = require('../helpers/eAdmin');
const { eUser } = require('../helpers/eUser');

router.get('/cadastro', eAdmin, admController.cadastrar);
router.post('/cadastrar', eAdmin, admController.cadastrarMedico);
router.post('/cadastrarEspec', eAdmin, especController.cadastrarEspec);

router.get('/viewAdm', eAdmin, admController.lista_medico_ADM);
router.get('/viewUser', eUser, admController.lista_medico_USER);
router.get('/viewEspecialidade', eAdmin, especController.lista_espec);

//Página nova de editar
router.post('/edita', eAdmin, admController.cadastrarMedico);
router.get('/editar/:id', eAdmin, admController.editar);

router.get('/editarEspecEspec/:id', eAdmin, especController.editarEspec);
router.get('/deletar/:id', eAdmin, admController.deletar);
router.get('/editarEspec/:id', eAdmin, especController.editar);
router.get('/deletarEspec/:id', eAdmin, especController.deletar);
module.exports = router;
