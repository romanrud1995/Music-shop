import { combineReducers } from "redux";
import musicReducer from "./musics";
import shopingCartReducer from "./shopingCart"

const rootReducer = combineReducers({
   musics:musicReducer,
   cart:shopingCartReducer,
});

export default rootReducer;