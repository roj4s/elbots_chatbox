import React from 'react';
import AvatarBar from './avatarbar/avatarbar';
import MessageInput from './messageinput/messageinput';
import MessagesContainer from './messagescontainer/messagescontainer';

import './chatbox.css';

export default function ChatBox(){

    return (
        <div className="ChatBox" >
            <AvatarBar
                image="https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950"
                title="Some title"
                subtitle="Subtitle"
                />
            <MessagesContainer />
            <MessageInput />
        </div>
    );

}