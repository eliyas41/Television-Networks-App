const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers
} = require('../controllers/user.controller');

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers)

module.exports = router;
