import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();
  const logOut = async () => {
    await signOut(Auth);
    navigator("/");
  };

  return (
    <div className="ai__navbar">
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="ai__navbar-links_container">
          <p>
            <a href="/welcome">Home</a>
          </p>
          <p>
            <a href="about-us">About Us</a>
          </p>
          <p>
            <a href="contact-us">Contact Us</a>
          </p>
          <p>
            <a href="community">Community</a>
          </p>
        </div>
      </div>
      <div className="ai__navbar-sign">
        <p>
          <a href="generate">Generate</a>
        </p>
        <button type="button" onClick={logOut}>
          Logout
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
              <p>
                <a href="community">Community</a>
              </p>
            </div>
            <div className="ai__navbar-menu_container-links-sign">
              <p>
                <a href="generate">Generate</a>
              </p>
              <button type="button">
                <a href="login">Logout</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
