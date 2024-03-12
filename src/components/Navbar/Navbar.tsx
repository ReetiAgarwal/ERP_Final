import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <Link className="logo" to="/">LOGO</Link>
        <div className="btn-container">
          <Link className="btn" to="/">
            Dashboard
          </Link>
          <Link className="btn" to="/products">
            Product
          </Link>
          <Link className="btn" to="/orders">
            Order
          </Link>
        </div>
      </div>
    </>
  );
}
