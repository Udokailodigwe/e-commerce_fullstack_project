import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  kidsWear: string
  womenWear: string
  menWear: string
  variants: string[]
  small: number
  medium: number
  large: number
  image: string
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  kidsWear: {
    type: String,
  },
  womenWear: {
    type: String,
  },
  menWear: {
    type: String,
  },
  variants: {
    type: [String],
  },
  small: {
    type: Number,
  },
  medium: {
    type: Number,
  },
  large: {
    type: Number,
  },

  image: {
    type: String,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
