const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {

  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    // Obter UM registro - a partir de um ID específico, por exemplo (Read)
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404: Not found
      return response.status(404).json({ error: 'Category not found'});
    }

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if(!categoryExists) {
      return response.status(404).json({ error: 'Category not found.' })
    }

    if(!name) {
      return response.status(400).json({ error: 'Name is required for this update operation.' })
    }

    const category = await CategoriesRepository.update(id, {
      name
    })

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    // 204: Valid request but No Content
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
