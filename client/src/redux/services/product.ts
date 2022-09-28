import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchOneProduct } from "../../API/product";

const fetchAllProductThunk = createAsyncThunk("products/fetchAll", async () => {
  const { response } = await fetchAllProduct();
  return response;
});

const fetchOneProductThunk = createAsyncThunk(
  "product/fetchAll",
  async (id: string) => {
    const { response } = await fetchOneProduct(id);
    return response;
  }
);

export { fetchAllProductThunk, fetchOneProductThunk };
