import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        saveTodods(state, action){
            return action.payload
        }
    }
})
export default todosSlice.reducer;
export const {saveTodods} = todosSlice.actions