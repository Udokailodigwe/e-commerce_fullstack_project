import { createSlice } from "@reduxjs/toolkit";

import {
  fetchAllProductThunk,
  fetchOneProductThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "redux/services/product";

import { Product, ProductState, Update } from "types";

const initialState: ProductState = {
  products: [],
  isLoading: true,
  error: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllProductThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(fetchAllProductThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllProductThunk.fulfilled, (state, action) => {
      const { response } = action.payload;
      state.products = response;
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(createProductThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(createProductThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createProductThunk.fulfilled, (state, action) => {
      const { response } = action.payload;
      state.products = [...state.products, response];
      state.isLoading = false;
    });

    builder.addCase(updateProductThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(updateProductThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateProductThunk.fulfilled, (state, action) => {
      console.log("update", action.payload.response);
      state.products = state.products.map((product: Product) => {
        if (product._id === action.payload.response._id) {
          return action.payload.response;
        }
        return product;
      });
      state.isLoading = false;
    });

    builder.addCase(deleteProductThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(deleteProductThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
      const { productId } = action.payload;
      const products = state.products.filter(
        (product) => product._id !== productId
      );
      state.products = products;
    });
  },
});

export default productSlice.reducer;
