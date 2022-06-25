const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    quantity: {
        type:Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
}, { _id:true, timestamp:true, strict:true})

const ProductModel = mongoose.model('webshoppingproducts',productSchema)
module.exports = ProductModel