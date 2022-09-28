import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProductThunk } from "redux/services/product";

import { ProductState } from "types";

const initialState: ProductState = {
  productData: [],
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
      console.log(action.payload);
      const response = action.payload;
      state.productData = response;
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default productSlice.reducer;
