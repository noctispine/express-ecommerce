const loginRouter = require('express').Router()
const { login, reLogin } = require('../controllers/loginController')
const { checkToken } = require('../utils/middleware')

loginRouter.post('/', login)
loginRouter.post('/checktoken', checkToken, reLogin)

module.exports = loginRouter