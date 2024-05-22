const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');


router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;
