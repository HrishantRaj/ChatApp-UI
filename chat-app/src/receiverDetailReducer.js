import { createSlice } from "@reduxjs/toolkit";

const receiverDetailInitialState = {
}

export const receiverSlice = createSlice({
    name: 'receiver',
    initialState: {
        detail: receiverDetailInitialState
    },
    reducers: {
        UPDATEDETAIL: (state,action) => {
            state.detail = action.payload
        }
    }
})

export const {UPDATEDETAIL} = receiverSlice.actions

export default receiverSlice.reducer