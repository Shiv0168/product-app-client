import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProductById,
  editProductById,
  fetchAllProducts,
  fetchProductById,
} from "./productAPI";

const initialState = {
  products: [],
  selectedProduct: null,
  status: "idle",
};

export const addProductAsync = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const response = await addProduct(product);
    return response.data;
  }
);

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (_id) => {
    const response = await fetchProductById(_id);
    return response.data;
  }
);

export const editProductByIdAsync = createAsyncThunk(
  "product/editProductById",
  async (update) => {
    const response = await editProductById(update);
    return response.data;
  }
);

export const deleteProductByIdAsync = createAsyncThunk(
  "product/deleteProductById",
  async (_id) => {
    const response = await deleteProductById(_id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.unshift(action.payload);
      })
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(editProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        state.products[index] = action.payload;
      })
      .addCase(deleteProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectProductById = (state) => state.product.selectedProduct;

export default productSlice.reducer;
