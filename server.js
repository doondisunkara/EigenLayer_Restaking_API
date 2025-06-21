require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const connectDB = require('./config'); // Database connection function
const apiRoutes = require('./routes'); // All API routes

const app = express();

// Connect Database
connectDB();

// Init Middleware
// Body parser middleware to handle JSON data
app.use(express.json({ extended: false }));

// Define API Routes [7]
app.use('/api', apiRoutes); // All routes will be prefixed with /api

// Simple root route
app.get('/', (req, res) => res.send('EigenLayer Restaking API is running!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));