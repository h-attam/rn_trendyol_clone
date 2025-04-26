import {createSlice} from '@reduxjs/toolkit';
import {dummyCategories} from '../slices/constants/dummyCategories';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: dummyCategories,
  },
  reducers: {},
});

export default categoriesSlice.reducer;
