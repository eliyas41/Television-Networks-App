const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Ensure you have a secret key

// Define the Zod schema
const userSchema = z.object({
  phone: z.string().nonempty({ message: 'Phone number is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
});

// Create a new user
const createUser = async (req, res) => {
  try {
    // Validate the request body against the schema
    const validatedData = userSchema.parse(req.body);

    // Destructure the validated data
    const { phone, email, password } = validatedData;

    // Check if the phone number or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { phone },
          { email }
        ]
      }
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Phone number or email address is already taken' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = await prisma.user.create({
      data: { phone, email, password: hashedPassword },
    });

    // Generate a JWT token
    const token = jwt.sign({ phone: newUser.phone }, jwtSecret, { expiresIn: '1h' });

    res.status(201).json({ token: token });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Validate the request body against the schema
    userSchema.pick({ phone: true, password: true }).parse({ phone, password });

    // Find the user by phone
    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return res.status(400).json({ error: 'Please create an account' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Incorrect phone or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ phone: user.phone }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ token: token });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: 'Failed to login user' });
  }
};

module.exports = {
  createUser,
  loginUser,
};

