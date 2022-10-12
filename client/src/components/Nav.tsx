import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <header>
        <Link to="/products/">Integrify Shop</Link>
      </header>
    </div>
  );
}
