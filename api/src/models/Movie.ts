import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  category: string[]
  variants: string
  sizes: string
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    index: true,
    required: true,
  },
  variants: {
    type: [String],
    index: true,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
