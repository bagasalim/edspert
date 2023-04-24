import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockApi } from "../../utils";

export const getProducts = createAsyncThunk(
  "features/getProducts",
  async () => {
    try {
      const response = await mockApi.get("/product");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getProduct = createAsyncThunk(
  "features/getProduct",
  async (productID) => {
    try {
      const response = await mockApi.get(`/product/${productID}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
