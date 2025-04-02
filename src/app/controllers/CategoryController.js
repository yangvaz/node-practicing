const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {

  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

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
}

module.exports = new CategoryController();
