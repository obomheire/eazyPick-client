import { configureStore } from "@reduxjs/toolkit";
// import cartItemsReducer from "../slices/cartItemsSlice";
import orderReducer from "../slices/orderSlice";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    // cartItems: cartItemsReducer,
    orderItems: orderReducer,
    productItems: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
