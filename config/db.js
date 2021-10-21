require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', () => {
    console.log('mongodb connection success')
  })
}

module.exports = connectDB
