import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const a2hsSlice = createSlice({
    name: 'a2hs',
    initialState: {
      handler: null    
    },
    reducers: {
      setHandler: (state, action) => {
        state.handler = action.payload;
      }
    },
  });


export const { setHandler } = a2hsSlice.actions;

export const selectHandler = state => state.a2hs.handler;


export const requestA2hs = () => dispatch => {

    const handler = useSelector(selectHandler);
    if(handler){
        handler.prompt();
        handler.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
          });
    }
    else{
        console.log("No handler for A2HS");
    }

}

export const setA2hsHandlerReady = (handler) => dispatch => {
    
    console.log('beforeinstallprompt');
    handler.preventDefault();
    dispatch(setHandler(handler));

} 

export default a2hsSlice.reducer;