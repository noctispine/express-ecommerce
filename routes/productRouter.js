const productRouter = require('express').Router()
const { getAllProducts } = require('../controllers/productController')

productRouter.get('/', getAllProducts)

module.exports = productRouter