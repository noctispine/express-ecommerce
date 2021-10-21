require('dotenv').config()
const express = require('express')
const mw = require('./utils/middleware')
const connectDB = require('./config/db')
const productRouter = require('./routes/productRouter')

connectDB()

const app = express()

app.use(express.json())
app.use(mw.requestLogger)

app.use('/products', productRouter)

app.use(mw.unknownEndpoint)
app.use(mw.errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
