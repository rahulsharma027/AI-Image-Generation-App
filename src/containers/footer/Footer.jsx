import React from "react";
import Logo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="ai__footer section__padding">
    <div className="ai__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="ai__footer-btn">
      <p>SIGN-UP </p>
    </div>

    <div className="ai__footer-links">
      <div className="ai__footer-links_logo">
        <img src={Logo} alt="ai_logo" />
        <p>
          Copyright Section - 102 <br /> All Rights Reserved
        </p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Get in touch</h4>
        <p>ISI - 2, Poornima Marg, Sitapura, Jaipur, Rajasthan 302022</p>
        <p>0123456789</p>
        <p>ai.gen.rahul@gmail.com</p>
      </div>
    </div>

    <div className="ai__footer-copyright">
      <p>@2023 AI Image Generator (By Team Rahul). All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
