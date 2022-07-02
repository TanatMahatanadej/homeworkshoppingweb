const productService = require('../services/product.service.js')

const productController = {
    createProduct: async (req,res) => {
        try {
            const payload = req.body
            const data = await productService.createOne(payload)

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
            const data = await productService.getAll()

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
            const data = await productService.getOne(id)

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
            const data = await productService.updateOne(id,payload)

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
            const data = await productService.delete(id)
            res.json({
                success:true,
                data
            })


        } catch (error) {
            console.error(error)
        }
    },

    buy: async(req,res) => {
        try {
            const payload = req.body
            
            const data = await productService.getAll()

            const result = data.count - payload.count
            
            console.log(data)
            console.log(Object.keys(payload))

            await productService.updateOne(payload._id, {
                count: result
            })

            res.json({
                success: true,
                data
            })
            
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = productController