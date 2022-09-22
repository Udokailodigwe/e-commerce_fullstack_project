import express from 'express'

import {
  findAll,
  createProduct,
  // findById,
  // deleteMovie,
  // updateMovie,
} from '../controllers/Product.controller'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.post('/', createProduct)
// router.get('/:movieId', findById)
// router.put('/:movieId', updateMovie)
// router.delete('/:movieId', deleteMovie)

export default router
