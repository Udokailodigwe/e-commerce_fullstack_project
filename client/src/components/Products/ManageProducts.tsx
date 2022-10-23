import { useEffect, useState } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";

import { Product } from "types";
import AdminProduct from "./ManageProduct";
import EditProduct from "./EditProduct";

import { Col, Row } from "react-bootstrap";
import "./products.css";

const AdminProducts = () => {
  const [currentId, setCurrentId] = useState("");
  console.log(currentId);
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <Row>
      <Col className="product_dashboard" sm={12} md={4}>
        <EditProduct currentId={currentId} setCurrentId={setCurrentId} />
      </Col>
      <Col className="product_dashboard" sm={12} md={7}>
        {products.map((product) => (
          <div key={product._id}>
            <AdminProduct product={product} setCurrentId={setCurrentId} />
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default AdminProducts;
