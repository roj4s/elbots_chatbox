import React from 'react';
import { useState } from 'react';

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
            <div className="MessageInputSubmitInner"></div>
        </div>
    </div>
    );

}