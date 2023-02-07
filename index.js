const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const dbConn = require('./config/db')
const users = require('./routes/user')


dotenv.config({path: './config/config.env'})

dbConn();

const app = express()
app.use(express.json)

app.use('/api/users', users)

const PORT = process.env.PORT || 3005
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
