const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', (req, res) => {
    res.status(200).json({ message: 'Registration route works!' });
  });

router.post('/login', (req, res) => {
    res.status(200).json({ message: 'Login route works!' });
  });

  router.get('/', (req, res) => {
    res.status(200).json({ message: 'Auth API is working!' });
  });
  
module.exports = router;