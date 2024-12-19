/* eslint-disable react/prop-types */
import logo from "/images/logo.svg";
import headerContentImg from "/images/illustration-working.svg";

import "../styles/Header.css";

function Header({ onIsOpen, onSetIsOpen }) {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-menu ${onIsOpen ? "" : "nav-menu-display"}`}>
          <ul className="nav-list-ul">
            <li className="nav-lists">
              <a href="#" className="nav-links">
                Feature
              </a>
            </li>
            <li className="nav-lists">
              <a href="#" className="nav-links">
                Pricing
              </a>
            </li>
            <li className="nav-lists">
              <a href="#" className="nav-links">
                Resources
              </a>
            </li>
          </ul>
          <div className="login-signup-container">
            <button className="loginBtn">Login</button>
            <button className="signupBtn">Sign Up</button>
          </div>
        </div>
        <div
          className="hamburger"
          onClick={() => onSetIsOpen((onIsOpen) => !onIsOpen)}
        >
          <div className="hams"></div>
          <div className="hams"></div>
          <div className="hams"></div>
        </div>
      </nav>
      <div className="header-contents">
        <div className="header-text-contents">
          <h1 className="heading">More than just shorter links</h1>
          <p className="header-paragraph">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="header-contentBtn">Get Started</button>
        </div>
        <div className="header-img-content">
          <img
            className="header-img"
            src={headerContentImg}
            alt="Header Image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
