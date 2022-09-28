import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { useParams } from "react-router-dom";

export default function Product() {
  const dispatch = useAppDispatch();

  const { productId } = useParams() as { productId: string };

  const products = useAppSelector(
    (state: RootState) => state.products.productData
  );

  const product = products.find((product) => product._id === productId);

  useEffect(() => {
    // if (products.length === 0) {
    dispatch(fetchAllProductThunk());
    // }
  }, [dispatch, products.length]);

  if (!product) return <h1>Loading product</h1>;

  return (
    <div>
      <ul>
        <li>{product.description}</li>
      </ul>
    </div>
  );
}
