import React, { useState } from "react";

import { useAppDispatch } from "redux/hooks";
import { createProductThunk } from "redux/services/product";
import { NewProduct, Product } from "types";

export default function Admin() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    description: "",
    kids: [],
    women: [],
    men: [],
    variants: [""],
    small: 0,
    medium: 0,
    large: 0,
    xlarge: 0,
    image: "",
  });

  const dispatch = useAppDispatch();

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, description: e.target.value });
  };

  const handleSetKids = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKids = [...newProduct.kids, e.target.value];
    setNewProduct({ ...newProduct, kids: newKids });
  };

  const handleSetWomen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWomen = [...newProduct.women, e.target.value];
    setNewProduct({ ...newProduct, women: newWomen });
  };

  const handleSetMen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMen = [...newProduct.men, e.target.value];
    setNewProduct({ ...newProduct, men: newMen });
  };

  const handleSetVariants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVariants = [e.target.value];
    setNewProduct({ ...newProduct, variants: newVariants });
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, image: e.target.value });
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

  const handleSetXlarge = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const newXlarge = [...newProduct.xlarge, parseFloat(e.target.value)];
    setNewProduct({ ...newProduct, xlarge: parseFloat(e.target.value) });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createNewProduct: Product = {
      name: newProduct.name,
      description: newProduct.description,
      category: {
        kids: newProduct.kids,
        women: newProduct.women,
        men: newProduct.men,
      },
      variants: newProduct.variants,
      sizes: {
        small: newProduct.small,
        medium: newProduct.medium,
        large: newProduct.large,
        xlarge: newProduct.xlarge,
      },
      image: newProduct.image,
    };
    console.log(createNewProduct);
    dispatch(createProductThunk(createNewProduct));
  };

  return (
    <div>
      <h1>Admin Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" required onChange={handleSetName} />
        <br />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          required
          onChange={handleSetDescription}
        />
        <label htmlFor="kids">kids wear</label>
        <input type="text" id="kids" onChange={handleSetKids} />
        <br />
        <label htmlFor="women">women wear</label>
        <input type="text" id="women" onChange={handleSetWomen} />
        <br />
        <label htmlFor="men">men wear</label>
        <input type="text" id="men" onChange={handleSetMen} />
        <br />
        <label htmlFor="variants">Variants</label>
        <input type="text" id="variants" onChange={handleSetVariants} />
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
        <label htmlFor="xlarge">xlarge</label>
        <input
          type="number"
          id="xlarge"
          value={newProduct.xlarge}
          onChange={handleSetXlarge}
        />
        <br />
        <label htmlFor="image">image</label>
        <input type="text" id="image" onChange={handleSetImage} />
        <br />
        <button>Create new product</button>
      </form>
    </div>
  );
}
