const express = require("express");
const app = express();

const server = app.listen(8000, () => 
console.log("The server is all fired up on port 8000")
);

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log(socket.id);

    socket.on("event_from_client", data => {
        //socket.broadcast will emit to all other
        //clients besides the client who is actually emitting
        socket.broadcast.emit("Send_data_to_all_other_clients", data)
    });

    //add additional event listeners here
});
