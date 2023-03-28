import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <li>
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
      </div>

      <div className="navbar__links">
        <li>
          <Link className="nav__link" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/Services">
            Services
          </Link>
        </li>

        <li>
          <Link className="nav__link" to="/Contacts">
            Contacts
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
