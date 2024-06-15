// set up a shopping cart slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string
  product: string
  price: string
  sale_discount: number
  isOnSale: boolean
  image: string
  sale_date_end: string
  quantity: number
}

type CartState = {
  items: CartItem[]
}

// Define the initial state using that type
const initialState: CartState = {
  items: [
    {
      id: '2d161361-2c60-455b-ac1e-e2fa3acdda56',
      product: 'Ham - Virginia',
      price: '$5.26',
      sale_discount: 0.15,
      isOnSale: false,
      image: 'http://dummyimage.com/167x100.png/ff4444/ffffff',
      sale_date_end: '19/05/2024',
      quantity: 1
    }
  ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increment: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity--
      }
    }
  }
})

export const { addItem, removeItem, decrement, increment } = cartSlice.actions
