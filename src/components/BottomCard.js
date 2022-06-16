import React from "react";

function BottomCard({ card }) {
  return (
    <a className="bottom-card" href="#">
      <figure className="bottom-card__content">
        <div className="bottom-card__img"></div>
        <figcaption className="bottom-card__description">
          {card.description}
        </figcaption>
      </figure>
    </a>
  );
}

export default BottomCard;
