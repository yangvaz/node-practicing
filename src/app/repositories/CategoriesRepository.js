const db = require('../../database')

class CategoriesRepository {

  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT * FROM categories
      ORDER BY name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT categories.*, contacts.name AS contact_name
      FROM categories
      LEFT JOIN contacts ON contacts.category_id = categories.id
      WHERE categories.id = $1
      `, [id]);
    return row;
    // Ao inserir ID não existente no banco (diferente de inserir ID de categoria por exemplo),
    // o programa para e não consegue avançar
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row;
  }


  async update(id, {
    name
  }) {
    const [row] = await db.query(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
      `, [name, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE
      FROM categories
      WHERE id = $1
      `, [id]);
    return deleteOp;
  }

}

module.exports = new CategoriesRepository();
