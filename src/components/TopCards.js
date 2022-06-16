import React from "react";
import TopCard from "./TopCard";

function TopCards({ cards }) {
  return (
    <div className="top-cards">
      {cards.map((card, index) => (
        <TopCard card={card} key={index} />
      ))}
    </div>
  );
}

export default TopCards;
