import { CarouselIndicatorProps,  } from "./Types";

export const CarouselIndicator = ({
  currImg,
  setCurrImg,
  images,
}: CarouselIndicatorProps) => {
  const generateIndicators = () => {
    return images.map((img: string, idx: number) => {
      if (idx === currImg)
        return (
          <li key={idx} id="selected">
            {"●"}
          </li>
        );
      return (
        <li key={idx} onClick={() => setCurrImg(idx)}>
          {"○"}
        </li>
      );
    });
  };
  return <ul className="carousel-indicator">{generateIndicators()}</ul>;
};
