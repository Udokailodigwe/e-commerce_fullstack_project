import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <div>
      {products.productData.map((product) => (
        <ul key={product._id}>
          <li>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
