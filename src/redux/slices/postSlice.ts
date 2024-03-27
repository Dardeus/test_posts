import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type PostProps = {
  userId: number,
  id: number,
  title: string,
  body: string,
  like: number,
  likes: number,
  dislikes: number,
}

interface PostState {
  allPosts: PostProps[]
  status: Status
}

const initialState: PostState = {
  allPosts: [],
  status: Status.LOADING,
}

export const fetchPosts = createAsyncThunk<PostProps[], string>(
  'posts/fetchPosts',
    async (url) => {
    const { data } = await axios.get<PostProps[]>(url)

    return data.map(n => ({...n, like: 0,
                                 likes: Math.floor(Math.random() * 51),
                                 dislikes: Math.floor(Math.random() * 51)}))
  }
)

const postSlice = createSlice ({
  name: 'posts',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<PostProps[]>) {
      state.allPosts = action.payload;
    },
    setLike(state, action) {
      const findItem = state.allPosts.find(obj => obj.id === action.payload)
      if (findItem) {
        findItem.like = 1
      }
    },
    setDislike(state, action) {
      const findItem = state.allPosts.find(obj => obj.id === action.payload)
      if (findItem) {
        findItem.like = -1
      }
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostProps[]>) => {
      state.status = Status.SUCCESS
      state.allPosts = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR
      state.allPosts = []
    })
  }
})

export const { setItem, setLike, setDislike } = postSlice.actions;

export default postSlice.reducer;