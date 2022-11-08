import { Routes, Route } from "react-router-dom";

import Shop from "../pages/Shop/Shop";
import Profile from "../pages/Profile";
import Product from "../pages/Product/Product";
import AdminProducts from "components/Products/ManageProducts";
import ManageUsers from "components/Users/ManageUsers";
import User from "pages/Profile";
import Login from "pages/Login/Login";
import Cart from "pages/Cart";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route index element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/adminproducts/" element={<AdminProducts />} />
          <Route path="/manageusers/" element={<ManageUsers />} />
          {/* <Route path="/users/:userId" element={<User />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;
