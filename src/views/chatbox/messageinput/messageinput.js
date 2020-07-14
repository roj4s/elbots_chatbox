import React from 'react';

import './messageinput.css';

export default function MessageInput (){

    return (
    <div className="MessageInput">
        <input className="MessageInputInput" type='textarea'/>
        <span className="MessageInputSubmit"></span>
    </div>
    );

}