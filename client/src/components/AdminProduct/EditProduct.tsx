import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { createProductThunk, updateProductThunk } from "redux/services/product";
import { CurrentId } from "types";

export default function EditProduct({ currentId, setCurrentId }: CurrentId) {
  console.log(currentId);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    kidsWear: "",
    womenWear: "",
    menWear: "",
    variants: [""],
    small: 0,
    medium: 0,
    large: 0,
    image: "",
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
      kidsWear: "",
      womenWear: "",
      menWear: "",
      variants: [""],
      small: 0,
      medium: 0,
      large: 0,
      image: "",
    });
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, description: e.target.value });
  };

  const handleSetKidsWear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, kidsWear: e.target.value });
  };

  const handleSetWomenWear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, womenWear: e.target.value });
  };

  const handleSetMenWear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, menWear: e.target.value });
  };

  const handleSetVariants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVariants = [e.target.value];
    setNewProduct({ ...newProduct, variants: newVariants });
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

  return (
    <div>
      <h1>{currentId ? "Update" : "Create"} Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={newProduct.name}
          required
          onChange={handleSetName}
        />
        <br />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          value={newProduct.description}
          required
          onChange={handleSetDescription}
        />
        <label htmlFor="kidswear">kids wear</label>
        <input
          type="text"
          id="kidswear"
          value={newProduct.kidsWear}
          onChange={handleSetKidsWear}
        />
        <br />
        <label htmlFor="womenwear">women wear</label>
        <input
          type="text"
          id="womenwear"
          value={newProduct.womenWear}
          onChange={handleSetWomenWear}
        />
        <br />
        <label htmlFor="menwear">men wear</label>
        <input
          type="text"
          id="menwear"
          value={newProduct.menWear}
          onChange={handleSetMenWear}
        />
        <br />
        <label htmlFor="variants">Variants</label>
        <input
          type="text"
          id="variants"
          value={newProduct.variants}
          onChange={handleSetVariants}
        />
        <br />
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
        <br />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          value={newProduct.image}
          onChange={handleSetImage}
        />
        <br />

        <button>{!currentId ? "Create" : "Update"} product</button>
        <button onClick={clear}>Reset</button>
      </form>
    </div>
  );
}
