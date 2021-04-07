import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function ImageCarousel(props) {
  const { photos } = props;
  return (
    <Carousel
    showThumbs={false}
    >
      {photos.map((p, i) => {
        return (
          <div className="carousel-image" key={i}>
            <img key={i} className="carousel" src={p} alt={`carousel-${i}`} />
          </div>
        );
      })}
    </Carousel>
  );
}
