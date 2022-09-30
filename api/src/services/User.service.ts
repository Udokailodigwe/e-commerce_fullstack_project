import User, { UserDocument } from '../models/User.model'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<UserDocument[]> => {
  return await User.find()
}

const create = async (user: UserDocument): Promise<UserDocument> => {
  const savedUser = user.save()
  return savedUser
}

const update = async (
  userId: string,
  { firstName, lastName, email, password, image }: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(
    userId,
    { firstName, lastName, email, password, image },
    { new: true }
  )

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

export default { findAll, create, update, findById, deleteUser }
