const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
// const capitalize = require('./str-capitalizer');

socket.on('file-read', data => {
  socket.emit('capitalize', data.toUpperCase());
});