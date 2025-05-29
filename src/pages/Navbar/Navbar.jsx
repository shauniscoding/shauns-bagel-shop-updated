import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import bagel from "/images/bagel.png";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const enterZone = 40;
      const navbarHeight = 120;
      if (e.clientY < enterZone || (visible && e.clientY < navbarHeight)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/locations", label: "Locations" },
    { path: "/catering", label: "Catering" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {/* Bagel Icon */}
      <div className="navbar-logo">
        <img
          src={bagel}
          alt="Bagel Logo"
          style={{ height: "3.7vw", width: "3.7vw" }}
        />
      </div>

      {/* Centered Links */}
      <div className="navbar-links">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onMouseEnter={() => setHoveredLink(path)}
            onMouseLeave={() => setHoveredLink(null)}
            className={`nav-link ${
              location.pathname === path ? "active" : ""
            } ${hoveredLink === path ? "hovered" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
