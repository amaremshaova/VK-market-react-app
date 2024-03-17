import { typesCart } from './types-cart';

export const increaseAmountProduct = (newProduct) => {
  return { type: typesCart.INCREASE_AMOUNT, payload: newProduct };
};

export const decreaseAmountProduct = (newProduct) => {
  return { type: typesCart.DECREASE_AMOUNT, payload: newProduct };
};

export const deleteProduct = (newProduct) => {
  return { type: typesCart.DELETE_PRODUCT, payload: newProduct };
};
