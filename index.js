const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const config = require('config')
const morgan = require('morgan')
const cors = require('cors')
const dbConn = require('./config/db')
const users = require('./routes/user')
const auth = require('./routes/auth');
const booking = require('./routes/book')


dotenv.config({ path: './config/config.env' })

dbConn();
if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

const app = express()
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/booking', booking)

const PORT = process.env.PORT || 3005
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
