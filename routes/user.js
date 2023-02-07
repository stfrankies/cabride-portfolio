const {getUser, createUser } = require('../controller/userController')
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();

router
      .route('/me')
      .get(auth, getUser)

router.route('/')
      .post(createUser)

module.exports = router