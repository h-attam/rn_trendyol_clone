import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as any[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
