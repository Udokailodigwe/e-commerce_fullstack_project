import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
