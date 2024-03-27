import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice'
import filterReducer from './slices/filterSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()