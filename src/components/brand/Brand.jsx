import React from "react";
import { google, microsoft, open, stability, stripe } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="ai__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={microsoft} />
    </div>
    <div>
      <img src={open} />
    </div>
    <div>
      <img src={stability} />
    </div>
    <div>
      <img src={stripe} />
    </div>
  </div>
);

export default Brand;
