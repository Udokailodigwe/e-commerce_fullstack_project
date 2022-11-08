import express from 'express'
import checkAuth from '../middlewares/checkAuth'
import checkAdmin from '../middlewares/checkAdmin'

import {
  findAll,
  createUser,
  updateUser,
  findById,
  deleteUser,
  banUser,
  unBanUser,
} from '../controllers/User.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix

router.get('/', checkAuth, checkAdmin, findAll)
router.post('/', checkAuth, checkAdmin, createUser)
router.put('/ban/:userId', checkAuth, checkAdmin, banUser)
router.put('/unban/:userId', checkAuth, checkAdmin, unBanUser)
router.put('/:userId', checkAuth, checkAdmin, updateUser)
router.get('/:userId', checkAuth, checkAdmin, findById)
router.delete('/:userId', checkAuth, checkAdmin, deleteUser)

export default router
