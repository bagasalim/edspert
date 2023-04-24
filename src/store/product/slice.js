import { createSlice } from "@reduxjs/toolkit";
import * as productAct from "./actions";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: [],
    entity: {
      createdAt: "",
      id: "",
      program: "",
      title: "",
      description: "",
      batch: "",
      mentors: [
        {
          name: "",
        },
        {
          name: "",
        },
      ],
      price: "",
      actualprice: "",
    },
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(productAct.getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(productAct.getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      })
      .addCase(productAct.getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(productAct.getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      }),
});

export default productSlice.reducer;
