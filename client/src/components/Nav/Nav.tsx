import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/slices/authSlice";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { Users } from "types";

import "./Nav.css";
import Search from "components/Search/Search";

type NavProps = {
  token: string;
  authenticatedUser: Users;
};

export default function Nav({ token, authenticatedUser }: NavProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.authenticatedUser);
  console.log(user.isAdmin);

  const isAllowed = user.isAdmin;

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
        <NavLink className="link" to="/profile">
          PROFILE
        </NavLink>
        {isAllowed ? (
          <NavLink className="link" to="/dashboard">
            ADMIN
          </NavLink>
        ) : (
          " "
        )}

        <NavLink className="link" to="/cart">
          cart
        </NavLink>
      </div>
      <Search />
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
