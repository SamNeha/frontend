import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from './Logo';
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';
import SignupForm from "./SignupForm";

function Nav() {
  const [nav, setNav] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false);
  };
  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowLoginForm(false); // Close the login form when opening the signup form
  };
  const navigateToLogin=()=> {
    navigate("/loginform");
  }
  const navigateToSignup=()=> {
    navigate("/signupform");
  }
  return (
    <div className="navbar-section">
      <nav className="navbar"><br></br><br></br><br></br><br></br>
      <Logo /> 
      <h1 className="navbar-title">
        <Link to="/">
        Health <span className="navbar-sign">+</span>
        </Link>
      </h1>
      </nav>


      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">Home
          </Link>
        </li>
        <li>
          <a href="/Health-Plus/lab" className="navbar-links">
            LaboratoryServices
          </a>
        </li>
        <li>
          <a href="/Health-Plus/loginform" className="navbar-links" onClick={navigateToLogin}>
            Login
          </a>
        </li>
        <li>
          <a href="/Health-Plus/signupform" className="navbar-links"onClick={navigateToSignup}>
            signup
          </a>
        </li> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

      </ul>

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
            <a onClick={openNav} href="/Health-Plus/lab">
              LaboratoryServices
            </a>
          </li>
          <li>
            <button onClick={toggleLoginForm}>Login</button>
          </li>
          <li>
            <button onClick={toggleSignupForm}>Signup</button>
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
      {showLoginForm && (
        <div className="modal">
          <LoginForm onClose={toggleLoginForm} />
        </div>
      )}
      {showSignupForm && (
        <div className="modal">
          <SignupForm onClose={toggleSignupForm} />
        </div>
      )}
    </div>
  );
}

export default Nav;
