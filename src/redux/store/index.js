import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "../reducers/cart";
// import userReducer from "../reducers/user";
import tracksReducer from "../reducers/tracks";

const bigReducer = combineReducers({
  // cart: cartReducer,
  // user: userReducer,
  tracks: tracksReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
