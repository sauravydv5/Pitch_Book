import React from "react";
import "./Pitchbook.css";

const PitchBook = () => {
  return (
    <div>
      <div className="part4">
        <h1>
          PitchBook research, reports, and analysts are essential to
          <br /> leading media outlets
        </h1>
        <p>
          <span>6,777</span> press citations in 2023
        </p>
        <div className="img-container">
          <img src="./image/img8.webp" alt="" />
          <img src="./image/img9.webp" alt="" />
          <img src="./image/img10.webp" alt="" />
          <img src="./image/img11.webp" alt="" />
          <img src="./image/img12.webp" alt="" />
        </div>

        <div className="button">
          <a href="##">
            <button className="btn4">Explore our media center</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PitchBook;
