const express = require('express');
const router = express.Router();
const {
  getChannels,
  getChannelById,
  createChannel,
  updateChannel,
  deleteChannel,
} = require('../controllers/channel.controller');


router.get('/channels', getChannels);
router.get('/channel/:id', getChannelById);
router.post('/channel', createChannel);
router.put('/channel/:id', updateChannel);
router.delete('/channel/:id', deleteChannel);

module.exports = router;
