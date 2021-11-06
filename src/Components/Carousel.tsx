import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function ImageCarousel(props:{photos: string[]}) {
  const { photos } = props;
  return (
    <Carousel
    showThumbs={false}
    >
      {photos.map((p, idx) => {
        return (
          <div className="carousel-image" key={idx}>
            <img key={idx} className="carousel" src={p} alt={`carousel-${idx}`} />
          </div>
        );
      })}
    </Carousel>
  );
}
