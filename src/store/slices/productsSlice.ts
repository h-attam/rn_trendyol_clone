import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchProducts} from '../../services/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const data = await fetchProducts();
    return data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, state => {
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
