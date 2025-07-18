import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Description */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span className="footer-icon">S</span> SocialSeed
          </h2>
          <p className="footer-desc">
            Connect, Share, Grow: Your Professional Network for career advancement and meaningful connections.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Information</h4>
          <p><FaEnvelope className="icon" /> contact@socialseed.com</p>
          <p><FaPhone className="icon" /> +1 (555) 123-4567</p>
        </div>

      </div>

      <hr className="footer-line" />
      <p className="footer-copy">© 2025 SocialSeed. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
