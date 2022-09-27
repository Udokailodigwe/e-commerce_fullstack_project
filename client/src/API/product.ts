import axios from "axios";
import { Product } from "types";

const fetchProduct = async () => {
  const URL = "http://localhost:4000/api/v1/products";
  const response = await axios.get(URL);
  const resData: Product[] = await response.data;
  return {
    response: resData,
  };
};

export default fetchProduct;
