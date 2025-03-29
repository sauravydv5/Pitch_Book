import React from "react";
import "./trail.css";

const FreeTrail = () => {
  return (
    <div className="t-container">
      <div className="Ftext">
        <h1>Go further and achieve more with PitchBook</h1>
      </div>
      <div className="search2">
        <input
          className="search-box"
          type="Email"
          placeholder="Email Address"
        />
        <button className="btn2 btnn">Request a free trail</button>
      </div>
    </div>
  );
};

export default FreeTrail;
