import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import AdminProducts from "components/AdminProduct/AdminProducts";
import AdminUsers from "components/AdminUser/AdminUsers";
import User from "components/AdminUser/user";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/adminproducts/" element={<AdminProducts />} />
        <Route path="/adminusers/" element={<AdminUsers />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
