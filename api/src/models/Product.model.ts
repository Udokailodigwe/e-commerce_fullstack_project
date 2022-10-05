import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  kidswear: string
  womenwear: string
  menwear: string
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
  kidswear: {
    type: String,
  },
  womenwear: {
    type: String,
  },
  menwear: {
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
