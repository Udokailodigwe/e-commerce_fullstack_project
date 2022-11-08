import { createSlice } from "@reduxjs/toolkit";
import getTokenThunk from "redux/services/auth";

import { Users } from "types";

//to be move to types file later
export type AuthState = {
  token: string;
  authenticatedUser: Users;
  error: Boolean;
  isLoading: Boolean;
};

const token = localStorage.getItem("token") || "";
const user: Users = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: AuthState = {
  token: token,
  authenticatedUser: user,
  error: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isLoading = false;
      state.token = "";
      state.authenticatedUser = JSON.parse("{}");
      state.error = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTokenThunk.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(getTokenThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTokenThunk.fulfilled, (state, { payload }) => {
      const token = payload.token;
      state.token = token;
      const authenticatedUser = payload.user;
      state.authenticatedUser = authenticatedUser;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
