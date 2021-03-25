import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function ImageCarousel(props) {
  const { photos } = props;
  return (
    <Carousel>
      {photos.map((p, i) => {
  return (
    <div className = 'carousel-image'>
      <img
        className="carousel"
        src={p}
        alt={`carousel-${i}`}
      />
    </div>
  );
})}
</Carousel>
  );
}


