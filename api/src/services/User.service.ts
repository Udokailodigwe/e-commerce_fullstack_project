import User, { UserDocument } from '../models/User.model'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<UserDocument[]> => {
  return User.find()
}

const create = async (user: UserDocument): Promise<UserDocument> => {
  const savedUser = user.save()
  return savedUser
}

export default { findAll, create }
