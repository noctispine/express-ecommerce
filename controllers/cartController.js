const jwt = require('jsonwebtoken')
const Cart = require('../models/Cart')
const Product = require('../models/Product')
const User = require('../models/User')

const removeFromCart = async (req, res, next) => {
  const user = req.user
  const productId = req.params.id

  try {
    const cart = await Cart.findOne({ user: user })
    const product = await Product.findOne({ _id: productId })
    const { price } = product
    if (cart) {
      let products = cart.items.map((item) => item.product.toString())
      if (products.includes(productId)) {
        let product = cart.items.find((x) => x.product.toString() === productId)
        if (product.quantity === 1) {
          cart.total -= price
          cart.total = cart.total.toFixed(2)
          if (cart.total < 0) cart.total = 0
          await product.remove()
          await product.save()
          await cart.save()
          res.json({
            removedProductId: productId,
            quantitiy: product.quantitiy,
            newTotal: cart.total,
          })
        } else {
          product.quantity--
          cart.total -= price
          cart.total = cart.total.toFixed(2)
          if (cart.total < 0) cart.total = 0
          await cart.save()
          res.json({
            removedProductId: productId,
            quantitiy: product.quantitiy,
            newTotal: cart.total,
          })
        }
      }
    } else {
      res.status(404).json({ error: 'there is no cart' })
    }
  } catch (err) {
    next(err)
  }
}

const addToCart = async (req, res, next) => {
  const user = req.user
  const item = {
    product: req.body.product,
    quantity: req.body.quantity,
  }

  try {
    const product = await Product.findOne({ _id: item.product })
    const cart = await Cart.findOne({ user: user })
    if (cart) {
      let products = cart.items.map((item) => item.product.toString())
      if (products.includes(item.product)) {
        const updatedProduct = await Cart.findOneAndUpdate(
          {
            user: user,
            items: {
              $elemMatch: { product: item.product },
            },
          },
          {
            $inc: { 'items.$.quantity': item.quantity },
          },
          { new: true }
        )

        cart.total += product.price * item.quantity
        cart.total = cart.total.toFixed(2)

        await cart.save()

        res.json({
          newProduct: item,
          newTotal: cart.total,
        })
      } else {
        cart.items.push(item)

        cart.total += product.price * item.quantity
        cart.total = cart.total.toFixed(2)

        await cart.save()

        res.json({
          newProduct: item,
          newTotal: cart.total,
        })
      }
    } else {
      const newTotal = product.price.toFixed(2)
      const newCart = new Cart({
        user: user._id,
        items: [item],
        total: newTotal,
      })
      console.log(newCart)
      await newCart.save()
      res.json({
        newProduct: product,
        newTotal: cart.total,
      })
    }
  } catch (err) {
    next(err)
  }
}

const getAllCarts = async (req, res, next) => {
  const carts = await Cart.find({}).populate('items.product', {
    title: 1,
    image: 1,
    price: 1,
  })
  res.json(carts)
}

const getCart = async (req, res, next) => {
  const user = req.user
  try {
    const cart = await (
      await Cart.findOne({ user: user.id })
    ).populate('items.product', {
      title: 1,
      price: 1,
      category: 1,
      image: 1,
    })

    const cartItemProducts = cart.items.map((cartItem) => {
      const { id, title, image, price } = cartItem.product
      return { id, title, image, price, quantity: cartItem.quantity }
    })
    res.json({ cartItems: cartItemProducts, cartTotal: cart.total })
  } catch (error) {
    next(error)
  }
}

module.exports = { addToCart, getAllCarts, getCart, removeFromCart }
