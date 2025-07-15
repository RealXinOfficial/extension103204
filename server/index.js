const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000; // Define the port for your backend

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Allow the server to parse JSON request bodies

// Define a simple API endpoint for testing
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});