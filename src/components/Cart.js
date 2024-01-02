import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/slices/addToCartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("state of cart items", cart);
  const dispatch = useDispatch();
  const newdata = JSON.parse(localStorage.getItem("dataKey"));

  const cartItems = (cartItem) => {
    const itemPrice = cartItem.price * cartItem.quantity;
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => dispatch(removeItem(cartItem.id))}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${itemPrice}</p>
              {/*  */}
              <button
                onClick={() => dispatch(incrementQuantity(cartItem.id))}
                className="fa fa-plus"
              ></button>
              <p className="lead fw-bold">{cartItem.quantity}</p>
              <button
                onClick={() => dispatch(decrementQuantity(cartItem.id))}
                className="fa fa-minus"
              ></button>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {newdata?.length === 0 && emptyCart()}
      {newdata?.length !== 0 && newdata?.map(cartItems)}
      {newdata?.length !== 0 && button()}
    </>
  );
};

export default Cart;
