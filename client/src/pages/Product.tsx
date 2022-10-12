import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { useParams } from "react-router-dom";
import Nav from "components/Nav";

export default function Product() {
  const dispatch = useAppDispatch();

  const { name } = useParams() as { name: string };

  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  const product = products.find((product) => product.name === name);

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  if (!product) return <h1>Loading product</h1>;

  return (
    <div>
      <Nav />
      <ul>
        <li>{product.description}</li>
      </ul>
    </div>
  );
}
