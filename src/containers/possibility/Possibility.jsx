import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="ai__possibility section__padding" id="dall-e">
    <div className="ai__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="ai__possibility-content">
      <h4>Sign Up to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Explore diverse possibilities through advanced image generation tools,
        from artistic expression to generate images, transforming ideas into
        visually stunning realities with ease and innovation.
      </p>
      <h4>Sign Up to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
