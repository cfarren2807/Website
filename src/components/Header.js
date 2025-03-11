import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo with stars2.png";



const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true); // Show menu when hovering
  };

  const handleMouseLeave = () => {
    setMenuOpen(false); // Hide menu when mouse leaves
  };

  return (
    <nav className="navigation">
      {/* Logo & Title */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="STRATHcube Logo" className="logo" />
        </Link>
        <span className="nav-title">STRATHcube</span>
      </div>

      {/* Menu Icon (Hamburger) */}
      <div
        className="menu-icon"
        onMouseEnter={handleMouseEnter} // Show menu when hovering over icon
      >
        <FaBars />
      </div>

      {/* Navigation Links */}
      <ul
        className={`nav-links ${menuOpen ? "show" : ""}`}
        onMouseEnter={handleMouseEnter} // Keep menu open when hovering over the menu
        onMouseLeave={handleMouseLeave} // Hide menu when the mouse leaves the menu
      >
        <li><Link to="/">Home</Link></li>
        <li><a href="/#mission">Mission</a></li>
        <li><a href="/#outreach">Outreach</a></li>
        <li><Link to="/team">Team</Link></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;


