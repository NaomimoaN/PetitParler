import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/words">Words</Link>
        </li>
        <li>
          <Link to="/sentences">Sentences</Link>
        </li>
        <li>
          <Link to="/progress">Progress</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
