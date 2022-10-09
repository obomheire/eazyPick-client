import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemsState, Products } from "../../utils/interface";

const initialState: CartItemsState = {
  products: [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      //   state.cartItems.push(action.payload);
      [...state.products, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<Products>) => {
      state.products.filter((cartItem) => cartItem !== action.payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
