import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteItems: [] as any[],
  },
  reducers: {
    toggleFavorite: (state, action: PayloadAction<any>) => {
      const exists = state.favoriteItems.find(
        item => item.id === action.payload.id,
      );
      if (exists) {
        state.favoriteItems = state.favoriteItems.filter(
          item => item.id !== action.payload.id,
        );
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const {toggleFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
