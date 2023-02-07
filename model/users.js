const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 225
    },
    password:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 1024
    }
})

const User = mongoose.model('User', userSchema)

exports.User = User