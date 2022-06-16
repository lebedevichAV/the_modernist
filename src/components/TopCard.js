import React from "react";

function TopCard({ card }) {
  return (
    <a className="top-card" href="#">
      <div className="top-card__content">
        <div className="top-card__img" />
        <h3 className="top-card__title">{card.title}</h3>
        <p className="top-card__text">{card.text}</p>
      </div>
    </a>
  );
}

export default TopCard;
