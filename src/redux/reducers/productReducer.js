import { ActionTypes } from "../constants/action-types";

const initialState = {
  product: [{ addToCart: false }],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS: {
      return { ...state, product: payload };
    }
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT: {
      return { ...state, ...payload };
    }
    case ActionTypes.REMOVE_SELECTED_PRODUCT: {
      return {};
    }
    case ActionTypes.ADD_TO_CART: {
      return { ...state, ...payload, addToCart: true };
    }
    default:
      return state;
  }
};
