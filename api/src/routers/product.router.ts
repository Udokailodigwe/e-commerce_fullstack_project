import express from 'express'
import checkAuth from '../middlewares/checkAuth'
import checkAdmin from '../middlewares/checkAdmin'

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
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)

export default router
