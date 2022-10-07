import axios from "axios";
import { PickedPropsEditUser, Users } from "types";

const URL = "http://localhost:4000/api/v1/users";

const fetchUsers = async () => {
  try {
    const data = await axios.get(`${URL}`);
    const response: Users[] = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

const fetchUser = async (id: string) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    const response: Users[] = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

const createUser = async (user: PickedPropsEditUser) => {
  try {
    const data = await axios.post(`${URL}/`, user);
    const response: Users = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string | undefined) => {
  try {
    const data = await axios.delete(`${URL}/${id}`);
    const response = data.data;
    const { status } = data;
    return {
      response,
      status,
    };
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: string, user: PickedPropsEditUser) => {
  try {
    const data = await axios.put(`${URL}/${id}`, user);
    const response: Users = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

export { fetchUsers, fetchUser, createUser, deleteUser, updateUser };
