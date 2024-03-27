import {createSlice} from "@reduxjs/toolkit";
interface PostState {
  search: string
}

const initialState: PostState = {
  search: '',
}

const filterSlice = createSlice ({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
})

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;