import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../chatbox/messagescontainer/messagesSlice';

export default configureStore({
  reducer: {
    messages: messagesReducer
  },
});
