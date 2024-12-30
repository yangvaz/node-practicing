class ContactController {
  index(request, response) {
    // Listar todos registros
    response.send('Sent from Contact Controller - index');
  }

  show() {
    // Obter UM registro - a partir de um ID específico, por exemplo (Read)
  }

  store() {
    // Criar um novo registro (Create)
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
