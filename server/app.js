const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const movieRoutes = require('./routes/movie.routes')
const channelRoutes = require('./routes/channel.routes')


const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', movieRoutes);
app.use('/api', channelRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');
// const userRoutes = require('./routes/user.routes');
// const movieRoutes = require('./routes/movie.routes');
// const channelRoutes = require('./routes/channel.routes');

// const app = express();
// const port = 8080;
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(cors());
// app.use(express.json());

// app.use('/api', userRoutes);
// app.use('/api', movieRoutes);
// app.use('/api', channelRoutes);

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// module.exports = { app, server, io };

