import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleSignOut = () => {
    window.location.href = "/login";
  };

  return (
    <div className="navbar-main-container">
      <div className="navbar-child-container">
        <div className="navbar-links">
          <a href="/login">Home</a>
          <a href="/">Todo</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/contact-us">Contact us</a>
        </div>

        <div className="navbar-donate">
          <button id="buttons" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
