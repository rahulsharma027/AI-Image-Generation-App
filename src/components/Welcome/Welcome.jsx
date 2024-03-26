import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./welcome.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./../../containers";
import { CTA, Brand, Navbar, Navbar2 } from "./../../components";

const Welcome = () => (
  <div className="ai__header section__padding" id="home">
    <div className="ai__header-content">
      <h1 className="gradient__text">
        Turn Ideas Into Visual Magic With AI Image Generation
      </h1>
      <p>
        Image Generation with artificial intelligence unleashes creative
        potential, transforming ideas into stunning visuals effortlessly.
        Endless possibilities, instant awesomeness, cutting-edge technology.
      </p>

      <div className="ai__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Connect With Us</button>
      </div>

      <div className="ai__header-content__people">
        <img src={people} />
        <p> 100+ people signed-up in last 24 hours</p>
      </div>
    </div>

    <div className="ai__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Welcome;
