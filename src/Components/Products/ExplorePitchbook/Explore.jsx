import React from "react";
import "./explore.css";

const Explore = () => {
  return (
    <div className="ExploreCont">
      <div className="Eimage">
        <img src="./image/img25.webp" alt="" />
      </div>
      <div className="Etext">
        <h1>
          We’d love to show
          <br /> you around
        </h1>
        <p>
          Take a tour to get acquainted with how the
          <br /> PitchBook Platform’s capabilities can increase
          <br /> the speed and depth of your due diligence.
        </p>
        <button className="Ebtn">Start the tour</button>
      </div>
    </div>
  );
};

export default Explore;
