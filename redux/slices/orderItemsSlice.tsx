import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OrderItemsState, order } from "../../utils/interface";

const initialState: OrderItemsState = {
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

export const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<order>) => {
      state.order = action.payload;
    },
    // setOrder: (state, action: PayloadAction<CartItemsState["order"]>) => {
    //   state.order = action.payload;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { setOrder } = orderItemsSlice.actions;

export default orderItemsSlice.reducer;
