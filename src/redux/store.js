import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/reducer-products';
import cartReducer from './cart/reducer-cart';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
