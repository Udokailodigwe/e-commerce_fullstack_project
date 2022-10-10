import { createSlice } from "@reduxjs/toolkit";
import {
  createUserThunk,
  deleteUserThunk,
  fetchUsersThunk,
  fetchUserThunk,
  updateUserThunk,
} from "redux/services/user";
import { Users, UsersState } from "types";

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      console.log("fetch", action.payload.response);
      state.users = action.payload.response;
      state.isLoading = false;
    });

    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.users = [];
      state.isLoading = true;
    });

    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.users = [action.payload.response];
      state.isLoading = false;
    });

    builder.addCase(createUserThunk.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });

    builder.addCase(createUserThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      const { response } = action.payload;
      state.users = [...state.users, response];
    });

    builder.addCase(updateUserThunk.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });

    builder.addCase(updateUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      console.log(action.payload.response);
      state.users = state.users.map((user: Users) => {
        if (user._id === action.payload.response._id) {
          return action.payload.response;
        }
        return user;
      });
      state.isLoading = false;
    });

    builder.addCase(deleteUserThunk.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });

    builder.addCase(deleteUserThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      console.log(action.payload.id);
      const users = state.users.filter(
        (user) => user._id !== action.payload.id
      );
      state.users = users;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
