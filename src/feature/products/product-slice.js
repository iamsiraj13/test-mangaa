import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "task",
  initialState: {
    products: [],
    product: null,
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {
    //========== get all manga ===========
    getProductPending: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getProductFullfill: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
    },
    getProductRejected: (state, action) => {
      state.isError = true;
      state.message = action.payload;
    },
    //========== get  manga By Id ===========
    getProductDetailsPending: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getProductDetailsFullfill: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.product = action.payload;
    },
    getProductDetailsRejected: (state, action) => {
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  getProductPending,
  getProductFullfill,
  getProductRejected,
  getProductDetailsPending,
  getProductDetailsFullfill,
  getProductDetailsRejected,
} = productSlice.actions;
