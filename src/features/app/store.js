import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../chatbox/messagescontainer/messagesSlice';
import a2hsReducer from '../addhomescreen/a2hsSlice';

export default configureStore({
  reducer: {
    messages: messagesReducer,
    a2hs: a2hsReducer
  },
});