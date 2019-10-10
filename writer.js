const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileWrite = require('./file-write');

fileWrite('./new-text.txt', 'did gyre and gimble in all the wabe')
  .then(() => {
    socket.on('file-write', data => {
      socket.emit('file-save', data);
    });
  });

// need to do error still


// write a file