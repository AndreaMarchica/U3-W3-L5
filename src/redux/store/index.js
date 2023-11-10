import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "../reducers/cart";
// import userReducer from "../reducers/user";
import tracksReducer from "../reducers/tracks";
import rockTracksReducer from "../reducers/rocktracks";

const bigReducer = combineReducers({
  rocktracks: rockTracksReducer,
  tracks: tracksReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
