const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileWrite = require('./file-write');


socket.on('capitalize', ({ path, text }) => {
  fileWrite(path, text)
    .then(() => {
      socket.emit('file-save');
    });
});


// need to do error still


// write a file