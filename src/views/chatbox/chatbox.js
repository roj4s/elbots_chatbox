import React from 'react';
import AvatarBar from './avatarbar/avatarbar';
import MessageInput from './messageinput/messageinput';
import MessagesContainer from './messagescontainer/messagescontainer';

import './chatbox.css';

export default function ChatBox(){

    return (
        <div className="ChatBox" >
            <AvatarBar
                image="http://elbot-e.artificial-solutions.com/images/elbot/elbot70.jpg"
                title="Some title"
                subtitle="Subtitle"
                />
            <MessagesContainer />
            <MessageInput />
        </div>
    );

}