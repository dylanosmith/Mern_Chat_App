import React, { useState } from 'react';
import io from 'socket.io-client';

const ChatApp = () => {
    const [state, setState] = useState({
        username: '',
        message: '',
    });
    const [messages,setMessages] = useState([]); 

    const socket = io('localhost:8000');

    React.useEffect(() => {
        socket.on("RECEIVE_MESSAGE", msg =>
            setMessages(prevMessages => {
                return [...prevMessages, msg]
            })
            
        );

    }, []);

    const sendMessage = (ev) => {
        ev.preventDefault();
        socket.emit("SEND_MESSAGE", {
            author: state.username,
            message: state.message
        });
        setState({
            username: '',
            message: ''
        });
    }
    return(
        <div className="messageWindow">
            <div className="messages">
                {messages.map((newMessage, idx)=> (
                    <div key={idx} className={newMessage.author.toLowerCase() ==="dylan"?"Mymsg":"msg"}>
                        <p>
                            <span>{newMessage.author}</span> : <span>{newMessage.message}</span>
                        </p>
                    </div>

                ))}
                
            </div>
            <div className="messageForm">
                <input type="text" placeholder = "Username" value={state.username} onChange= {ev => setState({username: ev.target.value})}/> <br/>
                <input type="text" placeholder = "Message" value={state.message} onChange= {ev => setState({...state, message: ev.target.value})}/> <br/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )

}

export default ChatApp;
