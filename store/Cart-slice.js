const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",

  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },

  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        state.totalPrice =
          state.totalPrice + existingItem.price * newItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
        state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      }
      state.totalQuantity += newItem.quantity
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalPrice = state.totalPrice - existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      state.totalQuantity--
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
