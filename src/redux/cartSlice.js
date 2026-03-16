import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: items,
  },
  reducers: {
    // إضافة منتج للسلة
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity = +itemExists.quantity + +action.payload.quantity; // إذا كان موجوداً، نزيد الكمية فقط
      } else {
        state.cartItems.push({ ...action.payload });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // حذف منتج من السلة
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
