const { instrument } = require('@socket.io/admin-ui');
const SocketIO = require('socket.io');
const express = require('express');
const path = require('path');

//use heroku defined port or 3001 if developing locally
const PORT = process.env.PORT || 3001;

//set default allowed Origins for local development
let allowedOrigins = ['http://localhost:3000', 'https://admin.socket.io'];


//if in production, set allowed origins to the heroku app URL
if (process.env.NODE_ENV === 'production') {
    allowedOrigins = ['https://mosnes-chat-demo-3311766bf952.herokuapp.com/'];
}

const app = express();

app.use(express.urlencoded({ extended: false }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = app.listen(PORT, function(err) {
    console.log('Express Server listening on port: ' + PORT);
});

//create socket.io server using the express server
const io = SocketIO( server, {
    cors: {
        origin: allowedOrigins,
        credentials: true
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
    });

    //listen for join-room event and call function to create a room
    socket.on('join-room', (room, cb) => {

        socket.join(room);

        //invokes callback function with message to display in chat box
        cb(`Joined room ${room}`);

    });
    
});

instrument(io, { auth: false });