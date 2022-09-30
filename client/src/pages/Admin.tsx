/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";

import { useAppDispatch } from "redux/hooks";
import { createProductThunk } from "redux/services/product";
import { NewProduct, Product } from "types";

import debounce from "lodash.debounce";

export default function Admin() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    description: "",
    kids: [],
    women: [],
    men: [],
    variants: [],
    small: 0,
    medium: 0,
    large: 0,
    xlarge: 0,
    image: "",
  });

  const dispatch = useAppDispatch();

  const debouncedSetName = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, name: e.target.value });
      console.log(newProduct.name);
    }, 400),
    []
  );

  const debouncedSetDescription = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, description: e.target.value });
    }, 400),
    []
  );

  const debouncedSetKids = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      const newKids = [...newProduct.kids, e.target.value];
      setNewProduct({ ...newProduct, kids: newKids });
    }, 400),
    []
  );

  const debouncedSetWomen = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      const newWomen = [...newProduct.women, e.target.value];
      setNewProduct({ ...newProduct, women: newWomen });
    }, 400),
    []
  );

  const debouncedSetMen = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      const newMen = [...newProduct.men, e.target.value];
      setNewProduct({ ...newProduct, men: newMen });
    }, 400),
    []
  );

  const debouncedSetVariants = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      const newVariants = [...newProduct.variants, e.target.value];
      setNewProduct({ ...newProduct, variants: newVariants });
    }, 400),
    []
  );

  const debouncedSetImage = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, image: e.target.value });
    }, 400),
    []
  );

  const debouncedSetSmall = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, small: parseFloat(e.target.value) });
    }, 400),
    []
  );
  const debouncedSetMedium = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, medium: parseFloat(e.target.value) });
    }, 400),
    []
  );
  const debouncedSetLarge = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, large: parseFloat(e.target.value) });
    }, 400),
    []
  );
  const debouncedSetXlarge = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
      setNewProduct({ ...newProduct, xlarge: parseFloat(e.target.value) });
    }, 400),
    []
  );

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
        <input type="text" id="name" required onChange={debouncedSetName} />
        <br />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          required
          onChange={debouncedSetDescription}
        />
        <label htmlFor="kids">kids wear</label>
        <input type="text" id="kids" onChange={debouncedSetKids} />
        <br />
        <label htmlFor="women">women wear</label>
        <input type="text" id="women" onChange={debouncedSetWomen} />
        <br />
        <label htmlFor="men">men wear</label>
        <input type="text" id="men" onChange={debouncedSetMen} />
        <br />
        <label htmlFor="variants">Variants</label>
        <input type="text" id="variants" onChange={debouncedSetVariants} />
        <br />
        <label htmlFor="small">small</label>
        <input type="radio" id="small" onChange={debouncedSetSmall} />
        <label htmlFor="medium">medium</label>
        <input type="radio" id="medium" onChange={debouncedSetMedium} />
        <label htmlFor="large">large</label>
        <input type="radio" id="large" onChange={debouncedSetLarge} />
        <label htmlFor="xlarge">xlarge</label>
        <input type="radio" id="xlarge" onChange={debouncedSetXlarge} />
        <br />
        <label htmlFor="image">image</label>
        <input type="text" id="image" onChange={debouncedSetImage} />
        <br />
        <button>Create new product</button>
      </form>
    </div>
  );
}
