import React from "react";
import { useAppDispatch } from "redux/hooks";
import { deleteProductThunk } from "redux/services/product";
import { Product } from "types";

type ProductProps = {
  product: Product;
  setCurrentId: any;
};

export default function AdminProduct({ product, setCurrentId }: ProductProps) {
  const dispatch = useAppDispatch();

  const handleSetId = () => {
    setCurrentId(product._id);
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProductThunk(product._id));
  };

  return (
    <span>
      <span>
        {product.name}, {product.description}
      </span>
      <button onClick={handleSetId}>Edit</button>
      <button onClick={handleDeleteProduct}>delete</button>
    </span>
  );
}
