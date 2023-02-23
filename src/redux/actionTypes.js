export const ADD_MORE_MUSICS = "ADD_MORE_MUSICS";
export const REQUEST_FROM_API = "REQUEST_FROM_API";
export const END_MUSICS_REQUEST_API = "END_MUSICS_REQUEST_API";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SEARCH_MUSICS = "SEARCH_MUSICS";
export const CHANGE_PAGE_OF_MUSICS = "CHANGE_PAGE_OF_MUSICS";
export const CLEAR_CART_ITEMS = "CLEAR_CART_ITEMS";
export const addMoreMusics = (songs) => {
  return {
    type: ADD_MORE_MUSICS,
    payload: songs,
  };
};
