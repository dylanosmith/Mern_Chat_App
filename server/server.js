const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(8000, () => 
console.log("The server is all fired up on port 8000")
);

const io = socket(server);

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("SEND_MESSAGE", function(data){
        console.log(data);
        //socket.broadcast will emit to all other
        //clients besides the client who is actually emitting
       io.emit("RECEIVE_MESSAGE", data);
    })

    //add additional event listeners here
});
