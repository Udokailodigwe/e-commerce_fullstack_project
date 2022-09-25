import express from 'express'

import { findAll, createAdmin } from '../controllers/Admin.controller'

const router = express.Router()

// Every path we define here will get /api/v1/admin prefix
router.get('/', findAll)
router.post('/', createAdmin)

export default router
