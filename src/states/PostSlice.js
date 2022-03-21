import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../axios"

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () =>{
        const response = await axios.get(`/`)
        // const response  = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        // return response.json()
        // console.log(response);
        return response.data
    }
)

const TodoSlice = createSlice({
    name : "posts",
    initialState : {
        list : [],
        loading : false
    },
    extraReducers : {
        [getPosts.pending] : (state, action) =>{
            state.loading = true
        },
        [getPosts.fulfilled] : (state, action) =>{
            state.loading = false
            state.list = action.payload
        },
        [getPosts.rejected] : (state, action) =>{
            state.loading = false
        }
    }
})

export default TodoSlice.reducer;