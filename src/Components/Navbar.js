import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from './Logo';
import {
  faBars,
  faXmark, // Import the user icon
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  
  const openNav = () => {
    setNav(!nav);
  };
const navigateToLab=()=> {
  navigate("/lab");
}
  return (
    <div className="navbar-section">
      <nav className="navbar">
      <br></br><br></br><br></br><br></br> <Logo />
        <h1 className="navbar-title">
          <Link to="/">
            Health <span className="navbar-sign">+</span>
          </Link>
        </h1>
      </nav>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="/lab" 
          className="navbar-links"
          onClick={navigateToLab}>
            Laboratory Services
          </a>
        </li>&emsp;&emsp;&emsp;&emsp;
      </ul>

      {/* Profile Icon */}
      <Link to="/loginform" className="profile-link">
      <img src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} 
      alt="Custom Profile"  className="custom-profile-icon" />
&emsp;
</Link>
      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/lab">
              Laboratory Services
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
