import { configureStore  } from '@reduxjs/toolkit'
import TrajetSlice from './userSlice/TrajetSlice'
import UserSlice from './userSlice/UserSlice'

export const store = configureStore({
  reducer: {
  user: UserSlice,
  trajet: TrajetSlice,
  // middleware: (getDefaultMiddleware) =>{
  // getDefaultMiddleware({
  //   thunk: {},
  //   serializableCheck: false,})}
 },
 })




 