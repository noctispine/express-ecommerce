const Product = require('../models/Product')

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllProducts }
