import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  _id: mongoose.Schema.Types.ObjectId
  product: mongoose.Schema.Types.ObjectId[]
  firstName: string
  lastName: string
  email: string
  image: string
  isAdmin: boolean
  isBanned: boolean
}

const userSchema = new mongoose.Schema({
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: [true, 'Email required'],
    trim: true,
    lowercase: true,
    unique: true,
  },

  image: {
    type: String,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  isBanned: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
