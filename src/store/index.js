import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/uiReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
