const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  image: String,
})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Product', ProductSchema)
