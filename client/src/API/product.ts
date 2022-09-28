import axios from "axios";
import { Product } from "types";

const URL = "http://localhost:4000/api/v1/products";

const fetchAllProduct = async () => {
  const data = await axios.get(URL);
  const response: Product[] = data.data;
  return {
    response,
  };
};

const fetchOneProduct = async (id: string) => {
  const data = await axios.get(`${URL}/${id}`);
  const response: Product[] = data.data;
  return {
    response,
  };
};

// const createProduct = async (id: string) => {
//   const data = await axios.get(`${URL}/${id}`);
//   const response: Product[] = data.data;
//   return {
//     response,
//   };
// };

export { fetchAllProduct, fetchOneProduct };
