import React , {useCallback, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages, registerMessage } from './messagesSlice';
import getBotApi from '../../app/botApi';


import './messagescontainer.css';


export default function MessagesContainer() {

    const dispatch = useDispatch();
    const BotApi = getBotApi();

    useEffect(() => {

        BotApi.ask().then(data => {

            if(data.success){            
              dispatch(registerMessage({
                  message: data.text,
                  isSender: false
              }));        
              
            }                  

          });
    }, [BotApi, dispatch]);

    const ref = useRef(null);
    const setRef = useCallback(el => {
        ref.current = el;
    }, []);

    useEffect(()=>{        

        const el = ref.current;        
        el.scrollTo({top: el.scrollHeight});        

    });

    const messages = useSelector(selectMessages);

    return (
        <div className="MessagesContainer" ref={setRef}>
            {
                messages.map((message, i) => <div key={message.key}
                                         className={message.isSender ? "MessageSender MessageBox": "MessageReceiver MessageBox"}>
                                             {message.message}
                                             <div className="MessageBoxWhen">{`${message.when.hour}:${message.when.minute}`}</div>
                                             </div>)
            }
        </div>
    );

}