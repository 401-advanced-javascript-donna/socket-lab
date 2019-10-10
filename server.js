const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    socket.broadcast.emit('file-read', data);
  });
  socket.on('capitalize', data => {
    socket.broadcast.emit('capitalize', data);
  });
  socket.on('file-save', () => {
    console.log('Capitalization has been saved!');
  });
  socket.on('file-error', err => {
    console.log(err);
  });
});
