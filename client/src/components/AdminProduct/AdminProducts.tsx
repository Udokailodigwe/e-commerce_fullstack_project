import { useEffect, useState } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import AdminProduct from "./AdminProduct";
import { Product } from "types";
import EditProduct from "./EditProduct";

const AdminProducts = () => {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <div>
      <EditProduct currentId={currentId} setCurrentId={setCurrentId} />
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <AdminProduct product={product} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
