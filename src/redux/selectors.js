export const getMusicsToDisplay = (store) =>
  store && store.musics && store.musics.musicsDisplayed
    ? store.musics.musicsDisplayed
    : [];
export const getMusicsToCart = (store) =>
  store && store.cart && store.cart.musics ? store.cart.musics : [];

export const getMusicsTotal = (store) =>
  store && store.cart && store.cart.musics && store.cart.musics.length > 0
    ? {
        totalQuantity: store.cart.musics.length,
        totalAmount: store.cart.musics
          .map((music) => music.trackPrice)
          .reduce((a, b) => a + b, 0),
        currency: "USD",
      }
    : {
        totalQuantity: 0,
        totalAmount: 0,
        currency: "",
      };

export const getServiceStatus = (store) =>
  store && store.musics && store.musics.isLoading
    ? store.musics.isLoading
    : false;
export const getPagination = (store) =>
  store && store.musics && store.musics.pagination
    ? store.musics.pagination
    : {
        elementsPerPage: 5,
        currentPage: 0,
        numberOfAvaliableMusics: 0,
      };
