import { createSlice } from '@reduxjs/toolkit';

const getDateObjectFromDate = (date) => {
  
  return {
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
    second: date.getSeconds(),
    timestamp: date.getTime()
  };
  
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
      messages: []      
    },
    reducers: {
      sendMessage: (state, action) => {
        const now = new Date();
        const message = {
          key:now.getTime(),
          message: action.payload,
          when: getDateObjectFromDate(now),
          isSender: true
        };
        state.messages.push(message);
      }
    },
  });

export const { sendMessage } = messagesSlice.actions;

export const selectMessages = state => state.messages.messages;

export default messagesSlice.reducer;