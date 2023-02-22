const mongoose =require('mongoose')

const Booking = mongoose.model('Booking', new mongoose.Schema({
    currentlocation:{
        type: String,
        maxlength: 255,
        required: true
    },
    destination: {
        type: String,
        maxlength: 255,
        required: true
    },
    distance:{
        type: Number,
        require: true
    },
    cost:{
        type: Number,
        required: true
    },
    paymethod:{
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true}))

exports.Booking = Booking