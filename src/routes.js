const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

// Criando rota GET
router.get('/contacts', ContactController.index);

module.exports = router;
