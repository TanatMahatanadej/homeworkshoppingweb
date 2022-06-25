const ProductModel = require('../models/product.schema')


const productService = {
    getAll () {
        return ProductModel.find()
    },
    getOne (id) {
        return ProductModel.findOne({_id: id})
    },
    createOne (payload) {
        return new ProductModel(payload).save()
    },

    async updateOne (id, payload) {
        return ProductModel.findOneAndUpdate({_id:id}, payload)
    },

    async delete (id) {
        return ProductModel.findOneAndDelete({_id:id})
    }
}

module.exports = productService