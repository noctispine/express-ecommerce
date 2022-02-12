require('dotenv').config()
const express = require('express')
const mw = require('./utils/middleware')
const connectDB = require('./config/db')
const productRouter = require('./routes/productRouter')
const loginRouter = require('./routes/loginRouter')
const usersRouter = require('./routes/usersRouter')
const cartRouter = require('./routes/cartRouter')

const path = require('path')

connectDB()

const app = express()
app.use(express.json())
//app.use(mw.requestLogger)

app.use('/products', productRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/cart', cartRouter)
app.use(express.static(path.join(__dirname, "build")))


app.use(mw.unknownEndpoint)
app.use(mw.errorHandler)

const PORT = process.env.PORT || 3001

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
