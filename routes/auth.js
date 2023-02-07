const { loginUser } = require('../controller/authController')
const express = require('express');
const router = express.Router();

router
  .route('/')
  .post(loginUser)


module.exports = router;
