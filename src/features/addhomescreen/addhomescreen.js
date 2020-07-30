import React, { useState } from 'react';
import { requestA2hs } from './a2hsSlice';
import { useDispatch } from 'react-redux';

import './addhomescreen.css';

export default function AddHomeScreen(){

    const [show, setShow] = useState(true);
    const dispath = useDispatch();    

    let onyes = () => {
        dispath(requestA2hs());
    }

    let onNo = () => {
        setShow(false);
    }

    return (
        <div className={show ? "AddHomeScreen": "AddHomeScreen AddHomeScreenHidden"}>
            <p>Add to home screen</p>
            <div className="AddHomeScreenButtons">
                <button onClick={onNo}>No</button>
                <button onClick={onyes}>Yes</button>
            </div>
        </div>
        );

}