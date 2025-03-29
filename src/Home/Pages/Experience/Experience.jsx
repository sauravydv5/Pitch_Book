import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Econtainer">
      <div className="image-cont">
        <img src="./image/img24.svg" alt="" />
      </div>

      <div className="cont-text">
        <h1>
          Experience the PitchBook Platform
          <br /> firsthand
        </h1>
        <p>
          Discover how PitchBook’s leading tools and capabilities can strengthen
          your due diligence
          <br /> workflows.
        </p>
        <button className="button1">Tour the plateform</button>
      </div>
    </div>
  );
};

export default Experience;
