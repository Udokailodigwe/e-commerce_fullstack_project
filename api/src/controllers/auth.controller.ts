import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

export const login = (req: Request, res: Response) => {
  const user: any = req.user
  const token = jwt.sign(
    {
      userId: user._id,
      product: user.product,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
      isBanned: user.isBanned,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  )
  res.json({ messsage: 'done', token })
}
