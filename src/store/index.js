import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/uiReducer";

const store = configureStore({
  reducer: { ui: uiReducer },
});

export default store;
