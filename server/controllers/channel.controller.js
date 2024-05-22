const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all channels
const getChannels = async (req, res) => {
  try {
    const channels = await prisma.channel.findMany();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch channels' });
  }
};

// Get a channel by ID
const getChannelById = async (req, res) => {
  const { id } = req.params;
  try {
    const channel = await prisma.channel.findUnique({ where: { id: parseInt(id) } });
    if (channel) {
      res.json(channel);
    } else {
      res.status(404).json({ error: 'Channel not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch channel' });
  }
};

// Create a new channel
const createChannel = async (req, res) => {
  const { name } = req.body;
  try {
    const existingChannel = await prisma.channel.findFirst({ where: { name } });
    if (existingChannel) {
      return res.status(400).json({ error: 'Channel name already exists' });
    }

    const newChannel = await prisma.channel.create({ data: { name } });
    res.status(201).json(newChannel);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create channel' });
  }
};

// Update a channel by ID
const updateChannel = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedChannel = await prisma.channel.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updatedChannel);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update channel' });
  }
};

// Delete a channel by ID
const deleteChannel = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.channel.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete channel' });
  }
};

module.exports = {
  getChannels,
  getChannelById,
  createChannel,
  updateChannel,
  deleteChannel,
};
