import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART_ITEMS } from "../actionTypes";

const initialState = {
  musics: [],
};

const reducer = (state = initialState, action) => {
  let currentArrayOfAddedMusics = [...state.musics];

  switch (action.type) {
    case ADD_TO_CART:
      let musicToAdd = action.musicToAdd;
      currentArrayOfAddedMusics = [...state.musics];
      currentArrayOfAddedMusics.push(musicToAdd);

      return {
        musics: currentArrayOfAddedMusics,
      };

    case REMOVE_TO_CART:
      const indexOfMusicToRemove = state.musics
        .map((music) => music.trackId)
        .indexOf(action.trackId);
      currentArrayOfAddedMusics = [...state.musics];
      if (indexOfMusicToRemove > -1) {
        currentArrayOfAddedMusics.splice(indexOfMusicToRemove, 1);
      }
      return {
        musics: currentArrayOfAddedMusics,
      };
    case CLEAR_CART_ITEMS:
      return {
        ...state,
        musics: [],
      };

    default:
      return state;
  }
};

export default reducer;
