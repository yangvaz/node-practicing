const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Yan',
    email: 'yan@gmail.com',
    phone: '319111111',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Fulano',
    email: 'fulano@gmail.com',
    phone: '819111111',
    category_id: v4(),
  },
]

class ContactsRepository {

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find(
        (contact) => contact.id === id),
      )
    )
  }

}

module.exports = new ContactsRepository();
