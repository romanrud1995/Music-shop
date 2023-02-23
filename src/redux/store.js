import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
