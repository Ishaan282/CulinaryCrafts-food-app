const socketIo = require('socket.io');

//initialize socket.io for server
module.exports = (server) => {
    //new instance of Socket
    const io = socketIo(server);

    //listen for connection to socket
    io.on('connection', (socket) => {
        console.log('a user connected');

        //listen for chat message event
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg); //broadcast message to all clients
        });

        //listing for typing events
        socket.on('typing', (data) => {
            socket.broadcast.emit('typing', data); 
            //broadcast typing event to all clients
        });

        //listen for delete message event
        socket.on('delete message', (messageId) => {
            io.emit('delete message', messageId);
        });

        //listen for disconnect event
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

    return io;
};