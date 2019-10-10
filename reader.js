const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fileRead = require('./file-read');

const data = { path: process.argv[2] };
fileRead(data.path)
  .then(results => {
    data.text = results;
    socket.emit('file-read', data);
  })
  .catch((err) => {
    socket.emit('file-error', err);
  });
