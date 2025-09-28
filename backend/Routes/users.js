const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");
const router = express.Router();

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    // remove password from output
    const userSafe = user.toObject();
    delete userSafe.password;

    res.json({ message: "Login successful", user: userSafe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // optional: if you want username required, enforce here
    // if (!username) return res.status(400).json({ error: "Username required" });

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashed });
    await newUser.save();

    const userSafe = newUser.toObject();
    delete userSafe.password;

    res.json({ message: "User registered successfully", user: userSafe });
  } catch (err) {
    console.error(err);

    // handle duplicate key error (E11000)
    if (err.code === 11000) {
      // err.keyValue contains the duplicated field, e.g. { email: 'x' } or { username: 'y' }
      const dupField = Object.keys(err.keyValue)[0];
      return res.status(400).json({ error: `${dupField} already exists` });
    }

    // validation errors
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }

    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
