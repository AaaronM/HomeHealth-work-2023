import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <li className="nav__link__hover">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
      </div>

      <div className="navbar__links">
        <li className="nav__link__hover">
          <Link className="nav__link" to="/About">
            About
          </Link>
        </li>
        <li className="nav__link__hover">
          <Link className="nav__link" to="/Services">
            Services
          </Link>
        </li>

        <li className="nav__link__hover">
          <Link className="nav__link" to="/Contacts">
            Contacts
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
