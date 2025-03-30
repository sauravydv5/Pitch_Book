import React from "react";

import Footer1 from "../Footer/Footer1/Footer1";
import Footer2 from "../Footer/Footer2/Footer2";
import Content1 from "./Content/Content1";

import Technology from "./Content/Techonolgy/Techonlogy";
import FreeTrail from "../FreeTrail/FreeTrail";
import Explore from "./ExplorePitchbook/Explore";
import CardList from "./Content/CardData/CardList";
import Adds_on from "./AddsOn/Adds_on";
import Eval_strat from "./Strategy/Eval_strat";
// import Feedback from "./Client_feedBack/Feedback";

const Product = () => {
  return (
    <div>
      <Content1 />
      <Technology />
      <Explore />
      <CardList />
      <Adds_on />
      <Eval_strat />
      {/* <Feedback /> */}

      <FreeTrail />

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Product;
