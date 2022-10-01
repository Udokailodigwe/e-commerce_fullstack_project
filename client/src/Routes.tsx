import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Admin from "pages/Admin";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/users/" element={<Admin />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
