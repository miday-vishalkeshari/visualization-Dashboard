const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const connectDB = require('./config/db'); // Use CommonJS require syntax
const dataRoutes = require('./routes/data-routes')

// Config environment for .env
dotenv.config();

// Database config  connecting to database
connectDB();

// Create an Express app  adding express instance
const app = express();  

// Middleware       
app.use(cors());      
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v1/data",dataRoutes);

// REST API
app.get('/', (req, resp) => {
    resp.send("Welcome to Data Visualization Dashboard");
});

const PORT = process.env.PORT || 8080; // Use uppercase PORT  coming from env

// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
