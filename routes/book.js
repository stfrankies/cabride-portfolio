const express = require('express');
const router = express.Router();
const {getBookings, addBooking } = require('../controller/bookingController')
const auth = require('../middleware/auth')

router
    .route('/')
    .get(auth, getBookings)
    .post(auth, addBooking)

module.exports = router;