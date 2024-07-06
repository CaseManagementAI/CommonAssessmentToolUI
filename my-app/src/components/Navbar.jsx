import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-brand">
        <Link to="/">Case Management Tool</Link>
      </div>
      <ul className="navbar-nav">
        {/* Nav Items */}
        <li className="nav-item">
          <Link to="/predictions">Predictions</Link>
        </li>
        <li className="nav-item">
          <Link to="/interventions">Database</Link>
        </li>
        {/* search form */}
        <form className="nav-search">
          <input
            class="form-control me-2"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
          <button type="submit">Search</button>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
