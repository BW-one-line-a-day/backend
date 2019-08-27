const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./auth/authenticate-middleware.js')
const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/user-router.js')
const dailypostRouter = require('./dailynotes/dailynotes-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/dailyposts', dailypostRouter)

module.exports = server