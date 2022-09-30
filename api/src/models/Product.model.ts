import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  category: {
    kids: string[]
    women: string[]
    men: string[]
  }
  variants: string[]
  sizes: {
    small: number
    medium: number
    large: number
    xlarge: number
  }
  image: string
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: {
      _id: { id: false },
      kids: [String],
      women: [String],
      men: [String],
    },
    index: true,
  },
  variants: {
    type: [String],
    index: true,
  },
  sizes: {
    type: {
      _id: { id: false },
      small: Number,
      medium: Number,
      large: Number,
      xlarge: Number,
    },
  },
  image: {
    type: String,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
