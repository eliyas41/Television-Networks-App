const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.route');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
