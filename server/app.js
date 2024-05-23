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
  console.log(`Server is running port ${port}`);
});