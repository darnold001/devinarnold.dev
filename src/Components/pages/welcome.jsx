import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TypeWriter from "../Typewriter";
export default function WelcomeModal(props) {
  const { showNav } = props;
  useEffect(() => {
    showNav();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="welcome-modal">
      <div className="modal-wrapper">
        <img src='https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Devin+Arnold+Logo_medium.png' alt='Devin Arnold Logo'></img>
        <TypeWriter
          heading={"About Me:"}
          messages={[
            "I am a full stack developer.",
            "I love writing in React.",
            "I  am a technology junkie.",
            "I love design.",
            "I currently live in Denver, Colorado.",
            "I love learning."
          ]}
        />
        <NavLink to="/about" onClick={showNav}>
          Learn More
        </NavLink>
      </div>
    </div>
  );
}
