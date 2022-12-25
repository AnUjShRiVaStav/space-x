import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import product from "../reducer/product";
import thunk from "redux-thunk";
import space from "../reducer/space";
const reducer = combineReducers({
  product: product,
  space: space
});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
