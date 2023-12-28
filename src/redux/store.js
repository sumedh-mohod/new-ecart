import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from './slices/addToCartSlice';

export const store = configureStore({
    reducer: {
      //storename and redicers name
    //   authentication: authSlice,
    cart: addToCartSlice
    },
  });