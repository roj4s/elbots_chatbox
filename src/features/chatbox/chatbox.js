import React from 'react';
import AvatarBar from './avatarbar/avatarbar';
import MessagesContainer from './messagescontainer/messagescontainer';
import MessageInput from './messageinput/messageinput';

import './chatbox.css';

export default function ChatBox(){


    return (
        <div className="ChatBox" >
            <AvatarBar
                image="https://elbot-e.artificial-solutions.com/images/elbot/elbot70.jpg"
                title="Elbot"
                subtitle="elbot-e.artificial-solutions.com"
                />
            <MessagesContainer />
            <MessageInput />
        </div>
    );

}