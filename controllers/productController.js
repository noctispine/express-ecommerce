const Product = require('../models/Product')

const getAllProducts = async (req, res, next) => {
  try {
    let filterArr = req.query.filterArr
    let products = []
    if (filterArr) {
      filterArr = JSON.parse(filterArr)
      for (let i = 0; i < filterArr.length; i++) {
        filteredProductArray = await Product.find({ category: filterArr[i] })
        products = products.concat(filteredProductArray)
      }
    } else {
      products = await Product.find({})
    }

    let categoryCount = []

    const categories = await Product.distinct('category')

    for (let i = 0; i < categories.length; i++) {
      categoryCount.push({
        category: categories[i],
        count: await Product.count({ category: categories[i] }),
      })
    }

    res.json({ products, categoryCount })
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllProducts }
