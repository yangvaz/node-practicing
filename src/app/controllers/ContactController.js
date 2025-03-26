const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    // Listar todos registros
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro - a partir de um ID específico, por exemplo (Read)
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return response.status(404).json({ error: 'User not found'});
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Criar um novo registro (Create)
    const { name, email, phone, category_id } = request.body;

    if(!name) {
      return response.status(400).json({error: 'Name is required.'});
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if(contactExists) {
      return response.status(400).json({error: 'Email already in use'});
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    });

    response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    if(!contactExists) {
      return response.status(404).json({ error: 'User not found.' })
    }

    if(!name) {
      return response.status(400).json({ error: 'Name is required.' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'Email already in use.'});
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    })

    response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204: Valid request but No Content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
