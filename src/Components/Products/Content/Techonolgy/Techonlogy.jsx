import React from "react";
import "./Tech.css";

const Technology = () => {
  return (
    <div className="Tcontainer">
      <div className="imgArea1">
        <img src="./image/img24.webp" alt="Technology" />
      </div>

      <div className="textArea1">
        <h1>
          Technology for the <br /> way you work best
        </h1>
        <p>
          Our award-winning software gives you
          <br /> access to our data and the analytical tools
          <br /> you need to get answers fast, discover
          <br /> promising opportunities, and more.
          <br /> Each feature of PitchBook Desktop is
          <br /> designed to help you work smarter:
        </p>
        <ul>
          <li>Advanced search</li>
          <li>Discovery and insights</li>
          <li>Company profiles</li>
          <li>Workflow and efficiency</li>
          <li>
            <span>
              <a href="####">Learn More{">>"} </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technology;
