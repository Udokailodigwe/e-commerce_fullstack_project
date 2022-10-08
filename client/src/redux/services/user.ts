import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  fetchUser,
  fetchUsers,
  updateUser,
} from "API/user";
import { PickedPropsEditUser, UpdateUser } from "types";

const fetchUsersThunk = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const { response, status } = await fetchUsers();
    return { response, status };
  } catch (error) {
    throw error;
  }
});

const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async (id: string) => {
    try {
      const { response, status } = await fetchUser(id);
      return { response, status };
    } catch (error) {
      throw error;
    }
  }
);

const createUserThunk = createAsyncThunk(
  "user/create",
  async (user: PickedPropsEditUser) => {
    try {
      const { response, status } = await createUser(user);
      return { response, status };
    } catch (error) {
      throw error;
    }
  }
);

const deleteUserThunk = createAsyncThunk("user/delete", async (id: string) => {
  try {
    const { status } = await deleteUser(id);
    return { id, status };
  } catch (error) {
    throw error;
  }
});

const updateUserThunk = createAsyncThunk(
  "user/update",
  async ({ id, user }: UpdateUser) => {
    try {
      const { response, status } = await updateUser(id, user);
      return { response, status };
    } catch (error) {
      throw error;
    }
  }
);

export {
  fetchUsersThunk,
  fetchUserThunk,
  createUserThunk,
  deleteUserThunk,
  updateUserThunk,
};
