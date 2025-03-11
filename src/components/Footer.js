// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 CubeSat Mission. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;

