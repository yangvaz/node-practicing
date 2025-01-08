const { Router } = require('express');

const router = Router();

const ContactController = require('./app/controllers/ContactController');

// Criando rota GET
router.get('/contacts', ContactController.index);

module.exports = router;
