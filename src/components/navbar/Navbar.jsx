import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ai__navbar">
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="ai__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="about-us">About Us</a>
          </p>
          <p>
            <a href="contact-us">Contact Us</a>
          </p>
        </div>
      </div>
      <div className="ai__navbar-sign">
        <p>
          <a href="generate">Generate</a>
        </p>
        <button type="button">
          <a href="login">Get Started</a>
        </button>
      </div>
      <div className="ai__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="ai__navbar-menu_container scale-up-center">
            <div className="ai__navbar-menu_container-links">
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="about-us">About Us</a>
              </p>
              <p>
                <a href="contact-us">Contact Us</a>
              </p>
            </div>
            <div className="ai__navbar-menu_container-links-sign">
              <p>
                <a href="generate">Generate</a>
              </p>
              <button type="button">
                <a href="login">Get Started</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
