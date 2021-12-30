import { CarouselProps } from "./Types";
export const CarouselCard = ({ currImg, images }: CarouselProps) => {
  const cardData = images[currImg];

  return (
    <div className="carousel-card">
      <img
        key={currImg}
        className="carousel-image"
        src={cardData}
        alt={`carousel-${currImg}`}
      />
    </div>
  );
};
