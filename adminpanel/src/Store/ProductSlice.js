import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/axios";



export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/admin/products");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/admin/products", data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to add product");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await api.put(`/admin/products/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/admin/products/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to delete product");
    }
  }
);

export const addStockEntry = createAsyncThunk(
  "products/addStock",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/api/inventory", data);
      return { ...data, entry: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update stock");
    }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload);
      })
     
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p._id !== action.payload);
      })
   
      .addCase(addStockEntry.fulfilled, (state, action) => {
        const { productId, variant, quantity, type } = action.payload;
        const product = state.products.find((p) => p._id === productId);
        if (product) {
          const v = product.variants.find((v) => v.unit === variant);
          if (v) {
            if (type === "IN") v.stock += Number(quantity);
            if (type === "OUT") v.stock -= Number(quantity);
          }
        }
      });
  }
});

export default productSlice.reducer;
