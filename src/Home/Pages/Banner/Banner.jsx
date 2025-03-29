import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <h1>
          Empowering capital market
          <br /> professionals to win what’s
          <br /> next
        </h1>
        <p>
          The top provider of global financial data, research, and insights.
        </p>
        <div className="search">
          <input
            className="search-box"
            type="Email"
            placeholder="Email Address"
          />
          <button className="btn2 btnn">Request a free trail</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
