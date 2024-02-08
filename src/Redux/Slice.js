import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
        value2: false,
    },
    reducers:{
            nstatus : (state)=>{
                state.value2 = !state.value2
            },
            statuschange : (state)=>{
                state.value = !state.value
            },
            bodystatus : (state, action)=>{
                state.value = action.payload
                state.value2 = action.payload
            },
            bodystatus2 : (state, action)=>{
                state.value2 = action.payload
            }
    }
})

export const {statuschange, bodystatus, nstatus, bodystatus2} = Slice.actions
export default Slice.reducer