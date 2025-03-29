import React from "react";
import "./Customer.css";

const CustomerTest = () => {
  return (
    <div>
      <div className="customer">
        <h1>
          We believe trust is earned—and we’re here to earn
          <br /> yours
        </h1>
        <p>
          Our commitment to delivering crucial information at every stage of
          their journey keeps our clients returning.
        </p>
        <div className="img-box">
          <img src="./image/img19.svg" alt="" />
          <img src="./image/img20.webp" alt="" />
          <img src="./image/img21.webp" alt="" />
          <img src="./image/img22.svg" alt="" />
          <img src="./image/img23.webp" alt="" />
        </div>

        <div className="Cusbtn">
          <a href="##">
            <button className="btn4">Read our customer testimonials</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerTest;
