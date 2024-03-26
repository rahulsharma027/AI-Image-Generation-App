import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Redefining Reality",
    text: "AI's brush strokes redefine reality, forging images that blur the line between dreams and pixels, a canvas of innovation painted by algorithms.",
  },
  {
    title: "Unleashing Sorcery",
    text: "Unleash AI's visual sorcery, where algorithms choreograph pixels into mesmerizing art, creating a tapestry of imagination that transcends the ordinary.",
  },
  {
    title: "Magic of Alchemy",
    text: "Experience the magic of AI's visual alchemy, where code metamorphoses into breathtaking imagery. Pixels become the paint, algorithms the artist, creating a masterpiece of innovation.",
  },
  {
    title: "Transcending Limits",
    text: "In the realm of AI, pixels transform into a gallery of dreams, as algorithms sculpt reality into a masterpiece, showcasing innovation in every stroke.",
  },
];

const Features = () => (
  <div className="ai__features section__padding" id="stable-diffusion">
    <div className="ai__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into AI
        Generation & Make it Happen.
      </h1>
      <p>Sign Up to Get Started</p>
    </div>
    <div className="ai__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
