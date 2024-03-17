import { typesCart } from './types-cart';

const initialState = [];

const MAX_AMOUNT = 10;
const MIN_AMOUNT = 0;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCart.INCREASE_AMOUNT: {
      const id = action.payload.id;

      const productAdded = state.find((product, index) => {
        return id === product.id;
      });

      if (productAdded) {
        const oldProducts = state.filter((product) => {
          return product.id !== id;
        });

        const changeProductAdded = {
          ...action.payload,
          amount:
            productAdded.amount + 1 > MAX_AMOUNT
              ? productAdded.amount
              : productAdded.amount + 1,
        };

        return [...oldProducts, changeProductAdded];
      }
      return [...state, { ...action.payload, amount: 1 }];
    }
    case typesCart.DECREASE_AMOUNT: {
      const id = action.payload.id;

      const productAdded = state.find((product, index) => {
        return id === product.id;
      });

      if (productAdded) {
        const oldProducts = state.filter((product) => {
          return product.id !== id;
        });

        if (productAdded.amount - 1 === MIN_AMOUNT) {
          return [...oldProducts];
        }

        const changeProductAdded = {
          ...action.payload,
          amount: productAdded.amount - 1,
        };

        return [...oldProducts, changeProductAdded];
      }
      return [...state];
    }

    case typesCart.DELETE_PRODUCT: {
      const id = action.payload.id;
      const productAdded = state.find((product, index) => {
        return id === product.id;
      });
      if (productAdded) {
        const oldProducts = state.filter((product) => {
          return product.id !== id;
        });
        return [...oldProducts];
      }
      return [...state];
    }
    default:
      return state;
  }
};

export default cartReducer;
