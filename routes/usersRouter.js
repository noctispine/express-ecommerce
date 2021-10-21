const usersRouter = require('express').Router()
const { createUser } = require('../controllers/userController')

usersRouter.post('/', createUser)

module.exports = usersRouter
