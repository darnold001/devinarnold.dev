export interface CardInfo {
  thumbnail: string;
  name: string;
  photos: string[];
  blurb: string;
}

export type CarouselProps  = {
  currImg: number;
  images: string[];
}

export interface CarouselIndicatorProps extends CarouselProps {
  setCurrImg: (idx: number) => void;
}
