const cartRouter = require('express').Router()
const {
  addToCart,
  getCart,
  removeFromCart,
} = require('../controllers/cartController.js')
const { checkToken } = require('../utils/middleware')

cartRouter.post('/', checkToken, addToCart)
cartRouter.get('/', checkToken, getCart)
cartRouter.delete('/:id', checkToken, removeFromCart)
module.exports = cartRouter
