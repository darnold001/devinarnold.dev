import React from "react";
// import headshot from "../Images/arnold.jpg";
// import jpn from "../Images/devin_jpn.jpeg";

export default function About() {
  return (
    <div className="about-page">
      <h1>A Little About Me...</h1>
      <div className="about-wrapper">
        <img
          className="headshot"
          src="https://devinarnold-website-content.s3.us-east-2.amazonaws.com/devin_jpn.jpg"
          alt="headshot"
        />
        <div className="about-blurb">
          <p>
            I am a GIS nerd turned developer. I started my career building
            interactive GIS solutions in the environmental space, and quickly
            fell in love with writing code. After working in the GIS industry
            for more than 8 years, I decided to go back to school to pursue a
            full time career in software development. I am currently working as
            a consultant in Portland, Oregon. I am happy jumping
            all over the stack from writing analytics modules in Python and SQL
            to designing wireframes and building front ends in React.
          </p>
          <a
          className = 'resume-download'
            href="https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Devin+Arnold's+Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
