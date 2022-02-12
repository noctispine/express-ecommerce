require('dotenv').config()
const fakeStore = require('./fakeStoreSeeder')

const connectDB = require('../config/db')
const Product = require('../models/Product')
const User = require('../models/User')
const Cart = require('../models/Cart')

const mongoose = require('mongoose')
const { default: fakeStoreSeeder } = require('./fakeStoreSeeder')

const products = [
  {
    title: 'Erikli',
    price: 1,
    category: 'water',
    image: 'https://pngimg.com/uploads/water_bottle/water_bottle_PNG98959.png',
  },

  {
    title: 'Instant Noodle',
    price: 1.9,
    category: 'food',
    image:
      'https://w7.pngwing.com/pngs/893/942/png-transparent-instant-noodle-chinese-noodles-ramen-tom-yum-cup-noodles-cup-noodle-soup-food-recipe.png',
  },
  {
    title: 'Kazık Erikli',
    price: 3.2,
    category: 'kazık Water',
    image: 'https://pngimg.com/uploads/water_bottle/water_bottle_PNG98959.png',
  },
]

const importData = async (products) => {
  connectDB()
  await User.deleteMany({})
  await Product.deleteMany({})
  await Cart.deleteMany({})
  for(let k = 0; k < 5; k++) {
  for (let i = 0; i < fakeStore.length; i++) {
    const newProduct = await new Product(fakeStore[i])
    await newProduct.save()
  }
  }

  console.log('import success')

  mongoose.disconnect()
}

importData(products)
