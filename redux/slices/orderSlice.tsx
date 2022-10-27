import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OrderState, order, Products } from "../../utils/interface";

const initialState: OrderState = {
  cart: [],
  order: {
    city: "",
    country: "",
    dateOrdered: "",
    orderItems: [],
    phone: "",
    shippingAddress1: "",
    shippingAddress2: "",
    // status: "3",
    // user,
    zip: "",
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<order>) => {
      state.order = action.payload;
    },
    addToCart: (state, action: PayloadAction<Products>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    // createOrder: (state, action: PayloadAction<CartItemsState["order"]>) => {
    //   state.order = action.payload;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { createOrder, addToCart, removeFromCart, clearCart } =
  orderSlice.actions;

export default orderSlice.reducer;
