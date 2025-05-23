import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">PetitParler</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/word-list">Your Word List</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
