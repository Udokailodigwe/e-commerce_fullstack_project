import { Request, Response, NextFunction } from 'express'

import Admin from '../models/Admin.model'
import AdminService from '../services/Admin.service'
import { BadRequestError } from '../helpers/apiError'

//Get /admin
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getAllAdmin = await AdminService.findAll()
    res.json(getAllAdmin)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

//Post /admin
export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const admin = new Admin({ firstName, lastName, email, password })
    await AdminService.create(admin)

    res.send({ message: `New admin, ${admin.firstName} created` })
    res.json(admin)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
