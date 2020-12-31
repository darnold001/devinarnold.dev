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
        <img
          src="https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Devin+Arnold+Logo_medium.png"
          alt="Devin Arnold Logo"
        ></img>
        <TypeWriter
          heading={"About Me:"}
          messages={[
            "I love writing in React.",
            "I enjoy writing in Python.",
            "I enjoy writing in Ruby.",
            "I am a full stack developer.",
            "I am a GIS nerd",
            "I love design.",
            "I currently live in Denver, Colorado.",
            "I am a technology junkie.",

          ]}
        />
        <NavLink to="/about" onClick={showNav}>
          Learn More
        </NavLink>
      </div>
    </div>
  );
}
