import { createSlice } from '@reduxjs/toolkit';
import getBotApi from '../../app/botApi';

const BotApi = getBotApi();

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

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
      messages: [],
      sendingMessage: true    
    },
    reducers: {
      registerMessage: (state, action) => {
        const now = new Date();
        const data = action.payload;
        const message = {
          key:now.getTime(),
          message: data.message,
          when: getDateObjectFromDate(now),
          isSender: data.isSender,
          img: data.img
        };
        state.messages.push(message);
      },
      setSendingMessage: (state, action) => {
        state.sendingMessage = action.payload;
      }
    },
  });


export const sendMessage = (message) => dispatch => {
 
    dispatch(registerMessage({message: message, isSender: true}));
    
    setTimeout(()=>{
      dispatch(setSendingMessage(true));
    }, 1000);    
    
    setTimeout(() => {

      BotApi.ask(message).then(data => {
        
        if(data.success){                
          dispatch(registerMessage({
            message: data.text,
            isSender: false,
            img: data.img
          }));       
        }

      }).catch(e=>{

        console.log(e);

      }).finally(()=>{

        dispatch(setSendingMessage(false));

      });
    }, 2000);

  }
    

export const { registerMessage, setSendingMessage } = messagesSlice.actions;

export const selectMessages = state => state.messages.messages;
export const selectLoadingMessage = state => state.messages.sendingMessage;

export default messagesSlice.reducer;