const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileRead = require('./file-read');

fileRead(process.argv[2])
  .then(data => {
    socket.emit('file-read', data);
  })
  .catch((err) => {
    socket.emit('file-error', err);
  });
