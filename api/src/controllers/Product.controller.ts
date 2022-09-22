import { Request, Response, NextFunction } from 'express'

import Product from '../models/Product.model'
import productService from '../services/Product.service'
import { BadRequestError } from '../helpers/apiError'

// GET /movies
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await productService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// POST /movies
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, category, variants, sizes, image } = req.body

    const product = new Product({
      name,
      description,
      category,
      variants,
      sizes,
      image,
    })

    await productService.create(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// // PUT /movies/:movieId
// export const updateMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const update = req.body
//     const movieId = req.params.movieId
//     const updatedMovie = await movieService.update(movieId, update)
//     res.json(updatedMovie)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // DELETE /movies/:movieId
// export const deleteMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await movieService.deleteMovie(req.params.movieId)
//     res.status(204).end()
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /movies/:movieId
// export const findById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await movieService.findById(req.params.movieId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', 400, error))
//     } else {
//       next(error)
//     }
//   }
// }
