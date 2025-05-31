import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import instagram from "/images/instagram-icon.png";
import facebook from "/images/facebook-icon.png";
import youtube from "/images/youtube-icon.png";
// import X from "/images/x-icon.webp";
import X from "/images/x-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-section">
          <h4>About Us</h4>
          <Link to="/about">About</Link>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        <div className="footer-section">
          <h4>Menu & Services</h4>
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <a href="#">Specials</a>
          <a href="#">Gift Cards</a>
        </div>

        <div className="footer-section">
          <h4>Visit Us</h4>
          <Link to="/locations">Locations</Link>
          <a href="#">Hours & Contact</a>
          <a href="#">Franchise Opportunities</a>
        </div>

        <div className="footer-section">
          <h4>Customer Support</h4>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Allergens & Nutrition</a>
          <a href="#">Feedback</a>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shaun's Bagel Shop. No rights reserved.</p>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="Youtube">
            <img src={youtube} alt="Facebook" />
          </a>
          <a href="#" aria-label="X (formerly Twitter)">
            <img src={X} alt="X (formerly Twitter)" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
