import axios from "axios";
import { Product } from "types";

const URL = "http://localhost:4000/api/v1/products";

const fetchAllProduct = async () => {
  try {
    const data = await axios.get(`${URL}`);
    const response: Product[] = data.data;
    const { status } = data;
    return {
      response,
      status,
    };
  } catch (error) {
    throw error;
  }
};

const fetchOneProduct = async (productId: string) => {
  try {
    const data = await axios.get(`${URL}/${productId}`);
    const response: Product[] = data.data;
    const { status } = data;
    return {
      response,
      status,
    };
  } catch (error) {
    throw error;
  }
};

const createProduct = async (product: Product) => {
  try {
    const data = await axios.post(`${URL}/`, product);
    const response: Product = data.data;
    const { status } = data;
    return {
      response,
      status,
    };
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId: string, update: Product) => {
  try {
    const data = await axios.put(`${URL}/${productId}`, update);
    const response: Product = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId: string | undefined) => {
  try {
    const data = await axios.delete(`${URL}/${productId}`);
    const response: Product = data.data;
    const { status } = data;
    return { response, status };
  } catch (error) {
    throw error;
  }
};
export {
  fetchAllProduct,
  fetchOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
