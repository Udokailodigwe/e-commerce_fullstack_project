import axios from "axios";
import { PickedPropsEditUser, Users } from "types";

const URL = "http://localhost:4000/api/v1/users";

const token = JSON.parse(localStorage.getItem("token") || "");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const fetchUsers = async () => {
  try {
    const data = await axios.get(`${URL}`, config);
    const response: Users[] = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

const fetchUser = async (id: string) => {
  try {
    const data = await axios.get(`${URL}/${id}`, config);
    const response: Users = data.data;
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

const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${URL}/${id}`, config);
    const { status } = response.data;
    return {
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
