import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Categories, ProductState } from "../../utils/interface";

const initialState: ProductState = {
  categories: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<Categories>) => {
       state.categories = [...state.categories, action.payload];
    }
  },
});

// Action creators are generated for each case reducer function
export const { addCategories } = productSlice.actions;

export default productSlice.reducer;
