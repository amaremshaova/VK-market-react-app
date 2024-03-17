import * as a from './types-products';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case a.typesProducts.ADD_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case a.typesProducts.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.products,
      };
    case a.typesProducts.ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
