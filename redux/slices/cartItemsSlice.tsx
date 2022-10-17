import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemsState, order, Products } from "../../utils/interface";

const initialState: CartItemsState = {
  cart: [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (item) => item._id.$oid !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    // setOrder: (state, action: PayloadAction<order>) => {
    //   state.order = action.payload;
    // },
    // setOrder: (state, action: PayloadAction<CartItemsState["order"]>) => {
    //   state.order = action.payload;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
