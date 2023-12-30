import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authHeader from "../redux/auth/authHeader";

const Home = () => {
  let getToken = authHeader();
  if (getToken === null) {
    <Navigate to="/login" />;
  } else {
    return <Navigate to="/home" />;
  }

  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./assets/bbb.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title fw-bolder display-3">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
