import { createSlice } from "@reduxjs/toolkit";
import getTokenThunk from "redux/services/auth";

//to be move to types file later
export type AuthState = {
  token: string;
  authenticatedUser: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    isAdmin: Boolean;
    isBanned: Boolean;
  }[];
  error: Boolean;
  isLoading: Boolean;
};

const initialState: AuthState = {
  token: "",
  authenticatedUser: [],
  error: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTokenThunk.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(getTokenThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTokenThunk.fulfilled, (state, action) => {
      const token = action.payload.token;
      const authenticatedUser = action.payload.user;
      state.token = token;
      state.authenticatedUser = authenticatedUser;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
    });
  },
});
export default authSlice.reducer;
