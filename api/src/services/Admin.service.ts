import Admin, { AdminDocument } from '../models/Admin.model'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<AdminDocument[]> => {
  return Admin.find()
}

const create = (admin: AdminDocument): Promise<AdminDocument> => {
  const savedAdmin = admin.save()
  return savedAdmin
}

export default { findAll, create }
