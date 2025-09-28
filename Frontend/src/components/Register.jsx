import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";
import forestBg from "./image/frontpage.png"; // ✅ same background as login

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${forestBg})` }}
    >
      <div className="register-overlay">
        {/* Navbar */}
        <nav className="register-navbar">
          <h1 className="register-logo">🏢 AKKM</h1>
          <div className="register-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/add">New Hire Entry</Link>
            <Link to="/view">Staff Records</Link>
          </div>
        </nav>

        {/* Register Box */}
        <div className="register-box">
          <h2>📝 Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>

          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}

          <p className="login-link" >
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
