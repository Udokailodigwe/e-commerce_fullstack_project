import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { Link } from "react-router-dom";

import "./Shop.css";
import Footer from "components/Footer/Footer";
import Rating from "components/Rating/Rating";

const Shop = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  return (
    <div>
      <section className="hero">
        <h2>New Arrivals</h2>
      </section>

      <main>
        <h2 className="feature">Features</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product_detail">
                <Link className="product_name" to={`/products/${product._id}`}>
                  {product.name}
                </Link>
                <Rating rating={product.rating} reviews={product.reviews} />
                <p>
                  <strong>${product.price}</strong>
                </p>
                <Link to="/cart" className="cart_link">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
