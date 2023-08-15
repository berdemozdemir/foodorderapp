const { configureStore } = require("@reduxjs/toolkit");

import cartSlice from "./Cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
