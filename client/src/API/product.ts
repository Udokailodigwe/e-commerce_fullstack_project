import axios from "axios";
import { NewProduct, Product } from "types";

const URL = "http://localhost:4000/api/v1/products";

const token = localStorage.getItem("token") || "";
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
console.log(config);
const fetchAllProduct = async () => {
  try {
    const data = await axios.get(`${URL}`, config);
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
    const data = await axios.get(`${URL}/${productId}`, config);
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

const createProduct = async (product: NewProduct) => {
  try {
    const data = await axios.post(`${URL}/`, product, config);
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

const updateProduct = async (productId: string, update: Partial<Product>) => {
  try {
    const data = await axios.put(`${URL}/${productId}`, update, config);
    const response = data.data;
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId: string | undefined) => {
  try {
    const data = await axios.delete(`${URL}/${productId}`, config);
    const { status } = data;
    return { productId, status };
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
