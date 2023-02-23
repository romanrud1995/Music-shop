import { ADD_TO_CART } from "../actionTypes";
import { REMOVE_TO_CART } from "../actionTypes";
import { CLEAR_CART_ITEMS } from "../actionTypes";

export const addToCart = (song) => {
  return {
    type: ADD_TO_CART,
    musicToAdd: song,
  };
};
export const removeToCart = (trackId) => {
  return {
    type: REMOVE_TO_CART,
    trackId: trackId,
  };
};

export const clearCartItems = () => ({
  type: CLEAR_CART_ITEMS,
});
