import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { createProductThunk, updateProductThunk } from "redux/services/product";
import { CurrentId, NewProduct } from "types";

import "./products.css";

export default function EditProduct({ currentId, setCurrentId }: CurrentId) {
  console.log(currentId);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    description: "",
    category: "",
    small: 0,
    medium: 0,
    large: 0,
    image: "",
    price: 0,
    rating: 0,
    countInStock: 0,
    reviews: 0,
  });

  const dispatch = useAppDispatch();

  const product = useAppSelector((state) =>
    currentId ? state.products.products.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (product) setNewProduct(product);
  }, [product]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateProductThunk({ productId: currentId, update: newProduct })
      );
    } else {
      dispatch(createProductThunk(newProduct));
    }
    clear();
  };

  const clear = () => {
    setCurrentId("");
    setNewProduct({
      name: "",
      description: "",
      category: "",
      small: 0,
      medium: 0,
      large: 0,
      image: "",
      price: 0,
      rating: 0,
      countInStock: 0,
      reviews: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  return (
    <div className="form_input">
      <h3 className="title">{currentId ? "Update" : "Create"} Product</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newProduct.name}
          required
          onChange={handleChange}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newProduct.description}
          required
          onChange={handleChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
        />
        <label htmlFor="small">small</label>
        <input
          type="number"
          id="small"
          name="small"
          value={newProduct.small}
          onChange={handleNumChange}
        />
        <label htmlFor="medium">medium</label>
        <input
          type="number"
          id="medium"
          name="medium"
          value={newProduct.medium}
          onChange={handleNumChange}
        />
        <label htmlFor="large">large</label>
        <input
          type="number"
          id="large"
          name="large"
          value={newProduct.large}
          onChange={handleNumChange}
        />

        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
        />

        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleNumChange}
        />

        <label htmlFor="rating">rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={newProduct.rating}
          onChange={handleNumChange}
        />
        <label htmlFor="countinstock">countInStock</label>
        <input
          type="number"
          id="countinstock"
          name="countinstock"
          value={newProduct.countInStock}
          onChange={handleNumChange}
        />
        <label htmlFor="reviews">reviews</label>
        <input
          type="number"
          id="reviews"
          name="reviews"
          value={newProduct.reviews}
          onChange={handleNumChange}
        />
        <button className="product_btn">
          {!currentId ? "Create" : "Update"} product
        </button>
        <button className="product_btn" onClick={clear}>
          Reset
        </button>
      </form>
    </div>
  );
}
