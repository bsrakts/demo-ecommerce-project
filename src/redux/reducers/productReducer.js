import { ActionTypes } from "../contants/actionTypes";
const initialState = {
  products: [{
    id: 1,
    title: "Busra",
    category:"frontend developer"
  }],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}