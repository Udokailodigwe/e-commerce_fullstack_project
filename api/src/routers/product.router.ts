import express from 'express'
import checkAuth from '../middlewares/checkAuth'

import {
  findAll,
  createProduct,
  updateProduct,
  findById,
  deleteProduct,
  searchBy,
} from '../controllers/Product.controller'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
// router.get('/', checkAuth, findAll)
router.get('/', checkAuth, findAll)
router.post('/', checkAuth, createProduct)
router.get('/search', checkAuth, searchBy)
router.put('/:productId', checkAuth, updateProduct)
router.get('/:productId', checkAuth, findById)
router.delete('/:productId', checkAuth, deleteProduct)

export default router
