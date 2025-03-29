import React from "react";
import "./adds.css";

const Adds_on = () => {
  return (
    <div className="Adds-Cont">
      <h1>Paid for add-ons</h1>
      <div className="Contt2">
        <div className="left1">
          <img src="./image/img27.svg" alt="" />
          <h2>CRM Integration</h2>
          <p>
            Bring our data into your CRM to create new
            <br /> leads and enhance your existing accounts.
          </p>
          <a href="###" className="LinkTag">
            Read more »
          </a>
        </div>
        <div className="left1">
          <img src="./image/img28.svg" alt="" />
          <h2>Direct Data</h2>
          <p>
            Integrate our data with your existing
            <br /> systems through an á la carte solution (API)
            <br /> or pre-defined supply of datapoints (datafeed).
          </p>
          <a href="###" className="LinkTag">
            Read more »
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adds_on;
