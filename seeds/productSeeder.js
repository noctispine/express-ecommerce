require('dotenv').config()

const productsData = require('../data/products')
const connectDB = require('../config/db')
const Product = require('../models/Product')
const mongoose = require('mongoose')

const products = [
  {
    title: 'Erikli',
    price: 1,
    category: 'water',
    image:
      'https://www.erikli.com.tr/uploads/products/ce1edafd-5141-4b02-b0b5-fd1b4244c782.png',
  },

  {
    title: 'Instant Noodle',
    price: 1.9,
    category: 'food',
    image:
      'https://w7.pngwing.com/pngs/893/942/png-transparent-instant-noodle-chinese-noodles-ramen-tom-yum-cup-noodles-cup-noodle-soup-food-recipe.png',
  },
]

const importData = async (products) => {
  connectDB()
  await Product.deleteMany({})
  for (let k = 0; k < 5; k++) {
    for (let i = 0; i < products.length; i++) {
      const newProduct = await new Product(products[i])
      await newProduct.save()
    }
  }

  console.log('import success')

  mongoose.disconnect()
}

importData(products)
