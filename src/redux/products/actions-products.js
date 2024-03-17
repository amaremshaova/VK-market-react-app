import axios from 'axios';
import { typesProducts } from './types-products';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsStarted());

    await axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductsFailure(err.message));
      });
  };
};

const getProductsSuccess = (products) => {
  return {
    type: typesProducts.ADD_PRODUCTS_SUCCESS,
    payload: {
      ...products,
    },
  };
};

const getProductsStarted = () => ({
  type: typesProducts.ADD_PRODUCTS_STARTED,
});

const getProductsFailure = (error) => ({
  type: typesProducts.ADD_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});
