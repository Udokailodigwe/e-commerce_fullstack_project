import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <div>
      <Link to={"/user/"}>go to admin</Link>
      {products.map((product) => (
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
