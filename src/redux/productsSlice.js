import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// دالة مساعدة للوصول الآمن للـ localStorage في بيئة Next.js أو المتصفح
const getSavedProducts = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const savedProducts = getSavedProducts();

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/David-111409/Book-Store-Project/refs/heads/main/products.json",
  );
  const data = await response.json();
  
  if (typeof window !== "undefined") {
    localStorage.setItem("products", JSON.stringify(data));
  }
  
  return data;
});

const initialState = { 
  items: savedProducts, 
  loading: savedProducts.length === 0, // يبدأ true فقط إذا كانت الذاكرة فارغة
  error: null 
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // إذا كان عندنا بيانات قديمة، لا تجعل loading = true لكي لا يظهر السبنر ويختفي المحتوى
        if (state.items.length === 0) {
          state.loading = true;
        }
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        // لا نظهر خطأ إذا كان لدينا بيانات قديمة (Offline mode)
        if (state.items.length === 0) {
          state.error = action.error.message;
        }
      });
  },
});

export default productsSlice.reducer;