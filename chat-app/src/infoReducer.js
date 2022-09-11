import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'info',
    initialState: {
        receiver : {
            value: 'not set yet'
        }
    },
    reducers: {
        RECEIVEDETAIL: (state,action) => {
            state.receiver = action.payload
        },
        CLEARDETAIL: (state) => {
            state.value = 'cleared'
        }
    }
})

export const {RECEIVEDETAIL, CLEARDETAIL} = counterSlice.actions

export default counterSlice.reducer