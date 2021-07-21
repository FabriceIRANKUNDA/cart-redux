import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  notification: {},
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
