import { Request, Response, NextFunction } from 'express'

import { UserDocument } from '../models/User.model'
import { ForbiddenError } from '../helpers/apiError'

export default function (req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.user as UserDocument
    console.log(user.isAdmin)
    if (!user || !user.isAdmin) {
      throw new ForbiddenError()
    }
    return next()
  } catch (error) {
    throw new ForbiddenError()
  }
}
