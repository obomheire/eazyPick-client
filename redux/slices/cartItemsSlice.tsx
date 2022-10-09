import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemsState, Products } from "../../utils/interface";

const initialState: CartItemsState = {
  cartItem: [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
        state.cartItem.push(action.payload);
    //   [...state.cartItem, action.payload];
    //   console.log(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItem.filter((cartItem) => cartItem !== action.payload);
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
