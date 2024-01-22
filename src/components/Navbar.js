import React from "react";
import "../styles/globals.css";
import { Link } from "gatsby";

function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <img src="/avatar.png" />
      </div>
      <div className="nav-name">Thamini Perera</div>
      <div className="nav-desc">
        <p>- Full Stack Developer</p>
        <p>- Fourth-year CS undergrad @ USJ</p>
        <p>- Colombo, Sri Lanka</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">
              <span>→ </span>Projects
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>→ </span>About
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-socials">
        <Link></Link>
      </div>
    </div>
  );
}

export default Navbar;
