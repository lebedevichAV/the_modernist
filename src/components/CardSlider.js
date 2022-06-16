import React from "react";
import Button from "./Button";

function CardSlider({ card }) {
  return (
    <div className="slider-card">
      <div className="slider-card__content">
        <h1 className="slider-card__title">{card.title}</h1>
        <p className="slider-card__text">{card.text}</p>
        <Button text={card.btn_text} />
      </div>
      <div className="slider-card__col">
        <div className="slider-card__item">
          <div className="slider-card__body"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
