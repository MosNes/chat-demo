const io = require('socket.io')(3001, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(socket.id);

    //listen for send-messsage event and call function to handle the incoming message
    socket.on('send-message', (message) => {

        //send message to all connected clients
        io.emit('receive-message', message);

        console.log(message);
    })
});
