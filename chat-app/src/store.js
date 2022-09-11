import { configureStore } from '@reduxjs/toolkit'
import receiverReducer from './receiverDetailReducer'
import infoReducer from './infoReducer'
import chatReducer from './receiverChatReducer'
import chatListReducer from './chatListReducer'

export default configureStore({
  reducer: {
    receiver: receiverReducer,
    chat: chatReducer,
    chatList: chatListReducer,
    info: infoReducer
  }
})