import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  category: string
  small: number
  medium: number
  large: number
  image: string
  price: number
  rating: number
  countInStock: number
  reviews: number
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },

    category: {
      type: String,
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

    price: {
      type: Number,
    },

    rating: {
      type: Number,
    },

    countInStock: {
      type: Number,
    },
    reviews: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)
export default mongoose.model<ProductDocument>('Product', productSchema)
