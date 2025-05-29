// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>123 Bagel Lane, Doughville, NY 10001</p>
        <p>(123) 456-7890</p>
        <p>hello@bagelshop.com</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/catering">Catering</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="footer-section hours">
        <h4>Hours</h4>
        <p>Mon - Fri: 7am - 3pm</p>
        <p>Sat - Sun: 8am - 2pm</p>
      </div>

      <div className="footer-section social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            📸
          </a>
          <a href="#" aria-label="Facebook">
            📘
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bagel Shop. All rights reserved.</p>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
