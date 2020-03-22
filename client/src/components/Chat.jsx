import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatApp = () => {
    const [socket] = useState(() => io(':8000'))
    
      useEffect(() => {
    
        console.log("Is this running?");
        socket.on("Welcome", data => console.log(data));
    
        return () =>  socket.disconnect(true);
    
      }, []);

    return(
        <div>
            <div>
                <form action="">
                    <p>Enter your name to start chatting:</p>
                    <input type="text"/>
                    <button type="submit">Start</button>
                </form>
            </div>

        </div>

    )

}

export default ChatApp;
