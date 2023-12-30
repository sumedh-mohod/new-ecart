import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice";
import authReducer from "../redux/auth/auth";

export const store = configureStore({
  reducer: {
    //storename and redicers name
    //   authentication: authSlice,
    cart: addToCartSlice,
    auth: authReducer,
  },
});
