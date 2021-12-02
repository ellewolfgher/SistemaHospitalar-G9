const express = require('express');
const router = express.Router();
const admController = require('../controllers/adm-control');

router.get('/', admController.list_medico);
router.post('/cadastrar', admController.cad_medico_lista);

// router.get('/editar/:id', admController...);
router.get('/deletar/:id', admController.cad_medico_del);
module.exports = router;
