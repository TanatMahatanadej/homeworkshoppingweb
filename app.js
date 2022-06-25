const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const productRouter = require('./src/modules/products/product.routes')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/webshoppingproducts', productRouter)

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true})

const port = process.env.PORT || 3030

app.get('/', (req,res) => {

    res.send('Server is running...')
})

app.listen(port, () => {
    console.log('Server is running')
})
