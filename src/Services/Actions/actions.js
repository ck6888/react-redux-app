import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

//use implicit return
export const addToCart = (data) => ({
  type: ADD_TO_CART,
  data: data,
});
//use regular function
export const removeToCart = (data) => {
  console.log("actions data", data);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
