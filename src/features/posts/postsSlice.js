import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers:{
        savePosts(state, action){
            return action.payload
        }
    }
})
export default postsSlice.reducer;
export const {savePosts} = postsSlice.actions