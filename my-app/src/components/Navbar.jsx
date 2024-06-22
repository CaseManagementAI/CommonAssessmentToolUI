import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Employment App</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/cases">Cases</Link>
        </li>
        <li className="nav-item">
          <Link to="/predictions">Predictions</Link>
        </li>
        <li className="nav-item">
          <Link to="/interventions">Interventions</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;