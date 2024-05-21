const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
const createUser = async (req, res) => {
  const { phone, email } = req.body;
  // console.log(req.body)
  try {
    const newUser = await prisma.user.create({
      data: { phone, email },
    });
    res.status(201).json(newUser);
  } catch (err) {
    // console.log(err.message)
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { phone, email } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { phone, email },
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
