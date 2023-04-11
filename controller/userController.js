const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const _ = require('lodash')
const {User} = require('../model/users')


exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select('-password -__v -_id').populate('bookings');
    res.send(user);
  } catch (err) {
    next(console.log(err.message))
  }
};


exports.createUser = async (req, res, next)=>{
    try {
        let user = await User.findOne({email: req.body.email})
        if (user)return res.status(200).send({err: 'User already registered'});

        user = new User(_.pick(req.body, ['name', 'address', 'phone', 'email', 'password']));
        const salt = await bcrypt.genSalt(10)
        
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = user.generateAuthToken();
        res.send({ token, user: {..._.pick(user, ['_id', 'name', 'email'])}})
    } catch (error) {
        next(console.log(error.message))
    }
}