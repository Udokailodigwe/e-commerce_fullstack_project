import { createSlice } from "@reduxjs/toolkit";

import {
  fetchAllProductThunk,
  createProductThunk,
} from "redux/services/product";

import { ProductState } from "types";

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
      console.log("fetchAll Payload", action.payload);
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

    builder.addCase(
      createProductThunk.fulfilled,
      (state: ProductState, action) => {
        console.log("create payload", action.payload);
        state.products = [...state.products, action.payload.response];
        state.isLoading = false;
      }
    );
  },
});

export default productSlice.reducer;
