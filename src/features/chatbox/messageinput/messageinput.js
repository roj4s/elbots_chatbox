import React, { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import send_button from './send_button.svg';
import { sendMessage } from '../../chatbox/messagescontainer/messagesSlice';

import './messageinput.css';

export default function MessageInput (){

    const dispatch = useDispatch();
    const [ message , setMessage ] = useState("");

    const inputRef = useRef(null);
    const setInputRef = useCallback(el => {
        inputRef.current = el;
    }, []);

    const onChange = (e) => {
        e.preventDefault();        
        setMessage(e.target.value);
    }

    const onSubmit = (e) => {
        
        if(e.key && e.key !== 'Enter')
            return;

        if(message.trim() === '')
            return;

        dispatch(sendMessage(message));
        setMessage(' ');
        inputRef.current.focus();
    }

    return (
    <div className="MessageInput">
        <input 
            ref={setInputRef}
            required
            value={message} 
            onChange={onChange} 
            className="MessageInputInput" 
            onKeyPress={onSubmit}
            type='textarea'/>
        <div className="MessageInputSubmit">

            <img onClick={onSubmit} alt="submit_button" className="MessageInputSubmitButton" src={send_button} />
            {false &&
            <div className="MessageInputSubmitInner">
                <div className="MessageInputInnerInner"></div>
            </div>}
        </div>
    </div>
    );

}