const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const port = 3001; // You can use any available port

app.use(cors());
app.use(express.json());

(async () => {
  try {
    // Ensure the database schema is up to date
    await prisma.$connect();

    // Insert a default user
    const defaultUser = {
      username: 'Eliyas',
      email: 'defaultus@example.com',
      password: 'elvis1234'
    };

    await prisma.user.upsert({
      where: { email: defaultUser.email },
      update: {},
      create: defaultUser
    });
    // console.log('Default user inserted successfully');

  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    await prisma.$disconnect();
  }
})();

// Endpoint to fetch the user data
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
