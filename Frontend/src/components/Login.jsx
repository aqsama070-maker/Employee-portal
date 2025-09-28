import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css"; 
import frontpage from "./image/frontpage.png"; 

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", formData);
      setMessage(res.data.message);
      console.log("User Data:", res.data.user);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${frontpage})` }}
    >
      <div className="login-overlay">
        {/* ✅ Simple Header */}
        <nav className="login-navbar">
          <h1 className="login-logo">🏢 AKKM</h1>
          <div className="login-nav-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/add">New Hire Entry</Link>
            <Link to="/view">Staff Records</Link>
          </div>
        </nav>

        {/* ✅ Centered Login Box */}
        <div className="login-center">
          <div className="login-box">
            <h2>👨‍💻 Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
            <p className="text-white mt-3">
              Don’t have an account?{" "}
            <Link to="/register" className="text-info fw-bold text-decoration-underline">
              Register
            </Link>
           </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
