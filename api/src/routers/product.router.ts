import express from 'express'
import checkAuth from '../middlewares/checkAuth'

import {
  findAll,
  createProduct,
  updateProduct,
  findById,
  deleteProduct,
} from '../controllers/Product.controller'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.post('/', checkAuth, createProduct)
router.put('/:productId', checkAuth, updateProduct)
router.get('/:productId', findById)
router.delete('/:productId', checkAuth, deleteProduct)

export default router
