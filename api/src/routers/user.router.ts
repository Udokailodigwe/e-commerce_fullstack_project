import express from 'express'
import checkAuth from '../middlewares/checkAuth'

import {
  findAll,
  createUser,
  updateUser,
  findById,
  deleteUser,
} from '../controllers/User.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix

router.get('/', checkAuth, findAll)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.get('/:userId', checkAuth, findById)
router.delete('/:userId', checkAuth, deleteUser)

export default router
