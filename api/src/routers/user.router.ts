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

router.get('/', checkAuth, findAll) //to be checked later(checkAuth?)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.get('/:userId', findById) //to be checked later(checkAuth?)
router.delete('/:userId', deleteUser)

export default router
