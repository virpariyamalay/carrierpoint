import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS middleware

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
const PORT = process.env.PORT || 5000; 

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Experience schema
const experienceSchema = new mongoose.Schema({
  university: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  preparation: { type: String, required: true },
  tips: { type: String, required: true },
  rating: { type: Number, required: true },
  linkedinProfile: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Experience = mongoose.model('Experience', experienceSchema);

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// API endpoint to save experience data
app.post('/api/experiences', async (req, res) => {
  const experienceData = req.body;

  try {
    const newExperience = new Experience(experienceData);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ message: 'Error saving experience', error: error.message });
  }
});

// API endpoint to retrieve all experiences
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving experiences', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
