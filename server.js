const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    socket.broadcast.emit('file-read', data);
    console.log(data);
  });
  socket.on('capitalize', data => {
    console.log(data);
  });
  socket.on('file-write', data => {
    console.log(data);
  });
  socket.on('file-save', data => {
    console.log(data);
  });
  socket.on('file-error', err => {
    console.log(err);
  });
});
