import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="ai__whatgpt3 section__margin" id="waig">
    <div className="ai__whatgpt3-feature">
      <Feature
        title="What is Image Generation Through AI?"
        text="
        Image generation with artificial intelligence is a revolutionary blend of technology and creativity. Algorithms act as virtual artists, crafting stunning visuals that blur the line between reality and imagination. Pixels dance to the rhythm of code, transforming digital realms into breathtaking tapestries of innovation. Experience the magic of AI, where data becomes art."
      />
    </div>
    <div className="ai__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="ai__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Enhance user interaction by allowing seamless communication between users and artificial intelligence."
      />
      <Feature
        title="Knowledgebase"
        text="Enhancing experience by incorporating a wealth of information, ensuring intelligent decision-making and dynamic content creation."
      />
      <Feature
        title="Education"
        text="Access tutorials, guides, and informative content to deepen understanding, fostering a learning environment for effective utilization of image generation tools."
      />
    </div>
  </div>
);

export default WhatGPT3;
