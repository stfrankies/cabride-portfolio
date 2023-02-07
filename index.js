const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const morgan = require('morgan')
const dbConn = require('./config/db')
const users = require('./routes/user')


dotenv.config({path: './config/config.env'})

dbConn();
if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/users', users)

const PORT = process.env.PORT || 3005
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
