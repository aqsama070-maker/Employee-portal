const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: process.env.FRONTEND_URL || true })); // allow your frontend URL in prod
app.use(express.json());


// Routes
app.use("/api/employees", require("./Routes/employee"));  // ✅ Employee routes
app.use("/api/users", require("./Routes/users"));  

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

  app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
