import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/authSlice";
import { NavLink, Link, useNavigate } from "react-router-dom";

import "./Nav.css";

type NavProps = {
  token: null;
  authenticatedUser: any;
};

export default function Nav({ token, authenticatedUser }: NavProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = token;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <section id="header">
      <Link className="banner link" to="/shop/">
        <h1>IntegriWearz</h1>
      </Link>

      <div id="navbar">
        <NavLink className="link" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="link " to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="link" to="/profile">
          PROFILE
        </NavLink>
        <NavLink className="link" to="/dashboard">
          ADMIN
        </NavLink>
        <NavLink className="link" to="/cart">
          cart
        </NavLink>
      </div>
      <div>
        {isAuth ? `Logged in as ${authenticatedUser.firstName}` : ""}
        {isAuth ? (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          "Logged out"
        )}
      </div>
    </section>
  );
}
