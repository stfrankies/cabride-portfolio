const mongoose =require('mongoose')

const Booking = mongoose.model('Booking', new mongoose.Schema({
    destination: {
        type: String,
        maxlength: 255,
        required: true
    },
    paymethod:{
        type: String,
        required: true
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true}))

exports.Booking = Booking