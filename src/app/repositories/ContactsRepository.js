const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'Yan',
    email: 'yan@gmail.com',
    phone: '319111111',
    category_id: uuid(),
  },
]

class ContactsRepository {

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

}

module.exports = new ContactsRepository();
