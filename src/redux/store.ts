import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()