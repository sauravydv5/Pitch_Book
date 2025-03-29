import React from "react";
import Card1 from "../../../Card/Card1";
import "./Carddata.css";
import cardData from "../../../utils/CardData";

const CardList = () => {
  return (
    <>
      <div className="cardName">
        <h1>Included with PitchBook Desktop</h1>
      </div>
      <div className="CardData-cont">
        {cardData.map((card, index) => (
          <Card1
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
