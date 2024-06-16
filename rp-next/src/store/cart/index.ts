// set up a shopping cart slice
import { Product } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = Product & {
  quantity: number
  salePrice: number
}

export type CartState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
}

const calculateTotalPrice = (acc: number, item: CartItem) => {
  if (item.is_on_sale) {
    const salePrice = item.price - item.sale_discount * item.price
    return acc + salePrice * item.quantity
  }
  return acc + item.price * item.quantity
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      const totalItems = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      state.totalItems = totalItems
      state.totalPrice = state.items.reduce(calculateTotalPrice, 0)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.totalItems = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      state.totalPrice = state.items.reduce(calculateTotalPrice, 0)
    },
    increment: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity++
        state.totalItems++
        state.totalPrice = state.items.reduce(calculateTotalPrice, 0)
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
        state.totalItems--
        state.totalPrice = state.items.reduce(calculateTotalPrice, 0)
      }
    }
  }
})

export const { addItem, removeItem, decrement, increment } = cartSlice.actions
