import express from 'express'

import {
  findAll,
  createUser,
  updateUser,
  findById,
  deleteUser,
} from '../controllers/User.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.get('/', findAll)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.get('/:userId', findById)
router.delete('/:userId', deleteUser)

export default router
