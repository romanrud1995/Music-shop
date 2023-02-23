import {
  REQUEST_FROM_API,
  END_MUSICS_REQUEST_API,
  CHANGE_PAGE_OF_MUSICS,
  SEARCH_MUSICS,
} from "../actionTypes";

const initialState = {
  musics: [],
  musicsDisplayed: [],
  loading: true,
  pagination: {
    elementsPerPage: 5,
    currentPage: 1,
    availableMusics: 0,
  },
  stringSearch: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FROM_API:
      return {
        ...state,
        loading: true,
        musics: [],
        musicsDisplayed: [],
        pagination: {
          ...state.pagination,
          availableMusics: 0,
          currentPage: 1,
        },
        stringSearch: "",
      };
    case END_MUSICS_REQUEST_API:
      let musics = action.musics;
      return {
        ...state,
        musics: musics,
        musicsDisplayed: musics.slice(0, state.pagination.elementsPerPage),
        loading: false,
        pagination: {
          ...state.pagination,
          availableMusics: musics.length,
        },
      };
    case CHANGE_PAGE_OF_MUSICS:
      const page = action.page;
      const resultOFPaging = ChangeMusicsToDisplay(
        state.musics,
        page,
        state.pagination.elementsPerPage,
        state.stringSearch
      );
      return {
        ...state,
        musicsDisplayed: resultOFPaging.musics,
        pagination: {
          ...state.pagination,
          availableMusics: resultOFPaging.availableMusics,
          currentPage: action.page,
        },
      };
    case SEARCH_MUSICS:
      const stringToSearch = action.stringToSearch;
      const resultOfSearch = ChangeMusicsToDisplay(
        state.musics,
        state.pagination.currentPage,
        state.pagination.elementsPerPage,
        stringToSearch
      );
      return {
        ...state,
        stringSearch: action.stringToSearch,
        musicsDisplayed: resultOfSearch.musics,
        pagination: {
          ...state.pagination,
          availableMusics: resultOfSearch.availableMusics,
          currentPage: resultOfSearch.page,
        },
      };
    default:
      return state;
  }
};

export const ChangeMusicsToDisplay = (
  musics,
  page,
  elementsPerPage,
  nameToSearch
) => {
  let aFiltered = musics;
  let bAvaliableMusics = musics.length;

  if (nameToSearch) {
    aFiltered = musics.filter((musics) =>
      musics.trackName.toLowerCase().includes(nameToSearch.toLowerCase())
    );
    bAvaliableMusics = aFiltered.length;
  }
  let aPage = (page - 1) * elementsPerPage >= bAvaliableMusics ? 1 : page;
  aFiltered = aFiltered.slice(
    (aPage - 1) * elementsPerPage,
    aPage * elementsPerPage
  );

  return { musics: aFiltered, availableMusics: bAvaliableMusics, page: aPage };
};

export default reducer;
