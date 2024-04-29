import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    filter: "all",
  },
  reducers: {
    channgeFilter(state, action) {
      return (state.filter = action.payload);
    },
  },
  selectors: {
    selectProducts(state, action) {
      if (state.filter === "all") {
        return state.data;
      }
      return state.data.filter((product) => product.category === state.filter);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
export const { channgeFilter } = productsSlice.actions;
export const { selectProducts } = productsSlice.selectors;
