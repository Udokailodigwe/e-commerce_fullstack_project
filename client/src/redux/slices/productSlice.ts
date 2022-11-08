import { createSlice } from "@reduxjs/toolkit";

import {
  searchByThunk,
  fetchAllProductThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "redux/services/product";

import { Product, ProductState } from "types";

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
    builder.addCase(searchByThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(searchByThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchByThunk.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.products = payload.response;
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(fetchAllProductThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(fetchAllProductThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllProductThunk.fulfilled, (state, { payload }) => {
      const { response } = payload;
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

    builder.addCase(createProductThunk.fulfilled, (state, { payload }) => {
      const { response } = payload;
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

    builder.addCase(updateProductThunk.fulfilled, (state, { payload }) => {
      state.products = state.products.map((product: Product) => {
        if (product._id === payload._id) {
          return payload;
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

    builder.addCase(deleteProductThunk.fulfilled, (state, { payload }) => {
      const { productId } = payload;
      const products = state.products.filter(
        (product) => product._id !== productId
      );
      state.products = products;
    });
  },
});

export default productSlice.reducer;
