// set up a shopping cart slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
  items: { id: string; product: string; price: string }[]
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
      sale_date_end: '19/05/2024'
    }
  ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
