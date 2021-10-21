require('dotenv').config()
const express = require('express')
const mw = require('./utils/middleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())


app.use(mw.unknownEndpoint)
app.use(mw.errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
