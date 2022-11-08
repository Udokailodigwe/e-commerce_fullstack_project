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

//Post /user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, image } = req.body

    const user = new User({
      firstName,
      lastName,
      email,
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

//Put /users/:user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId

    const updatedUser = await userService.update(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

//Get /users/:user
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    res.json(await userService.findById(userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

//Delete /users/:user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    await userService.deleteUser(userId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const banUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    const user = await userService.banUser(userId)
    res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const unBanUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    const user = await userService.unBanUser(userId)
    res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
