import React from "react";
export default function ProjectCard(props) {
  const { cardInfo } = props;
  return (
    <div className="projects-card">
      <img src={`${cardInfo.thumbnail}`} alt="project thumbnail" />
      <h4>{cardInfo.name}</h4>
      <p>{cardInfo.blurb}</p>
    </div>
  );
}
