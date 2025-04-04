const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Auth API is working!' });
});

module.exports = router;