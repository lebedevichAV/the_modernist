import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import CardSlider from "./CardSlider";
import "swiper/css";
import "swiper/css/navigation";

function MainSlider({ cards }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <CardSlider card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainSlider;
