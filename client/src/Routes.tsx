import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import AdminProducts from "components/AdminProduct/AdminProducts";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/adminproducts/" element={<AdminProducts />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
