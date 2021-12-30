import { useState, useEffect, useCallback } from "react";
import { CarouselCard } from "./carouselCard";
import { CarouselIndicator } from "./carouselIndicator";

function Carousel({ images }: {images: string[]}) {
  const Time = 10000; // The duration between each slide
  const TransitionSpeed = 500; //the time duration between transition effect;
  const [currImg, setCurrImg] = useState(0); // the index of the current image
  const [activeTimer, setActiveTimer] = useState(true); // state for pausing carousel when curser is in div
  const [slideIn, setSlideIn] = useState(true); // the state that triggers the enter/exit transition - true equates to enter, false is exit.
  const [slideDirection, setSlideDirection] = useState("up");
  const nextImg = (currImg + 1) % images.length; // the next image in queue - if the end of the queue will return 0 index (i.e. beginning)
  const prevImg = (currImg - 1 + images.length) % images.length; // the previos image in queue - if the beginning of the queue will return the last index (i.e. end)

  // Allows user to iterate through cards with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 39) setTransition("right");
      if (e.keyCode === 37) setTransition("left");
    };
    // adds event listener for keyboard events.
    window.addEventListener("keydown", handleKeyDown);
    // Cleans up event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const setTransition = useCallback(
    (direction) => {
      const nextIndex = direction === "left" ? prevImg : nextImg; //sets the index of the next card based on the direction parameter - left is back, right is next.
      const resetDirection = direction === "left" ? "right" : "left"; //resets the direction to the opposite of the last transition - card exits left, enters right.
      setSlideDirection(direction); //specifies exit direction.
      setSlideIn(false); //sets the transition to exit

      // Resets the state/props for the next transition and sets the next props for the CarouselCard.
      setTimeout(() => {
        setCurrImg(nextIndex); //sets the index of the images array that contains all necessary props for the CarouselCard.
        setSlideDirection(resetDirection); //sets the slider to the opposite direction of the leaving transition
        setSlideIn(true); //sets the transition to enter
      }, TransitionSpeed);
    },
    [nextImg, prevImg]
  );

  useEffect(() => {
    //   only sets timer if the cursor is outside the card-wrapper div
    if (activeTimer) {
      const id = setTimeout(() => setTransition("right"), Time); //once time has elapsed, transition is initiated.
      return () => clearTimeout(id);
    }
  }, [activeTimer, setTransition]);

  if (images.length === 0) return <h2>Loading...</h2>;
  return (
    <div className="carousel-wrapper">
      <div className="carousel-items">
        <div className="indicator-left" id="left">
          <button
            onClick={() => setTransition("left")}
            aria-label="previous slide"
          >
            {"‹"}
          </button>
        </div>
        {/* <Slide in={slideIn} direction={slideDirection}> */}
          <div
            className="card-wrapper"
            // Logic for enabling / disabling card transition when cursor is within image (div)
            onMouseEnter={() => {
              setActiveTimer(false);
            }}
            onMouseLeave={() => setActiveTimer(true)}
          >
            <CarouselCard currImg={currImg} images={images} />
          </div>
        {/* </Slide> */}
        <div className="indicator-right" id="right">
          <button
            onClick={() => setTransition("right")}
            aria-label="next slide"
          >
            {"›"}
          </button>
        </div>
      </div>
      <CarouselIndicator
        currImg={currImg}
        setCurrImg={setCurrImg}
        images={images}
      />
    </div>
  );
}

export default Carousel;
