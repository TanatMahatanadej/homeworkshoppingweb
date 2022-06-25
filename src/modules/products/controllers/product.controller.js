const ProductService = require('../services/product.service.js')

const productController = {
    createProduct: async (req,res) => {
        try {
            const payload = req.body
            const data = await ProductService.createOne(payload)

            res.json({
                success:true,
                data
            })

        } catch (error) {
            console.error(error)
        }
    },
    getAllProduct: async (req,res) => {
        try {
            const data = await ProductService.getAll()

            res.json({
                success:true,
                data
            })

        } catch (error) {
            console.error(error)
        }
    },

    getById: async(req,res) => {
        try {
            const {id} = req.params
            const data = await ProductService.getOne(id)

            res.json({
                success:true,
                data
            })

        } catch (error) {
            console.error(error)
        }
    },

    updateById: async(req,res) => {
        try {
            const {id} = req.params
            const payload = req.body
            const data = await ProductService.updateOne(id,payload)

            res.json({
                success:true,
                data
            })

        } catch (error) {
            console.error(error)
        }
    },

    deleteById: async(req,res) => {
        try {
            const {id} = req.params
            const data = await ProductService.delete(id)
            res.json({
                success:true,
                data
            })


        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = productController