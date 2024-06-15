// setup user slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  name: string
  email: string
}

// Define the initial state using that type
const initialState: UserState = {
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name
      state.email = action.payload.email
    }
  }
})

export const { setUser } = userSlice.actions
