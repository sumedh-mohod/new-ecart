import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
// import DATA from "../Data";

const Product = () => {
  const [item, setItem] = useState([]);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setItem(result);
      });
  }, []);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addToCart(item));
    }
  };

  const { cart } = useSelector((state) => state?.cart);
  localStorage.setItem('dataKey', JSON.stringify(cart));

  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          height="300px"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead mr-3">${item.price}</p>
          <Link to={`/products/${item.id}`} className="btn btn-outline-dark">
            Buy Now
          </Link>
          <button
            onClick={() => handleCart(item)}
            className="btn btn-outline-dark my-5"
          >
            {cartBtn}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>COLLECTIONS</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{item.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
