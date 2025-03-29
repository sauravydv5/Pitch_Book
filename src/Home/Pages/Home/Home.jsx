import React from "react";
import Header from "../../../Components/Header/Header";
import Banner from "../Banner/Banner";
import Trusted from "../Trusted/Trusted";
import Unmatched from "../Unmatched/Unmatched";
import PitchBook from "../PitchBookReserch/PitchBook";
import Finence from "../FineicalMarket/Finence";
import IntregatedProduct from "../IgProduct/IntregatedProduct";
import CustomerTest from "../CustomerTest/CustomerTest";
import Experience from "../Experience/Experience";
import FreeTrail from "../../../Components/FreeTrail/FreeTrail";
import Footer1 from "../../../Components/Footer/Footer1/Footer1";
import Footer2 from "../../../Components/Footer/Footer2/Footer2";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Trusted />
      <Unmatched />
      <PitchBook />
      <Finence />
      <IntregatedProduct />
      <CustomerTest />
      <Experience />
      <FreeTrail />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
