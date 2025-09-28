import React from "react";
import { Link } from "react-router-dom";
import frontpage from "./image/frontpage.png"; // ✅ background image
import "./FrontPage.css"; // ✅ CSS file import

function FrontPage() {
  return (
    <div
      className="frontpage-container"
      style={{ backgroundImage: `url(${frontpage})` }}
    >
      {/* Overlay */}
      <div className="overlay">
        {/* Header / Navbar */}
        <nav className="navbar">
          <h1 className="logo">🏢 AKKM</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

            {/* ✅ Employee Links */}
            <Link to="/login">Login</Link>
            <Link to="/add">New Hire Entry</Link>
            <Link to="/view">Staff Records</Link>

          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-box">
            <h2>Join the Future of Innovation at AKKM</h2>
            <p>
              Building a workplace where employees thrive, grow, and contribute
              to groundbreaking solutions. 🚀
            </p>
            <div className="hero-buttons">
              <Link to="/login" className="btn btn-gold">
                💼 Careers at AKKM
              </Link>
            </div>
          </div>
        </section>

{/* Footer */}
<footer className="footer">
  <div className="footer-content">
    {/* Company Info */}
    <div className="footer-section">
      <h3>🏢 AKKM</h3>
      <p>
        Driving innovation and empowering employees to achieve
        excellence. Together we grow, together we succeed. 🌟
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="#info">info</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>📍 Islamabad, Pakistan</p>
      <p>📞 +92 300 1234567</p>
      <p>📧 hr@akkm.com</p>
    </div>

    {/* Social Media */}
    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="social-links">
        <a href="https://pk.linkedin.com/">🌐 LinkedIn</a>
        <a href="https://www.facebook.com/">📘 Facebook</a>
        <a href="https://x.com/?lang=en">🐦 Twitter</a>
        <a href="https://www.youtube.com/">▶️ YouTube</a>
        <a href="https://www.instagram.com/?hl=en">📸 Instagram</a>
        <a href="https://github.com/">💻 GitHub</a>
        <a href="https://www.whatsapp.com/">💬 WhatsApp</a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} AKKM. All rights reserved.</p>
  </div>
</footer>

      </div>
    </div>
  );
}

export default FrontPage;
