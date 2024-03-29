const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {
    const token = req.headers.token

    if(token){
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(401).json({you: 'Unauthorized Connection'})
            } else {
                req.user = {email: decodedToken.email}
                next()
            }
        })
    } else {
        res.status(400).json({message: 'No token could be found'})
    }
}