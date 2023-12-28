import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/addToCartSlice";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const itemList = (item) => {
    const itemPrice = item.price * item.quantity;
    return (
      <li
        className="list-group-item d-flex justify-content-between lh-sm"
        key={item.id}
      >
        <div>
          <h6 className="my-0">{item.quantity}</h6>
        </div>
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${itemPrice}</span>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="btn-close float-end"
          aria-label="Close"
        ></button>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-dark">Your cart</span>
              <span className="badge bg-dark rounded-pill">
                {getTotal().totalQuantity}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${getTotal().totalPrice}</strong>
              </li>
            </ul>
          </div>
          {/* form */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
