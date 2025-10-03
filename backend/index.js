const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" })); 
app.use(express.json());

// Routes
app.use("/api/employees", require("./Routes/employee"));  
app.use("/api/users", require("./Routes/users"));  

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
