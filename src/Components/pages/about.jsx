import React from "react";
import headshot from "../Images/arnold.jpg";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about-wrapper">
      <h1>About Page</h1>
      <img className="headshot" src={headshot} alt="headshot" />
      <p>
        I am a Geo nerd turned developer. I started my career building
        interactive GIS maps and spatial tools. After working in the GIS
        industry for more than 8 years, I realized that my true passion was
        buidling and designing tools to empower people and orginizations.
      </p>
      <Link to="/files/Devin Arnold.pdf" target="_blank" download>
        Download Resume
      </Link>
    </div>
  );
}
