import React from 'react';

import './messagescontainer.css';

export default function MessagesContainer() {

    const messages = [
        {
            key: 0,
            message: 'Some message',
            isSender: 0,
            when: '16:30'
        },
        {
            key: 1,
            message: 'Another message',
            isSender: 1,
            when: '16:32'
        },
        {
            key: 2,
            message: 'Just another message',
            isSender: 0,
            when: '16:34'
        },
        {
            key: 3,
            message: 'This ought to be a very long message, not that long though',
            isSender: 0,
            when: '16:40'
        },
        {
            key: 4,
            message: 'Maybe another long message from my friend on the other side of the planet...',
            isSender: 1,
            when: '16:45'
        }
    ]

    return (
        <div className="MessagesContainer">
            {
                messages.map((message, i) => <div key={message.key}
                                         className={message.isSender ? "MessageSender MessageBox": "MessageReceiver MessageBox"}>
                                             {message.message}
                                             <div className="MessageBoxWhen">{message.when}</div>
                                             </div>)
            }
        </div>
    );

}