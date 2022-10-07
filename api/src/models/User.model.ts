import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  product: mongoose.Schema.Types.ObjectId[]
  admin: boolean
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  isBanned: boolean
}

const userSchema = new mongoose.Schema({
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],

  admin: {
    type: Boolean,
    default: false,
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
    type: Boolean,
    default: false,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
