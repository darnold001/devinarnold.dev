import React from "react";
export default function ProjectCard(props) {
  const { cardInfo, setModal } = props;
  console.log(cardInfo.name);
  return (
    <div className="projects-card" onClick ={() => setModal(cardInfo)}>
      <div>
        <img src={`${cardInfo.thumbnail}`} alt="project thumbnail" id={`${cardInfo.name}`}/>
      </div>
      <h4>{cardInfo.name}</h4>
      {/* <p>{cardInfo.blurb}</p> */}
    </div>
  );
}
