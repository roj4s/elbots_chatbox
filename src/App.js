import React from 'react';
import './App.css';
import ChatBox from './features/chatbox/chatbox';
import AddHomeScreen from './features/addhomescreen/addhomescreen';
import { selectHandler } from './features/addhomescreen/a2hsSlice';
import { useSelector } from 'react-redux';


function App() {  

  const a2hsHandler = useSelector(selectHandler);

  return (
    <div className="App">
      <ChatBox></ChatBox>
      {
        window.innerWidth <=600  
          && a2hsHandler 
          && <AddHomeScreen />
      }
    </div>
  );
}



export default App;
