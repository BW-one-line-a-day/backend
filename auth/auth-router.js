const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../users/users-model.js')
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash
  Users.add(user)
  .then(saved => {
      res.status(201).json(saved)
  })
  .catch(error => {
      res.status(405).json({message: 'Email and password required'})
  })
});

router.post('/login', (req, res) => {
  let { email, password } = req.body
  Users.findBy({ email })
  .first()
  .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
          const token = getJwt(user)
          const id = user.id
          res.status(200).json({
              message: `Welcome ${user.email}!`,
              token,
              id
          })
      } else {
          res.status(401).json({message: 'Invlaid Credentials'})
      }
  })
  .catch(error => {
      console.log("error console", error)
      res.status(500).json(error)
  })
});

function getJwt(user){
  const payload = {
      subject: user.id,
      email: user.email,
      jwtid: 1,
  }
  const options = {
      expiresIn: '8h'
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
