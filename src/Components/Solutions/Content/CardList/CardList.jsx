import React from "react";
import Card from "../../../Card/Card";

const cardData = [
  {
    icon: "https://example.com/icon1.png",
    title: "Private market intelligence",
    description:
      "Gain actionable insight on the flow of capital across VC, PE, and M&A",
    link: "#",
  },
  {
    icon: "https://example.com/icon2.png",
    title: "Financial Market Trends",
    description:
      "Stay updated with the latest financial trends and data insights.",
    link: "#",
  },
  {
    icon: "https://example.com/icon3.png",
    title: "Investment Analysis",
    description: "Detailed analysis on various investment opportunities.",
    link: "#",
  },
  {
    icon: "https://example.com/icon4.png",
    title: "Data-Driven Decisions",
    description: "Utilize data analytics to make better business decisions.",
    link: "#",
  },
  {
    icon: "https://example.com/icon5.png",
    title: "Market Research",
    description: "Get deep market insights with our research tools.",
    link: "#",
  },
  {
    icon: "https://example.com/icon6.png",
    title: "Risk Assessment",
    description: "Evaluate risks before making investment decisions.",
    link: "#",
  },
  {
    icon: "https://example.com/icon7.png",
    title: "Funding Strategies",
    description:
      "Explore different funding strategies for startups and enterprises.",
    link: "#",
  },
  {
    icon: "https://example.com/icon8.png",
    title: "AI in Finance",
    description: "Leverage AI for smarter financial decisions and automation.",
    link: "#",
  },
  {
    icon: "https://example.com/icon9.png",
    title: "Stock Market Insights",
    description: "Get real-time updates on stock market movements.",
    link: "#",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
