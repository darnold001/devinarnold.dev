import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TypeWriter from "../Typewriter";
export default function WelcomeModal(props) {
  const { showNav } = props;
  useEffect(() => {
    showNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function strikeThrough(text){
    return(<span id='strikethrough'>{text}</span>)
  }

  const messages = [
    
      // "I write in React.",
      // "I love write in Python.",
      // "I love write in Ruby.",
      // "I am a full stack developer.",
      // "I am a huge GIS nerd.",
      // "I love design.",
      `I currently live in ${strikeThrough('Denver, Colorado')} Portland, Oregon.`,
      "I am a technology junkie.",

    
  ]
  return (
    <div className="welcome-modal">
      <div className="modal-wrapper">
        <img
          src="https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Devin+Arnold+Logo_medium.png"
          alt="Devin Arnold Logo"
        ></img>
        <TypeWriter
          heading={"About Me:"}
          messages={messages}
        />
        <NavLink to="/about" onClick={showNav}>
          Learn More
        </NavLink>
      </div>
    </div>
  );
}
