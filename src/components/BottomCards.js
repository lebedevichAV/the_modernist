import React from "react";
import BottomCard from "./BottomCard";

function BottomCards({ title, cards }) {
  return (
    <div className="bottom-cards">
      <h2 className="bottom-cards__title">{title}</h2>
      {cards.map((card, index) => (
        <BottomCard card={card} key={index} />
      ))}
    </div>
  );
}

export default BottomCards;
