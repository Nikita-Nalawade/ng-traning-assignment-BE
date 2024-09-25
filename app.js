const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
require('./dbConnection');
const toDoListRoutes = require('./routes/toDoListRoutes');

const app = express();
const server = http.createServer(app);

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api', toDoListRoutes);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

