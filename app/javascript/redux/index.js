import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./slice/greetingSlice";

const store = configureStore({
  reducer: { greetingSlice: greetingReducer },
});

export default store;