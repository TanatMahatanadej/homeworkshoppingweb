const express = require('express')
const productController = require('../products/controllers/product.controller')

const router = express.Router()

router.post('/', productController.createProduct)

router.get('/', productController.getAllProduct)

router.get('/:id', productController.getById)

router.put('/:id', productController.updateById)

router.delete('/:id', productController.deleteById)

module.exports = router