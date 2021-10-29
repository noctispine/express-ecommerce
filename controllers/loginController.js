const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const login = async (req, res, next) => {
  const body = req.body
  try {
    const user = await User.findOne({
      username: body.username,
    })
    if (!body.username || !body.password) {
      return res.status(400).json({ error: 'All input is required' })
    }
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid username or password',
      })
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 30,
    })
    res.status(200).send({
      token,
      username: user.username,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login,
}
