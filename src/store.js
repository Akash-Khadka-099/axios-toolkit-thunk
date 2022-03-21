import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "./states/PostSlice"

const store = configureStore({
    reducer: {
        Post: PostSlice
    },

})


export default store;