import { Request, Response, NextFunction } from 'express'

import Product from '../models/Product.model'
import productService from '../services/Product.service'
import { BadRequestError } from '../helpers/apiError'

// GET /product
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

// POST /product
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      description,
      category,
      small,
      medium,
      large,
      image,
      price,
      rating,
      countInStock,
      reviews,
    } = req.body

    const product = new Product({
      name,
      description,
      category,
      small,
      medium,
      large,
      image,
      price,
      rating,
      countInStock,
      reviews,
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

// PUT /products/:productId
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId

    const updatedProduct = await productService.update(productId, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// GET /products/:productId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId
    res.json(await productService.findById(productId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// Delete /products/:productId
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params
    await productService.deleteProduct(productId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

export const searchBy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // OUR GOAL TO GET HERE -> const query = [{ name: 'Nike' }, { price: 61.99 }]
    // FROM req.query = { name: 'Nike', price: '61.99' }
    // TO [{ name: 'Nike' }, { price: 61.99 }]
    const resQuery = req.query

    const queries = []
    const allowedQueries = ['name']

    for (const key in resQuery) {
      const value = resQuery[key]
      const isAllowedKey = allowedQueries.includes(key)
      if (isAllowedKey) {
        queries.push({ [key]: value })
      }
    }
    console.log(queries)
    const products = await productService.searchBy(queries)
    res.status(200).json(products)
  } catch (error) {
    if (error instanceof Error && error.name == 'validationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
