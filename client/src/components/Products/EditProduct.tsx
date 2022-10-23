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

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, description: e.target.value });
  };

  const handleSetCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, category: e.target.value });
  };

  const handleSetSmall = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, small: parseFloat(e.target.value) });
  };

  const handleSetMedium = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, medium: parseFloat(e.target.value) });
  };

  const handleSetLarge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, large: parseFloat(e.target.value) });
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, image: e.target.value });
  };

  const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, price: parseFloat(e.target.value) });
  };

  const handleSetRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, rating: parseFloat(e.target.value) });
  };

  const handleSetCountInStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, countInStock: parseFloat(e.target.value) });
  };

  const handleSetReviews = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, reviews: parseFloat(e.target.value) });
  };

  return (
    <div className="form_input">
      <h3 className="title">{currentId ? "Update" : "Create"} Product</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={newProduct.name}
          required
          onChange={handleSetName}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          value={newProduct.description}
          required
          onChange={handleSetDescription}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          value={newProduct.category}
          onChange={handleSetCategory}
        />
        <label htmlFor="small">small</label>
        <input
          type="number"
          id="small"
          value={newProduct.small}
          onChange={handleSetSmall}
        />
        <label htmlFor="medium">medium</label>
        <input
          type="number"
          id="medium"
          value={newProduct.medium}
          onChange={handleSetMedium}
        />
        <label htmlFor="large">large</label>
        <input
          type="number"
          id="large"
          value={newProduct.large}
          onChange={handleSetLarge}
        />

        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          value={newProduct.image}
          onChange={handleSetImage}
        />

        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          value={newProduct.price}
          onChange={handleSetPrice}
        />

        <label htmlFor="rating">rating</label>
        <input
          type="number"
          id="rating"
          value={newProduct.rating}
          onChange={handleSetRating}
        />
        <label htmlFor="countinstock">countInStock</label>
        <input
          type="number"
          id="countinstock"
          value={newProduct.countInStock}
          onChange={handleSetCountInStock}
        />
        <label htmlFor="reviews">reviews</label>
        <input
          type="number"
          id="reviews"
          value={newProduct.reviews}
          onChange={handleSetReviews}
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
