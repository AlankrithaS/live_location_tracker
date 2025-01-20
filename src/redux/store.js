import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../reducers/locationReducer"; // Fixed import path

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
