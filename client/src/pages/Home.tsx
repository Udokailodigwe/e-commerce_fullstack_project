import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchProductThunk } from "redux/slices/productSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state);
  console.log(products.productData);

  useEffect(() => {
    dispatch(fetchProductThunk());
  }, [dispatch]);

  return (
    <div>
      {products.productData.map((product) => (
        <ul key={product.name}>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{product.sizes}</li>
          <li>{product.variants}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
