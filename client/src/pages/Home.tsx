import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { Link } from "react-router-dom";
import Nav from "components/Nav";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <main>
        <h1>Products Lists</h1>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product._id}>
              <Link className="link" to={`/products/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product_detail">
                <Link className="link" to={`/products/${product.name}`}>
                  {product.name}
                </Link>
                <p>
                  <strong>$19.99</strong>
                </p>
                <button>Select</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
