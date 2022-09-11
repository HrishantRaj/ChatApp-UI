import { createSlice } from "@reduxjs/toolkit";

const receiverChatInitialState = {
    "chatid" : "",
    "senderid" : "",
    "receiverid": "",
    'message': []
}

export const receiverChatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatObject: receiverChatInitialState
    },
    reducers: {
        UPDATECHAT: (state,action) => {
            state.chatObject = action.payload
        },
        SENDCHAT: (state,action) => {
            state.chatObject.message.push(action.payload)
        }
    }
})

export const {UPDATECHAT, SENDCHAT} = receiverChatSlice.actions

export default receiverChatSlice.reducer