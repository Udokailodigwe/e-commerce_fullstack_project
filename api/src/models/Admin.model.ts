import mongoose, { Document } from 'mongoose'

export type AdminDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
}

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    required: true,
  },

  lastName: {
    type: String,
    minlength: 2,
    required: true,
  },

  email: {
    type: String,
    required: [true, 'Email required'],
    trim: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    minlength: 2,
    required: true,
  },
})

export default mongoose.model<AdminDocument>('Admin', AdminSchema)
