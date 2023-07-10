const io = require('socket.io')(3001, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(socket.id);

    //listen for send-messsage event and call function to handle the incoming message
    socket.on('send-message', (message, room) => {

        //if room is not defined
        if (room === '') {
            //send message to all connected clients, including the initiating client
            // io.emit('receive-message', message);

            //to send message to all connected clients, except the initiating client, use socket.broadcast.emit()
            socket.broadcast.emit('receive-message', message);

        } else {
            //otherwise send message to specific room
            socket.to(room).emit('receive-message', message);
        }

        

        console.log(message);
    })
});
