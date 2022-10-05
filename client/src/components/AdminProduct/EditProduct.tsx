import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { createProductThunk, updateProductThunk } from "redux/services/product";

type CurrentId = {
  currentId: string;
  setCurrentId: (id: string) => void;
};
export default function EditProduct({ currentId, setCurrentId }: CurrentId) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    kidswear: "",
    womenwear: "",
    menwear: "",
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
    window.location.reload();
  };

  const clear = () => {
    setCurrentId("");
    setNewProduct({
      name: "",
      description: "",
      kidswear: "",
      womenwear: "",
      menwear: "",
      variants: [""],
      small: 0,
      medium: 0,
      large: 0,
      image: "",
    });
  };

  const handleSetVariants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVariants = [e.target.value];
    setNewProduct({ ...newProduct, variants: newVariants });
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
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <br />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          value={newProduct.description}
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <label htmlFor="kidswear">kids wear</label>
        <input
          type="text"
          id="kidswear"
          value={newProduct.kidswear}
          onChange={(e) =>
            setNewProduct({ ...newProduct, kidswear: e.target.value })
          }
        />
        <br />
        <label htmlFor="womenwear">women wear</label>
        <input
          type="text"
          id="womenwear"
          value={newProduct.womenwear}
          onChange={(e) =>
            setNewProduct({ ...newProduct, womenwear: e.target.value })
          }
        />
        <br />
        <label htmlFor="menwear">men wear</label>
        <input
          type="text"
          id="menwear"
          value={newProduct.menwear}
          onChange={(e) =>
            setNewProduct({ ...newProduct, menwear: e.target.value })
          }
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
          onChange={(e) =>
            setNewProduct({ ...newProduct, small: parseFloat(e.target.value) })
          }
        />
        <label htmlFor="medium">medium</label>
        <input
          type="number"
          id="medium"
          value={newProduct.medium}
          onChange={(e) =>
            setNewProduct({ ...newProduct, medium: parseFloat(e.target.value) })
          }
        />
        <label htmlFor="large">large</label>
        <input
          type="number"
          id="large"
          value={newProduct.large}
          onChange={(e) =>
            setNewProduct({ ...newProduct, large: parseFloat(e.target.value) })
          }
        />
        <br />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <br />

        <button>{!currentId ? "Create" : "Update"} product</button>
        <button onClick={clear}>Reset</button>
      </form>
    </div>
  );
}
