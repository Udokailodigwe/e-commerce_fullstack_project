import Product, { ProductDocument } from '../models/Product.model'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1, category: 1 })
}

const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()
}

// const findById = async (movieId: string): Promise<MovieDocument> => {
//   const foundMovie = await Movie.findById(movieId)

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

// const update = async (
//   movieId: string,
//   update: Partial<MovieDocument>
// ): Promise<MovieDocument | null> => {
//   const foundMovie = await Movie.findByIdAndUpdate(movieId, update, {
//     new: true,
//   })

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

// const deleteMovie = async (movieId: string): Promise<MovieDocument | null> => {
//   const foundMovie = Movie.findByIdAndDelete(movieId)

//   if (!foundMovie) {
//     throw new NotFoundError(`Movie ${movieId} not found`)
//   }

//   return foundMovie
// }

export default {
  findAll,
  create,
  // findById,
  // update,
  // deleteMovie,
}
