import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  searchBy,
  createProduct,
  fetchAllProduct,
  fetchOneProduct,
  updateProduct,
  deleteProduct,
} from "../../API/product";
import { NewProduct, Product, Update } from "types";

const searchByThunk = createAsyncThunk(
  "products/searchBy",
  async (query: any) => {
    try {
      const { response } = await searchBy(query);
      return {
        response,
      };
    } catch (error) {
      throw error;
    }
  }
);

const fetchAllProductThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const { response } = await fetchAllProduct();
      return {
        response,
      };
    } catch (error) {
      throw error;
    }
  }
);

const fetchOneProductThunk = createAsyncThunk(
  "product/fetchProduct",
  async (productId: string) => {
    const { response } = await fetchOneProduct(productId);
    return {
      response,
    };
  }
);

const createProductThunk = createAsyncThunk(
  "product/create",
  async (product: NewProduct) => {
    const { response } = await createProduct(product);
    return {
      response,
    };
  }
);

const updateProductThunk = createAsyncThunk(
  "product/update",
  async ({ productId, update }: Update) => {
    const response: Product = await updateProduct(productId, update);
    console.log("thunk:", response);
    return response;
  }
);

const deleteProductThunk = createAsyncThunk(
  "product/delete",
  async (productId: string | undefined) => {
    await deleteProduct(productId);
    return { productId };
  }
);

export {
  searchByThunk,
  fetchAllProductThunk,
  fetchOneProductThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
};
