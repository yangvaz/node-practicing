const { Router } = require('express');

const router = Router();

const ContactController = require('./app/controllers/ContactController');

// Criando rota GET
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show)

module.exports = router;
