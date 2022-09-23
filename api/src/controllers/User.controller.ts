import { Request, Response, NextFunction } from 'express'

import User from '../models/User.model'
import userService from '../services/User.service'
import { BadRequestError } from '../helpers/apiError'

//Get /user
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getAllUser = await userService.findAll()
    res.json(getAllUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

//create /user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, image, isBanned } = req.body
    console.log(req.body)

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      image,
    })

    await userService.create(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
