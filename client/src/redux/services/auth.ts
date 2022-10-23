import { CredentialResponse } from "@react-oauth/google";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getToken from "API/auth";

const getTokenThunk = createAsyncThunk(
  "auth/getToken",
  async (credential: CredentialResponse) => {
    try {
      const { res } = await getToken(credential);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default getTokenThunk;
