import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="col">
          <h6>IntegriWearz</h6>
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Somethingkatu 3 A, Vantaa
          </p>
          <p>
            <strong>Phone:</strong> +35846593900
          </p>
          <p>
            <strong>Hours:</strong> 24hrs services
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link className="foot_link" to="/profile">
            Profile
          </Link>
          <Link className="foot_link" to="/cart">
            View cart
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
