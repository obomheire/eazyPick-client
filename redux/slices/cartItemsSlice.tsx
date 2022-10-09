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
        //   [...state.products, action.payload];
        state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Products>) => {
      state.products.filter((product) => product !== action.payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
