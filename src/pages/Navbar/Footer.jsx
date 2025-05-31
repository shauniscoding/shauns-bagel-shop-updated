import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer dark">
      <div className="footer-columns">
        <div className="footer-column">
          <h5>Where To Pretend</h5>
          <p>
            <Link to="/locations">See Imaginary Locations</Link>
          </p>
        </div>

        <div className="footer-column">
          <h5>Bagel Rewards</h5>
          <p>
            <Link to="/join">Join Now</Link>
          </p>
          <p>
            <Link to="/learn">Learn More</Link>
          </p>
          <p>
            <Link to="/account">Manage Account</Link>
          </p>
        </div>

        <div className="footer-column">
          <h5>News & Info</h5>
          <p>
            <Link to="/press">Fake Press Releases</Link>
          </p>
          <p>
            <Link to="/about">About Our Non-Existence</Link>
          </p>
          <p>
            <Link to="/support">Support Yourself</Link>
          </p>
          <p>
            <Link to="/manuals">Make-Believe Manuals</Link>
          </p>
          <p>
            <Link to="/signup">Newsletter Sign-Up</Link>
          </p>
        </div>

        <div className="footer-column">
          <h5>Other Sites</h5>
          <p>
            <a href="#">Fakebook</a>
          </p>
          <p>
            <a href="#">InstaPretend</a>
          </p>
          <p>
            <a href="#">Twittless</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Nonsense</Link>
          <Link to="/contact">Contact the Void</Link>
        </div>

        <div className="social-icons">
          <a href="#" aria-label="Fake Facebook">
            📘
          </a>
          <a href="#" aria-label="Fake Twitter">
            🐦
          </a>
          <a href="#" aria-label="Fake Instagram">
            📸
          </a>
          <a href="#" aria-label="Fake Tumblr">
            📓
          </a>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2025 Shaun's Bagel Shop No Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
