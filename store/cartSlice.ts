"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProducts = createAsyncThunk<any>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('/api/get-products')
    return response.data?.products
  }
)

// Type for the slice state
type ProductsState = {
  products: []
  loading: boolean
  error: string | null
}

// Initial state
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.products = []
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
  },
})

export const { resetProducts } = cartSlice.actions
export default cartSlice.reducer
