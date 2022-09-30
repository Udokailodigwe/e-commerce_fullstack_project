import axios from "axios";
import { Product } from "types";

const URL = "http://localhost:4000/api/v1/products";

const fetchAllProduct = async () => {
  try {
    const data = await axios.get(`${URL}`);
    const response: Product[] = data.data;
    return {
      response,
    };
  } catch (error) {
    throw error;
  }
};

const fetchOneProduct = async (id: string) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    const response: Product[] = data.data;
    return {
      response,
    };
  } catch (error) {
    throw error;
  }
};

const createProduct = async (product: Product) => {
  try {
    const data = await axios.post(`${URL}/`, product);
    const response: Product = data.data;
    return {
      response,
    };
  } catch (error) {
    throw error;
  }
};

export { fetchAllProduct, fetchOneProduct, createProduct };
