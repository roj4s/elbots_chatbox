import React from 'react';
import { useState } from 'react';
import send_button from './send_button.svg';


import './messageinput.css';

export default function MessageInput (){

    const [ message , setMessage ] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    }

    return (
    <div className="MessageInput">
        <input 
            required
            value={message} 
            onChange={onChange} 
            className="MessageInputInput" 
            type='textarea'/>
        <div className="MessageInputSubmit">

            <img alt="submit_button" class="MessageInputSubmitButton" src={send_button} />
            {false &&
            <div className="MessageInputSubmitInner">
                <div className="MessageInputInnerInner"></div>
            </div>}
        </div>
    </div>
    );

}