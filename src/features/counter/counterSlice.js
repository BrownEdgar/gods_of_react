import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        Increace(state, action){
            return state + 1
        },
        Decreace(state, action){
            return state - 1
        }
    }
})

export default counterSlice.reducer 
export const {Increace, Decreace} = counterSlice.actions