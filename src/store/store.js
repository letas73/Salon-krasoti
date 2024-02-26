import { configureStore } from '@reduxjs/toolkit'
import services from './slices/services-slice'
import user from './slices/user-slice'

export const store = configureStore({
  reducer: {
    services,
    user
  },
})