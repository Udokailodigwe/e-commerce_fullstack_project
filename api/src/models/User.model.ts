import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  product: mongoose.Schema.Types.ObjectId[]
  isBanned: boolean
}

const userSchema = new mongoose.Schema({
  product: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
  },

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

  image: {
    type: String,
  },

  isBanned: {
    default: false,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
