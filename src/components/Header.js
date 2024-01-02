import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../redux/auth/auth";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart", cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  localStorage.setItem('totalCount', JSON.stringify(getTotalQuantity()));
  const totalCount = JSON.parse(localStorage.getItem("totalCount"));

  const handleLogout = useCallback(() => {
    logout();
    setTimeout(() => {
      navigate("/logout");
    }, 500);
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mx-auto fw-bold" to="/">
              ABC MART
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li> */}
            </ul>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart{" "}
              {totalCount || 0}
            </Link>
            <Link to="/register" className="btn btn-outline-dark ms-2">
              <span className="fa fa-user-plus me-1"></span> Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
