import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Case Management Tool</Link>
        </div>
        {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/predictions">Predictions</Link>
          </li>
        </ul> */}
        <form className="nav-search">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button type="submit">Go</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
