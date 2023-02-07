const {getUser, createUser } = require('../controller/userController')
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();

router.route('/')
      .post(createUser)

module.exports = router