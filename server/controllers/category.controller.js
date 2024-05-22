const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUnique({ where: { id: parseInt(id) } });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const existingCategory = await prisma.category.findFirst({ where: { name } });
    if (existingCategory) {
      return res.status(400).json({ error: 'Category name already exists' });
    }

    const newCategory = await prisma.category.create({ data: { name } });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

// Update a category by ID
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.category.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
