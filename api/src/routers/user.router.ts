import express from 'express'

import { findAll, createUser } from '../controllers/User.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.get('/', findAll)
router.post('/', createUser)

export default router
