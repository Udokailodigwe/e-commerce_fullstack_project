import React from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch } from "redux/hooks";
import { deleteProductThunk } from "redux/services/product";
import { Product } from "types";

import "./products.css";

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
    <Table className="table_product" striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>CountInStock</th>
          <th>Small</th>
          <th>Medium</th>
          <th>Large</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img className="img" src={product.image} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>{product.countInStock}</td>
          <td>{product.small}</td>
          <td>{product.medium}</td>
          <td>{product.large}</td>
          <td>
            <button className="product_btn" onClick={handleSetId}>
              Edit
            </button>
          </td>
          <td>
            <button className="product_btn" onClick={handleDeleteProduct}>
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
