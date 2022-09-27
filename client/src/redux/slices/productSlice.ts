import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProductAPI from "API/product";
import { ProductState } from "types";

export const fetchProductThunk = createAsyncThunk(
  "product/fetchAll",
  async () => {
    const { response } = await fetchProductAPI();
    return response;
  }
);

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
    builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      const response = action.payload;
      state.productData = response;
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default productSlice.reducer;
