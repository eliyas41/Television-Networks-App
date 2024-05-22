const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all types
const getTypes = async (req, res) => {
  try {
    const types = await prisma.type.findMany();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch types' });
  }
};

// Get a type by ID
const getTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const type = await prisma.type.findUnique({ where: { id: parseInt(id) } });
    if (type) {
      res.json(type);
    } else {
      res.status(404).json({ error: 'Type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch type' });
  }
};

// Create a new type
const createType = async (req, res) => {
  const { name } = req.body;
  try {
    const existingType = await prisma.type.findFirst({ where: { name } });
    if (existingType) {
      return res.status(400).json({ error: 'Type name already exists' });
    }

    const newType = await prisma.type.create({ data: { name } });
    res.status(201).json(newType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create type' });
  }
};

// Update a type by ID
const updateType = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedType = await prisma.type.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updatedType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update type' });
  }
};

// Delete a type by ID
const deleteType = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.type.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete type' });
  }
};

module.exports = {
  getTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
};
