// set up a root reducer that has shopping cart reducer and user reducer
import { combineReducers } from 'redux'
import { cartSlice } from './cart'
import { userSlice } from './user'

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  user: userSlice
})

export default rootReducer
