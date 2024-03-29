const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    email:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 225
    },
    phone:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 1024
    },
    bookings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema)

exports.User = User