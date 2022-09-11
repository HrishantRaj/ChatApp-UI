import { createSlice } from "@reduxjs/toolkit";

const intialList = []

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState : {
        list: intialList
    },
    reducers: {
        SAVEUSER: (state,action) => {
            state.list.push(action.payload)
        }
    }
})

export const {SAVEUSER} = chatListSlice.actions

export default chatListSlice.reducer


export function fetchReceivers(receiver_id) {
    return async function fetchReceiversThunk(dispatch, getState) {
        try {
            const resp = await fetch(`http://localhost:8080/user/${receiver_id}`);
            console.log(resp)
            dispatch(SAVEUSER(resp.data))
        } catch (error) {
            console.log('error while fetching receivers '+ error)
        }
    }
}