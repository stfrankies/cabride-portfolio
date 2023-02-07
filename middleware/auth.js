const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = function (req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decode = jwt.verify(token, config.get('jwtPrivateKey'));
        req.userId = decode._id;
        next();
    } catch (error) {
        res.status(400).send('invalid token')
    }
}