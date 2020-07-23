import React , {useCallback, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages, registerMessage, selectLoadingMessage, setSendingMessage } from './messagesSlice';
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

          }).finally(()=>{
              dispatch(setSendingMessage(false));
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
    const loadingMessages = useSelector(selectLoadingMessage);

    return (
        <div className="MessagesContainer" ref={setRef}>
            {
                messages.map((message, i) => <div key={message.key}
                                         className={message.isSender ? "MessageSender MessageBox": "MessageReceiver MessageBox"}>
                                             {message.message}
                                             <div className="MessageBoxWhen">{`${message.when.hour}:${message.when.minute}`}</div>
                                             </div>)
            }
            {
                loadingMessages &&
                 (<div className="MessageReceiver MessageBox">
                    <div className="MessageBoxTypingPoint"></div>
                    <div className="MessageBoxTypingPoint"></div>
                    <div className="MessageBoxTypingPoint"></div>
                </div>)
            }
            
        </div>
    );

}