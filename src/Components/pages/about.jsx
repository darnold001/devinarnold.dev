import React from "react";
// import headshot from "../Images/arnold.jpg";
// import jpn from "../Images/devin_jpn.jpeg";

export default function About() {
  return (
    <div className="about-page">
      <h1>A Little About Me...</h1>
      <div className="about-wrapper">
        <img className="headshot" src='https://devinarnold-website-content.s3.us-east-2.amazonaws.com/devin_jpn.jpeg' alt="headshot" />
        <p>
          I am a Geography nerd turned developer nerd. I started my career
          building interactive GIS maps and spatial tools and quickly fell in
          love with the coding aspect. After working in the GIS industry for
          more than 8 years, I decided to go back to school to persue a career
          dedicated to empowering people and causes I care about through
          software development.
        </p>
        <a href="https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Devin_Arnold_Resume+.pdf" target="_blank"  rel='noreferrer'>
          View Resume
        </a>
      </div>
    </div>
  );
}
