import { SEARCH_MUSICS } from "../actionTypes";

const initialState = {
  nameToSearch: {},
  musics: [],
};

const reducer = (state = initialState, action, nameToSearch) => {
  switch (action.type) {
    case SEARCH_MUSICS:
      return {
        ...state,

        musics: state.musics.filter((musics) =>
          musics.trackName.toLowerCase().includes(nameToSearch.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
export default reducer;
