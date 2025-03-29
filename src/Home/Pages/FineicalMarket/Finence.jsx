import React from "react";
import "./finence.css";

const Finence = () => {
  return (
    <div>
      <div className="body5">
        <h1>
          The most comprehensive, timely, reliable data to help you
          <br /> master the evolving financial market.
        </h1>

        <p>
          Robust public and private market datasets, meticulously kept and
          ever-expanding.
        </p>
      </div>

      <div className="image-container">
        <img className="img2" src="./image/img13.svg" alt="" />
        <img className="img2" src="./image/img14.webp" alt="" />
        <img className="img2" src="./image/img15.svg" alt="" />
        <img className="img2" src="./image/img16.svg" alt="" />
      </div>
      <div className="text">
        <p>
          <span>5.3M</span> <br />
          Companies
        </p>
        <p>
          <span>2.6M</span> <br />
          Deals
        </p>
        <p>
          <span>557k</span>
          <br /> Investors
        </p>
        <p>
          <span>141k</span>
          <br /> Funds
        </p>
      </div>
      <div className="button5">
        <a href="##">
          <button className="btn5">Discover our data</button>
        </a>
      </div>
    </div>
  );
};

export default Finence;
