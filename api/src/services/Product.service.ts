import Product, { ProductDocument } from '../models/Product.model'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1, category: 1 })
}

const searchBy = async (query: object[]): Promise<ProductDocument[]> => {
  // my goal to send this type of data [{ name: 'Nike' }, { price: 61.99 }]
  return await Product.find({
    $and: query,
  })
}

const create = async (product: ProductDocument): Promise<ProductDocument> => {
  const savedProduct = product.save()
  return savedProduct
}

const update = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

export default {
  findAll,
  create,
  update,
  findById,
  deleteProduct,
  searchBy,
}
