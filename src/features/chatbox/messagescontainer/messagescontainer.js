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
                  isSender: false,
                  img: data.img
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
                messages.map((message, i) => <div className={message.isSender ? "MessageEntry MessageSender" : "MessageEntry MessageReceiver"} key={message.key}>
                                                { message.img && <img alt="elbot mood" className="MessageEntryImg" src={message.img} /> }
                                                <div 
                                                    className={message.isSender ? "MessageSenderBox MessageBox": "MessageReceiverBox MessageBox"}>                                                
                                                    {message.message}
                                                    <div className="MessageBoxWhen">{`${message.when.hour}:${message.when.minute}`}</div>
                                                </div>
                                             </div>
                                             )
            }
            {
                loadingMessages &&
                 (<div className="MessageReceiver MessageReceiverBox MessageBox">
                    <div className="MessageBoxTypingPoint"></div>
                    <div className="MessageBoxTypingPoint"></div>
                    <div className="MessageBoxTypingPoint"></div>
                </div>)
            }
            
        </div>
    );

}