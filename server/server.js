const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // MongoDB connection
const authRoutes = require("./routes/authRoutes"); // Import your authRoutes file

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Mount auth routes at /api/auth

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));