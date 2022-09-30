import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  fetchAllProduct,
  fetchOneProduct,
} from "../../API/product";
import { Product } from "types";

const fetchAllProductThunk = createAsyncThunk("products/fetchAll", async () => {
  try {
    const { response } = await fetchAllProduct();
    return {
      response,
    };
  } catch (error) {
    throw error;
  }
});

const fetchOneProductThunk = createAsyncThunk(
  "product/fetchAll",
  async (productId: string) => {
    const { response } = await fetchOneProduct(productId);
    return response;
  }
);

const createProductThunk = createAsyncThunk(
  "product/create",
  async (product: Product) => {
    const { response } = await createProduct(product);
    return {
      response,
    };
  }
);

export { fetchAllProductThunk, fetchOneProductThunk, createProductThunk };
