const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    console.log(username, email, password)
    if (username === '' || email === '' || password === '')
      return res.status(400).json({ error: 'All input is required' })

    // check if user already exist
    const isEmailAlreadyExist = await User.findOne({ email })
    const isUsernameAlreadyExist = await User.findOne({ username })
    if (isEmailAlreadyExist)
      return res.status(400).json({ error: 'Email address is already taken' })
    if (isUsernameAlreadyExist)
      return res.status(400).json({ error: 'Username is already exist' })

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await new User({
      username,
      email,
      passwordHash,
    })

    const savedUser = await user.save()

    res.status(201).json(savedUser)
  } catch (err) {
    next(err)
  }
}

module.exports = { createUser }
