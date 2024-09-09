const express = require('express');
const router = express.Router();
const cadastroController = require('./controllers/CadastroController.js');

router.post('/criarcadastro', cadastroController.createCadastro);
router.get('/vercadastros', cadastroController.getAllCadastros);
router.get('/vercadastro', cadastroController.getCadastroById);
router.put('/atualizarcadastros', cadastroController.updateCadastro);
router.delete('/deletarcadastros', cadastroController.deleteCadastro);

module.exports = router;