require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, () => {
    console.log('mongodb connection success')
  })
}

module.exports = connectDB
