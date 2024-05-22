const express = require('express');
const router = express.Router();
const {
  getTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
} = require('../controllers/type.controller');


router.get('/types', getTypes);
router.get('/type/:id', getTypeById);
router.post('/type', createType);
router.put('/type/:id', updateType);
router.delete('/type/:id', deleteType);

module.exports = router;
