// setup redux using redux-toolkit and redux-persist
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from './storage'
import rootReducer from './rootReducer'
import { addItem, decrement, increment, removeItem } from './cart'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

export const actionCreators = {
  addItem,
  increment,
  decrement,
  removeItem
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
