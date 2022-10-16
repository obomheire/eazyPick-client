import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "../slices/cartItemsSlice";
import orderItemsReducer from "../slices/orderItemsSlice";

export const store = configureStore({
    reducer: {
    cartItems: cartItemsReducer,
    orderItems: orderItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
